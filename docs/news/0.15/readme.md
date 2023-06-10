# Update to 0.15!

This is a pretty minor update for this tutorial, but there are a few things to consider.

1. A `view_formats` field was added to `TextureDescriptor` and `SurfaceDescriptor`. This allows you to specify different `TextureFormat`s that can be used when creating `TextureView`s. At time of writing this pretty much only allows you to switch between using SRGB and linear formats. For example:
```rust
TextureDescriptor {
    // other fields...
    format: wgpu::TextureFormat::Rgba8UnormSrgb,
    view_formats: &[wgpu::TextureFormat::Rgba8Unorm],
}
```
The format used to create the `Texture` will always be supported, so you don't have to specify it.

2. The method of acquiring texture formats supported by the `Surface` has changed. Previously there was a `get_supported_formats()` that would return a `Vec<TextureFormat>`. Now `Surface` has a `get_capabilities()` method. This will return a `SurfaceCapabilities` object that will have the supported formats as well as some other fields that you can checkout [here](https://docs.rs/wgpu/latest/wgpu/struct.SurfaceCapabilities.html). I'm using it in the tutorial like this:
```rust
let surface_caps = surface.get_capabilities(&adapter);
// Shader code in this tutorial assumes an Srgb surface texture. Using a different
// one will result all the colors comming out darker. If you want to support non
// Srgb surfaces, you'll need to account for that when drawing to the frame.
let surface_format = surface_caps.formats.iter()
    .copied()
    .filter(|f| f.is_srgb())
    .next()
    .unwrap_or(surface_caps.formats[0]);
let config = wgpu::SurfaceConfiguration {
    usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
    format: surface_format,
    width: size.width,
    height: size.height,
    present_mode: surface_caps.present_modes[0],
    alpha_mode: surface_caps.alpha_modes[0],
    view_formats: vec![],
};
```

As always let me know if I missed anything. You can check out the full changelog for 0.15 [here](https://github.com/gfx-rs/wgpu/blob/master/CHANGELOG.md#wgpu-0150-2023-01-25)