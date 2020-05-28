mod buffer;

use winit::window::{Window};
use winit::monitor::{VideoMode};

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
    glyph_brush: wgpu_glyph::GlyphBrush<'static, ()>,
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
        let surface = wgpu::Surface::create(window);

        let adapter = wgpu::Adapter::request(
            &wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::Default,
                compatible_surface: Some(&surface),
            },  
            wgpu::BackendBit::PRIMARY,
        ).await.unwrap();

        let (device, queue) = adapter.request_device(&wgpu::DeviceDescriptor {
            extensions: Default::default(),
            limits: Default::default(),
        }).await;

        let size = video_mode.size();
        let sc_desc = wgpu::SwapChainDescriptor {
            usage: wgpu::TextureUsage::OUTPUT_ATTACHMENT,
            format: wgpu::TextureFormat::Bgra8UnormSrgb,
            width: size.width,
            height: size.height,
            present_mode: wgpu::PresentMode::Fifo,
        };
        let swap_chain = device.create_swap_chain(&surface, &sc_desc);

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            bind_group_layouts: &[]
        });
        let pipeline = create_render_pipeline(
            &device, 
            &pipeline_layout, 
            sc_desc.format, 
            &[Vertex::DESC], 
            include_str!("../../res/shaders/textured.vert"), 
            include_str!("../../res/shaders/textured.frag"),
        );

        let vertex_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: None,
            size: Vertex::SIZE * 4 * 3,
            usage: wgpu::BufferUsage::VERTEX | wgpu::BufferUsage::COPY_DST,
        });

        let index_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: None,
            size: U32_SIZE * 6 * 3,
            usage: wgpu::BufferUsage::INDEX | wgpu::BufferUsage::COPY_DST,
        });

        let font = wgpu_glyph::Font::from_bytes(FONT_BYTES).unwrap();
        let glyph_brush = wgpu_glyph::GlyphBrushBuilder::using_font(font)
            .build(&device, sc_desc.format);

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
        }
    }

    pub fn render_state(&mut self, state: &state::State) {
        let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: None,
        });

        let num_indices = if state.ball.visible 
            || state.player1.visible
            || state.player2.visible 
        {
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
        
        let frame = self.swap_chain.get_next_texture().unwrap();

        let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            color_attachments: &[
                wgpu::RenderPassColorAttachmentDescriptor {
                    attachment: &frame.view,
                    resolve_target: None,
                    load_op: wgpu::LoadOp::Clear,
                    store_op: wgpu::StoreOp::Store,
                    clear_color: wgpu::Color::BLACK,
                },
            ],
            depth_stencil_attachment: None,
        });

        if num_indices != 0 {
            render_pass.set_vertex_buffer(0, &self.vertex_buffer, 0, 0);
            render_pass.set_index_buffer(&self.index_buffer, 0, 0);
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

        self.glyph_brush.draw_queued(
            &self.device,
            &mut encoder,
            &frame.view,
            self.sc_desc.width,
            self.sc_desc.height,
        ).unwrap();

        self.queue.submit(&[encoder.finish()]);
    }
}

fn draw_text(
    text: &state::Text,
    glyph_brush: &mut wgpu_glyph::GlyphBrush<'static, ()>,
) {
    let layout = wgpu_glyph::Layout::default()
        .h_align(
            if text.centered {
                wgpu_glyph::HorizontalAlign::Center
            } else {
                wgpu_glyph::HorizontalAlign::Left
            }
        );
    let scale = {
        let mut size = text.size;
        if text.focused {
            size += 8.0;
        }
        wgpu_glyph::Scale::uniform(size)
    };
    let section = wgpu_glyph::Section {
        text: &text.text,
        screen_position: (text.position.x, text.position.y),
        bounds: (text.bounds.x, text.bounds.y),
        color: text.color.into(),
        scale,
        layout,
        ..Default::default()
    };

    glyph_brush.queue(section);
}

fn create_render_pipeline(
    device: &wgpu::Device, 
    layout: &wgpu::PipelineLayout,
    color_format: wgpu::TextureFormat,
    vertex_descs: &[wgpu::VertexBufferDescriptor], 
    vs_src: &str, 
    fs_src: &str,
) -> wgpu::RenderPipeline {
    let vs_spirv = glsl_to_spirv::compile(vs_src, glsl_to_spirv::ShaderType::Vertex).unwrap();
    let fs_spirv = glsl_to_spirv::compile(fs_src, glsl_to_spirv::ShaderType::Fragment).unwrap();
    let vs_data = wgpu::read_spirv(vs_spirv).unwrap();
    let fs_data = wgpu::read_spirv(fs_spirv).unwrap();
    let vs_module = device.create_shader_module(&vs_data);
    let fs_module = device.create_shader_module(&fs_data);

    device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
        layout: &layout,
        vertex_stage: wgpu::ProgrammableStageDescriptor {
            module: &vs_module,
            entry_point: "main",
        },
        fragment_stage: Some(wgpu::ProgrammableStageDescriptor {
            module: &fs_module,
            entry_point: "main",
        }),
        rasterization_state: Some(wgpu::RasterizationStateDescriptor {
            front_face: wgpu::FrontFace::Ccw,
            cull_mode: wgpu::CullMode::Back,
            depth_bias: 0,
            depth_bias_slope_scale: 0.0,
            depth_bias_clamp: 0.0,
        }),
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