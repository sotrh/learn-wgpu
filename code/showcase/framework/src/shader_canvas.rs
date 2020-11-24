//! Features
//! - [ ] Support fullscreen drawing
//! - [ ] Data struct for basic uniforms (time, mousePos, etc.)
//! - [ ] Lambda support for other bind groups
//! - [ ] Drawing to texture (maybe have the render pass decide this?)
//! - [ ] Saving to file

use std::time::Instant;
use thiserror::Error;
use wgpu::util::{DeviceExt, BufferInitDescriptor};

#[repr(C)]
#[derive(Debug, Copy, Clone, bytemuck::Pod, bytemuck::Zeroable)]
struct SimulationData {
    clear_color: [f32; 4],
    canvas_size: [f32; 2],
    mouse_pos: [f32; 2],
    time: f32,
    delta_time: f32,
}

#[derive(Error, Debug)]
pub enum ShaderBuildError {
    #[error("Please supply a valid vertex shader")]
    InvalidVertexShader,
    #[error("Please supply a valid fragment shader")]
    InvalidFragmentShader,
    #[error("Please supply a valid display format")]
    InvalidDisplayFormat,
}


pub struct ShaderCanvas {
    pipeline: wgpu::RenderPipeline,
    start_time: Option<Instant>,
    last_time: Option<Instant>,
    simulation_data: SimulationData,
    simulation_data_buffer: wgpu::Buffer,
    simulation_bind_group: wgpu::BindGroup,
}

impl ShaderCanvas {
    pub fn input(&mut self, mouse_x: f32, mouse_y: f32) {
        self.simulation_data.mouse_pos[0] = mouse_x;
        self.simulation_data.mouse_pos[1] = mouse_y;
    }

    pub fn delta_input(&mut self, dx: f32, dy: f32) {
        self.simulation_data.mouse_pos[0] += dx;
        self.simulation_data.mouse_pos[1] += dy;
    }

    pub fn render(
        &mut self, 
        queue: &wgpu::Queue, 
        encoder: &mut wgpu::CommandEncoder,
        frame: &wgpu::TextureView,
        width: f32,
        height: f32,
    ) {
        let current_time = Instant::now();
        let start_time = match self.start_time {
            Some(t) => t,
            None => {
                let t = current_time;
                self.start_time = Some(t);
                t
            },
        };
        let last_time = self.last_time.unwrap_or(current_time);
        self.last_time = Some(current_time);
        self.simulation_data.time = (current_time - start_time).as_secs_f32();
        self.simulation_data.delta_time = (current_time - last_time).as_secs_f32();
        self.simulation_data.canvas_size[0] = width;
        self.simulation_data.canvas_size[1] = height;
        queue.write_buffer(&self.simulation_data_buffer, 0, bytemuck::cast_slice(&[self.simulation_data]));

        let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            color_attachments: &[
                wgpu::RenderPassColorAttachmentDescriptor {
                    attachment: frame,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Load,
                        store: true,
                    }  
                },
            ],
            depth_stencil_attachment: None,
        });
        pass.set_bind_group(0, &self.simulation_bind_group, &[]);
        pass.set_pipeline(&self.pipeline);
        pass.draw(0..6, 0..1);
    }
}

pub struct ShaderCanvasBuilder<'a> {
    canvas_size: [f32; 2],
    clear_color: [f32; 4],
    label: Option<&'a str>,
    display_format: Option<wgpu::TextureFormat>,
    frag_code: Option<wgpu::ShaderModuleSource<'a>>,
    vert_code: Option<wgpu::ShaderModuleSource<'a>>,
}

impl<'a> ShaderCanvasBuilder<'a> {
    pub fn new() -> Self {
        Self {
            canvas_size: [256.0; 2],
            clear_color: [0.0, 0.0, 0.0, 1.0],
            label: None,
            display_format: None,
            frag_code: Some(wgpu::include_spirv!("shader_canvas.frag.spv")),
            vert_code: Some(wgpu::include_spirv!("shader_canvas.vert.spv")),
        }
    }

    pub fn canvas_size(&mut self, width: f32, height: f32) -> &mut Self {
        self.canvas_size = [width, height];
        self
    }

    pub fn display_format(&mut self, format: wgpu::TextureFormat) -> &mut Self {
        self.display_format = Some(format);
        self
    }

    pub fn use_swap_chain_desc(&mut self, sc_desc: &wgpu::SwapChainDescriptor) -> &mut Self {
        self.display_format(sc_desc.format);
        self.canvas_size(sc_desc.width as f32, sc_desc.height as f32)
    }

    pub fn fragment_shader(&mut self, code: wgpu::ShaderModuleSource<'a>) -> &mut Self {
        self.frag_code = Some(code);
        self
    }

    pub fn vertex_shader(&mut self, code: wgpu::ShaderModuleSource<'a>) -> &mut Self {
        self.vert_code = Some(code);
        self
    }

    pub fn build(&mut self, device: &wgpu::Device) -> Result<ShaderCanvas, ShaderBuildError> {
        let display_format = self.display_format.ok_or(ShaderBuildError::InvalidDisplayFormat)?;
        let frag_code = self.frag_code.take().ok_or(ShaderBuildError::InvalidFragmentShader)?;
        let vert_code = self.vert_code.take().ok_or(ShaderBuildError::InvalidVertexShader)?;

        let simulation_data = SimulationData {
            time: 0.0,
            delta_time: 0.0,
            mouse_pos: [0.0; 2],
            canvas_size: self.canvas_size,
            clear_color: self.clear_color,
        };
        let simulation_data_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: self.label,
            contents: bytemuck::cast_slice(&[simulation_data]),
            usage: wgpu::BufferUsage::UNIFORM | wgpu::BufferUsage::COPY_DST,
        });

        let simulation_bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: self.label,
            entries: &[
                // SimulationData
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStage::FRAGMENT,
                    count: None,
                    ty: wgpu::BindingType::UniformBuffer {
                        dynamic: false,
                        min_binding_size: None,
                    }
                }
            ],
        });
        let simulation_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            layout: &simulation_bind_group_layout,
            label: self.label,
            entries: &[
                wgpu::BindGroupEntry {
                    binding: 0,
                    resource: wgpu::BindingResource::Buffer(simulation_data_buffer.slice(..))
                }
            ]
        });

        let vert_module = device.create_shader_module(vert_code);
        let frag_module = device.create_shader_module(frag_code);

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: self.label,
            bind_group_layouts: &[&simulation_bind_group_layout],
            push_constant_ranges: &[],
        });
        let pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: self.label,
            layout: Some(&pipeline_layout),
            vertex_stage: wgpu::ProgrammableStageDescriptor {
                entry_point: "main",
                module: &vert_module,
            },
            fragment_stage: Some(wgpu::ProgrammableStageDescriptor {
                entry_point: "main",
                module: &frag_module,
            }),
            color_states: &[wgpu::ColorStateDescriptor {
                format: display_format,
                alpha_blend: wgpu::BlendDescriptor::REPLACE,
                color_blend: wgpu::BlendDescriptor::REPLACE,
                write_mask: wgpu::ColorWrite::ALL,
            }],
            rasterization_state: None,
            primitive_topology: wgpu::PrimitiveTopology::TriangleList,
            depth_stencil_state: None,
            sample_count: 1,
            sample_mask: !0,
            alpha_to_coverage_enabled: false,
            vertex_state: wgpu::VertexStateDescriptor {
                index_format: wgpu::IndexFormat::Uint16,
                vertex_buffers: &[],
            },
        });

        Ok(ShaderCanvas {
            pipeline,
            start_time: None,
            last_time: None,
            simulation_data,
            simulation_data_buffer,
            simulation_bind_group,
        })
    }
}
