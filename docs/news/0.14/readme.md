# Update to 0.14!

Not much has change as api wise at least as far as this tutorial is concerned. Here are the changes I had to make:

## SurfaceConfiguration changes

`SurfaceConfiguration` now expects an `alpha_mode` parameter. I believe this is to support transparent windows, but I haven't read into it. The code changes are minimal:
```rust
let config = wgpu::SurfaceConfiguration {
    usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
    format: surface.get_supported_formats(&adapter)[0],
    width: size.width,
    height: size.height,
    present_mode: wgpu::PresentMode::Fifo,
    alpha_mode: wgpu::CompositeAlphaMode::Auto, // NEW!
};
```

## Winit updated

Winit has been updated to version "0.27" so if you build on linux you may need to update some of your packages:

```bash
sudo apt install libfontconfig libfontconfig1-dev
```
