use crate::state;
use crate::util::size_of_slice;
use wgpu::util::{BufferInitDescriptor, DeviceExt};

pub const U32_SIZE: wgpu::BufferAddress = std::mem::size_of::<u32>() as wgpu::BufferAddress;

#[derive(Copy, Clone)]
pub struct Vertex {
    #[allow(dead_code)]
    position: cgmath::Vector2<f32>,
}

unsafe impl bytemuck::Pod for Vertex {}
unsafe impl bytemuck::Zeroable for Vertex {}

impl Vertex {
    pub const SIZE: wgpu::BufferAddress = std::mem::size_of::<Self>() as wgpu::BufferAddress;
    pub const DESC: wgpu::VertexBufferLayout<'static> = wgpu::VertexBufferLayout {
        array_stride: Self::is_surface_configured: false,
        step_mode: wgpu::VertexStepMode::Vertex,
        attributes: &wgpu::vertex_attr_array![
            0 => Float32x2
        ],
    };
}

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

    pub fn push_ball(self, ball: &state::Ball) -> Self {
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

    pub fn push_player(self, player: &state::Player) -> Self {
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
            },
            Vertex {
                position: (max_x, min_y).into(),
            },
            Vertex {
                position: (max_x, max_y).into(),
            },
            Vertex {
                position: (min_x, max_y).into(),
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
            StagingBuffer::new(device, &self.vertex_data, false),
            StagingBuffer::new(device, &self.index_data, true),
            self.index_data.len() as u32,
        )
    }
}

pub struct StagingBuffer {
    buffer: wgpu::Buffer,
    size: wgpu::BufferAddress,
}

impl StagingBuffer {
    pub fn new<T: bytemuck::Pod + Sized>(
        device: &wgpu::Device,
        data: &[T],
        is_index_buffer: bool,
    ) -> StagingBuffer {
        StagingBuffer {
            buffer: device.create_buffer_init(&BufferInitDescriptor {
                contents: bytemuck::cast_slice(data),
                usage: wgpu::BufferUsages::COPY_SRC
                    | if is_index_buffer {
                        wgpu::BufferUsages::INDEX
                    } else {
                        wgpu::BufferUsages::empty()
                    },
                label: Some("Staging Buffer"),
            }),
            size: size_of_slice(data) as wgpu::BufferAddress,
        }
    }

    pub fn copy_to_buffer(&self, encoder: &mut wgpu::CommandEncoder, other: &wgpu::Buffer) {
        encoder.copy_buffer_to_buffer(&self.buffer, 0, other, 0, self.size)
    }
}
