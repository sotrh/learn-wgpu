mod buffer;

use std::iter;

use wgpu_glyph::{ab_glyph, Section, Text};
use winit::monitor::VideoMode;
use winit::window::Window;

use buffer::*;

use crate::state;

const FONT_BYTES: &[u8] = include_bytes!("../../res/fonts/PressStart2P-Regular.ttf");

pub struct Render {
    #[allow(dead_code)]
    surface: wgpu::Surface,
    #[allow(dead_code)]
    adapter: wgpu::Adapter,
    device: wgpu::Device,
    queue: wgpu::Queue,
    sc_desc: wgpu::SwapChainDescriptor,
    swap_chain: wgpu::SwapChain,
    pipeline: wgpu::RenderPipeline,
    vertex_buffer: wgpu::Buffer,
    index_buffer: wgpu::Buffer,
    glyph_brush: wgpu_glyph::GlyphBrush<()>,
    staging_belt: wgpu::util::StagingBelt,
}

impl Render {
    pub fn width(&self) -> f32 {
        self.sc_desc.width as f32
    }

    #[allow(dead_code)]
    pub fn height(&self) -> f32 {
        self.sc_desc.height as f32
    }

    pub async fn new(window: &Window, video_mode: &VideoMode) -> Self {
        // The instance is a handle to our GPU
        // BackendBit::PRIMARY => Vulkan + Metal + DX12 + Browser WebGPU
        let instance = wgpu::Instance::new(wgpu::BackendBit::PRIMARY);
        let surface = unsafe { instance.create_surface(window) };
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::default(),
                compatible_surface: Some(&surface),
            })
            .await
            .unwrap();
        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: None,
                    features: wgpu::Features::empty(),
                    limits: wgpu::Limits::default(),
                },
                None, // Trace path
            )
            .await
            .unwrap();

        let size = video_mode.size();
        let sc_desc = wgpu::SwapChainDescriptor {
            usage: wgpu::TextureUsage::RENDER_ATTACHMENT,
            format: wgpu::TextureFormat::Bgra8UnormSrgb,
            width: size.width,
            height: size.height,
            present_mode: wgpu::PresentMode::Fifo,
        };
        let swap_chain = device.create_swap_chain(&surface, &sc_desc);

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            bind_group_layouts: &[],
            push_constant_ranges: &[],
            label: Some("Pipeline Layout"),
        });
        let pipeline = create_render_pipeline(
            &device,
            &pipeline_layout,
            sc_desc.format,
            &[Vertex::DESC],
            wgpu::include_spirv!("../../res/shaders/textured.vert.spv"),
            wgpu::include_spirv!("../../res/shaders/textured.frag.spv"),
        );

        let vertex_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: None,
            size: Vertex::SIZE * 4 * 3,
            usage: wgpu::BufferUsage::VERTEX | wgpu::BufferUsage::COPY_DST,
            mapped_at_creation: false,
        });

        let index_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: None,
            size: U32_SIZE * 6 * 3,
            usage: wgpu::BufferUsage::INDEX | wgpu::BufferUsage::COPY_DST,
            mapped_at_creation: false,
        });

        let font = ab_glyph::FontArc::try_from_slice(FONT_BYTES).unwrap();
        let glyph_brush =
            wgpu_glyph::GlyphBrushBuilder::using_font(font).build(&device, sc_desc.format);
        let staging_belt = wgpu::util::StagingBelt::new(1024);

        Self {
            surface,
            adapter,
            device,
            queue,
            sc_desc,
            swap_chain,
            pipeline,
            vertex_buffer,
            index_buffer,
            glyph_brush,
            staging_belt,
        }
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

        match self.swap_chain.get_current_frame() {
            Ok(frame) => {
                let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                    color_attachments: &[wgpu::RenderPassColorAttachmentDescriptor {
                        attachment: &frame.output.view,
                        resolve_target: None,
                        ops: wgpu::Operations::default(),
                    }],
                    depth_stencil_attachment: None,
                });

                if num_indices != 0 {
                    render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
                    render_pass.set_index_buffer(self.index_buffer.slice(..));
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
                        &frame.output.view,
                        self.sc_desc.width,
                        self.sc_desc.height,
                    )
                    .unwrap();

                self.staging_belt.finish();
                self.queue.submit(iter::once(encoder.finish()));
            }
            Err(wgpu::SwapChainError::Outdated) => {
                self.swap_chain = self.device.create_swap_chain(&self.surface, &self.sc_desc);
            }
            Err(e) => {
                eprintln!("Error: {}", e);
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
    vertex_descs: &[wgpu::VertexBufferDescriptor],
    vs_src: wgpu::ShaderModuleSource,
    fs_src: wgpu::ShaderModuleSource,
) -> wgpu::RenderPipeline {
    let vs_module = device.create_shader_module(vs_src);
    let fs_module = device.create_shader_module(fs_src);

    device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
        label: Some("Render Pipeline"),
        layout: Some(&layout),
        vertex_stage: wgpu::ProgrammableStageDescriptor {
            module: &vs_module,
            entry_point: "main",
        },
        fragment_stage: Some(wgpu::ProgrammableStageDescriptor {
            module: &fs_module,
            entry_point: "main",
        }),
        rasterization_state: None,
        primitive_topology: wgpu::PrimitiveTopology::TriangleList,
        color_states: &[wgpu::ColorStateDescriptor {
            format: color_format,
            color_blend: wgpu::BlendDescriptor::REPLACE,
            alpha_blend: wgpu::BlendDescriptor::REPLACE,
            write_mask: wgpu::ColorWrite::ALL,
        }],
        depth_stencil_state: None,
        sample_count: 1,
        sample_mask: !0,
        alpha_to_coverage_enabled: false,
        vertex_state: wgpu::VertexStateDescriptor {
            index_format: wgpu::IndexFormat::Uint32,
            vertex_buffers: vertex_descs,
        },
    })
}
