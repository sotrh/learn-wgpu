# Wgpu without a window

Sometimes we just want to leverage the gpu. Maybe we want to crunch a large set of numbers in parallel. Maybe we're working on a 3D movie, and need to create a realistic looking scene with path tracing. Maybe we're mining a cryptocurrency. In all these situations, we don't necessarily *need* to see what's going on.

## So what do we need to do?

It's actually quite simple. We don't *need* a window to create an `Instance`, we don't *need* a window to select an `Adapter`, nor do we *need* a window to create a `Device`. We only needed the window to create a `Surface` which we needed to create the `SwapChain`. Once we have a `Device`, we have all we need to start sending commands to the gpu.

```rust
let instance = wgpu::Instance::new();
let adapter = instance.request_adapter(&Default::default());
let mut device = adapter.request_device(&Default::default());
```

## A triangle without a window

Now we've talked about not needing to see what the gpu is doing, but we do need to see the results at some point. If we look back to talking about the [swap chain](/beginner/tutorial2-swapchain/#render) we see that we use `swap_chain.get_next_texture()` to grab a texture to draw to. We'll skip that step by creating the texture ourselves.

```rust
let texture_size = 256u32;

// we need to store this for later
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
    usage: wgpu::TextureUsage::COPY_SRC,
};

let texture = device.create_texture(&texture_desc);
let texture_view = texture.create_default_view();
```

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
};
let output_buffer = device.create_buffer(&output_buffer_desc);
```

Now that we have something to draw to, let's make something to draw. Since we're just drawing a triangle, let's grab the shader code from the [pipeline tutorial](/beginner/tutorial3-pipeline/#writing-the-shaders).

```glsl
// shader.vert
#version 450

const vec2 positions[3] = vec2[3](
    vec2(0.0, -0.5),
    vec2(-0.5, 0.5),
    vec2(0.5, 0.5)
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
let vs_spirv = glsl_to_spirv::compile(vs_src, glsl_to_spirv::ShaderType::Vertex).unwrap();
let fs_spirv = glsl_to_spirv::compile(fs_src, glsl_to_spirv::ShaderType::Fragment).unwrap();
let vs_data = wgpu::read_spirv(vs_spirv).unwrap();
let fs_data = wgpu::read_spirv(fs_spirv).unwrap();
let vs_module = device.create_shader_module(&vs_data);
let fs_module = device.create_shader_module(&fs_data);

let render_pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
    bind_group_layouts: &[],
});

let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
    layout: &render_pipeline_layout,
    vertex_stage: wgpu::ProgrammableStageDescriptor {
        module: &vs_module,
        entry_point: "main",
    },
    fragment_stage: Some(wgpu::ProgrammableStageDescriptor {
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
    primitive_topology: wgpu::PrimitiveTopology::TriangleList,
    color_states: &[
        wgpu::ColorStateDescriptor {
            format: texture_desc.format,
            color_blend: wgpu::BlendDescriptor::REPLACE,
            alpha_blend: wgpu::BlendDescriptor::REPLACE,
            write_mask: wgpu::ColorWrite::ALL,
        },
    ],
    depth_stencil_state: None,
    index_format: wgpu::IndexFormat::Uint16,
    vertex_buffers: &[],
    sample_count: 1,
    sample_mask: !0,
    alpha_to_coverage_enabled: false,
});
```

We're going to need an encoder, so let's do that.

```rust
let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
    todo: 0,
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
        row_pitch: u32_size * texture_size,
        image_height: texture_size,
    }, 
    texture_desc.size,
);
```

Now that we've made all our commands, let's submit them to the gpu.

```rust
device.get_queue().submit(&[encoder.finish()]);
```

## Getting data out of a buffer

The `Buffer` struct has two methods to access it's contents: `map_read_async`, and `map_write_async`. Both of these methods take in a `BufferAddress` specifying the byte to start from, the size in bytes of the chunk we're reading/writing, and a callback lambda that where we'll actually access the data. We're going to use `map_read_async` to save our `output_buffer` to a png file.

One things to note: `map_write_async` and `map_read_async` don't return any synchrononization primitives such as a future. If we want to wait for the buffer to be mapped we have to call `device.poll(true)`, otherwise our program will just continue on it's merry way which if you try to map that buffer again, you're program will panic.

The actual mapping code is fairly simple.

```rust
// We need to manually specify the type data as Buffer has no type information
output_buffer.map_read_async(0, output_buffer_size, move |result: wgpu::BufferMapAsyncResult<&[u8]>| {
    let mapping = result.unwrap();
    let data = mapping.data;

    use image::{ImageBuffer, Rgba};
    let buffer = ImageBuffer::<Rgba<u8>, _>::from_raw(
        texture_size,
        texture_size,
        data,
    ).unwrap();

    buffer.save("image.png").unwrap();
});
```

With all that you should have an image like this. 

![a brown triangle](./image.png)