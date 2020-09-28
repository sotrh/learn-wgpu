use cgmath::*;

use crate::camera::*;
use std::mem::size_of;

#[derive(Debug)]
pub struct Uniforms {
    raw: UniformsRaw,
    buffer: wgpu::Buffer,
    dirty: bool,
}

#[repr(C)]
#[derive(Debug, Copy, Clone)]
struct UniformsRaw {
    projection_matrix: Matrix4<f32>,
    view_matrix: Matrix4<f32>,
    view_proj_matrix: Matrix4<f32>,
}

unsafe impl bytemuck::Pod for UniformsRaw {}
unsafe impl bytemuck::Zeroable for UniformsRaw {}

impl Uniforms {
    pub fn new(device: &wgpu::Device, camera: &Camera, projection: &Projection) -> Self {
        let projection_matrix = projection.calc_matrix();
        let view_matrix = camera.calc_matrix();
        let raw = UniformsRaw {
            projection_matrix,
            view_matrix,
            view_proj_matrix: projection_matrix * view_matrix,
        };
        let buffer = device.create_buffer_with_data(
            bytemuck::cast_slice(&[raw]),
            wgpu::BufferUsage::COPY_DST | wgpu::BufferUsage::UNIFORM,
        );

        Self {
            raw,
            buffer,
            dirty: true,
        }
    }

    pub fn apply_camera(&mut self, camera: &Camera) {
        self.raw.view_matrix = camera.calc_matrix();
        self.dirty = true;
    }

    pub fn apply_projection(&mut self, projection: &Projection) {
        self.raw.projection_matrix = projection.calc_matrix();
        self.dirty = true;
    }

    pub fn update(&mut self, device: &wgpu::Device) -> Option<wgpu::CommandBuffer> {
        if self.dirty {
            self.dirty = false;
            self.raw.view_proj_matrix = self.raw.projection_matrix * self.raw.view_matrix;

            let copy_buffer = device.create_buffer_with_data(
                bytemuck::cast_slice(&[self.raw]),
                wgpu::BufferUsage::COPY_SRC,
            );

            let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
                label: Some("Uniforms::update()"),
            });
            encoder.copy_buffer_to_buffer(
                &copy_buffer,
                0,
                &self.buffer,
                0,
                size_of::<UniformsRaw>() as wgpu::BufferAddress,
            );
            Some(encoder.finish())
        } else {
            None
        }
    }
}

pub fn create_uniform_binding(
    device: &wgpu::Device,
    uniforms: &Uniforms,
) -> (wgpu::BindGroupLayout, wgpu::BindGroup) {
    let layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        label: Some("Uniforms::BindGroupLayout"),
        bindings: &[wgpu::BindGroupLayoutEntry {
            binding: 0,
            visibility: wgpu::ShaderStage::VERTEX | wgpu::ShaderStage::FRAGMENT,
            ty: wgpu::BindingType::UniformBuffer { dynamic: false },
        }],
    });
    let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: Some("Uniforms::BindGroup"),
        layout: &layout,
        bindings: &[wgpu::Binding {
            binding: 0,
            resource: wgpu::BindingResource::Buffer {
                buffer: &uniforms.buffer,
                range: 0..size_of::<UniformsRaw>() as wgpu::BufferAddress,
            },
        }],
    });
    (layout, bind_group)
}
