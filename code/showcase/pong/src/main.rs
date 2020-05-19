mod render;
mod state;
mod util;
mod system;

use system::System;

use winit::event::*;
use winit::dpi::LogicalSize;
use winit::window::WindowBuilder;
use winit::event_loop::{EventLoop, ControlFlow};
use futures::executor::block_on;


fn main() {
    let event_loop = EventLoop::new();
    let window = WindowBuilder::new()
        .with_title("Pong")
        .with_inner_size(LogicalSize::<f64>::from((800, 600)))
        .build(&event_loop).unwrap();

    let mut render = block_on(render::Render::new(&window));
    let mut state = state::State {
        ball: state::Ball {
            position: (0.0, 0.0).into(),
            velocity: (0.0, 0.0).into(),
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
        title_text: state::Text {
            position: (20.0, 20.0).into(),
            color: (1.0, 1.0, 1.0, 1.0).into(),
            text: String::from("PONG"),
            size: 64.0,
            ..Default::default()
        },
        play_button: state::Text {
            position: (40.0, 100.0).into(),
            color: (1.0, 1.0, 1.0, 1.0).into(),
            text: String::from("Play"),
            size: 32.0,
            centered: false,
            ..Default::default()
        },
        quit_button: state::Text {
            position: (40.0, 160.0).into(),
            color: (1.0, 1.0, 1.0, 1.0).into(),
            text: String::from("Quit"),
            size: 32.0,
            ..Default::default()
        },
        player1_score: state::Text {
            position: (render.width() * 0.25, 20.0).into(),
            color: (1.0, 1.0, 1.0, 1.0).into(),
            text: String::from("0"),
            size: 32.0,
            ..Default::default()
        },
        player2_score: state::Text {
            position: (render.width() * 0.75, 20.0).into(),
            color: (1.0, 1.0, 1.0, 1.0).into(),
            text: String::from("0"),
            size: 32.0,
            ..Default::default()
        },
        win_text: state::Text {
            position: (render.width() * 0.5, render.height() * 0.5).into(),
            bounds: (render.width(), state::UNBOUNDED_F32).into(),
            size: 32.0,
            centered: true,
            ..Default::default()
        },
        game_state: state::GameState::MainMenu,
    };

    let mut play_system = system::PlaySystem::new();
    let mut menu_system = system::MenuSystem::new();
    let mut serving_system = system::ServingSystem::new();
    let mut game_over_system = system::GameOverSystem::new();

    menu_system.start(&mut state);

    event_loop.run(move |event, _, control_flow| {
        *control_flow = if state.game_state == state::GameState::Quiting {
            ControlFlow::Exit
        } else {
            ControlFlow::Poll
        };

        match event {
            Event::WindowEvent {
                event: WindowEvent::CloseRequested,
                ..
            } => {
                state.game_state = state::GameState::Quiting;
            }
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
                let input_handled = match state.game_state {
                    state::GameState::MainMenu => {
                        menu_system.process_input(keycode, pressed)
                    },
                    state::GameState::Serving => {
                        serving_system.process_input(keycode, pressed)
                    },
                    state::GameState::Playing => {
                        play_system.process_input(keycode, pressed)
                    },
                    state::GameState::GameOver => {
                        game_over_system.process_input(keycode, pressed)
                    },
                    state::GameState::Quiting => true,
                };
                if !input_handled {
                    process_input(element_state, keycode, control_flow);
                }
            }
            Event::RedrawRequested(_) => {
                match state.game_state {
                    state::GameState::MainMenu => {
                        menu_system.update_state(&mut state);
                        if state.game_state == state::GameState::Serving {
                            serving_system.start(&mut state);
                        }
                    },
                    state::GameState::Serving => {
                        serving_system.update_state(&mut state);
                        if state.game_state == state::GameState::Playing {
                            play_system.start(&mut state);
                        }
                    },
                    state::GameState::Playing => {
                        play_system.update_state(&mut state);
                        if state.game_state == state::GameState::Serving {
                            serving_system.start(&mut state);
                        } else if state.game_state == state::GameState::GameOver {
                            game_over_system.start(&mut state);
                        }
                    },
                    state::GameState::GameOver => {
                        game_over_system.update_state(&mut state);
                        if state.game_state == state::GameState::MainMenu {
                            menu_system.start(&mut state);
                        }
                    },
                    state::GameState::Quiting => {},
                }

                render.render_state(&state);
                window.request_redraw();
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