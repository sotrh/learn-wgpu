
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
pub enum GameState {
    MainMenu,
    Serving,
    Playing,
    GameOver,
    Quiting,
}

pub struct State {
    pub ball: Ball,
    pub player1: Player,
    pub player2: Player,
    pub title_text: Text,
    pub play_button: Text,
    pub quit_button: Text,
    pub player1_score: Text,
    pub player2_score: Text,
    pub win_text: Text,
    pub game_state: GameState,
}

pub struct Ball {
    pub position: cgmath::Vector2<f32>,
    pub velocity: cgmath::Vector2<f32>,
    pub radius: f32,
    pub visible: bool,
}

pub struct Player {
    pub position: cgmath::Vector2<f32>,
    pub size: cgmath::Vector2<f32>,
    pub score: u32,
    pub visible: bool,
}

// I don't like giving state methods, but whatever
impl Player {
    pub fn contains(&self, ball: &Ball) -> bool {
        let radii = self.size * 0.5;
        let min = self.position - radii;
        let max = self.position + radii;
        ball.position.x > min.x && ball.position.y > min.y
        && ball.position.x < max.x && ball.position.y < max.y
    }
}

pub const UNBOUNDED_F32: f32 = std::f32::INFINITY;

#[derive(Debug)]
pub struct Text {
    pub position: cgmath::Vector2<f32>,
    pub bounds: cgmath::Vector2<f32>,
    pub color: cgmath::Vector4<f32>,
    pub text: String,
    pub size: f32,
    pub visible: bool,
    pub focused: bool,
    pub centered: bool,
}

impl Default for Text {
    fn default() -> Self {
        Self {
            position: (0.0, 0.0).into(),
            bounds: (UNBOUNDED_F32, UNBOUNDED_F32).into(),
            color: (1.0, 1.0, 1.0, 1.0).into(),
            text: String::new(),
            size: 16.0,
            visible: false,
            focused: false,
            centered: false,
        }
    }
}
