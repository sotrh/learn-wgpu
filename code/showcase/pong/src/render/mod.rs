mod buffer;

use std::iter;

use wgpu_glyph::{ab_glyph, Section, Text};
use winit::dpi::PhysicalSize;
use winit::window::Window;

use buffer::*;

use crate::state;

const FONT_BYTES: &[u8] = include_bytes!("../../res/fonts/PressStart2P-Regular.ttf");

pub struct Render {
    surface: wgpu::Surface,
    config: wgpu::SurfaceConfiguration,
    #[allow(dead_code)]
    adapter: wgpu::Adapter,
    device: wgpu::Device,
    queue: wgpu::Queue,
    pipeline: wgpu::RenderPipeline,
    vertex_buffer: wgpu::Buffer,
    index_buffer: wgpu::Buffer,
    glyph_brush: wgpu_glyph::GlyphBrush<()>,
    staging_belt: wgpu::util::StagingBelt,
}

impl Render {
    pub fn width(&self) -> f32 {
        self.config.width as f32
    }

    #[allow(dead_code)]
    pub fn height(&self) -> f32 {
        self.config.height as f32
    }

    pub async fn new(window: &Window, size: PhysicalSize<u32>) -> Self {
        log::warn!("size: {:?}", size);
        // The instance is a handle to our GPU
        // BackendBit::PRIMARY => Vulkan + Metal + DX12 + Browser WebGPU
        let instance = wgpu::Instance::new(wgpu::Backends::all());
        let surface = unsafe { instance.create_surface(window) };
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::default(),
                compatible_surface: Some(&surface),
                force_fallback_adapter: false,
            })
            .await
            .unwrap();
        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: None,
                    features: wgpu::Features::empty(),
                    limits: wgpu::Limits::downlevel_webgl2_defaults(),
                },
                None, // Trace path
            )
            .await
            .unwrap();

        let config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            format: surface.get_preferred_format(&adapter).unwrap(),
            width: size.width,
            height: size.height,
            present_mode: wgpu::PresentMode::Fifo,
        };
        surface.configure(&device, &config);

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            bind_group_layouts: &[],
            push_constant_ranges: &[],
            label: Some("Pipeline Layout"),
        });
        let pipeline = create_render_pipeline(
            &device,
            &pipeline_layout,
            config.format,
            &[Vertex::DESC],
            wgpu::include_wgsl!("../../res/shaders/textured.vert.wgsl"),
            wgpu::include_wgsl!("../../res/shaders/textured.frag.wgsl"),
        );

        let vertex_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: None,
            size: Vertex::SIZE * 4 * 3,
            usage: wgpu::BufferUsages::VERTEX | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        let index_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: None,
            size: U32_SIZE * 6 * 3,
            usage: wgpu::BufferUsages::INDEX | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        let font = ab_glyph::FontArc::try_from_slice(FONT_BYTES).unwrap();
        let glyph_brush =
            wgpu_glyph::GlyphBrushBuilder::using_font(font).build(&device, config.format);
        let staging_belt = wgpu::util::StagingBelt::new(1024);

        Self {
            surface,
            adapter,
            device,
            queue,
            config,
            pipeline,
            vertex_buffer,
            index_buffer,
            glyph_brush,
            staging_belt,
        }
    }

    pub fn resize(&mut self, size: PhysicalSize<u32>) {
        self.config.width = size.width;
        self.config.height = size.height;
        self.surface.configure(&self.device, &self.config);
    }

    pub fn render_state(&mut self, state: &state::State) {
        let mut encoder = self
            .device
            .create_command_encoder(&wgpu::CommandEncoderDescriptor { label: None });

        let num_indices = if state.ball.visible || state.player1.visible || state.player2.visible {
            let (stg_vertex, stg_index, num_indices) = QuadBufferBuilder::new()
                .push_ball(&state.ball)
                .push_player(&state.player1)
                .push_player(&state.player2)
                .build(&self.device);

            stg_vertex.copy_to_buffer(&mut encoder, &self.vertex_buffer);
            stg_index.copy_to_buffer(&mut encoder, &self.index_buffer);
            num_indices
        } else {
            0
        };

        match self.surface.get_current_texture() {
            Ok(frame) => {
                let view = frame.texture.create_view(&Default::default());
                let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                    label: Some("Main Render Pass"),
                    color_attachments: &[wgpu::RenderPassColorAttachment {
                        view: &view,
                        resolve_target: None,
                        ops: wgpu::Operations::default(),
                    }],
                    depth_stencil_attachment: None,
                });

                if num_indices != 0 {
                    render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
                    render_pass
                        .set_index_buffer(self.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
                    render_pass.set_pipeline(&self.pipeline);
                    render_pass.draw_indexed(0..num_indices, 0, 0..1);
                }

                drop(render_pass);

                if state.title_text.visible {
                    draw_text(&state.title_text, &mut self.glyph_brush);
                }
                if state.play_button.visible {
                    draw_text(&state.play_button, &mut self.glyph_brush);
                }
                if state.quit_button.visible {
                    draw_text(&state.quit_button, &mut self.glyph_brush);
                }
                if state.player1_score.visible {
                    draw_text(&state.player1_score, &mut self.glyph_brush);
                }
                if state.player2_score.visible {
                    draw_text(&state.player2_score, &mut self.glyph_brush);
                }
                if state.win_text.visible {
                    draw_text(&state.win_text, &mut self.glyph_brush);
                }

                self.glyph_brush
                    .draw_queued(
                        &self.device,
                        &mut self.staging_belt,
                        &mut encoder,
                        &view,
                        self.config.width,
                        self.config.height,
                    )
                    .unwrap();

                self.staging_belt.finish();
                self.queue.submit(iter::once(encoder.finish()));
                frame.present();

            }
            Err(wgpu::SurfaceError::Outdated) => {
                log::info!("Outdated surface texture");
                self.surface.configure(&self.device, &self.config);
            }
            Err(e) => {
                log::error!("Error: {}", e);
            }
        }
    }
}

fn draw_text(text: &state::Text, glyph_brush: &mut wgpu_glyph::GlyphBrush<()>) {
    let layout = wgpu_glyph::Layout::default().h_align(if text.centered {
        wgpu_glyph::HorizontalAlign::Center
    } else {
        wgpu_glyph::HorizontalAlign::Left
    });

    let section =
        Section {
            screen_position: text.position.into(),
            bounds: text.bounds.into(),
            layout,
            ..Section::default()
        }
        .add_text(Text::new(&text.text).with_color(text.color).with_scale(
            if text.focused {
                text.size + 8.0
            } else {
                text.size
            },
        ));

    glyph_brush.queue(section);
}

fn create_render_pipeline(
    device: &wgpu::Device,
    layout: &wgpu::PipelineLayout,
    color_format: wgpu::TextureFormat,
    vertex_layouts: &[wgpu::VertexBufferLayout],
    vs_src: wgpu::ShaderModuleDescriptor,
    fs_src: wgpu::ShaderModuleDescriptor,
) -> wgpu::RenderPipeline {
    let vs_module = device.create_shader_module(&vs_src);
    let fs_module = device.create_shader_module(&fs_src);

    device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
        label: Some("Render Pipeline"),
        layout: Some(layout),
        vertex: wgpu::VertexState {
            module: &vs_module,
            entry_point: "main",
            buffers: &vertex_layouts,
        },
        fragment: Some(wgpu::FragmentState {
            module: &fs_module,
            entry_point: "main",
            targets: &[wgpu::ColorTargetState {
                format: color_format,
                blend: Some(wgpu::BlendState {
                    alpha: wgpu::BlendComponent::REPLACE,
                    color: wgpu::BlendComponent::REPLACE,
                }),
                write_mask: wgpu::ColorWrites::ALL,
            }],
        }),
        primitive: wgpu::PrimitiveState {
            topology: wgpu::PrimitiveTopology::TriangleList,
            strip_index_format: None,
            front_face: wgpu::FrontFace::Ccw,
            cull_mode: Some(wgpu::Face::Back),
            // Setting this to anything other than Fill requires Features::NON_FILL_POLYGON_MODE
            polygon_mode: wgpu::PolygonMode::Fill,
            // Requires Features::DEPTH_CLIP_CONTROL
            unclipped_depth: false,
            // Requires Features::CONSERVATIVE_RASTERIZATION
            conservative: false,
        },
        depth_stencil: None,
        multisample: wgpu::MultisampleState {
            count: 1,
            mask: !0,
            alpha_to_coverage_enabled: false,
        },
        // If the pipeline will be used with a multiview render pass, this
        // indicates how many array layers the attachments will have.
        multiview: None,
    })
}
