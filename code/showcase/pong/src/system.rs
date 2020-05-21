use winit::event::*;

use crate::state;
use crate::util;

pub trait System {
    fn start(&mut self, state: &mut state::State);
    fn process_input(&mut self, keycode: VirtualKeyCode, pressed: bool) -> bool;
    fn update_state(&self, state: &mut state::State, events: &mut Vec<state::Event>);
}

#[derive(Debug)]
pub struct MenuSystem {
    enter_pressed: bool,
    down_pressed: bool,
    up_pressed: bool,
}

impl MenuSystem {
    pub fn new() -> Self {
        Self {
            enter_pressed: false,
            down_pressed: false,
            up_pressed: false,
        }
    }
}

impl System for MenuSystem {
    fn start(&mut self, state: &mut state::State) {
        self.enter_pressed = false;
        self.down_pressed = false;
        self.up_pressed = false;
        state.player1.score = 0;
        state.player2.score = 0;
        state.ball.visible = false;
        state.player1.visible = false;
        state.player2.visible = false;
        state.title_text.visible = true;
        state.play_button.visible = true;
        state.play_button.focused = true;
        state.quit_button.visible = true;
        state.player1_score.visible = false;
        state.player2_score.visible = false;
        state.win_text.visible = false;
    }

    fn process_input(&mut self, keycode: VirtualKeyCode, pressed: bool) -> bool {
        match keycode {
            VirtualKeyCode::Up | VirtualKeyCode::W => {
                self.up_pressed = pressed;
                true
            }
            VirtualKeyCode::Down | VirtualKeyCode::S => {
                self.down_pressed = pressed;
                true
            }
            VirtualKeyCode::Return 
            | VirtualKeyCode::NumpadEnter
            | VirtualKeyCode::Space => {
                self.enter_pressed = pressed;
                true
            }
            _ => false,
        }
    }   

    fn update_state(&self, state: &mut state::State, events: &mut Vec<state::Event>) {

        if state.play_button.focused && self.down_pressed {
            events.push(state::Event::FocusChanged);
            state.play_button.focused = false;
            state.quit_button.focused = true;
        } else if state.quit_button.focused && self.up_pressed {
            events.push(state::Event::FocusChanged);
            state.quit_button.focused = false;
            state.play_button.focused = true;
        }

        if state.play_button.focused && self.enter_pressed {
            events.push(state::Event::ButtonPressed);
            state.game_state = state::GameState::Serving;
        } else if state.quit_button.focused && self.enter_pressed {
            events.push(state::Event::ButtonPressed);
            state.game_state = state::GameState::Quiting;
        }
    }
}

pub struct PlaySystem {
    player1_up_pressed: bool,
    player1_down_pressed: bool,
    player2_up_pressed: bool,
    player2_down_pressed: bool,
}

impl PlaySystem {
    pub fn new() -> Self {
        Self {
            player1_up_pressed: false,
            player1_down_pressed: false,
            player2_up_pressed: false,
            player2_down_pressed: false,
        }
    }
}

impl System for PlaySystem {
    fn start(&mut self, state: &mut state::State) {
        self.player1_up_pressed = false;
        self.player1_down_pressed = false;
        self.player2_up_pressed = false;
        self.player2_down_pressed = false;
        state.ball.visible = true;
        state.player1.visible = true;
        state.player2.visible = true;
        state.title_text.visible = false;
        state.play_button.visible = false;
        state.quit_button.visible = false;
        state.player1_score.visible = true;
        state.player2_score.visible = true;
    }

    fn process_input(&mut self, keycode: VirtualKeyCode, pressed: bool) -> bool {
        match keycode {
            VirtualKeyCode::W => {
                self.player1_up_pressed = pressed;
                true
            }
            VirtualKeyCode::S => {
                self.player1_down_pressed = pressed;
                true
            }
            VirtualKeyCode::Up => {
                self.player2_up_pressed = pressed;
                true
            }
            VirtualKeyCode::Down => {
                self.player2_down_pressed = pressed;
                true
            }
            _ => false,
        }
    }

    fn update_state(&self, state: &mut state::State, events: &mut Vec<state::Event>) {
        // move the players
        if self.player1_up_pressed {
            state.player1.position.y += 0.025;
        }
        if self.player1_down_pressed {
            state.player1.position.y -= 0.025;
        }
        if self.player2_up_pressed {
            state.player2.position.y += 0.025;
        }
        if self.player2_down_pressed {
            state.player2.position.y -= 0.025;
        }

        // normalize players
        if state.player1.position.y > 1.0 {
            state.player1.position.y = 1.0;
        } else if state.player1.position.y < -1.0 {
            state.player1.position.y = -1.0;
        }
        if state.player2.position.y > 1.0 {
            state.player2.position.y = 1.0;
        } else if state.player2.position.y < -1.0 {
            state.player2.position.y = -1.0;
        }

        state.ball.position += state.ball.velocity;
        if state.ball.position.y > 1.0 {
            state.ball.position.y = 1.0;
            state.ball.velocity.y *= -1.0;
        } else if state.ball.position.y < -1.0 {
            state.ball.position.y = -1.0;
            state.ball.velocity.y *= -1.0;
        }

        if state.ball.position.x > 1.0 {
            state.player1.score += 1;
            state.game_state = state::GameState::Serving;
        } else if state.ball.position.x < -1.0 {
            state.player2.score += 1;
            state.game_state = state::GameState::Serving;
        }

        if state.player1.score > 2 || state.player2.score > 2 {
            state.game_state = state::GameState::GameOver;
        }

        // bounce the ball off the players
        if state.player1.contains(&state.ball) {
            events.push(state::Event::BallBounce(state.ball.position));
            state.ball.position.x -= state.ball.velocity.x - state.player1.size.x;
            state.ball.velocity.x *= -1.0;
        } else if state.player2.contains(&state.ball) {
            events.push(state::Event::BallBounce(state.ball.position));
            state.ball.position.x -= state.ball.velocity.x + state.player2.size.x;
            state.ball.velocity.x *= -1.0;
        }
    }
}


pub struct ServingSystem {
    last_time: std::time::Instant,
}

impl ServingSystem {
    pub fn new() -> Self {
        Self {
            last_time: std::time::Instant::now(),
        }
    }
}

impl System for ServingSystem {
    fn start(&mut self, state: &mut state::State) {
        self.last_time = std::time::Instant::now();
        state.ball.visible = true;
        state.player1.visible = true;
        state.player2.visible = true;
        state.title_text.visible = false;
        state.play_button.visible = false;
        state.quit_button.visible = false;
        state.ball.position = (0.0, 0.0).into();
        state.ball.velocity = util::random_vec2_scaled(0.025);
        state.player1_score.visible = true;
        state.player2_score.visible = true;
        state.player1_score.text = format!("{}", state.player1.score);
        state.player2_score.text = format!("{}", state.player2.score);
    }

    fn process_input(&mut self, _keycode: VirtualKeyCode, _pressed: bool) -> bool {
        false
    }

    fn update_state(&self, state: &mut state::State, _events: &mut Vec<state::Event>) {
        let current_time = std::time::Instant::now();
        let delta_time = current_time - self.last_time;
        if delta_time.as_secs_f32() > 1.0 {
            state.game_state = state::GameState::Playing;
        }
    }
}

pub struct GameOverSystem {
    last_time: std::time::Instant,
    key_pressed: bool,
}

impl GameOverSystem {
    pub fn new() -> Self {
        Self { 
            last_time: std::time::Instant::now(),
            key_pressed: false,
        }
    }
}

impl System for GameOverSystem {
    fn start(&mut self, state: &mut state::State) {
        self.last_time = std::time::Instant::now();
        self.key_pressed = false;
        state.ball.visible = false;
        
        state.win_text.text = if state.player1.score > state.player2.score {
            String::from("Player1 wins!")
        } else {
            String::from("Player2 wins!")
        };
        state.win_text.visible = true;
    }

    fn process_input(&mut self, _keycode: VirtualKeyCode, _pressed: bool) -> bool {
        false
    }

    fn update_state(&self, state: &mut state::State, _events: &mut Vec<state::Event>) {
        let current_time = std::time::Instant::now();
        let delta_time = current_time - self.last_time;
        if delta_time.as_secs_f32() > 1.0 {
            state.game_state = state::GameState::MainMenu;
        }
    }
}