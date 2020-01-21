# The Depth Buffer

Let's take a closer look at the last example.

![forest_with_zoom.png](./forest_with_zoom.png)

Models that should be in the back are getting rendered ahead of ones that should be in the front. This is caused by the draw order. By default, pixel data from a new object will replace old pixel data.

There are two ways to solve this: sort the data from back to front, use what's known as a depth buffer.

## Sorting from back to front

This is the go to method for 2d rendering as it's pretty easier to know what's supposed to go in front of what. You can just use the z order. In 3d rendering it gets a little more tricky because the order of the objects changes based on the camera angle.

A simple way of doing this is to sort all the objects by their distance to the cameras position. There are flaws with this method though as when a large object is behind a small object, parts of the large object that should be in front of the small object will be rendered behind. We'll also run into issues with objects that that overlap *themselves*.

If want to do this properly we need to have pixel level precision. That's where a *depth buffer* comes in.

## The depth of pixels

A depth buffer is a black and white texture that stores the z-coordinate of rendered pixels. Wgpu can use this when drawing new pixels to determine whether to replace the data or keep it. This technique is called depth testing. This will fix our draw order problem without needing us to sort our objects!

Let's make a function to create the depth texture.

```rust
const DEPTH_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::Depth32Float; // 1.

fn create_depth_texture(device: &wgpu::Device, sc_desc: &wgpu::SwapChainDescriptor) -> wgpu::Texture {
    let desc = wgpu::TextureDescriptor {
        format: DEPTH_FORMAT,
        usage: wgpu::TextureUsage::OUTPUT_ATTACHMENT, // 2.
        ..sc_desc.to_texture_desc() // 3.
    };
    device.create_texture(&desc)
}
```

1. We need the DEPTH_FORMAT for when we create the depth stage of the `render_pipeline` and creating the depth texture itself.
2. Since we are rendering to this texture, we need to add the `OUTPUT_ATTACHMENT` flag to it.
3. Our depth texture needs to be the same size as our screen if we want things to render correctly. We can use our `sc_desc` to make sure that our depth texture is the same size as our swap chain images.

We create our `depth_texture` and a `depth_texture_view` in `State::new()`.

```rust
let depth_texture = create_depth_texture(&device, &sc_desc);
let depth_texture_view = depth_texture.create_default_view();
```

We need to modify our `render_pipeline` to allow depth testing. 

```rust
let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
    // ...
    depth_stencil_state: Some(wgpu::DepthStencilStateDescriptor {
        format: DEPTH_FORMAT,
        depth_write_enabled: true,
        depth_compare: wgpu::CompareFunction::Less, // 1.
        stencil_front: wgpu::StencilStateFaceDescriptor::IGNORE, // 2.
        stencil_back: wgpu::StencilStateFaceDescriptor::IGNORE,
        stencil_read_mask: 0,
        stencil_write_mask: 0,
    }),
    // ...
});
```

1. The compare function tells us when to discard a new pixel. Using `LESS` means pixels will be drawn front to back. Here are all the values you can use.

```rust
#[repr(C)]
#[derive(Copy, Clone, Debug, Hash, Eq, PartialEq)]
pub enum CompareFunction {
    Never = 0,
    Less = 1,
    Equal = 2,
    LessEqual = 3,
    Greater = 4,
    NotEqual = 5,
    GreaterEqual = 6,
    Always = 7,
}
```

2. There's another type of buffer called a stencil buffer. It's common practive to store the stencil buffer and depth buffer in the same texture. This fields control values for stencil testing. Since we aren't using a stencil buffer, we'll just set all these to falsy values. We'll cover stencil buffers [later](../../todo).

Don't forget to store the `depth_texture`, and `depth_texture_view` in `State`.

```rust
Self {
    // ...
    depth_texture,
    depth_texture_view,
}
```

We need to remember to change the `resize()` method to create a new `depth_texture` and `depth_texture_view`.

```rust
fn resize(&mut self, new_size: winit::dpi::PhysicalSize<u32>) {
    // ...

    self.depth_texture = create_depth_texture(&self.device, &self.sc_desc);
    self.depth_texture_view = self.depth_texture.create_default_view();

    // ...
}
```

The last change we need to make is in the `render()` function. We've created the `depth_texture`, but we're not currently using it. We use it by attaching it to the `depth_stencil_attachment` of a render pass.

```rust
let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
    /// ...
    depth_stencil_attachment: Some(wgpu::RenderPassDepthStencilAttachmentDescriptor {
        attachment: &self.depth_texture_view,
        depth_load_op: wgpu::LoadOp::Clear,
        depth_store_op: wgpu::StoreOp::Store,
        clear_depth: 1.0,
        stencil_load_op: wgpu::LoadOp::Clear,
        stencil_store_op: wgpu::StoreOp::Store,
        clear_stencil: 0,
    }),
});
```

And that's all we have to do! No shader code needed! If you run the application, the depth issues will be fixed.

![forest_fixed.png](./forest_fixed.png)

## Challenge

Since the depth buffer is a texture, we can sample it in the shader. Because it's a depth texture, we'll have to use the `samplerShadow` uniform type and the `sampler2DShadow` function instead of `sampler`, and `sampler2D` respectively. Create a bind group for the depth texture (or reuse an existing one), and render it to the screen.

<AutoGithubLink/>