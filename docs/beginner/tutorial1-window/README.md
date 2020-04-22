# Dependencies and the window

## Boring, I know
Some of you reading this are very experienced with opening up windows in Rust and probably have your favorite windowing library, but this guide is designed for everybody, so it's something that we need to cover. Luckily, if you don't need to read this if you know what you're doing. One thing that you do need to know is that whatever windowing solution you use needs to support the [raw-window-handle](https://github.com/rust-windowing/raw-window-handle) crate.

## What crates are we using?
For the beginner stuff, we're going to keep things very simple, we'll add things as we go, but I've listed the relevant `Cargo.toml` bits below.

```toml
[dependencies]
image = "0.22"
winit = "0.20"
wgpu = "0.4"
```

If you're on Windows, you can specify Vulkan as you desired backend by removing the `wgpu = "0.4"` and adding the following.

``` toml
[dependencies.wgpu]
version = "0.4"
features = ["vulkan"]
```

<!-- ## Why vulkan?
You need to specify what rendering backend you're using through [Cargo features](https://doc.rust-lang.org/cargo/reference/manifest.html#the-features-section) in order to run a program with wgpu. I'm specifying [vulkan](https://www.khronos.org/vulkan/), because I'm on [linux](https://www.linuxmint.com/). You're welcome to use [metal](https://developer.apple.com/metal/), or `DirectX 11/12` using `"metal"`, `"dx11"`, or `"dx12"` respectively.  -->


## The code
There's not much going on here yet, so I'm just going to post the code in full. Just paste this into you're `main.rs` or equivalent.

```rust
use winit::{
    event::*,
    event_loop::{EventLoop, ControlFlow},
    window::{WindowBuilder},
};

fn main() {
    let event_loop = EventLoop::new();
    let window = WindowBuilder::new()
        .build(&event_loop)
        .unwrap();
    
    event_loop.run(move |event, _, control_flow| {
        match event {
            Event::WindowEvent {
                ref event,
                window_id,
            } if window_id == window.id() => match event {
                WindowEvent::CloseRequested => *control_flow = ControlFlow::Exit,
                WindowEvent::KeyboardInput {
                    input,
                    ..
                } => {
                    match input {
                        KeyboardInput {
                            state: ElementState::Pressed,
                            virtual_keycode: Some(VirtualKeyCode::Escape),
                            ..
                        } => *control_flow = ControlFlow::Exit,
                        _ => *control_flow = ControlFlow::Wait,
                    }
                }
                _ => *control_flow = ControlFlow::Wait,
            }
            _ => *control_flow = ControlFlow::Wait,
        }
    });
}
```

All this does is create a window, and keep it open until until user closes it, or presses escape. Next tutorial we'll actually start using wgpu!

<AutoGithubLink/>