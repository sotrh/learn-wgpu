# Update to 0.12!

There are not a ton of changes in this release, so the migration
wasn't too painful.

## Multi view added

The `RenderPipelineDescriptor` now includes a `multiview` field that
indicates the number of array textures if array textures are used
as render attachments.

## No more block attribute

The WGSL spec has changed and the `block` attribute is no longer a thing.
This means that structs in WGSL no longer need to be annotated to be used
as uniform input. For example:

```wgsl
[[block]]
struct Camera {
    view_pos: vec4<f32>,
    view_proj: mat4x4<f32>,
}
```

Can be simplified to just

```wgsl
struct Camera {
    view_pos: vec4<f32>,
    view_proj: mat4x4<f32>,
}
```

## More validation

Wgpu now has a validation error where if your uniform doesn't match the
alignment specified in the shader, the program will crash when you go to
draw:

```
thread 'main' panicked at 'wgpu error: Validation Error

Caused by:
    In a RenderPass
      note: encoder = `Render Encoder`
    In a draw command, indexed:true indirect:false
      note: render pipeline = `Render Pipeline`
    Buffer is bound with size 28 where the shader expects 32 in group[1] compact index 0
```

The only struct that I needed to change was the `LightUniform` struct. All
I needed to do was add a padding field:

```rust
#[derive(Debug, Copy, Clone, bytemuck::Pod, bytemuck::Zeroable)]
struct LightUniform {
    position: [f32; 3],
    // Due to uniforms requiring 16 byte (4 float) spacing, we need to use a padding field here
    _padding: u32,
    color: [f32; 3],
    // Due to uniforms requiring 16 byte (4 float) spacing, we need to use a padding field here
    _padding2: u32,
}
```

I updated the [lighting tutorial](../../intermediate/tutorial10-lighting) to reflect this change.

## Misc

Due to the recent deploy to [anyhow](https://docs.rs/anyhow/latest/) that
breaks glob imports (aka. `use anyhow::*`), I had to switch qualified
imports and uses (ie. `anyhow::Result`). This was mostly an issue on my
build scripts for some of the showcase examples.

The main tutorial examples weren't affected, and the changes are minor, so
if you're curious feel free to look at the repo.