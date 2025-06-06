#[derive(Debug)]
struct MousePicking {}

impl framework::Demo for MousePicking {
    fn init(display: &framework::Display) -> anyhow::Result<Self> {
        Ok(Self {})
    }

    fn process_mouse(&mut self, dx: f64, dy: f64) {}

    fn process_keyboard(&mut self, key: winit::keyboard::KeyCode, pressed: bool) {}

    fn resize(&mut self, display: &framework::Display) {}

    fn update(&mut self, display: &framework::Display, dt: std::time::Duration) {}

    fn render(&mut self, display: &mut framework::Display) {}
}

pub fn run() -> anyhow::Result<()> {
    framework::run::<MousePicking>()?;
    Ok(())
}
