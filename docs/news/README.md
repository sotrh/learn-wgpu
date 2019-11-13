# News

## Updating to 0.4 from 0.3
There are a few things that have changed:
1. The use of `Instance` has been removed. Creating a `Surface` and requesting an `Adapter` are done as follows.
```rust
let surface = wgpu::Surface::create(window);
let adapter = wgpu::Adapter::request(&wgpu::RequestAdapterOptions {
    ..Default::default()
}).unwrap(); // needs to be unwrapped
```
2. The `request_device` method now returns a `(Device, Queue)` tuple. This means that you can borrow the `Queue` mutably while using the `Device` immutably. Because of this change, submitting `CommandBuffer`s to the queue uses the `submit` method on the `Queue` directly.
```rust
self.queue.submit(&[
    encoder.finish()
]);
```
3. The `create` method on `Surface` takes in any struct that implements the `HasRawWindow` trait, instead of a `RawWindowHandle`. This means that the `raw-window-handle = "0.3"` line in `Cargo.toml` is no longer needed.

I don't know if this is a change from 0.4, but you use `wgpu = "0.4"` line in dependencies instead of the `[dependencies.wgpu]` as wgpu will determine the best back end for you.


## New/Recent Articles
<RecentArticles/>

