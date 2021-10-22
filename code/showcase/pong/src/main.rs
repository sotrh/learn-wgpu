mod input;
mod render;
mod sound;
mod state;
mod system;
mod util;

use input::Input;
use system::System;

use winit::event::*;
use winit::event_loop::{ControlFlow, EventLoop};
use winit::window::{Fullscreen, WindowBuilder};

fn main() {
    let event_loop = EventLoop::new();
    let monitor = event_loop.primary_monitor().unwrap();
    let video_mode = monitor.video_modes().next().unwrap();
    let window = WindowBuilder::new()
        .with_visible(false)
        .with_title("Pong")
        .with_fullscreen(Some(Fullscreen::Exclusive(video_mode.clone())))
        .build(&event_loop)
        .unwrap();
    window.set_cursor_visible(false);

    #[cfg(target_arch = "wasm32")]
    {
        use winit::platform::web::WindowExtWebSys;
        console_log::init_with_level(log::Level::Info).expect("Could't initialize logger");
        std::panic::set_hook(Box::new(console_error_panic_hook::hook));
        web_sys::window()
            .and_then(|win| win.document())
            .and_then(|doc| doc.body())
            .and_then(|body| {
                body.append_child(&web_sys::Element::from(window.canvas())).ok()
            })
            .expect("Couldn't append cavas to document body.");
    }

    log::info!("Setup...");

    let mut render = pollster::block_on(render::Render::new(&window, &video_mode));
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

    log::info!("Sound...");

    let sound_system = sound::SoundSystem::new();
    let sound_pack = sound::SoundPack::new();
    let mut events = Vec::new();
    let mut input = Input::new();

    log::info!("Initializing Systems...");

    let mut menu_system = system::MenuSystem;
    let mut serving_system = system::ServingSystem::new();
    let mut play_system = system::PlaySystem;
    let ball_system = system::BallSystem;
    let mut game_over_system = system::GameOverSystem::new();

    let mut visiblity_system = system::VisibilitySystem;
    visiblity_system.start(&mut state);

    menu_system.start(&mut state);

    window.set_visible(true);

    log::info!("Event Loop...");

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
                event:
                    WindowEvent::KeyboardInput {
                        input:
                            KeyboardInput {
                                state: element_state,
                                virtual_keycode: Some(key),
                                ..
                            },
                        ..
                    },
                ..
            } => {
                let input_handled = match state.game_state {
                    state::GameState::Quiting => true,
                    _ => input.update(key, element_state),
                };
                if !input_handled {
                    process_input(element_state, key, control_flow);
                }
            }
            Event::RedrawRequested(_) => {
                for event in &events {
                    match event {
                        state::Event::FocusChanged | state::Event::ButtonPressed => {
                            sound_system.queue(sound_pack.bounce());
                        }
                        state::Event::BallBounce(_pos) => {
                            sound_system.queue(sound_pack.bounce());
                        }
                        state::Event::Score(_) => {
                            sound_system.queue(sound_pack.bounce());
                        }
                    }
                }
                events.clear();

                visiblity_system.update_state(&input, &mut state, &mut events);
                match state.game_state {
                    state::GameState::MainMenu => {
                        menu_system.update_state(&input, &mut state, &mut events);
                        if state.game_state == state::GameState::Serving {
                            serving_system.start(&mut state);
                        }
                    }
                    state::GameState::Serving => {
                        serving_system.update_state(&input, &mut state, &mut events);
                        play_system.update_state(&input, &mut state, &mut events);
                        if state.game_state == state::GameState::Playing {
                            play_system.start(&mut state);
                        }
                    }
                    state::GameState::Playing => {
                        ball_system.update_state(&input, &mut state, &mut events);
                        play_system.update_state(&input, &mut state, &mut events);
                        if state.game_state == state::GameState::Serving {
                            serving_system.start(&mut state);
                        } else if state.game_state == state::GameState::GameOver {
                            game_over_system.start(&mut state);
                        }
                    }
                    state::GameState::GameOver => {
                        game_over_system.update_state(&input, &mut state, &mut events);
                        if state.game_state == state::GameState::MainMenu {
                            menu_system.start(&mut state);
                        }
                    }
                    state::GameState::Quiting => {}
                }

                render.render_state(&state);
                if state.game_state != state::GameState::Quiting {
                    window.request_redraw();
                }
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
