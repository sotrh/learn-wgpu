use cgmath::*;
use std::mem::size_of;


#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct Vertex {
    position: Vector3<f32>,
}

unsafe impl bytemuck::Pod for Vertex {}
unsafe impl bytemuck::Zeroable for Vertex {}

impl Vertex {
    pub fn desc<'a>() -> wgpu::VertexBufferDescriptor<'a> {
        wgpu::VertexBufferDescriptor {
            stride: size_of::<Vertex>() as wgpu::BufferAddress,
            step_mode: wgpu::InputStepMode::Vertex,
            attributes: &wgpu::vertex_attr_array!(
                0 => Float4
            ),
        }
    }
}

fn vertex(x: f32, y: f32, z: f32) -> Vertex {
    Vertex {
        position: Vector3 { x, y, z },
    }
}

pub struct Mesh {
    pub index_count: u32,
    pub index_buffer: wgpu::Buffer,
    pub vertex_buffer: wgpu::Buffer,
}

impl Mesh {
    pub fn axes(device: &wgpu::Device) -> Self {
        let axes_vertices: &[Vertex] = &[
            vertex(0.0, 0.0, 0.0),
            vertex(1000.0, 0.0, 0.0),
            vertex(0.0, 1000.0, 0.0),
            vertex(0.0, 0.0, 1000.0),
        ];
        let axes_indices: &[u16] = &[
            0, 1,
            0, 2,
            0, 3,
        ];
        let index_count = axes_indices.len() as u32;
        let index_buffer = device.create_buffer_with_data(
            bytemuck::cast_slice(axes_indices), 
            wgpu::BufferUsage::INDEX,
        );
        let vertex_buffer = device.create_buffer_with_data(
            bytemuck::cast_slice(axes_vertices), 
            wgpu::BufferUsage::VERTEX,
        );
        Self {
            index_count,
            index_buffer,
            vertex_buffer,
        }
    }
}
