use anyhow::{Error, Result};

struct Snow {}

impl framework::Demo for Snow {
    fn init(display: &framework::Display) -> Result<Self, Error> {
        Ok(Self {})
    }

    fn process_mouse(&mut self, dx: f64, dy: f64) {}

    fn resize(&mut self, display: &framework::Display) {}

    fn update(&mut self, display: &framework::Display, dt: std::time::Duration) {}

    fn render(&mut self, display: &mut framework::Display) {}
}

fn main() {
    framework::run::<Snow>();
}
