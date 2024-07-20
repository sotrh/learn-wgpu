# First Major Version! (22.0)

Theres only a few things here. First all the shader related config
structs now have a `compilation_options` field. For now I'm just leaving
it as `Default::default()`, but if you have specific compilation
needs it's there for you.

The next thing is `RenderPipelineDescriptor` and `ComputePipelineDescriptor`
now have a `cache` field. This allows you to supply a cache to use during
shader compilation. This is only really useful for Android devices as most
desktop hardware/drivers provide caching. I've left it as `None` for now.

`DeviceDescriptor` now has a `memory_hint` field. You can use this to ask
the gpu to prioritize performance, memory usage, or allow you to request
a custom memory block size. These are just hints though and the hardware
has the final say in how to do things. I've left this as `Default::default()`
for now.
