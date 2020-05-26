use crate::state::{self, GameState};
use crate::input;
use crate::util;

use cgmath::prelude::*;

pub trait System {
    #[allow(unused_variables)]
    fn start(&mut self, state: &mut state::State) {}
    fn update_state(
        &self, 
        input: &input::Input, 
        state: &mut state::State, 
        events: &mut Vec<state::Event>,
    );
}

pub struct VisibilitySystem;
impl System for VisibilitySystem {
    fn update_state(
        &self, 
        _input: &input::Input, 
        state: &mut state::State, 
        _events: &mut Vec<state::Event>,
    ) {
        let gs = state.game_state;

        let is_in_game = any!(gs, GameState::Serving, GameState::Playing, GameState::GameOver);
        state.ball.visible = is_in_game && gs != GameState::GameOver;
        state.player1.visible = is_in_game;
        state.player1_score.visible = is_in_game;
        state.player2.visible = is_in_game;
        state.player2_score.visible = is_in_game;

        state.title_text.visible = gs == GameState::MainMenu;
        state.play_button.visible = gs == GameState::MainMenu;
        state.quit_button.visible = gs == GameState::MainMenu;

        state.win_text.visible = gs == GameState::GameOver;
    }
}

#[derive(Debug)]
pub struct MenuSystem;

impl System for MenuSystem {
    fn start(&mut self, state: &mut state::State) {
        state.player1.score = 0;
        state.player2.score = 0;
        state.player1.position.y = 0.0;
        state.player2.position.y = 0.0;
        state.play_button.focused = true;
        state.quit_button.focused = false;
    }

    fn update_state(
        &self, 
        input: &input::Input,
        state: &mut state::State, 
        events: &mut Vec<state::Event>
    ) {

        if state.play_button.focused && input.ui_down_pressed() {
            events.push(state::Event::FocusChanged);
            state.play_button.focused = false;
            state.quit_button.focused = true;
        } else if state.quit_button.focused && input.ui_up_pressed() {
            events.push(state::Event::FocusChanged);
            state.quit_button.focused = false;
            state.play_button.focused = true;
        }

        if state.play_button.focused && input.enter_pressed {
            events.push(state::Event::ButtonPressed);
            state.game_state = state::GameState::Serving;
        } else if state.quit_button.focused && input.enter_pressed {
            events.push(state::Event::ButtonPressed);
            state.game_state = state::GameState::Quiting;
        }
    }
}

pub struct PlaySystem;
impl System for PlaySystem {

    fn update_state(
        &self, 
        input: &input::Input,
        state: &mut state::State,
         _events: &mut Vec<state::Event>,
    ) {
        // move the players
        if input.p1_up_pressed {
            state.player1.position.y += util::PLAYER_SPEED;
        }
        if input.p1_down_pressed {
            state.player1.position.y -= util::PLAYER_SPEED;
        }
        if input.p2_up_pressed {
            state.player2.position.y += util::PLAYER_SPEED;
        }
        if input.p2_down_pressed {
            state.player2.position.y -= util::PLAYER_SPEED;
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

        if state.player1.score > 2 || state.player2.score > 2 {
            state.game_state = state::GameState::GameOver;
        }
    }
}


pub struct BallSystem;
impl System for BallSystem {
    fn update_state(
        &self, 
        _input: &input::Input,
        state: &mut state::State, 
        events: &mut Vec<state::Event>,
    ) {
        // bounce the ball off the players
        if state.player1.contains(&state.ball) {
            events.push(state::Event::BallBounce(state.ball.position));
            state.ball.position.x -= state.ball.velocity.x - state.player1.size.x;
            state.ball.velocity = util::calc_ball_velocity(&state.ball, &state.player1);
        } else if state.player2.contains(&state.ball) {
            events.push(state::Event::BallBounce(state.ball.position));
            state.ball.position.x -= state.ball.velocity.x + state.player2.size.x;
            state.ball.velocity.x *= -state.player2.size.y;
            state.ball.velocity = util::calc_ball_velocity(&state.ball, &state.player2);
        }
        
        state.ball.position += state.ball.velocity;
        if state.ball.position.y > 1.0 {
            events.push(state::Event::BallBounce(state.ball.position));
            state.ball.position.y = 1.0;
            state.ball.velocity.y *= -1.0;
        } else if state.ball.position.y < -1.0 {
            events.push(state::Event::BallBounce(state.ball.position));
            state.ball.position.y = -1.0;
            state.ball.velocity.y *= -1.0;
        }

        if state.ball.position.x > 1.0 {
            state.player1.score += 1;
            state.game_state = state::GameState::Serving;
            events.push(state::Event::Score(0));
        } else if state.ball.position.x < -1.0 {
            state.player2.score += 1;
            state.game_state = state::GameState::Serving;
            events.push(state::Event::Score(1));
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
        let direction = state.ball.position.x.signum();
        state.ball.position = (0.0, 0.0).into();
        state.ball.velocity = cgmath::Vector2::unit_x() * direction * -util::BALL_SPEED;
        state.player1_score.text = format!("{}", state.player1.score);
        state.player2_score.text = format!("{}", state.player2.score);
    }

    fn update_state(
        &self,
        _input: &input::Input,
        state: &mut state::State, 
        _events: &mut Vec<state::Event>,
    ) {
        let current_time = std::time::Instant::now();
        let delta_time = current_time - self.last_time;
        if delta_time.as_secs_f32() > 2.0 {
            state.game_state = state::GameState::Playing;
        }
    }
}

pub struct GameOverSystem {
    last_time: std::time::Instant,
}

impl GameOverSystem {
    pub fn new() -> Self {
        Self { 
            last_time: std::time::Instant::now(),
        }
    }
}

impl System for GameOverSystem {
    fn start(&mut self, state: &mut state::State) {
        self.last_time = std::time::Instant::now();
        
        state.win_text.text = if state.player1.score > state.player2.score {
            String::from("Player1 wins!")
        } else {
            String::from("Player2 wins!")
        };
    }

    fn update_state(&self,
        _input: &input::Input,
        state: &mut state::State,
        _events: &mut Vec<state::Event>,
    ) {
        let current_time = std::time::Instant::now();
        let delta_time = current_time - self.last_time;
        if delta_time.as_secs_f32() > 1.0 {
            state.game_state = state::GameState::MainMenu;
        }
    }
}