# Update to wgpu 26.0.1 and started compute pipeline guide

I've technically had the update to 26.0 done for awhile now, but I ran into some
issues.

1. There was a bug in the Windows implementation that caused the viewport to
flicker. This has since been fixed in version 26.0.1
2. There is a bug in how wgpu and winit interact in WASM on Windows. There's a feedback
loop where on systems where the [devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)
is greater than `1` which means when wgpu resizes the canvas with `surface.configure()`,
winit emits and event and reports it as bigger than what wgpu is using. This causes
the demo code to call `surface.confiure()` again. This loop goes on until the surface
size exceeds the maximum values that wgpu supports causing wgpu to panic. Here's the
[tracking issue](https://github.com/gfx-rs/wgpu/issues/7938#issuecomment-3079523549)
in case you're interested. In the mean time users have found a work around
for this by constraining the canvas to a particular size. This bit of css is
all you need to get prevent the issue:

```css

        canvas {
            width: 100%;
            height: 100%;
        }
```

<div class="note">

Technically you only need the `width: 100%` part. Basically you just need to make
the browser in charge of what size the canvas should be.

</div>

## What's changed

Since `wasm-pack` is [no longer being maintained](https://blog.rust-lang.org/inside-rust/2025/07/21/sunsetting-the-rustwasm-github-org/)
by the Rust Foundation, I've opted to use the fork of wasm-pack found at:
<https://drager.github.io/wasm-pack/>. This works just fine, though I have
considered switching to other alternatives such as trunk. No plans at the
moment, as I have other projects at the moment.

Scrolling through the `git diff` most of the other changes are `Cargo.toml` changes
and some typo fixes. For a full list of the changes to wgpu itself, checkout the
[changelog](https://github.com/gfx-rs/wgpu/releases). Also if you find any issues you can
submit a PR [here](https://github.com/sotrh/learn-wgpu/pulls)!

## Something new...

For awhile now, I've been debating what next to do with this collection. While
there are a whole score of graphics topics that I could cover (mipmapping,
indirect drawing, hardware raytracing, shadows, skeletal animation, PBR, etc.), I have not
decided how I want the graphics guide to flow. I've even considered rewriting that
section to have a more specific goal in mind such as a game or model viewer.

I still wanted to add some more value especially for my supportive patrons. So
I decided to cover a topic that I've been interested in for awhile: compute pipelines.
At this point in time I only have an introduction up, but I've started work on an
example on sorting data in compute shaders and I'm researching methods of filtering
data as well for techniques such as culling. I'm also trying a new writing style with
a bit less code dumps, so let me know what you think.

Check it out [here](../../compute/introduction/)!

## Thanks to my patrons!

If you like what I do, and want to support me check out my [patreon](https://patreon.com/sotrh)!
A special shoutout to this members!

- Filip
- Lions Heart
- Jani Turkia
- Julius Liu
- 折登 樹
- Aron Granberg
- Ian Gowen
- Bernard Llanos
- David Laban
- Feng Liang
- papyDoctor
- dadofboi
- Davide Prati
- Andrea Postal
- 大典 加藤
- Tema
- Felix
- Mattia Samiolo
- Ken K
- Ryan
- Zeh Fernando
- Craft Links
- Ben Anderson
- Thunk
- Eliot Bolduc
- yutani
- charlesk
- Danny McGee
- Alexander Kabirov
- Youngsuk Kim
- Dude
- Nico Arbogast
- Gunstein Vatnar
- Paul E Hansen
- Joris Willems
- Jan Šipr
- Lennart
