# Version 28.0 and stencil showcase

The v28 update just came out! There are some new features
introduced including mesh shaders! This update does cover
the new features, but I did write a showcase for using
stencil buffers!

Let's get into the changes to the tutorial first:

## Migrations from 27.0 -> 28.0

- For mip maps `wgpu::FilterMode` has been replaced by the new `wgpu::MipmapFilterMode`
- The `multiview` field on `RenderPipelineDescriptor` was
changed to `multiview_mask`. It is no longer how many layers
the texture view to render to has, instead it is a bit mask
for what layers of the texture view to render too.
- Push constants changed to immediates. This feature isn't
stablized in WebGPU yet, so I won't be showcasing it just yet.

I'm sure I missed somethings so feel free to create a PR
or file and issue!

If you want a list of all the changes to wgpu itself check
out the [release notes on Github](https://github.com/gfx-rs/wgpu/releases/tag/v28.0.0)

## Stencil buffer demo

I made a pretty simple demo of using stencil buffers to
recreate the "Lens of Truth" effect from the Legend of Zelda
series. I had a lot of fun with it and I'm thinking of doing
similar effect recreations in future to showcase some of WebGPU's
features as well as different graphics techniques.

You can [check it out here](../../showcase/stencil/)!

## Supporters and Ko-Fi

I've previously received all donations through patreon, but
I decided to create a Ko-Fi account so people who only want to
make a one-time donation have an easier way to do so. As always
I intend to keep Learn Wgpu as a free learning resource, but
I appreciate any support along the way.

My [patreon account](https://patreon.com/sotrh) will remain active,
but checkout my [kofi account](https://ko-fi.com/sotrh) if that's
more your speed!

With that said a special thanks to these supporters!

- David Laban
- Bernard Llanos
- Ian Gowen
- Aron Granberg
- 折登 樹
- Julius Liu
- Lennart
- Jani Turkia
- Feng Liang
- Lions Heart
- Paul E Hansen
- Gunstein Vatnar
- Nico Arbogast
- Dude
- Youngsuk Kim
- Alexander Kabirov
- Danny McGee
- charlesk
- yutani
- Filip
- Eliot Bolduc
- Ben Anderson
- Thunk
- Craft Links
- Zeh Fernando
- Ken
- Ryan
- IC
- Felix
- Tema
- 大典 加藤
- Andrea Postal
- Davide Prati
- dadofboi
- ツナマヨ
