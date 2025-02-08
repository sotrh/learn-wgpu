# Version 24.0

I missed 23.0, as I've been busy with work and a baby! Not much
has changed between 22.0 and 24.0 though at least as far as this
tutorial is concerned.

## Entry point inference

If a shader has only one function labeled with `@vertex` for
vertex shaders, or `@fragment` for fragment shaders, then Wgpu
you don't need to specify the entry point when creating a render
pipeline. This means if you do want to specify the entry point,
you need to wrap it in an option.

```rust
device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
        label: Some(&format!("{:?}", shader)),
        layout: Some(layout),
        vertex: wgpu::VertexState {
            module: &shader,
            entry_point: Some("vs_main"), // Updated
            buffers: vertex_layouts,
            compilation_options: Default::default(),
        },
        fragment: Some(wgpu::FragmentState {
            module: &shader,
            entry_point: Some("fs_main"), // Updated
            targets: &[Some(wgpu::ColorTargetState {
                format: color_format,
                blend: Some(wgpu::BlendState {
                    alpha: wgpu::BlendComponent::REPLACE,
                    color: wgpu::BlendComponent::REPLACE,
                }),
                write_mask: wgpu::ColorWrites::ALL,
            })],
            compilation_options: Default::default(),
        }),
        // ...
    })
```

The same applies for compute pipelines.

```rust
let equirect_to_cubemap =
    device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some("equirect_to_cubemap"),
        layout: Some(&pipeline_layout),
        module: &module,
        entry_point: Some("compute_equirect_to_cubemap"), // Updated
        compilation_options: Default::default(),
        cache: None,
    });
```

## Other changes

- `ImageCopyTexture` has been renamed to `TexelCopyTextureInfo`
- `ImageDataLayout` has been renamed to `TexelCopyBufferLayout`
- `ImageCopyBuffer` has been renamed to `TexelCopyBufferInfo`
- `wgpu::Instance::new()` now takes a reference to a `&wgpu::InstanceDescriptor`
- `wgpu::SurfaceError::Other` is now a thing

## Getting WASM to run

I'm not sure if it's specifically a version `24.0` thing, but I had
to add some code to the `Cargo.toml` to get `webpack` to handle the
WASM properly.

```toml
# This should go in the Cargo.toml in the root directory
[profile.release]
strip = true
```

If you know why this is required, let me know.

