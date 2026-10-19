use std::{
    collections::{HashMap, HashSet}, f32::consts::{FRAC_PI_2, PI}, path::Path, sync::Arc,
};

use anyhow::{Context, bail};
use framework::{CameraBinder, Display, resources::load_string, winit::keyboard::KeyCode};
use glam::Vec2;

use gltf::accessor::{DataType, Dimensions};
use gltf_loader_buffers::VertexBufferLayout;
use text::{
    TextBox, TextCamera, TextJson, default_text_color,
    font::{BitmapFont, FontBinder, TextAlignment, TextBuffer, TextPipeline},
};
use wgpu::util::{BufferInitDescriptor, DeviceExt};

struct DemoTemplate {
    debug_mode: bool,
    last_time: web_time::Instant,
    ticks: usize,
    
    // 3d camera
    projection: framework::PerspectiveProjection,
    camera: framework::FpvCamera,
    camera_buffer: framework::CameraBuffer,
    camera_binding: framework::CameraBinding,
    camera_control: framework::FpvCameraController,

    // Text drawing
    text_pipeline: TextPipeline,
    text: TextJson,
    text_buffers: HashMap<String, TextBuffer>,
    text_camera: TextCamera,
    text_camera_buffer: framework::CameraBuffer,
    text_camera_binding: framework::CameraBinding,
    
    // Mesh drawing
    model_pipeline: wgpu::RenderPipeline,
    index_buffer: Option<(wgpu::IndexFormat, wgpu::Buffer, u32)>,
    vertex_buffer: wgpu::Buffer,
    vertex_count: u32,
}

impl std::fmt::Debug for DemoTemplate {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TextDemo").finish()
    }
}

impl framework::Demo for DemoTemplate {
    async fn init(display: &Display, res_dir: &Path) -> anyhow::Result<Self> {
        let text_camera = TextCamera::new(display.width() as _, display.height() as _);
        let camera_binder = CameraBinder::new(&display.device);
        let (text_camera_buffer, text_camera_binding) =
            camera_binder.bind(&display.device, &text_camera, &text_camera);

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

        let bytes = framework::resources::load_binary(res_dir.join("models/triangle.gltf")).await?;
        let (doc, buffers, _) = gltf::import_slice(&bytes)?;

        let mesh = doc.meshes().next().context("No mesh")?;

        let prim = mesh.primitives().next().context("No primitive")?;

        // TODO: prim.material()

        let prim_topology = match prim.mode() {
            gltf::mesh::Mode::Points => wgpu::PrimitiveTopology::PointList,
            gltf::mesh::Mode::Lines => wgpu::PrimitiveTopology::LineList,
            gltf::mesh::Mode::LineStrip => wgpu::PrimitiveTopology::LineList,
            gltf::mesh::Mode::Triangles => wgpu::PrimitiveTopology::TriangleList,
            gltf::mesh::Mode::TriangleStrip => wgpu::PrimitiveTopology::TriangleStrip,

            // In a real model viewer, you'd want to convert an unsupported prefab
            // mode into a supported mode via compute shaders or the like
            mode => bail!("Unsupported primitive mode {mode:?}"),
        };

        let (_semantic, acc) = prim.attributes().next().context("No attributes")?;

        let view = acc.view().context("No view")?;

        let start = view.offset();
        let end = start + view.length();

        let buffer_data = &buffers[view.buffer().index()].0;
        let buffer_slice = &buffer_data[start..end];

        println!("vertex buffer slice: {:?}", bytemuck::cast_slice::<_, glam::Vec3>(buffer_slice));

        let vertex_buffer = display.device.create_buffer_init(&BufferInitDescriptor {
            label: Some("vertex_buffer"),
            contents: buffer_slice,
            usage: wgpu::BufferUsages::VERTEX | wgpu::BufferUsages::COPY_DST,
        });

        // You could convert unsupported attributes, but the included model file only uses
        // vec3<f32> for it's positions so it should be fine.
        let format = match (acc.dimensions(), acc.data_type()) {
            (Dimensions::Vec3, DataType::F32) => wgpu::VertexFormat::Float32x3,
            (dim, ty) => bail!("Unsupported attribute {dim:?} {ty:?} "),
        };

        let vb_layout = VertexBufferLayout {
            array_stride: view.stride().unwrap_or(acc.size() as _) as _,
            attributes: vec![wgpu::VertexAttribute {
                format,
                offset: acc.offset() as _,
                shader_location: 0,
            }],
        };

        let vertex_count = acc.count() as u32;

        let index_buffer = if let Some(indices) = prim.indices() {
            let format = match (indices.dimensions(), indices.data_type()) {
                (Dimensions::Scalar, DataType::U16) => wgpu::IndexFormat::Uint16,
                (Dimensions::Scalar, DataType::U32) => wgpu::IndexFormat::Uint32,
                (dim, ty) => bail!("Unsupported index format: {dim:?} {ty:?}"),
            };

            let view = indices.view().context("Sparse accessors not supported")?;

            // Including the indices offset as the index buffer for convenience. You
            // could store the offset and use it when you get the buffer slice instead.

            let start = view.offset() + indices.offset();
            let end = start + view.length();

            println!("start: {start}");
            println!("end: {end}");

            let buffer_data = &buffers[view.buffer().index()].0;
            let index_buffer_slice = &buffer_data[start..end];

            println!("buffer_slice: {format:?} {:?}", bytemuck::cast_slice::<_, u16>(index_buffer_slice));

            let index_buffer = display.device.create_buffer_init(&BufferInitDescriptor {
                label: Some("index_buffer"),
                contents: &index_buffer_slice,
                usage: wgpu::BufferUsages::INDEX | wgpu::BufferUsages::COPY_DST,
            });

            println!("index count: {}", indices.count());
            println!("index buffer size: {}", index_buffer.size());

            Some((format, index_buffer, (indices.count() as u32)))
        } else {
            None
        };

        let projection = framework::PerspectiveProjection::new(
            display.width(),
            display.height(),
            PI * 0.25,
            0.1,
            100.0,
        );
        let camera = framework::FpvCamera::new(glam::vec3(0.0, 0.0, 3.0), -FRAC_PI_2, 0.0);
        let (camera_buffer, camera_binding) =
            camera_binder.bind(&display.device, &camera, &projection);
        let camera_control = framework::FpvCameraController::new(1.0, 0.01);

        let shader = display
            .device
            .create_shader_module(wgpu::include_wgsl!("main.wgsl"));

        let model_pipeline_layout =
            display
                .device
                .create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                    label: None,
                    bind_group_layouts: &[Some(camera_binder.layout())],
                    immediate_size: 0,
                });

        let model_pipeline =
            display
                .device
                .create_render_pipeline(&wgpu::RenderPipelineDescriptor {
                    label: None,
                    layout: Some(&model_pipeline_layout),
                    vertex: wgpu::VertexState {
                        module: &shader,
                        entry_point: None,
                        compilation_options: Default::default(),
                        buffers: &[Some(vb_layout.as_wgpu())],
                    },
                    primitive: wgpu::PrimitiveState {
                        topology: prim_topology,
                        cull_mode: None,
                        ..Default::default()
                    },
                    // Shouldn't need depth for a single triangle
                    depth_stencil: None,
                    multisample: Default::default(),
                    fragment: Some(wgpu::FragmentState {
                        module: &shader,
                        entry_point: None,
                        compilation_options: Default::default(),
                        targets: &[Some(wgpu::ColorTargetState {
                            format: display.config.format,
                            blend: None,
                            write_mask: wgpu::ColorWrites::ALL,
                        })],
                    }),
                    multiview_mask: None,
                    cache: None,
                });

        Ok(DemoTemplate {
            text_pipeline,
            text,
            text_buffers,
            text_camera,
            text_camera_buffer,
            text_camera_binding,
            projection,
            camera,
            camera_buffer,
            camera_binding,
            camera_control,
            vertex_buffer,
            vertex_count,
            index_buffer,
            model_pipeline,
            ticks: 0,
            last_time: web_time::Instant::now(),
            debug_mode: false,
        })
    }

    fn handle_keyboard(&mut self, key: KeyCode, pressed: bool) {
        if self.camera_control.process_keyboard(key, pressed) {
            return;
        }

        match (key, pressed) {
            (KeyCode::Digit1, true) => self.debug_mode = !self.debug_mode,
            _ => {}
        }
    }

    fn handle_mouse_move(&mut self, dx: f64, dy: f64) {
        self.camera_control.process_mouse(dx, dy);
    }

    fn resize(&mut self, display: &Display) {
        self.text_camera
            .resize(display.width() as _, display.height() as _);
        self.projection
            .resize(display.width() as _, display.height() as _);

        self.camera_buffer.update(&self.camera, &self.projection);

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

    fn update(&mut self, _display: &Display, dt: std::time::Duration) {
        self.camera_control.update_camera(&mut self.camera, dt);
        self.camera_buffer.update(&self.camera, &self.projection);
    }

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

        self.camera_buffer.flush(&display.queue);

        let dt = self.last_time.elapsed();
        if dt >= web_time::Duration::from_secs(1) {
            let dti = dt / self.ticks as u32;

            let millis = dti.as_micros() / 1000;
            let micros = dti.as_micros() % 1000;

            let sans_metrics_key = "sans_metrics";

            let mspt = format!("{millis}.{micros} mspt\n{:?}", self.camera.position);

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

        self.text_camera_buffer
            .update(&self.text_camera, &self.text_camera);
        self.text_camera_buffer.flush(&display.queue);

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

            // I'm reusing the text pass as a single triangle doesn't need depth
            // The model needs to render before the text though otherwise the it
            // could cover the text.

            pass.set_pipeline(&self.model_pipeline);
            pass.set_bind_group(0, self.camera_binding.bind_group(), &[]);
            pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
            if let Some((index_format, buffer, index_count)) = &self.index_buffer {
                pass.set_index_buffer(buffer.slice(..), *index_format);
                pass.draw_indexed(0..*index_count, 0, 0..1);
            } else {
                pass.draw(0..self.vertex_count, 0..1);
            }
            

            for name in self.text.text_groups["sans"].keys() {
                let buffer = &self.text_buffers[name];
                self.text_pipeline
                    .draw_text(buffer, &self.text_camera_binding, &mut pass);
            }
        }

        display.queue.submit([encoder.finish()]);
        display.queue.present(frame);
    }
}

fn main() {
    framework::run::<DemoTemplate>().unwrap()
}
