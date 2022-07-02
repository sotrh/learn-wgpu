# Update to 0.13!

[WGPU Change Log](https://github.com/gfx-rs/wgpu/blob/master/CHANGELOG.md#wgpu-013-2022-06-30)

The change log above contains most of the details about what has changed about WGPU and therefore the tutorial. I will make a special mention about how to use `map_async()` as that has changed. Previously `map_async` returned a promise that you had to await before you could access a buffers contents. It now expects a `'static` callback that takes the `Result` of the mapping attempt as a parameter. This means that if we want to save a buffers context to an image instead of doing the following:


```rust

{
    let buffer_slice = output_buffer.slice(..);

    let mapping = buffer_slice.map_async(wgpu::MapMode::Read);
    device.poll(wgpu::Maintain::Wait);
    mapping.await.unwrap();

    let data = buffer_slice.get_mapped_range();

    use image::{ImageBuffer, Rgba};
    let buffer =
        ImageBuffer::<Rgba<u8>, _>::from_raw(texture_size, texture_size, data).unwrap();
    buffer.save("image.png").unwrap();
}
output_buffer.unmap();
```

We would do the following:

```rust
{
    let buffer_slice = output_buffer.slice(..);

    let (tx, rx) = futures_intrusive::channel::shared::oneshot_channel();
    buffer_slice.map_async(wgpu::MapMode::Read, move |result| {
        tx.send(result).unwrap();
    });
    device.poll(wgpu::Maintain::Wait);
    rx.receive().await.unwrap().unwrap();

    let data = buffer_slice.get_mapped_range();

    use image::{ImageBuffer, Rgba};
    let buffer =
        ImageBuffer::<Rgba<u8>, _>::from_raw(texture_size, texture_size, data).unwrap();
    buffer.save("image.png").unwrap();

}
output_buffer.unmap();
```

You can explore the reasoning for the change to `map_async` in [this PR](https://github.com/gfx-rs/wgpu/pull/2698).

Another thing to note is that presentation modes need to match what the surface supports. You can get a list of supported modes from [Surface::get_surface_modes()](https://docs.rs/wgpu/latest/wgpu/struct.Surface.html#method.get_supported_modes).

As always, let me know if I missed anything in the migration process. You can open an issue/submit a PR on the [Learn Wgpu repo](https://github.com/sotrh/learn-wgpu)!