use winit::window::{Window, WindowBuilder};
use winit::event_loop::EventLoop;
use winit::dpi::LogicalSize;

use crate::state;

pub struct Render {
    window: Window,
    surface: wgpu::Surface,
    adapter: wgpu::Adapter,
    device: wgpu::Device,
    queue: wgpu::Queue,
    swap_chain: wgpu::SwapChain,
    pipeline: wgpu::RenderPipeline,
    vertex_buffer: wgpu::Buffer,
    index_buffer: wgpu::Buffer,
}

impl Render {
    pub async fn new<T: 'static>(event_loop: &EventLoop<T>) -> Self {
        let window = WindowBuilder::new()
            .with_title("Pong")
            .with_inner_size(LogicalSize::<f64>::from((800, 600)))
            .build(&event_loop).unwrap();
        
        let surface = wgpu::Surface::create(&window);

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

        let size = window.inner_size();
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
            include_str!("textured.vert"), 
            include_str!("textured.frag"),
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

        Self {
            window,
            surface,
            adapter,
            device,
            queue,
            swap_chain,
            pipeline,
            vertex_buffer,
            index_buffer,
        }
    }

    pub fn render_state(&mut self, state: &state::State) {
        let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: None,
        });

        let (stg_vertex, stg_index, num_indices) = QuadBufferBuilder::new()
            .push_ball(&state.ball)
            .push_player(&state.player1)
            .push_player(&state.player2)
            .build(&self.device);

        stg_vertex.copy_to_buffer(&mut encoder, &self.vertex_buffer);
        stg_index.copy_to_buffer(&mut encoder, &self.index_buffer);
        
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

        render_pass.set_vertex_buffer(0, &self.vertex_buffer, 0, 0);
        render_pass.set_index_buffer(&self.index_buffer, 0, 0);
        render_pass.set_pipeline(&self.pipeline);
        render_pass.draw_indexed(0..num_indices, 0, 0..1);

        drop(render_pass);

        self.queue.submit(&[encoder.finish()]);

        self.window.request_redraw();
    }
}

const U32_SIZE: wgpu::BufferAddress = std::mem::size_of::<u32>() as wgpu::BufferAddress;

pub struct QuadBufferBuilder {
    vertex_data: Vec<Vertex>,
    index_data: Vec<u32>,
    current_quad: u32,
}

impl QuadBufferBuilder {
    pub fn new() -> Self {
        Self {
            vertex_data: Vec::new(),
            index_data: Vec::new(),
            current_quad: 0,
        }
    }

    pub fn push_ball(mut self, ball: &state::Ball) -> Self {
        if ball.visible {
            let min_x = ball.position.x - ball.radius;
            let min_y = ball.position.y - ball.radius;
            let max_x = ball.position.x + ball.radius;
            let max_y = ball.position.y + ball.radius;
    
            self.push_quad(min_x, min_y, max_x, max_y)
        } else {
            self
        }
    }

    pub fn push_player(mut self, player: &state::Player) -> Self {
        if player.visible {
            self.push_quad(
                player.position.x - player.size.x * 0.5, 
                player.position.y - player.size.y * 0.5, 
                player.position.x + player.size.x * 0.5,
                player.position.y + player.size.y * 0.5, 
            )
        } else {
            self
        }
    }

    pub fn push_quad(mut self, min_x: f32, min_y: f32, max_x: f32, max_y: f32) -> Self {
        self.vertex_data.extend(&[
            Vertex {
                position: (min_x, min_y).into(),
                tex_coord: (0.0, 0.0).into(),
            },
            Vertex {
                position: (max_x, min_y).into(),
                tex_coord: (1.0, 0.0).into(),
            },
            Vertex {
                position: (max_x, max_y).into(),
                tex_coord: (1.0, 1.0).into(),
            },
            Vertex {
                position: (min_x, max_y).into(),
                tex_coord: (0.0, 1.0).into(),
            },
        ]);
        self.index_data.extend(&[
            self.current_quad * 4 + 0,
            self.current_quad * 4 + 1,
            self.current_quad * 4 + 2,
            self.current_quad * 4 + 0,
            self.current_quad * 4 + 2,
            self.current_quad * 4 + 3,
        ]);
        self.current_quad += 1;
        self
    }

    pub fn build(self, device: &wgpu::Device) -> (StagingBuffer, StagingBuffer, u32) {
        (
            StagingBuffer::new(device, &self.vertex_data),
            StagingBuffer::new(device, &self.index_data),
            self.index_data.len() as u32,
        )
    }
}

pub struct StagingBuffer {
    buffer: wgpu::Buffer,
    size: wgpu::BufferAddress,
}

impl StagingBuffer {
    pub fn new<T: bytemuck::Pod + Sized>(device: &wgpu::Device, data: &[T]) -> StagingBuffer {
        StagingBuffer {
            buffer: device.create_buffer_with_data(
                bytemuck::cast_slice(data),
                wgpu::BufferUsage::COPY_SRC,
            ),
            size: (std::mem::size_of::<T>() * data.len()) as wgpu::BufferAddress
        }
    }

    pub fn copy_to_buffer(&self, encoder: &mut wgpu::CommandEncoder, other: &wgpu::Buffer) {
        encoder.copy_buffer_to_buffer(&self.buffer, 0, other, 0, self.size)
    }
}

#[derive(Copy, Clone)]
struct Vertex {
    position: cgmath::Vector2<f32>,
    tex_coord: cgmath::Vector2<f32>,
}

unsafe impl bytemuck::Pod for Vertex {}
unsafe impl bytemuck::Zeroable for Vertex {}

impl Vertex {
    const SIZE: wgpu::BufferAddress = std::mem::size_of::<Self>() as wgpu::BufferAddress;
    const DESC: wgpu::VertexBufferDescriptor<'static> = wgpu::VertexBufferDescriptor {
        stride: Self::SIZE,
        step_mode: wgpu::InputStepMode::Vertex,
        attributes: &wgpu::vertex_attr_array![
            0 => Float2,
            1 => Float2
        ],
    };
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