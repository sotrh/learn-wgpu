use std::mem::size_of;

use wgpu::util::{BufferInitDescriptor, DeviceExt};

use crate::create_render_pipeline;

#[repr(C)]
#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
pub struct PositionColor {
    position: [f32; 3],
    color: [f32; 3],
}

const AXIS_COLORS: &'static [PositionColor] = &[
    // X
    PositionColor {
        position: [0.0, 0.0, 0.0],
        color: [0.5, 0.0, 0.0],
    },
    PositionColor {
        position: [1.0, 0.0, 0.0],
        color: [1.0, 0.0, 0.0],
    },
    // Y
    PositionColor {
        position: [0.0, 0.0, 0.0],
        color: [0.0, 0.5, 0.0],
    },
    PositionColor {
        position: [0.0, 1.0, 0.0],
        color: [0.0, 1.0, 0.0],
    },
    // Z
    PositionColor {
        position: [0.0, 0.0, 0.0],
        color: [0.0, 0.0, 0.5],
    },
    PositionColor {
        position: [0.0, 0.0, 1.0],
        color: [0.0, 0.0, 1.0],
    },
];

const POSITION_COLOR_LAYOUT: wgpu::VertexBufferLayout<'static> = wgpu::VertexBufferLayout {
    array_stride: size_of::<PositionColor>() as _,
    step_mode: wgpu::VertexStepMode::Vertex,
    attributes: &wgpu::vertex_attr_array![
        0 => Float32x3,
        1 => Float32x3,
    ],
};

pub struct Debug {
    color_lines: wgpu::RenderPipeline,
    axis: wgpu::Buffer,
}

impl Debug {
    pub fn new(
        device: &wgpu::Device,
        camera_layout: &wgpu::BindGroupLayout,
        color_format: wgpu::TextureFormat,
    ) -> Self {
        let axis = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("Debug::axis"),
            contents: bytemuck::cast_slice(AXIS_COLORS),
            usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::VERTEX,
        });

        let shader = wgpu::include_wgsl!("debug.wgsl");
        let layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: None,
            bind_group_layouts: &[camera_layout],
            push_constant_ranges: &[],
        });
        let color_lines = create_render_pipeline(
            device,
            &layout,
            color_format,
            None,
            &[POSITION_COLOR_LAYOUT],
            wgpu::PrimitiveTopology::LineList,
            shader,
        );

        Self { color_lines, axis }
    }

    pub fn draw_axis<'a: 'b, 'b>(
        &'a self,
        pass: &'b mut wgpu::RenderPass<'a>,
        camera: &'a wgpu::BindGroup,
    ) {
        pass.set_pipeline(&self.color_lines);
        pass.set_bind_group(0, camera, &[]);
        pass.set_vertex_buffer(0, self.axis.slice(..));
        pass.draw(0..AXIS_COLORS.len() as u32, 0..1);
    }
}
