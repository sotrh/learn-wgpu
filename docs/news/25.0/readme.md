# Version 25.0!

As with 24.0 not much has changed for the tutorial. If
you want the full patch notes you can check them out
[here](https://github.com/gfx-rs/wgpu/releases/tag/v25.0.0)

Two things did change to though:

1. `requestDevice` now takes one parameter instead of 2.
and the trace has been moved into `DeviceDescriptor`. Here's
a code snippet:

```rust
let (device, queue) = adapter.request_device(
    &wgpu::DeviceDescriptor {
        required_features: wgpu::Features::empty(),
        required_limits: if cfg!(target_arch = "wasm32") {
            wgpu::Limits::downlevel_webgl2_defaults()
        } else {
            wgpu::Limits::default()
        },
        label: None,
        memory_hints: Default::default(),
        trace: wgpu::Trace::Off, // NEW!
    },
    // REMOVED
).await.unwrap();
```

2. `Device::poll()` takes `PollType` instead of `Maintain`:

```
device.poll(wgpu::PollType::Wait).unwrap();
```

That's pretty much it! As always feel free to create a issue/PR
on the repo if I missed anything!
