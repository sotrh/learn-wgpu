mod render;
mod state;
mod util;
mod system;

use system::System;

use winit::event::*;
use winit::event_loop::{EventLoop, ControlFlow};
use futures::executor::block_on;


fn main() {
    let event_loop = EventLoop::new();
    let mut render: render::Render = block_on(render::Render::new(&event_loop));
    let mut state = state::State {
        ball: state::Ball {
            position: (0.0, 0.0).into(),
            velocity: util::random_vec2_scaled(0.025),
            radius: 0.05,
            visible: true,
        },
        player1: state::Player {
            position: (-0.8, 0.0).into(),
            size: (0.05, 0.4).into(),
            score: 0,
            visible: true,
        },
        player2: state::Player {
            position: (0.8, 0.0).into(),
            size: (0.05, 0.4).into(),
            score: 0,
            visible: true,
        },
        game_state: state::GameState::MainMenu,
    };

    let mut movement_system = system::MovementSystem::new();

    event_loop.run(move |event, _, control_flow| {
        *control_flow = if state.game_state == state::GameState::Quiting {
            ControlFlow::Exit
        } else {
            ControlFlow::Poll
        };

        match event {
            Event::WindowEvent {
                event: WindowEvent::KeyboardInput {
                    input: KeyboardInput {
                        state: element_state,
                        virtual_keycode: Some(keycode),
                        ..
                    },
                    ..
                },
                ..
            } => {
                let pressed = element_state == ElementState::Pressed;
                if !movement_system.process_input(keycode, pressed) {
                    process_input(element_state, keycode, control_flow);
                }
            }
            Event::RedrawRequested(_) => {
                movement_system.update_state(&mut state);
                render.render_state(&state);
            }
            _ => {}
        }
    });
}


fn process_input(
    element_state: ElementState,
    keycode: VirtualKeyCode,
    control_flow: &mut ControlFlow, 
) {
    match (keycode, element_state) {
        (VirtualKeyCode::Escape, ElementState::Pressed) => {
            *control_flow = ControlFlow::Exit;
        }
        _ => {}
    }
}