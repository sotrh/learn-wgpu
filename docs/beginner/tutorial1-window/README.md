# Dependencies and the window

## Boring, I know

Some of you reading this are very experienced with opening up windows in Rust and probably have your favorite windowing library, but this guide is designed for everybody, so it's something that we need to cover. Luckily, you don't need to read this if you know what you're doing. One thing that you do need to know is that whatever windowing solution you use needs to support the [raw-window-handle](https://github.com/rust-windowing/raw-window-handle) crate.

## What crates are we using?

For the beginner stuff, we're going to keep things very simple. We'll add things as we go, but I've listed the relevant `Cargo.toml` bits below.

```toml
[dependencies]
anyhow = "1.0"
winit = { version = "0.30", features = ["android-native-activity"] }
env_logger = "0.10"
log = "0.4"
wgpu = "28.0"
pollster = "0.3"
```

## Using Rust's new resolver

As of version 0.10, wgpu requires Cargo's [newest feature resolver](https://doc.rust-lang.org/cargo/reference/resolver.html#feature-resolver-version-2), which is the default in the 2021 edition (any new project started with Rust version 1.56.0 or newer). However, if you are still using the 2018 edition, you must include `resolver = "2"` in either the `[package]` section of `Cargo.toml` if you are working on a single crate or the `[workspace]` section of the root `Cargo.toml` in a workspace.

## env_logger

It is very important to enable logging via `env_logger::init();`.
When wgpu hits any error, it panics with a generic message, while logging the real error via the log crate.
This means if you don't include `env_logger::init()`, wgpu will fail silently, leaving you very confused!  
(This has been done in the code below)

## Create a new project

run ```cargo new project_name``` where project_name is the name of the project.  
(In the example below, I have used 'tutorial1_window')

## The code

We are going to want somewhere to put all of our state so let's create a `State` struct.

```rust
use std::sync::Arc;

use winit::{
    application::ApplicationHandler, event::*, event_loop::{ActiveEventLoop, EventLoop}, keyboard::{KeyCode, PhysicalKey}, window::Window
};

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

// This will store the state of our game
pub struct State {
    window: Arc<Window>,
}

impl State {
    // We don't need this to be async right now,
    // but we will in the next tutorial
    pub async fn new(window: Arc<Window>) -> anyhow::Result<Self> {
        Ok(Self {
            window,
        })
    }

    pub fn resize(&mut self, _width: u32, _height: u32) {
        // We'll do stuff here in the next tutorial
    }
    
    pub fn render(&mut self) {
        self.window.request_redraw();

        // We'll do more stuff here in the next tutorial
    }
}

// ...
```

There's not much going on here, but once we start using WGPU will start filling this up pretty quick. Most of the methods on this struct are place holders, though in `render()` we ask the window to draw another frame as soon as possible as winit only draws one frame unless the window is resized or we request it to draw another one.

Now that we have our `State` struct, we need to tell winit how to use it. We'll create an `App` struct for this.

```rust
pub struct App {
    #[cfg(target_arch = "wasm32")]
    proxy: Option<winit::event_loop::EventLoopProxy<State>>,
    state: Option<State>,
}

impl App {
    pub fn new(#[cfg(target_arch = "wasm32")] event_loop: &EventLoop<State>) -> Self {
        #[cfg(target_arch = "wasm32")]
        let proxy = Some(event_loop.create_proxy());
        Self {
            state: None,
            #[cfg(target_arch = "wasm32")]
            proxy,
        }
    }
}
```

So the `App` struct has two fields: `state` and `proxy`.

The `state` variable stores our `State` struct as an option. The reason we need an option is that `State::new()` needs a window and we can't create a window until the application gets to the `Resumed` state. We'll get more into that in a bit.

The `proxy` variable is only needed on the web. The reason for this is that creating WGPU resources is an async process. Again we'll get into that in a bit.

Now that we have an `App` struct we need to implement the `ApplicationHandler` trait. This will give us a variety of different functions that we can use to get application events such as key press, mouse movements and various lifecycle events. We'll start by covering the `resumed` and `user_event` methods first.

```rust
impl ApplicationHandler<State> for App {
    fn resumed(&mut self, event_loop: &ActiveEventLoop) {
        #[allow(unused_mut)]
        let mut window_attributes = Window::default_attributes();

        #[cfg(target_arch = "wasm32")]
        {
            use wasm_bindgen::JsCast;
            use winit::platform::web::WindowAttributesExtWebSys;
            
            const CANVAS_ID: &str = "canvas";

            let window = wgpu::web_sys::window().unwrap_throw();
            let document = window.document().unwrap_throw();
            let canvas = document.get_element_by_id(CANVAS_ID).unwrap_throw();
            let html_canvas_element = canvas.unchecked_into();
            window_attributes = window_attributes.with_canvas(Some(html_canvas_element));
        }

        let window = Arc::new(event_loop.create_window(window_attributes).unwrap());

        #[cfg(not(target_arch = "wasm32"))]
        {
            // If we are not on web we can use pollster to
            // await the 
            self.state = Some(pollster::block_on(State::new(window)).unwrap());
        }

        #[cfg(target_arch = "wasm32")]
        {
            // Run the future asynchronously and use the
            // proxy to send the results to the event loop
            if let Some(proxy) = self.proxy.take() {
                wasm_bindgen_futures::spawn_local(async move {
                    assert!(proxy
                        .send_event(
                            State::new(window)
                                .await
                                .expect("Unable to create canvas!!!")
                        )
                        .is_ok())
                });
            }
        }
    }

    #[allow(unused_mut)]
    fn user_event(&mut self, _event_loop: &ActiveEventLoop, mut event: State) {
        // This is where proxy.send_event() ends up
        #[cfg(target_arch = "wasm32")]
        {
            event.window.request_redraw();
            event.resize(
                event.window.inner_size().width,
                event.window.inner_size().height,
            );
        }
        self.state = Some(event);
    }

    // ...
}
```

The `resumed` method seems like it does a lot, but it only does a few things:

- It defines attributes about the window including some web specific stuff.
- We use those attributes to create the window.
- We create a future that creates our `State` struct
- On native we use pollster to get await the future
- On web we run the future asynchronously which sends the results to the `user_event` function

The `user_event` function just serves as a landing point for our `State` future. `resumed` isn't async so we need to offload the future and send the results somewhere.

Next we'll talk about `window_event`.

```rust
impl ApplicationHandler<State> for App {

    // ...

    fn window_event(
        &mut self,
        event_loop: &ActiveEventLoop,
        _window_id: winit::window::WindowId,
        event: WindowEvent,
    ) {
        let state = match &mut self.state {
            Some(canvas) => canvas,
            None => return,
        };

        match event {
            WindowEvent::CloseRequested => event_loop.exit(),
            WindowEvent::Resized(size) => state.resize(size.width, size.height),
            WindowEvent::RedrawRequested => {
                state.render();
            }
            WindowEvent::KeyboardInput {
                event:
                    KeyEvent {
                        physical_key: PhysicalKey::Code(code),
                        state: key_state,
                        ..
                    },
                ..
            } => match (code, key_state.is_pressed()) {
                (KeyCode::Escape, true) => event_loop.exit(),
                _ => {}
            },
            _ => {}
        }
    }
}
```

This is where we can process events such as keyboard inputs, and mouse movements, as well as other window events such as when the window wants to draw or is resized. We can call the methods we defined on `State` here.

Next we need to actually run our code. We'll create a `run()` function to do that.

```rust
pub fn run() -> anyhow::Result<()> {
    #[cfg(not(target_arch = "wasm32"))]
    {
        env_logger::init();
    }
    #[cfg(target_arch = "wasm32")]
    {
        console_log::init_with_level(log::Level::Info).unwrap_throw();
    }

    let event_loop = EventLoop::with_user_event().build()?;
    let mut app = App::new(
        #[cfg(target_arch = "wasm32")]
        &event_loop,
    );
    event_loop.run_app(&mut app)?;

    Ok(())
}
```

This function sets up the logger as well as creates the `event_loop` and our `app` and then runs our `app` to completion.

## Added support for the web

In order to get our app to run on the web we need to make some changes to our `Cargo.toml`:

```toml
[lib]
crate-type = ["cdylib", "rlib"]
```

These lines tell Cargo that we want to allow our crate to build a native Rust static library (rlib) and a C/C++ compatible library (cdylib). We need rlib if we want to run wgpu in a desktop environment. We need cdylib to create the Web Assembly that the browser will run.

<div class="note">

## Web Assembly

Web Assembly, i.e. WASM, is a binary format supported by most modern browsers that allows lower-level languages such as Rust to run on a web page. This allows us to write the bulk of our application in Rust and use a few lines of Javascript to get it running in a web browser.

</div>

Now, all we need are some more dependencies that are specific to running in WASM:

```toml
# This should go in the Cargo.toml in the root directory
[profile.release]
strip = true

[dependencies]
# the other regular dependencies...

[target.'cfg(target_arch = "wasm32")'.dependencies]
console_error_panic_hook = "0.1.6"
console_log = "1.0"
wgpu = { version = "28.0", features = ["webgl"]}
wasm-bindgen = "0.2"
wasm-bindgen-futures = "0.4.30"
web-sys = { version = "0.3", features = [
    "Document",
    "Window",
    "Element",
]}
```

The `[target.'cfg(target_arch = "wasm32")'.dependencies]` line tells Cargo to only include these dependencies if we are targeting the `wasm32` architecture. The next few dependencies just make interfacing with JavaScript a lot easier.

- [console_error_panic_hook](https://docs.rs/console_error_panic_hook) configures the `panic!` macro to send errors to the javascript console. Without this, when you encounter panics, you'll be left in the dark about what caused them.
- [console_log](https://docs.rs/console_log) implements the [log](https://docs.rs/log) API. It sends all logs to the javascript console. It can be configured to only send logs of a particular log level. This is also great for debugging.
- We need to enable the WebGL feature on wgpu if we want to run on most current browsers. Support is in the works for using the WebGPU api directly, but that is only possible on experimental versions of browsers such as Firefox Nightly and Chrome Canary.<br>
  You're welcome to test this code on these browsers (and the wgpu devs would appreciate it as well), but for the sake of simplicity, I'm going to stick to using the WebGL feature until the WebGPU api gets to a more stable state.<br>
  If you want more details, check out the guide for compiling for the web on [wgpu's repo](https://github.com/gfx-rs/wgpu/wiki/Running-on-the-Web-with-WebGPU-and-WebGL)
- [wasm-bindgen](https://docs.rs/wasm-bindgen) is the most important dependency in this list. It's responsible for generating the boilerplate code that will tell the browser how to use our crate. It also allows us to expose methods in Rust that can be used in JavaScript and vice-versa.<br>
  I won't get into the specifics of wasm-bindgen, so if you need a primer (or just a refresher), check out [this](https://wasm-bindgen.github.io/wasm-bindgen/)
- [web-sys](https://docs.rs/web-sys) is a crate with many methods and structures available in a normal javascript application: `get_element_by_id`, `append_child`. The features listed are only the bare minimum of what we need currently.

## More code

Let's create a function to run our code on web.

```rust
#[cfg(target_arch = "wasm32")]
#[wasm_bindgen(start)]
pub fn run_web() -> Result<(), wasm_bindgen::JsValue> {
    console_error_panic_hook::set_once();
    run().unwrap_throw();

    Ok(())
}
```

This will set up `console_error_panic_hook` so that when our code panics we'll see it in the browser console. It will also call the other `run()` function.

## Wasm Pack

Now you can build a wgpu application with just wasm-bindgen, but I ran into some issues doing that. For one, you need to install wasm-bindgen on your computer as well as include it as a dependency. The version you install as a dependency **needs** to exactly match the version you installed. Otherwise, your build will fail.

To get around this shortcoming and to make the lives of everyone reading this easier, I opted to add [wasm-pack](https://drager.github.io/wasm-pack/) to the mix. Wasm-pack handles installing the correct version of wasm-bindgen for you, and it supports building for different types of web targets as well: browser, NodeJS, and bundlers such as webpack.

To use wasm-pack, first, you need to [install it](https://drager.github.io/wasm-pack/).

Once you've done that, we can use it to build our crate. If you only have one crate in your project, you can just use `wasm-pack build`. If you're using a workspace, you'll have to specify what crate you want to build. Imagine your crate is a directory called `game`. You would then use:

```bash
wasm-pack build game
```

Once wasm-pack is done building, you'll have a `pkg` directory in the same directory as your crate. This has all the javascript code needed to run the WASM code. You'd then import the WASM module in javascript:

```js
const init = await import('./pkg/game.js');
init().then(() => console.log("WASM Loaded"));
```

This site uses [Vuepress](https://vuepress.vuejs.org/), so I load the WASM in a Vue component. How you handle your WASM will depend on what you want to do. If you want to check out how I'm doing things, take a look at [this](https://github.com/sotrh/learn-wgpu/blob/master/docs/.vuepress/components/WasmExample.vue).

<div class="note">

If you intend to use your WASM module in a plain HTML website, you'll need to tell wasm-pack to target the web:

```bash
wasm-pack build --target web
```

You'll then need to run the WASM code in an ES6 Module:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn WGPU</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background-color: black;
        width: 100%;
        height: 100%;
      }
    </style>
  </head>

  <body id="wasm-example">
    <canvas id="canvas"></canvas>
    <script type="module">
      import init from "./pkg/tutorial1_window.js";
      init().then(() => {
        console.log("WASM Loaded");
      });
    </script>
  </body>
</html>
```

</div>

## Demo

Press the button below, and you will see the code running!

<WasmExample example="tutorial1_window"></WasmExample>

<AutoGithubLink/>
