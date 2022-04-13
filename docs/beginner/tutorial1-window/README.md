# Dependencies and the window

## Boring, I know
Some of you reading this are very experienced with opening up windows in Rust and probably have your favorite windowing library, but this guide is designed for everybody, so it's something that we need to cover. Luckily, you don't need to read this if you know what you're doing. One thing that you do need to know is that whatever windowing solution you use needs to support the [raw-window-handle](https://github.com/rust-windowing/raw-window-handle) crate.

## What crates are we using?
For the beginner stuff, we're going to keep things very simple, we'll add things as we go, but I've listed the relevant `Cargo.toml` bits below.

```toml
[dependencies]
winit = "0.26"
env_logger = "0.9"
log = "0.4"
wgpu = "0.12"
pollster = "0.2"
```

## Using Rust's new resolver
As of version 0.10, wgpu require's cargo's [newest feature resolver](https://doc.rust-lang.org/cargo/reference/resolver.html#feature-resolver-version-2), which is the default in the 2021 edition (any new project started with Rust version 1.56.0 or newer). However, if you are still using the 2018 edition, you must include `resolver = "2"` in either the `[package]` section of `Cargo.toml` if you are working on a single crate, or the `[workspace]` section of the root `Cargo.toml` in a workspace.

## env_logger
It is very important to enable logging via `env_logger::init();`.
When wgpu hits any error it panics with a generic message, while logging the real error via the log crate.
This means if you don't include `env_logger::init()` wgpu will fail silently, leaving you very confused!

## The code
There's not much going on here yet, so I'm just going to post the code in full. Just paste this into your `lib.rs` or equivalent.

```rust
use winit::{
    event::*,
    event_loop::{ControlFlow, EventLoop},
    window::WindowBuilder,
};

pub async fn run() {
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

All this does is create a window, and keep it open until the user closes it, or presses escape. Next we'll need a `main.rs` to actually run the code. It's quite simple it just imports `run()` and, well runs it!

```rust
use tutorial1_window::run;

fn main() {
    pollster::block_on(run());
}
```

If you only want to support desktop, that's all you have to do! In the next tutorial we'll actually start using wgpu!

## Added support for the web

If I go through this tutorial about WebGPU and never talk about using it on the web, then I'd hardly call this tutorial complete. Fortunately getting a wgpu application running in a browser is not too difficult once you get things set up.

Lets start with the changes we need to make to are `Cargo.toml`:

```toml
[lib]
crate-type = ["cdylib", "rlib"]
```

These lines tell cargo that we want to allow our crate to build a native Rust static library (rlib) and a C/C++ compatible library (cdylib). We need the rlib if we want to run wgpu in a desktop environment. We need the cdylib to create the Web Assembly that browser will actually run.

<div class="note">

## Web Assembly

Web Assembly ie WASM, is a binary format supported by most modern browsers that allows lower level languages such as Rust to run on a web page. This allows us to right the bulk of our application in Rust and use a few lines of Javascript to get it running in a web browser.

</div>

Now all we need are some more dependencies that are specific to running in WASM:

```toml
[dependencies]
cfg-if = "1"
# the other regular dependencies...

[target.'cfg(target_arch = "wasm32")'.dependencies]
console_error_panic_hook = "0.1.6"
console_log = "0.2.0"
wgpu = { version = "0.12", features = ["webgl"]}
wasm-bindgen = "0.2.76"
web-sys = { version = "0.3.53", features = [
    "Document",
    "Window",
    "Element",
]}
```

The [cfg-if](https://docs.rs/cfg-if) crate adds a macro that makes using platform specific code more manageable.

The `[target.'cfg(target_arch = "wasm32")'.dependencies]` line tells cargo to only include these dependencies if we are targeting the `wasm32` architecture. The next few dependencies are just make interfacing with javascript a lot easier.

* [console_error_panic_hook](https://docs.rs/console_error_panic_hook) configures the `panic!` macro to send errors to the javascript console. Without this when you encounter panics, you'll be left in the dark for what caused them.
* [console_log](https://docs.rs/console_log) implements the [log](https://docs.rs/log) API. It sends all logs to the javascript console. It can be configured to only send logs of a particular log level. This is also great for debugging.
* We need to enable WebGL feature on wgpu if we want to run on most current browsers. Support is in the works for using the WebGPU api directly, but that is only possible on experimental versions of browsers such as Firefox Nightly and Chrome Canary.<br>
You're welcome to test this code on these browsers (and the wgpu devs would appreciate it as well), but for sake of simplicity I'm going to stick to using the WebGL feature until the WebGPU api gets to a more stable state.<br>
If you want more details check out the guide for compiling for the web on [wgpu's repo](https://github.com/gfx-rs/wgpu/wiki/Running-on-the-Web-with-WebGPU-and-WebGL)
* [wasm-bindgen](https://docs.rs/wasm-bindgen) is the most important dependency in this list. It's responsible for generating the boilerplate code that will tell the browser how to use our crate. It also allows us to expose methods in Rust that will can be used in Javascript, and vice-versa.<br>
I won't get into the specifics of wasm-bindgen, so if you need a primer (or just a refresher) check out [this](https://rustwasm.github.io/wasm-bindgen/)
* [web-sys](https://docs.rs/web-sys) is a crate that includes many methods and structures that are available in a normal javascript application: `get_element_by_id`, `append_child`. The features listed are only the bare minimum of what we need currently.

## More code

First we need to import `wasm-bindgen` in `lib.rs`:

```rust
#[cfg(target_arch="wasm32")]
use wasm_bindgen::prelude::*;
```

Next we need to tell wasm-bindgen to run our `run()` function when the WASM is loaded:

```rust
#[cfg_attr(target_arch="wasm32", wasm_bindgen(start))]
pub async fn run() {
    // snipped...
}
```

Then we need to toggle what logger we are using based on if we are in WASM land or not. Add the following to the top of the run function replacing the `env_logger::init()` line:

```rust
cfg_if::cfg_if! {
    if #[cfg(target_arch = "wasm32")] {
        std::panic::set_hook(Box::new(console_error_panic_hook::hook));
        console_log::init_with_level(log::Level::Warn).expect("Could't initialize logger");
    } else {
        env_logger::init();
    }
}
```

This will setup `console_log` and `console_error_panic_hook` in a web build, and will initialize `env_logger` in a normal build. This is important as `env_logger` doesn't support Web Assembly at the moment.

Next, after we create our event loop and window, we need to add an canvas to the html document that we will host our application:

```rust
#[cfg(target_arch = "wasm32")]
{
    // Winit prevents sizing with CSS, so we have to set
    // the size manually when on web.
    use winit::dpi::PhysicalSize;
    window.set_inner_size(PhysicalSize::new(450, 400));
    
    use winit::platform::web::WindowExtWebSys;
    web_sys::window()
        .and_then(|win| win.document())
        .and_then(|doc| {
            let dst = doc.get_element_by_id("wasm-example")?;
            let canvas = web_sys::Element::from(window.canvas());
            dst.append_child(&canvas).ok()?;
            Some(())
        })
        .expect("Couldn't append canvas to document body.");
}
```

<div class="note">

The `"wasm-example"` id is specific to my project (aka. this tutorial). You can substitute this for what ever id your using in your html. Alternatively you could add the canvas directly to the `<body>` as they do in the wgpu repo. This part is ultimately up to you.

</div>

That's all the web specific code we need for now. Next thing we need to do is build the Web Assembly itself.

## Wasm Pack

Now you can build a wgpu application with just wasm-bindgen, but I ran into some issues doing that. For one, you need to install wasm-bindgen on your computer as well as include it as a dependency. They version you install as a dependency **needs** to exactly match the version you installed, otherwise your build will fail.

In order to get around this shortcoming, and to make the lives of everyone reading this easier, I opted to add [wasm-pack](https://rustwasm.github.io/docs/wasm-pack/) to the mix. Wasm-pack handles installing the correct version of wasm-bindgen for you, and it supports building for different types of web targets as well: browser, NodeJS, and bundlers such as webpack.

In order to use wasm-pack, first you need to [install it](https://rustwasm.github.io/wasm-pack/installer/).

Once you've done that, we can use it to build our crate. If you only have one crate in your project, you can just use `wasm-pack build`. If your using a workspace, you'll have to specify what crate you want to build. Imagine your crate is a directory called `game`, you would use:

```bash
wasm-pack build game
```

Once wasm-pack is done building you'll have a `pkg` directory in the same directory as your crate. This has all the javascript code needed to run the WASM code. You'd then import the WASM module in javascript:

```js
const init = await import('./pkg/game.js');
init().then(() => console.log("WASM Loaded"));
```

This site uses [Vuepress](https://vuepress.vuejs.org/), so I load the WASM in a Vue component. How you handle your WASM will depend on what you want to do. If you want to check out how I'm doing things take a look at [this](https://github.com/sotrh/learn-wgpu/blob/master/docs/.vuepress/components/WasmExample.vue).

<div class="note">

If you intend to use your WASM module in a plain HTML website, you'll need to tell wasm-pack to target the web:

```bash
wasm-pack build --target web
```

You'll then need run the WASM code in an ES6 Module:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pong with WASM</title>
</head>

<body>
    <script type="module">
        import init from "./pkg/pong.js";
        init().then(() => {
            console.log("WASM Loaded");
        });
    </script>
    <style>
        canvas {
            background-color: black;
        }
    </style>
</body>

</html>
```

</div>

Press the button below and you will see the code running!

<WasmExample example="tutorial1_window"></WasmExample>

<AutoGithubLink/>
