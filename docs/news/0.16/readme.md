# Update to 0.16

Very few changes here! We no longer need to use `NonZeroU32` and the like, instead it will be an `Option<u32>`. This is mostly used in dealing with textures.

```rust
queue.write_texture(
    wgpu::TexelCopyTextureInfo {
        aspect: wgpu::TextureAspect::All,
        texture: &texture,
        mip_level: 0,
        origin: wgpu::Origin3d::ZERO,
    },
    &rgba,
    wgpu::TexelCopyBufferLayout {
        offset: 0,
        // bytes_per_row: NonZeroU32::new(4 * dimensions.0),
        bytes_per_row: Some(4 * dimensions.0),
        // rows_per_image: NonZeroU32::new(dimensions.1),
        rows_per_image: Some(dimensions.1),
    },
    size,
);
```

In other news WebGPU has been added to Chrome 113 and up! Currently the Linux version of Chrome beta isn't working and while it's working in Firefox, I'm going to hold off on switching to using that instead of the WebGL compatibility mode. If you mess around with WebGPU in browser check <https://caniuse.com/webgpu> to see if your browser is supported and then remove the extra `wgpu` line from the `[target.'cfg(target_arch = "wasm32")'.dependencies]` section of `Cargo.toml`:

```toml
[target.'cfg(target_arch = "wasm32")'.dependencies]
reqwest = { version = "0.11" }
console_error_panic_hook = "0.1"
console_log = "1.0"
# wgpu = { version = "24.0", features = ["webgl"]}
wasm-bindgen = "0.2"
wasm-bindgen-futures = "0.4"
web-sys = { version = "0.3", features = [
    "Document",
    "Window",
    "Element",
    "Location",
]}
```

No other changes need to be made to switch to using WebGPU in browser, so once the WebGPU samples at <https://webgpu.github.io/> work in Chrome on Linux, I'll look into removing the `webgl` feature.

That's all! As always let me know if I missed anything!
