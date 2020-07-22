mod camera;
mod data;
mod demo;
mod pipeline;
mod resource;

use demo::*;

use winit::window::*;
use winit::event::*;
use winit::dpi::*;
use winit::event_loop::{ControlFlow, EventLoop};

use futures::executor::block_on;

use std::time::Instant;

fn main() {
    env_logger::init();
    let event_loop = EventLoop::new();
    let window = WindowBuilder::new()
        .with_inner_size(PhysicalSize::new(800, 600))
        .with_title(env!("CARGO_PKG_NAME"))
        .build(&event_loop).unwrap();
    let mut demo = block_on(Demo::new(&window));
    let mut last_update = Instant::now();
    let mut is_focused = false;
    event_loop.run(move |event, _, control_flow| {
        *control_flow = if is_focused {
            ControlFlow::Poll
        } else if demo.is_running {
            ControlFlow::Wait
        } else {
            ControlFlow::Exit
        };
        match event {
            Event::MainEventsCleared => if is_focused {
                window.request_redraw();
            }
            Event::WindowEvent {
                ref event,
                window_id,
            } => if window_id == window.id() && !demo.input(event) {
                match event {
                    WindowEvent::Focused(f) => is_focused = *f,
                    WindowEvent::CloseRequested => *control_flow = ControlFlow::Exit,
                    WindowEvent::ScaleFactorChanged {
                        new_inner_size,
                        ..
                    } => demo.resize(**new_inner_size),
                    WindowEvent::Resized(new_size) => demo.resize(*new_size),
                    _ => {}
                }
            }
            Event::RedrawRequested(window_id) => if window_id == window.id() {
                let now = Instant::now();
                let dt = now - last_update;
                last_update = now;
                demo.update(dt);
                demo.render();
            }
            _ => {}
        }
    });
}
