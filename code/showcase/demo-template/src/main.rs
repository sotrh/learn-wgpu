use std::{
    collections::{HashMap, HashSet},
    path::Path,
    sync::Arc,
};

use framework::{CameraBinder, Display, resources::load_string, winit::keyboard::KeyCode};
use glam::Vec2;

use text::{
    TextBox, TextCamera, TextJson, default_text_color,
    font::{BitmapFont, FontBinder, TextAlignment, TextBuffer, TextPipeline},
};

struct DemoTemplate {
    text_pipeline: TextPipeline,
    camera: TextCamera,
    camera_buffer: framework::CameraBuffer,
    camera_binding: framework::CameraBinding,
    ticks: usize,
    last_time: web_time::Instant,
    debug_mode: bool,
    text: TextJson,
    text_buffers: HashMap<String, TextBuffer>,
}

impl std::fmt::Debug for DemoTemplate {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TextDemo").finish()
    }
}

impl framework::Demo for DemoTemplate {
    async fn init(display: &Display, res_dir: &Path) -> anyhow::Result<Self> {
        let camera = TextCamera::new(display.width() as _, display.height() as _);
        let camera_binder = CameraBinder::new(&display.device);
        let (camera_buffer, camera_binding) = camera_binder.bind(&display.device, &camera, &camera);

        let dialog_dir = res_dir.join("dialog");
        let text_json = load_string(dbg!(dialog_dir.join("demo-template.json"))).await?;
        let mut text: TextJson = serde_json::from_str(&text_json)?;

        let char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\
            01234567891!@#$%^&*()_-+={[}],<>.?/'\"\\ \t\n\r";

        let fonts_dir = res_dir.join("fonts");
        let chars = HashSet::from_iter(char_set.chars());
        let padding = 4;

        let font_sampler = display.device.create_sampler(&wgpu::SamplerDescriptor {
            label: Some("font_sampler"),
            min_filter: wgpu::FilterMode::Linear,
            mag_filter: wgpu::FilterMode::Linear,
            ..Default::default()
        });
        let font_binder = FontBinder::new(&display.device);

        let text_pipeline = TextPipeline::new(
            &display.device,
            display.config.format,
            &font_binder,
            &camera_binder,
        );

        let mut fonts = HashMap::new();
        for (font_name, font_path) in &text.fonts {
            let font = Arc::new(
                BitmapFont::load(
                    &display.device,
                    &display.queue,
                    padding,
                    fonts_dir.join(font_path),
                    &chars,
                )
                .await?,
            );
            let binding = font_binder.bind_font(&display.device, font.as_ref(), &font_sampler);
            fonts.insert(font_name.clone(), (font, binding));
        }

        let mut text_buffers = HashMap::new();
        for (group_name, group) in text.text_groups.iter_mut() {
            for (name, text_box) in group.iter() {
                let font = fonts[group_name].0.clone();
                let buffer = text_pipeline.buffer_text(
                    &display.device,
                    font,
                    &font_binder,
                    &font_sampler,
                    &text_box.text,
                    text_box.position,
                    text_box.color,
                );

                text_buffers.insert(name.clone(), buffer);
            }

            let metrics_name = format!("{group_name}_metrics");
            let metrics_text = TextBox {
                font: group_name.clone(),
                text: "xx.xx mspt".to_owned().clone(),
                position: Vec2::new(10.0, -10.0),
                vertical: TextAlignment::End,
                color: default_text_color(),
                horizontal: Default::default(),
            };

            let font = fonts[group_name].0.clone();
            let buffer = text_pipeline.buffer_text(
                &display.device,
                font,
                &font_binder,
                &font_sampler,
                &metrics_text.text,
                metrics_text.position,
                metrics_text.color,
            );

            text_buffers.insert(metrics_name.clone(), buffer);
            group.insert(metrics_name, metrics_text);
        }

        Ok(DemoTemplate {
            text_pipeline,
            text,
            text_buffers,
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
            (KeyCode::Digit1, true) => self.debug_mode = !self.debug_mode,
            _ => {}
        }
    }

    fn resize(&mut self, display: &Display) {
        self.camera
            .resize(display.width() as _, display.height() as _);

        for (_, group) in self.text.text_groups.iter() {
            for (name, text) in group.iter() {
                self.text_buffers.get_mut(name).unwrap().update_layout(
                    display,
                    text.position,
                    text.horizontal,
                    text.vertical,
                );
            }
        }
    }

    fn update(&mut self, _display: &Display, _dt: std::time::Duration) {}

    fn render(&mut self, display: &mut Display) {
        let frame = match display.surface().get_current_texture() {
            wgpu::CurrentSurfaceTexture::Success(surface_texture) => surface_texture,
            wgpu::CurrentSurfaceTexture::Suboptimal(surface_texture) => surface_texture,
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

            let sans_metrics_key = "sans_metrics";

            let mspt = format!("{millis}.{micros} mspt");

            self.text_buffers
                .get_mut(sans_metrics_key)
                .unwrap()
                .update_text(&display.device, &display.queue, default_text_color(), &mspt);

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

            for name in self.text.text_groups["sans"].keys() {
                let buffer = &self.text_buffers[name];
                self.text_pipeline
                    .draw_text(buffer, &self.camera_binding, &mut pass);
            }
        }

        display.queue.submit([encoder.finish()]);
        display.queue.present(frame);
    }
}

fn main() {
    framework::run::<DemoTemplate>().unwrap()
}
