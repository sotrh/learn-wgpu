# The Surface

## First, some house keeping: State
For convenience we're going to pack all the fields into a struct, and create some methods on that.

```rust
// main.rs
use winit::window::Window;

struct State {
    surface: wgpu::Surface,
    device: wgpu::Device,
    queue: wgpu::Queue,
    config: wgpu::SurfaceConfiguration,
    size: winit::dpi::PhysicalSize<u32>,
}

impl State {
    // Creating some of the wgpu types requires async code
    async fn new(window: &Window) -> Self {
        todo!()
    }

    fn resize(&mut self, new_size: winit::dpi::PhysicalSize<u32>) {
        todo!()
    }

    fn input(&mut self, event: &WindowEvent) -> bool {
        todo!()
    }

    fn update(&mut self) {
        todo!()
    }

    fn render(&mut self) -> Result<(), wgpu::SurfaceError> {
        todo!()
    }
}
```

I'm glossing over `State`s fields, but they'll make more sense as I explain the code behind the methods.

## State::new()
The code for this is pretty straight forward, but let's break this down a bit.

```rust
impl State {
    // ...
    async fn new(window: &Window) -> Self {
        let size = window.inner_size();

        // The instance is a handle to our GPU
        // Backends::all => Vulkan + Metal + DX12 + Browser WebGPU
        let instance = wgpu::Instance::new(wgpu::Backends::all());
        let surface = unsafe { instance.create_surface(window) };
        let adapter = instance.request_adapter(
            &wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::default(),
                compatible_surface: Some(&surface),
                force_fallback_adapter: false,
            },
        ).await.unwrap();
```

### Instance and Adapter

The `instance` is the first thing you create when using wgpu. Its main purpose
is to create `Adapter`s and `Surface`s.

The `adapter` is a handle to our actual graphics card. You can use this to get information about the graphics card such as its name and what backend the adapter uses. We use this to create our `Device` and `Queue` later. Let's discuss the fields of `RequestAdapterOptions`.

* `power_preference` has two variants: `LowPower`, and `HighPerformance`. This means will pick an adapter that favors battery life such as a integrated GPU when using `LowPower`. `HighPerformance` as will pick an adapter for more power hungry yet more performant GPU's such as your dedicated graphics card. WGPU will favor `LowPower` if there is no adapter for the `HighPerformance` option.
* The `compatible_surface` field tells wgpu to find an adapter that can present to the supplied surface.
* The `force_fallback_adapter` forces wgpu to pick an adapter that will work on all harware. This usually means that the rendering backend will use a "software" system, instead of hardware such as a GPU.

<div class="note">

The options I've passed to `request_adapter` aren't guaranteed to work for all devices, but will work for most of them. If wgpu can't find an adapter with the required permissions, `request_adapter` will return `None`. If you want to get all adapters for a particular backend you can use `enumerate_adapters`. This will give you an iterator that you can loop over to check if one of the adapters works for your needs.

```rust
let adapter = instance
    .enumerate_adapters(wgpu::Backends::all())
    .filter(|adapter| {
        // Check if this adapter supports our surface
        surface.get_preferred_format(&adapter).is_some()
    })
    .next()
    .unwrap()
```

Another thing to note is that `Adapter`s are locked to a specific backend. If you are on Windows and have 2 graphics cards you'll have at least 4 adapters available to use, 2 Vulkan and 2 DirectX.

For more fields you can use to refine your search [check out the docs](https://docs.rs/wgpu/0.10.1/wgpu/struct.Adapter.html).

</div>


### The Surface

The `surface` is the part of the window that we draw to. We need it to draw directly to the screen. Our `window` needs to implement [raw-window-handle](https://crates.io/crates/raw-window-handle)'s `HasRawWindowHandle` trait to create a surface. Fortunately, winit's `Window` fits the bill. We also need it to request our `adapter`.

### Device and Queue

Let's use the `adapter` to create the device and queue.

```rust
        let (device, queue) = adapter.request_device(
            &wgpu::DeviceDescriptor {
                features: wgpu::Features::empty(),
                limits: wgpu::Limits::default(),
                label: None,
            },
            None, // Trace path
        ).await.unwrap();
```

The `features` field on `DeviceDescriptor`, allows us to specify what extra features we want. For this simple example, I've decided not to use any extra features.

<div class="note">

The graphics card you have limits the features you can use. If you want to use certain features you may need to limit what devices you support, or provide work arounds.

You can get a list of features supported by your device using `adapter.features()`, or `device.features()`.

You can view a full list of features [here](https://docs.rs/wgpu/0.10.1/wgpu/struct.Features.html).

</div>

The `limits` field describes the limit of certain types of resource we can create. We'll use the defaults for this tutorial, so we can support most devices. You can view a list of limits [here](https://docs.rs/wgpu/0.10.1/wgpu/struct.Limits.html).

```rust
        let config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            format: surface.get_preferred_format(&adapter).unwrap(),
            width: size.width,
            height: size.height,
            present_mode: wgpu::PresentMode::Fifo,
        };
        surface.configure(&device, &config);
```

Here we are defining a config for our surface. This will define how the surface creates its underlying `SurfaceTexture`s. We will talk about `SurfaceTexture` when we get to the `render` function. For now lets talk about some of the config fields.

The `usage` field describes how the `SurfaceTexture`s will be used. `RENDER_ATTACHMENT` specifies that the textures will be used to write to the screen (we'll talk about more `TextureUsages`s later).

The `format` defines how the `SurfaceTexture`s will be stored on the gpu. Different displays prefer different formats. We use `surface.get_preferred_format(&adapter)` to figure out the best format to use based on the display you're using.

`width` and `height`, are the width and height in pixels of the `SurfaceTexture`. This should usually be the width and height of the window.

<div class="warning">
Make sure that the width and height of the `SurfaceTexture` are not 0, as that can cause your app to crash.
</div>

The `present_mode` uses the `wgpu::PresentMode` enum which determines how to sync the surface with the display. The option we picked `FIFO`, will cap the display rate at the displays framerate. This is essentially VSync. This is also the most optimal mode on mobile. There are other options and you can see all them [in the docs](https://docs.rs/wgpu/0.10.1/wgpu/enum.PresentMode.html)

Now that we've configured our surface properly we can add these new fields at the end of the method.

```rust
        Self {
            surface,
            device,
            queue,
            config,
            size,
        }
    }
    // ...
}
```

We'll want to call this in our main method before we enter the event loop.

```rust
// State::new uses async code, so we're going to wait for it to finish
let mut state = pollster::block_on(State::new(&window));
```

<div class="note">

You can use heavier libraries like [async_std](https://docs.rs/async_std) and [tokio](https://docs.rs/tokio) to make main async, so you can await futures. I've elected not to use these crates as this tutorial is not about writing an async application, and the futures created by wgpu do not require [special executor support](https://rust-lang.github.io/async-book/08_ecosystem/00_chapter.html#determining-ecosystem-compatibility). We just need some way to interact with wgpu's async functions, and the [pollster crate](https://docs.rs/pollster) is enough for that.

</div>

## resize()
If we want to support resizing in our application, we're going to need to reconfigure the `surface` everytime the window's size changes. That's the reason we stored the physical `size` and the `config` used to configure the `surface`. With all of these, the resize method is very simple.

```rust
// impl State
pub fn resize(&mut self, new_size: winit::dpi::PhysicalSize<u32>) {
    if new_size.width > 0 && new_size.height > 0 {
        self.size = new_size;
        self.config.width = new_size.width;
        self.config.height = new_size.height;
        self.surface.configure(&self.device, &self.config);
    }
}
```

There's nothing really different here from configurating the `surface` initially, so I won't get into it.

We call this method in `main()` in the event loop for the following events.

```rust
match event {
    // ...

    } if window_id == window.id() => if !state.input(event) {
        match event {
            // ...

            WindowEvent::Resized(physical_size) => {
                state.resize(*physical_size);
            }
            WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
                // new_inner_size is &&mut so we have to dereference it twice
                state.resize(**new_inner_size);
            }
            // ...
}
```

## input()

`input()` returns a `bool` to indicate whether an event has been fully processed. If the method returns `true`, the main loop won't process the event any further.

We're just going to return false for now because we don't have any events we want to capture.

```rust
// impl State
fn input(&mut self, event: &WindowEvent) -> bool {
    false
}
```

We need to do a little more work in the event loop. We want `State` to have priority over `main()`. Doing that (and previous changes) should have your loop looking like this.

```rust
// main()
event_loop.run(move |event, _, control_flow| {
    match event {
        Event::WindowEvent {
            ref event,
            window_id,
        } if window_id == window.id() => if !state.input(event) { // UPDATED!
            match event {
                WindowEvent::CloseRequested
                | WindowEvent::KeyboardInput {
                    input:
                        KeyboardInput {
                            state: ElementState::Pressed,
                            virtual_keycode: Some(VirtualKeyCode::Escape),
                            ..
                        },
                    ..
                } => *control_flow = ControlFlow::Exit,
                WindowEvent::Resized(physical_size) => {
                    state.resize(*physical_size);
                }
                WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
                    state.resize(**new_inner_size);
                }
                _ => {}
            }
        }
        _ => {}
    }
});
```

## update()

We don't have anything to update yet, so leave the method empty.

```rust
fn update(&mut self) {
    // remove `todo!()`
}
```

We'll add some code here later on to move around objects.

## render()

Here's where the magic happens. First we need to get a frame to render to.

```rust
// impl State

fn render(&mut self) -> Result<(), wgpu::SurfaceError> {
    let output = self.surface.get_current_texture()?;
```

The `get_current_texture` function will wait for the `surface` to provide a new `SurfaceTexture` that we will render to. We'll store this in `output` for later.

```rust
    let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());
```

This line creates a `TextureView` with default settings. We need to do this because we want to control how the render code interacts with the texture.

We also need to create a `CommandEncoder` to create the actual commands to send to the gpu. Most modern graphics frameworks expect commands to be stored in a command buffer before being sent to the gpu. The `encoder` builds a command buffer that we can then send to the gpu.

```rust
    let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
        label: Some("Render Encoder"),
    });
```

Now we can actually get to clearing the screen (long time coming). We need to use the `encoder` to create a `RenderPass`. The `RenderPass` has all the methods to do the actual drawing. The code for creating a `RenderPass` is a bit nested, so I'll copy it all here, and talk about the pieces.

```rust
    {
        let _render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("Render Pass"),
            color_attachments: &[wgpu::RenderPassColorAttachment {
                view: &view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Clear(wgpu::Color {
                        r: 0.1,
                        g: 0.2,
                        b: 0.3,
                        a: 1.0,
                    }),
                    store: true,
                },
            }],
            depth_stencil_attachment: None,
        });
    }

    // submit will accept anything that implements IntoIter
    self.queue.submit(std::iter::once(encoder.finish()));
    output.present();

    Ok(())
}
```

First things first, let's talk about the `{}`. `encoder.begin_render_pass(...)` borrows `encoder` mutably (aka `&mut self`). We can't call `encoder.finish()` until we release that mutable borrow. The `{}` around `encoder.begin_render_pass(...)` tells rust to drop any variables within them when the code leaves that scope thus releasing the mutable borrow on `encoder` and allowing us to `finish()` it. If you don't like the `{}`, you can also use `drop(render_pass)` to achieve the same effect.

We can get the same results by removing the `{}`, and the `let _render_pass =` line, but we need access to the `_render_pass` in the next tutorial, so we'll leave it as is.

The last lines of the code tell `wgpu` to finish the command buffer, and to submit it to the gpu's render queue.

We need to update the event loop again to call this method. We'll also call update before it too.

```rust
// main()
event_loop.run(move |event, _, control_flow| {
    match event {
        // ...
        Event::RedrawRequested(_) => {
            state.update();
            match state.render() {
                Ok(_) => {}
                // Reconfigure the surface if lost
                Err(wgpu::SurfaceError::Lost) => state.resize(state.size),
                // The system is out of memory, we should probably quit
                Err(wgpu::SurfaceError::OutOfMemory) => *control_flow = ControlFlow::Exit,
                // All other errors (Outdated, Timeout) should be resolved by the next frame
                Err(e) => eprintln!("{:?}", e),
            }
        }
        Event::MainEventsCleared => {
            // RedrawRequested will only trigger once, unless we manually
            // request it.
            window.request_redraw();
        }
        // ...
    }
});
```

With all that, you should be getting something that looks like this.

![Window with a blue background](./cleared-window.png)

## Wait, what's going on with RenderPassDescriptor?

Some of you may be able to tell what's going on just by looking at it, but I'd be remiss if I didn't go over it. Let's take a look at the code again.

```rust
&wgpu::RenderPassDescriptor {
    label: Some("Render Pass"),
    color_attachments: &[
        // ...
    ],
    depth_stencil_attachment: None,
}
```

A `RenderPassDescriptor` only has three fields: `label`, `color_attachments` and `depth_stencil_attachment`. The `color_attachements` describe where we are going to draw our color to. We use the `TextureView` we created earlier to make sure that we render to the screen.

We'll use `depth_stencil_attachment` later, but we'll set it to `None` for now.

```rust
wgpu::RenderPassColorAttachment {
    view: &view,
    resolve_target: None,
    ops: wgpu::Operations {
        load: wgpu::LoadOp::Clear(wgpu::Color {
            r: 0.1,
            g: 0.2,
            b: 0.3,
            a: 1.0,
        }),
        store: true,
    },
}
```

The `RenderPassColorAttachment` has the `view` field which informs `wgpu` what texture to save the colors to. In this case we specify `frame.view` that we created using `surface.get_current_texture()`. This means that any colors we draw to this attachment will get drawn to the screen.

The `resolve_target` is the texture that will receive the resolved output. This will be the same as `view` unless multisampling is enabled. We don't need to specify this, so we leave it as `None`.

The `ops` field takes a `wpgu::Operations` object. This tells wgpu what to do with the colors on the screen (specified by `frame.view`). The `load` field tells wgpu how to handle colors stored from the previous frame. Currently we are clearing the screen with a bluish color. The `store` field tells wgpu with we want to store the rendered results to the `Texture` behind our `TextureView` (in this case it's the `SurfaceTexture`). We use `true` as we do want to store our render results. There are cases when you wouldn't want to but those

<div class="note">

It's not uncommon to not clear the screen if the screen is going to be completely covered up with objects. If your scene doesn't cover the entire screen however you can end up with something like this.

![./no-clear.png](./no-clear.png)

</div>

## Validation Errors?

If wgpu is using Vulkan on your machine, you may run into validation errors if you are running an older version of the Vulkan SDK. You should be using at least version `1.2.182` as older versions can give out some false positives. If errors persist, you may have encountered a bug in wgpu. You can post an issue at [https://github.com/gfx-rs/wgpu](https://github.com/gfx-rs/wgpu)

## Challenge

Modify the `input()` method to capture mouse events, and update the clear color using that. *Hint: you'll probably need to use `WindowEvent::CursorMoved`*.

<AutoGithubLink/>
