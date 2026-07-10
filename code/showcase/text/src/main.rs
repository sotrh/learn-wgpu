mod font;

use std::{collections::HashSet, path::Path, sync::Arc};

use framework::{
    Camera, CameraBinder, Display, Projection, resources::load_string, winit::keyboard::KeyCode,
};
use glam::{Vec2, Vec4, vec2, vec4};

use crate::font::{BitmapFont, FontBinder, TextPipeline};

pub struct TextCamera {
    width: f32,
    height: f32,
}

impl TextCamera {
    pub fn new(width: f32, height: f32) -> Self {
        Self { width, height }
    }

    pub fn resize(&mut self, width: f32, height: f32) {
        self.width = width;
        self.height = height;
    }
}

impl Camera for TextCamera {
    fn view(&self) -> glam::Mat4 {
        glam::Mat4::IDENTITY
    }
}

impl Projection for TextCamera {
    fn proj(&self) -> glam::Mat4 {
        glam::Mat4::orthographic_rh(0.0, self.width, 0.0, self.height, 0.0, 1.0)
    }
}

struct TextDemo {
    text_pipeline: TextPipeline,
    font_index: u32,
    sans_binding: font::FontBinding,
    medieval_binding: font::FontBinding,
    sans_text: font::TextBuffer,
    medieval_text: font::TextBuffer,
    camera: TextCamera,
    camera_buffer: framework::CameraBuffer,
    camera_binding: framework::CameraBinding,
    metrics_text: font::TextBuffer,
    ticks: usize,
    last_time: web_time::Instant,
    debug_mode: bool,
}

impl TextDemo {
    fn current_font(&self) -> &font::FontBinding {
        match self.font_index {
            0 => &self.sans_binding,
            _ => &self.medieval_binding,
        }
    }

    fn cycle_font(&mut self) {
        self.font_index += 1;
        if self.font_index >= 2 {
            self.font_index = 0;
        }
    }
}

impl std::fmt::Debug for TextDemo {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TextDemo").finish()
    }
}

impl framework::Demo for TextDemo {
    async fn init(display: &Display, res_dir: &Path) -> anyhow::Result<Self> {
        let camera = TextCamera::new(display.width() as _, display.height() as _);
        let camera_binder = CameraBinder::new(&display.device);
        let (camera_buffer, camera_binding) = camera_binder.bind(&display.device, &camera, &camera);

        let dialog_dir = res_dir.join("dialog");
        let dialog = load_string(dbg!(dialog_dir.join("text-demo.txt"))).await?;

        let char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567891!@#$%^&*()_-+={[}],<>.?/'\"\\ \t\n\r";

        let fonts_dir = res_dir.join("fonts");
        let chars = HashSet::from_iter(char_set.chars());
        let padding = 4;
        let sans_font = Arc::new(
            BitmapFont::load(
                &display.device,
                &display.queue,
                padding,
                fonts_dir.join("Open_Sans/OpenSans-VariableFont_wdth,wght.ttf"),
                &chars,
            )
            .await?,
        );
        let medieval_font = Arc::new(
            BitmapFont::load(
                &display.device,
                &display.queue,
                padding,
                fonts_dir.join("MedievalSharp/MedievalSharp-Regular.ttf"),
                &chars,
            )
            .await?,
        );

        let font_sampler = display.device.create_sampler(&wgpu::SamplerDescriptor {
            label: Some("font_sampler"),
            min_filter: wgpu::FilterMode::Linear,
            mag_filter: wgpu::FilterMode::Linear,
            ..Default::default()
        });
        let font_binder = FontBinder::new(&display.device);
        let sans_binding = font_binder.bind_font(&display.device, &sans_font, &font_sampler);
        let medieval_binding =
            font_binder.bind_font(&display.device, &medieval_font, &font_sampler);

        let text_pipeline = TextPipeline::new(
            &display.device,
            display.config.format,
            &font_binder,
            &camera_binder,
        );

        let position = vec2(10.0, 52.0);

        let sans_text = text_pipeline.buffer_text(
            &display.device,
            sans_font.clone(),
            &font_binder,
            &font_sampler,
            &dialog,
            position.clone(),
            vec4(0.8, 0.9, 0.7, 1.0),
        );
        let medieval_text = text_pipeline.buffer_text(
            &display.device,
            medieval_font.clone(),
            &font_binder,
            &font_sampler,
            &dialog,
            position,
            vec4(0.8, 0.9, 0.7, 1.0),
        );

        let metrics_text = text_pipeline.buffer_text(
            &display.device,
            sans_font.clone(),
            &font_binder,
            &font_sampler,
            "xxxx.xx mspt",
            Vec2::ZERO,
            Vec4::ONE,
        );

        Ok(TextDemo {
            text_pipeline,
            font_index: 0,
            sans_binding,
            medieval_binding,
            sans_text,
            medieval_text,
            metrics_text,
            camera,
            camera_buffer,
            camera_binding,
            ticks: 0,
            last_time: web_time::Instant::now(),
            debug_mode: false,
        })
    }

    fn handle_keyboard(&mut self, key: KeyCode, pressed: bool) {
        match (key, pressed) {
            (KeyCode::Space, true) => self.cycle_font(),
            (KeyCode::Digit1, true) => self.debug_mode = !self.debug_mode,
            _ => {}
        }
    }

    fn resize(&mut self, display: &Display) {
        self.camera
            .resize(display.width() as _, display.height() as _);

        self.metrics_text
            .update_position(&display.queue, vec2(10.0, display.height() as f32 - 42.0));
    }

    fn update(&mut self, _display: &Display, _dt: std::time::Duration) {}

    fn render(&mut self, display: &mut Display) {
        let frame = match display.surface().get_current_texture() {
            wgpu::CurrentSurfaceTexture::Success(surface_texture) => surface_texture,
            wgpu::CurrentSurfaceTexture::Suboptimal(surface_texture) => {
                surface_texture
            }
            wgpu::CurrentSurfaceTexture::Timeout
            | wgpu::CurrentSurfaceTexture::Occluded
            | wgpu::CurrentSurfaceTexture::Validation => return,
            wgpu::CurrentSurfaceTexture::Outdated => {
                display.configure();
                return;
            }
            wgpu::CurrentSurfaceTexture::Lost => panic!("Surface lost"),
        };

        let dt = self.last_time.elapsed();
        if dt >= web_time::Duration::from_secs(1) {
            let dti = dt / self.ticks as u32;

            let millis = dti.as_micros() / 1000;
            let micros = dti.as_micros() % 1000;

            self.metrics_text.update_text(
                &display.device,
                &display.queue,
                vec4(1.0, 1.0, 1.0, 1.0),
                &format!("{millis}.{micros} mspt"),
            );

            self.last_time = web_time::Instant::now();
            self.ticks = 0;
        }

        self.ticks += 1;

        let view = frame.texture.create_view(&Default::default());

        let mut encoder = display.device.create_command_encoder(&Default::default());

        self.camera_buffer.update(&self.camera, &self.camera);
        self.camera_buffer.flush(&display.queue);

        {
            let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("Text pass"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    depth_slice: None,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Clear(wgpu::Color::BLACK),
                        store: wgpu::StoreOp::Store,
                    },
                })],
                depth_stencil_attachment: None,
                timestamp_writes: None,
                occlusion_query_set: None,
                multiview_mask: None,
            });

            if self.debug_mode {
                self.text_pipeline
                    .debug_glyph_texture(&self.current_font(), &mut pass);
            } else {
                let text = if self.font_index == 0 {
                    &self.sans_text
                } else {
                    &self.medieval_text
                };

                self.text_pipeline
                    .draw_text(text, &self.camera_binding, &mut pass);

                self.text_pipeline
                    .draw_text(&self.metrics_text, &self.camera_binding, &mut pass);
            }
        }

        display.queue.submit([encoder.finish()]);
        display.queue.present(frame);
    }
}

fn main() {
    framework::run::<TextDemo>().unwrap()
}
