# Update to wgpu 30.0

A few things have changed, so let's jump in!

## Presenting a SurfaceTexture

`SurfaceTexture::present()` has been removed. We now need to
pass the `SurfaceTexture` into the `Queue::present()` function.

```rust
self.queue.present(output);
```

## Sparse VertexBufferLayout

`VertexBufferLayout` entries can now be `None`. This allows you
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

## Limit Bucketing

When requesting an adapter you need to specify `RequestAdapterOptions::apply_limit_bucketing`.
This allows you to mask your GPU's capabilities from bad actors who might want to use
your systems capabilities for fingerprinting or other suspicious activity. It can also
help with shader caching if you want to compile custom shaders for specific tiers of devices.

## Color Space

Requesting an adapter now requires you to specify `color_space`. This allows you
to better specify how your window compositor should interpret wgpu's output.
Using `wgpu::ColorSpaces::Auto` should work for most use cases.

## Special Thanks

A special thanks to my supporters!

* David Laban
* yutani
* Gunstein Vatnar
* Lennart
* Paul E Hansen
* Eliot Bolduc
* Ian Gowen
* Ben Anderson
* Aron Granberg
* Ken
* Bernard Llanos
* Danny McGee
* Thunk
* Zeh Fernando
* Craft Links
* Felix
* Youngsuk Kim
* Tema
* 折登 樹
* Andrea Postal
* Davide Prati
* 大典 加藤
* charlesk
* Julius Liu
* dadofboi
* Jani Turkia
* Filip
* Alexander Kabirov
* Nico Arbogast
* Dude
* Lions Heart
* Ryan
* IC

If you're in the position to support these updates feel free to
check out
[my patreon](https://patreon.com/sotrh) or [my kofi account](https://ko-fi.com/sotrh)!
