#![macro_use]

use crate::state;

pub const PLAYER_SPEED: f32 = 1.5;
pub const BALL_SPEED: f32 = 1.0;

const BOUNCE_ANGLE: f32 = std::f32::consts::FRAC_PI_2;

pub fn calc_ball_velocity(ball: &state::Ball, player: &state::Player) -> cgmath::Vector2<f32> {
    let diff_y = ball.position.y - player.position.y;
    let ratio = diff_y / player.size.y * 0.5;
    cgmath::Vector2 {
        x: (BOUNCE_ANGLE * ratio).cos() * -player.position.x.signum(),
        y: (BOUNCE_ANGLE * ratio).sin(),
    } * BALL_SPEED
}

pub fn size_of_slice<T: Sized>(slice: &[T]) -> usize {
    std::mem::size_of::<T>() * slice.len()
}

#[macro_export]
macro_rules! any {
    ($x:expr, $($y:expr),+ $(,)?) => {
        {
            false $(|| $x == $y)+
        }
    };
}

#[cfg(test)]
mod test {
    #[allow(unused_imports)]
    use super::*;
    use crate::state;

    #[test]
    fn any_with_game_state() {
        let game_state = state::GameState::GameOver;
        assert!(any!(game_state, state::GameState::GameOver));

        assert!(!any!(game_state, state::GameState::MainMenu));
        assert!(!any!(game_state, state::GameState::Serving));
        assert!(!any!(game_state, state::GameState::Playing));
        assert!(!any!(game_state, state::GameState::Quiting));

        assert!(any!(
            game_state,
            state::GameState::MainMenu,
            state::GameState::Serving,
            state::GameState::Playing,
            state::GameState::GameOver,
            state::GameState::Quiting,
        ));
    }
}
