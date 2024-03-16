use winit::{event::ElementState, keyboard::KeyCode};

#[derive(Debug, Default)]
pub struct Input {
    pub p1_up_pressed: bool,
    pub p1_down_pressed: bool,
    pub p2_up_pressed: bool,
    pub p2_down_pressed: bool,
    pub enter_pressed: bool,
}

impl Input {
    pub fn new() -> Self {
        Default::default()
    }

    pub fn update(&mut self, key: KeyCode, state: ElementState) -> bool {
        let pressed = state == ElementState::Pressed;
        match key {
            KeyCode::ArrowUp => {
                self.p2_up_pressed = pressed;
                true
            }
            KeyCode::ArrowDown => {
                self.p2_down_pressed = pressed;
                true
            }
            KeyCode::KeyW => {
                self.p1_up_pressed = pressed;
                true
            }
            KeyCode::KeyS => {
                self.p1_down_pressed = pressed;
                true
            }
            KeyCode::Enter => {
                self.enter_pressed = pressed;
                true
            }
            _ => false,
        }
    }

    pub fn ui_up_pressed(&self) -> bool {
        self.p1_up_pressed || self.p2_up_pressed
    }

    pub fn ui_down_pressed(&self) -> bool {
        self.p1_down_pressed || self.p2_down_pressed
    }
}
