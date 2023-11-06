# Update to 0.18 and HDR tutorial

First let's go over some of the changes that occurred:

1. `RenderPassDescriptor` now have 2 new fields:
    `occlusion_query_set` and, `timestamp_writes`. I'm
    setting both to `None` for now.
2. `ComputePassDescriptor` now has a `timestamp_writes`
    field.
3. `InstanceDescriptor` now has some more fields, but I
    opted to just use `..Default::default()` for all the
    fields other than `backends`.

## HDR tutorial

I've been unsure how best to introduce compute shaders
as they are a big part of what makes WebGPU special, but
most browsers don't support them at the moment. With Chrome
rolling out support for WebGPU, I felt more confident
writing a tutorial for them.

Also, I'm been interested learning how to load HDR images
from places like Polyhaven, so I decided to introduce
compute shaders by creating one that will load an HDR and
convert it to a Cubemap to be rendered.

You can check it out [here](../../intermediate/tutorial13-hdr)!
