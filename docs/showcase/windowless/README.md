# Wgpu without a window

Sometimes we just want to leverage the gpu. Maybe we want to crunch a large set of numbers in parallel. Maybe we're working on a 3D movie, and need to create a realistic looking scene with path tracing. Maybe we're mining a cryptocurrency. In all these situations, we don't necessarily *need* to see what's going on.

## So what do we need to do?

It's actually quite simple. We don't *need* a window to create an `Instance`, we don't *need* a window to select an `Adapter`, nor do we *need* a window to create a `Device`. We only needed the window to create a `Surface` which we needed to create the `SwapChain`. Once we have a `Device`, we have all we need to start sending commands to the gpu.

```rust
let adapter = wgpu::Adapter::request(
    &wgpu::RequestAdapterOptions {
        power_preference: wgpu::PowerPreference::default(),
        compatible_surface: None,
    },
    wgpu::BackendBit::PRIMARY,
).await.unwrap();
let (device, queue) = adapter.request_device(&Default::default()).await;
```

## A triangle without a window

Now we've talked about not needing to see what the gpu is doing, but we do need to see the results at some point. If we look back to talking about the [swap chain](/beginner/tutorial2-swapchain/#render) we see that we use `swap_chain.get_next_texture()` to grab a texture to draw to. We'll skip that step by creating the texture ourselves. One thing to note here is we need to specify `wgpu::TextureFormat::Rgba8UnormSrgb` to `format` instead of `wgpu::TextureFormat::Bgra8UnormSrgb` since PNG uses RGBA, not BGRA.

```rust
let texture_size = 256u32;

let texture_desc = wgpu::TextureDescriptor {
    size: wgpu::Extent3d {
        width: texture_size,
        height: texture_size,
        depth: 1,
    },
    array_layer_count: 1,
    mip_level_count: 1,
    sample_count: 1,
    dimension: wgpu::TextureDimension::D2,
    format: wgpu::TextureFormat::Rgba8UnormSrgb,
    usage: wgpu::TextureUsage::COPY_SRC
        | wgpu::TextureUsage::RENDER_ATTACHMENT
        ,
    label: None,
};

let texture = device.create_texture(&texture_desc);
let texture_view = texture.create_default_view();
```

We're using `TextureUsage::OUTPUT_ATTACHMENT` so wgpu can render to our texture. The `TextureUsage::COPY_SRC` is so we can pull data out of the texture so we can save it to a file.

While we can use this texture to draw our triangle, we need some way to get at the pixels inside it. Back in the [texture tutorial](/beginner/tutorial5-textures/) we used a buffer load color data from a file that we then copied into our buffer. Now we are going to do the reverse: copy data into a buffer from our texture to save into a file. We'll need a buffer big enough for our data.

```rust
// we need to store this for later
let u32_size = std::mem::size_of::<u32>() as u32;

let output_buffer_size = (u32_size * texture_size * texture_size) as wgpu::BufferAddress;
let output_buffer_desc = wgpu::BufferDescriptor {
    size: output_buffer_size,
    usage: wgpu::BufferUsage::COPY_DST 
        // this tells wpgu that we want to read this buffer from the cpu
        | wgpu::BufferUsage::MAP_READ,
    label: None,
};
let output_buffer = device.create_buffer(&output_buffer_desc);
```

Now that we have something to draw to, let's make something to draw. Since we're just drawing a triangle, let's grab the shader code from the [pipeline tutorial](/beginner/tutorial3-pipeline/#writing-the-shaders).

```glsl
// shader.vert
#version 450

const vec2 positions[3] = vec2[3](
    vec2(0.0, 0.5),
    vec2(-0.5, -0.5),
    vec2(0.5, -0.5)
);

void main() {
    gl_Position = vec4(positions[gl_VertexIndex], 0.0, 1.0);
}
```

```glsl
// shader.frag
#version 450

layout(location=0) out vec4 f_color;

void main() {
    f_color = vec4(0.3, 0.2, 0.1, 1.0);
}
```

Using that we'll create a simple `RenderPipeline`.

```rust
let vs_src = include_str!("shader.vert");
let fs_src = include_str!("shader.frag");
let mut compiler = shaderc::Compiler::new().unwrap();
let vs_spirv = compiler.compile_into_spirv(vs_src, shaderc::ShaderKind::Vertex, "shader.vert", "main", None).unwrap();
let fs_spirv = compiler.compile_into_spirv(fs_src, shaderc::ShaderKind::Fragment, "shader.frag", "main", None).unwrap();
let vs_data = wgpu::read_spirv(std::io::Cursor::new(vs_spirv.as_binary_u8())).unwrap();
let fs_data = wgpu::read_spirv(std::io::Cursor::new(fs_spirv.as_binary_u8())).unwrap();
let vs_module = device.create_shader_module(&vs_data);
let fs_module = device.create_shader_module(&fs_data);

let render_pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
    bind_group_layouts: &[],
});

let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
    layout: &render_pipeline_layout,
    vertex: wgpu::VertexState {
        module: &vs_module,
        entry_point: "main",
    },
    fragment: Some(wgpu::FragmentState {
        module: &fs_module,
        entry_point: "main",
    }),
    rasterization_state: Some(wgpu::RasterizationStateDescriptor {
        front_face: wgpu::FrontFace::Ccw,
        cull_mode: wgpu::CullMode::Back,
        depth_bias: 0,
        depth_bias_slope_scale: 0.0,
        depth_bias_clamp: 0.0,
    }),
    primitive: wgpu::PrimitiveState {
                topology: wgpu::PrimitiveTopology::TriangleList,
                strip_index_format: None,
                front_face: wgpu::FrontFace::Ccw,
                cull_mode: wgpu::CullMode::Back,
                // Setting this to anything other than Fill requires Features::NON_FILL_POLYGON_MODE
                polygon_mode: wgpu::PolygonMode::Fill,
            },
    color_states: &[
        wgpu::ColorStateDescriptor {
            format: texture_desc.format,
            color_blend: wgpu::BlendDescriptor::REPLACE,
            alpha_blend: wgpu::BlendDescriptor::REPLACE,
            write_mask: wgpu::ColorWrite::ALL,
        },
    ],
    depth_stencil: None,
    vertex_state: wgpu::VertexStateDescriptor {
        index_format: wgpu::IndexFormat::Uint16,
        vertex_buffers: &[],
    },
    sample_count: 1,
    sample_mask: !0,
    alpha_to_coverage_enabled: false,
});
```

We're going to need an encoder, so let's do that.

```rust
let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
    label: None,
});
```

The `RenderPass` is where things get interesting. A render pass requires at least one color attachment. A color attachment requires a `TextureView` to attach to. We used to use a texture from `SwapChain` for this, but any `TextureView` will do, including our `texture_view`.

```rust
{
    let render_pass_desc = wgpu::RenderPassDescriptor {
        color_attachments: &[
            wgpu::RenderPassColorAttachmentDescriptor {
                attachment: &texture_view,
                resolve_target: None,
                load_op: wgpu::LoadOp::Clear,
                store_op: wgpu::StoreOp::Store,
                clear_color: wgpu::Color {
                    r: 0.1,
                    g: 0.2,
                    b: 0.3,
                    a: 1.0,
                },
            }
        ],
        depth_stencil_attachment: None,
    };
    let mut render_pass = encoder.begin_render_pass(&render_pass_desc);

    render_pass.set_pipeline(&render_pipeline);
    render_pass.draw(0..3, 0..1);
}
```

There's not much we can do with the data when it's stuck in a `Texture`, so let's copy it into our `output_buffer`.

```rust
encoder.copy_texture_to_buffer(
    wgpu::TextureCopyView {
        texture: &texture,
        mip_level: 0,
        array_layer: 0,
        origin: wgpu::Origin3d::ZERO,
    }, 
    wgpu::BufferCopyView {
        buffer: &output_buffer,
        offset: 0,
        bytes_per_row: u32_size * texture_size,
        rows_per_image: texture_size,
    }, 
    texture_desc.size,
);
```

Now that we've made all our commands, let's submit them to the gpu.

```rust
device.get_queue().submit(&[encoder.finish()]);
```

## Getting data out of a buffer

The `Buffer` struct has two methods to access it's contents: `map_read`, and `map_write`. Both of these methods take in a `BufferAddress` specifying the byte to start from, the size in bytes of the chunk we're reading/writing, and a callback lambda that where we'll actually access the data. We're going to use `map_read` to save our `output_buffer` to a png file.

The actual mapping code is fairly simple.

```rust
// NOTE: We have to create the mapping THEN device.poll(). If we don't
// the application will freeze.
let mapping = output_buffer.map_read(0, output_buffer_size);
device.poll(wgpu::Maintain::Wait);

let result = mapping.await.unwrap();
let data = result.as_slice();

use image::{ImageBuffer, Rgba};
let buffer = ImageBuffer::<Rgba<u8>, _>::from_raw(
    texture_size,
    texture_size,
    data,
).unwrap();

buffer.save("image.png").unwrap();
```

## Main is not asyncable

The `main()` method can't return a future, so we can't use the `async` keyword. We'll get around this by putting our code into a different function so that we can block on it in `main()`. You'll need to use the [futures crate](https://docs.rs/futures).

```rust
async fn run() {
    // Windowless drawing code...
}

fn main() {
    use futures::executor::block_on;
    block_on(run());
}
```

With all that you should have an image like this. 

![a brown triangle](./image-output.png)

<AutoGithubLink/>