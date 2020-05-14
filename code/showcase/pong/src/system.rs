use winit::event::*;

use crate::state;
use crate::util;

pub trait System {
    fn process_input(&mut self, keycode: VirtualKeyCode, pressed: bool) -> bool;
    fn update_state(&self, state: &mut state::State);
}

pub struct MovementSystem {
    player1_up_pressed: bool,
    player1_down_pressed: bool,
    player2_up_pressed: bool,
    player2_down_pressed: bool,
}

impl MovementSystem {
    pub fn new() -> Self {
        Self {
            player1_up_pressed: false,
            player1_down_pressed: false,
            player2_up_pressed: false,
            player2_down_pressed: false,
        }
    }
}

impl System for MovementSystem {
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

    fn update_state(&self, state: &mut state::State) {
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
        }
        if state.player1.position.y < -1.0 {
            state.player1.position.y = -1.0;
        }
        if state.player2.position.y > 1.0 {
            state.player2.position.y = 1.0;
        }
        if state.player2.position.y < -1.0 {
            state.player2.position.y = -1.0;
        }

        state.ball.position += state.ball.velocity;
        if state.ball.position.y > 1.0 {
            state.ball.position.y = 1.0;
            state.ball.velocity.y *= -1.0;
        }
        if state.ball.position.y < -1.0 {
            state.ball.position.y = -1.0;
            state.ball.velocity.y *= -1.0;
        }
        if state.ball.position.x > 1.0 {
            state.ball.position.set(0.0, 0.0);
            state.ball.velocity.x *= -1.0;
        }
        if state.ball.position.x < -1.0 {
            state.ball.position.x = 0.0;
            state.ball.velocity.x *= -1.0;
        }

        // bounce the ball off the players
        if state.player1.contains(&state.ball) {
            state.ball.position.x -= state.ball.velocity.x + state.player1.size.x;
            state.ball.velocity.x *= -1.0;
        } else if state.player2.contains(&state.ball) {
            state.ball.position.x -= state.ball.velocity.x + state.player2.size.x;
            state.ball.velocity.x *= -1.0;
        }
    }
}