# Dependencies and the window

## Boring, I know
Some of you reading this are very experienced with opening up windows in Rust and probably have your favorite windowing library, but this guide is designed for everybody, so it's something that we need to cover. Luckily, you don't need to read this if you know what you're doing. One thing that you do need to know is that whatever windowing solution you use needs to support the [raw-window-handle](https://github.com/rust-windowing/raw-window-handle) crate.

## What crates are we using?
For the beginner stuff, we're going to keep things very simple, we'll add things as we go, but I've listed the relevant `Cargo.toml` bits below.

```toml
[dependencies]
image = "0.22"
winit = "0.20"
wgpu = "0.5.0"
futures = "0.3.4"
```

If you're on MacOS, you can specify Vulkan (MoltenVK) as your desired backend instead of Metal by removing the `wgpu = "0.5.0"` and adding the following.

``` toml
[dependencies.wgpu]
version = "0.5.0"
features = ["vulkan"]
```


## The code
There's not much going on here yet, so I'm just going to post the code in full. Just paste this into you're `main.rs` or equivalent.

```rust
use winit::{
    event::*,
    event_loop::{EventLoop, ControlFlow},
    window::{Window, WindowBuilder},
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
                        _ => {}
                    }
                }
                _ => {}
            }
            _ => {}
        }
    });
}
```

All this does is create a window, and keep it open until until user closes it, or presses escape. Next tutorial we'll actually start using wgpu!

<AutoGithubLink/>
