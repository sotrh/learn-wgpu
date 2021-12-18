# Dependencies and the window

## Boring, I know
Some of you reading this are very experienced with opening up windows in Rust and probably have your favorite windowing library, but this guide is designed for everybody, so it's something that we need to cover. Luckily, you don't need to read this if you know what you're doing. One thing that you do need to know is that whatever windowing solution you use needs to support the [raw-window-handle](https://github.com/rust-windowing/raw-window-handle) crate.

## What crates are we using?
For the beginner stuff, we're going to keep things very simple, we'll add things as we go, but I've listed the relevant `Cargo.toml` bits below.

```toml
[dependencies]
image = "0.23"
winit = "0.25"
cgmath = "0.18"
env_logger = "0.9"
log = "0.4"
wgpu = "0.11"
pollster = "0.2"
```

## Using Rust's new resolver
As of version 0.10, wgpu require's cargo's [newest feature resolver](https://doc.rust-lang.org/cargo/reference/resolver.html#feature-resolver-version-2), which is the default in the 2021 edition (any new project started with Rust version 1.56.0 or newer). However, if you are still using the 2018 edition, you must include `resolver = "2"` in either the `[package]` section of `Cargo.toml` if you are working on a single crate, or the `[workspace]` section of the root `Cargo.toml` in a workspace.

## env_logger
It is very important to enable logging via `env_logger::init();`.
When wgpu hits any error it panics with a generic message, while logging the real error via the log crate.
This means if you don't include `env_logger::init()` wgpu will fail silently, leaving you very confused!

## The code
There's not much going on here yet, so I'm just going to post the code in full. Just paste this into your `main.rs` or equivalent.

```rust
use winit::{
    event::*,
    event_loop::{ControlFlow, EventLoop},
    window::WindowBuilder,
};

fn main() {
    env_logger::init();
    let event_loop = EventLoop::new();
    let window = WindowBuilder::new().build(&event_loop).unwrap();

    event_loop.run(move |event, _, control_flow| match event {
        Event::WindowEvent {
            ref event,
            window_id,
        } if window_id == window.id() => match event {
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
            _ => {}
        },
        _ => {}
    });
}

```

All this does is create a window, and keep it open until the user closes it, or presses escape. In the next tutorial we'll actually start using wgpu!

<AutoGithubLink/>
