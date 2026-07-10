# Update to 0.30!

A few things have changed, so let's jump in!

* `SurfaceTexture::present()` has been removed. We now need to
    pass the `SurfaceTexture` into the `Queue::present()` function.

    ```rust
    self.queue.present(output);
    ```

* `VertexBufferLayout` entries can now be `None`. This allows you
    to have keep buffers bound at the same slots when rendering. This allows
    you to use consistent slots for specific buffers between different pipelines,
    so if you normally have the following buffer list:

    ```rust
    &[
        Some(VertexDesc::Layout),
        Some(InstanceDesc::Layout),
        Some(MaterialDesc::Layout),
    ]
    ```

    If you wanted to draw something that had a material but no instancing such
    as a large set piece, or a boss character. You could have the following list:

    ```rust
    &[
        Some(VertexDesc::Layout),
        None,
        Some(MaterialDesc::Layout),
    ]
    ```

    The [buffer tutorial](../../beginner/tutorial4-buffer/) has been updated with
    more details.

* When requesting an adapter you need to specify `RequestAdapterOptions::apply_limit_bucketing`.
This allows you to mask your GPU's capabilities from bad actors who might want to use
your systems capabilities for fingerprinting or other suspicious activity. It can also
help with shader caching if you want to compile custom shaders for specific tiers of devices.
* When  `color_space: wgpu::SurfaceColorSpace::Auto,`
