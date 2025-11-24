# Stencil Buffers

One of the lesser known buffer types, but useful for a lot of
different effects. In this showcase we'll be using it to mimic
the "Lens of Truth" effect seen in the Legend of Zelda Ocarina
of Time and Majora's Mask. Let's jump into it!

## The effect

For those of you who don't know, the Legend of Zelda series has
a reoccurring item in it called the [Lens of Truth](https://zelda.fandom.com/wiki/Lens_of_Truth)
that allows you see objects that are invisible using an overlay
on the screen.

[screenshot of Lens of Truth effect from Majora's mask](mm-lens-of-truth.jpg)

Basically it's a transparent circle that's overlayed on top of
the scene and objects that are normally invisible show up in
the circle. Not only objects that are only partially in the cirle
get cut so that the hidden objects stay in the circle.

## What are stencil buffers and how do they help?

If you've done any arts and crafts you've likely used a stencil
to paint a tricky shape onto a surface. Stencil buffers allow us
to define a shape to use to mask out parts of the scene to draw.
Internally a stencil buffer is an unsigned integer texture that
you can read and/or write values to when you render objects.

Here's how we are going to use a stencil buffer to achieve the
Lens of Truth effect:

1. We'll render a texture to the stencil buffer to use later
2. We'll render the visible objects as normal
3. We'll use the stencil buffer to mask out parts of the hidden
objects.
4. Finally we'll render the texture we used as a mask over top
of the scene to complete the effect.

## The WGPU bits

First let's take a look at creating a stencil texture.

```rust
let depth_stencil_format = wgpu::TextureFormat::Depth24PlusStencil8;
let depth_stencil = display.device.create_texture(&wgpu::TextureDescriptor {
    label: Some("depth_stencil"),
    size: wgpu::Extent3d {
        width: display.width(),
        height: display.height(),
        depth_or_array_layers: 1,
    },
    mip_level_count: 1,
    sample_count: 1,
    dimension: wgpu::TextureDimension::D2,
    format: depth_stencil_format,
    usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
    view_formats: &[],
});
let depth_stencil_view = depth_stencil.create_view(&Default::default());
```

You may have noticed that the texture format for the stencil buffer
is `wgpu::TextureFormat::Depth24PlusStencil8`. This combines a 24-bit
depth texture and an 8-bit stencil texture. That means we have 256
possible values that we can use to mask out our scene. Other than that
everything looks pretty normal.

We then create 4 render pipelines. One to render the mask to the stencil
buffer, one to rendering the visible objects, one to render the hidden
objects using a stencil stage, and one to render the texture we used as
a mask to the screen. We'll skip the visible object pipeline as that's
something that we've already covered in the rendering guide. Let's start
with the mask pipeline.

<div class="note">

I'm leveraging some code shared between multiple showcases, including
a `RenderPipelineBuilder` to reduce the boilerplate. I won't go into all
the code here, but you can check it out in the
[Github Repo](https://github.com/sotrh/learn-wgpu/tree/master/code/showcase/framework)

</div>

```rust
let mask_pipeline_layout =
    display
        .device
        .create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("mask_pipeline_layout"),
            bind_group_layouts: &[&mask_bind_group_layout],
            push_constant_ranges: &[],
        });

let mask_shader = wgpu::include_wgsl!("mask.wgsl");
let mask_pipeline = framework::RenderPipelineBuilder::new()
    .vertex_shader(mask_shader.clone())
    .fragment_shader(mask_shader.clone())
    .fragment_entry_point("fs_mask")
    .cull_mode(Some(wgpu::Face::Back))
    .depth_stencil(wgpu::DepthStencilState {
        format: depth_stencil_format,
        depth_write_enabled: false,
        depth_compare: wgpu::CompareFunction::Always,
        stencil: wgpu::StencilState {
            write_mask: 0xFF,
            read_mask: 0xFF,
            front: wgpu::StencilFaceState {
                compare: wgpu::CompareFunction::Always,
                pass_op: wgpu::StencilOperation::Replace,
                ..Default::default()
            },
            back: wgpu::StencilFaceState::IGNORE,
        },
        bias: wgpu::DepthBiasState::default(),
    })
    .layout(&mask_pipeline_layout)
    .build(&display.device)?;
```

Here we specify that we:

- Want to use a shader called `mask.wgsl`
- Want to use backface culling
- Want to disable depth checking and writing
- Want a stencil stage that
  - Reads and writes to all 8-bits of the texture
  - Always replaces that value in the stencil buffer with reference
  value (we'll talk about that later) for front facing polygons
  - Ignores back facing polygons
- Want to use the `mask_bind_group` layout
