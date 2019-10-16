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