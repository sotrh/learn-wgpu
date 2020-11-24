use anyhow::*;
use futures::executor::block_on;
use imgui::*;
use imgui_wgpu::{Renderer, RendererConfig};
use std::time::Duration;

struct ImguiDemo {
    canvas: framework::ShaderCanvas,
    imgui: imgui::Context,
    platform: imgui_winit_support::WinitPlatform,
    renderer: Renderer,
    last_cursor: Option<MouseCursor>,
}

impl framework::Demo for ImguiDemo {
    fn init(display: &framework::Display) -> Result<Self, Error> {
        let canvas = framework::ShaderCanvasBuilder::new()
            .display_format(display.sc_desc.format)
            .build(&display.device)?;

        let mut imgui = imgui::Context::create();
        let mut platform = imgui_winit_support::WinitPlatform::init(&mut imgui);
        platform.attach_window(
            imgui.io_mut(),
            &display.window,
            imgui_winit_support::HiDpiMode::Default,
        );
        imgui.set_ini_filename(None);

        let hidpi_factor = display.window.scale_factor();
        let font_size = (13.0 * hidpi_factor) as f32;
        imgui.io_mut().font_global_scale = (1.0 / hidpi_factor) as f32;
        imgui.fonts().add_font(&[FontSource::DefaultFontData {
            config: Some(imgui::FontConfig {
                oversample_h: 1,
                pixel_snap_h: true,
                size_pixels: font_size,
                ..Default::default()
            }),
        }]);

        let renderer_config = RendererConfig {
            texture_format: display.sc_desc.format,
            ..Default::default()
        };
        let renderer = Renderer::new(&mut imgui, &display.device, &display.queue, renderer_config);

        Ok(Self {
            canvas,
            imgui,
            platform,
            renderer,
            last_cursor: None,
        })
    }

    fn process_mouse(&mut self, dx: f64, dy: f64) {
        self.canvas.delta_input(dx as f32, dy as f32);
    }

    fn resize(&mut self, _display: &framework::Display) {}

    fn update(&mut self, _display: &framework::Display, dt: Duration) {
        self.imgui.io_mut().update_delta_time(dt);
    }

    fn render(&mut self, display: &mut framework::Display) {
        // Build the UI
        self.platform
            .prepare_frame(self.imgui.io_mut(), &display.window)
            .expect("Failed to prepare frame!");
        let ui = self.imgui.frame();
        {
            let window = imgui::Window::new(im_str!("Hello Imgui from WGPU!"));
            window
                .size([300.0, 100.0], Condition::FirstUseEver)
                .build(&ui, || {
                    ui.text(im_str!("Hello world!"));
                    ui.text(im_str!("This is a demo of imgui-rs using imgui-wgpu!"));
                    ui.separator();
                    let mouse_pos = ui.io().mouse_pos;
                    ui.text(im_str!(
                        "Mouse Position: ({:.1}, {:.1})",
                        mouse_pos[0],
                        mouse_pos[1],
                    ));
                });
        }

        // Prepare to render
        let mut encoder = display.device.create_command_encoder(&Default::default());
        let output = match display.swap_chain.get_current_frame() {
            Ok(frame) => frame,
            Err(e) => {
                eprintln!("Error getting frame: {:?}", e);
                return;
            }
        }
        .output;

        // Render the scene
        self.canvas.render(
            &display.queue,
            &mut encoder,
            &output.view,
            display.sc_desc.width as f32,
            display.sc_desc.height as f32,
        );

        // Render the UI
        if self.last_cursor != ui.mouse_cursor() {
            self.last_cursor = ui.mouse_cursor();
            self.platform.prepare_render(&ui, &display.window);
        }

        let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            color_attachments: &[wgpu::RenderPassColorAttachmentDescriptor {
                attachment: &output.view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Load,
                    store: true,
                },
            }],
            depth_stencil_attachment: None,
        });
        self.renderer
            .render(ui.render(), &display.queue, &display.device, &mut pass)
            .expect("Failed to render UI!");
        drop(pass);

        display.queue.submit(Some(encoder.finish()));
    }
}

fn main() -> Result<()> {
    block_on(framework::run::<ImguiDemo>())?;
    Ok(())
}
