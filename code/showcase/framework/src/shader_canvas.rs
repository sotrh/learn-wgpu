//! Features
//! - [ ] Support fullscreen drawing
//! - [ ] Data struct for basic uniforms (time, mousePos, etc.)
//! - [ ] Lambda support for other bind groups
//! - [ ] Drawing to texture (maybe have the render pass decide this?)
//! - [ ] Saving to file

use std::time::Instant;
use thiserror::Error;
use wgpu::util::{BufferInitDescriptor, DeviceExt};

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
            }
        };
        let last_time = self.last_time.unwrap_or(current_time);
        self.last_time = Some(current_time);
        self.simulation_data.time = (current_time - start_time).as_secs_f32();
        self.simulation_data.delta_time = (current_time - last_time).as_secs_f32();
        self.simulation_data.canvas_size[0] = width;
        self.simulation_data.canvas_size[1] = height;
        queue.write_buffer(
            &self.simulation_data_buffer,
            0,
            bytemuck::cast_slice(&[self.simulation_data]),
        );

        let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("Shader Canvas Render Pass"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view: frame,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Load,
                    store: wgpu::StoreOp::Store,
                },
                depth_slice: None,
            })],
            depth_stencil_attachment: None,
            occlusion_query_set: None,
            timestamp_writes: None,
                multiview_mask: None,
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
    frag_code: Option<wgpu::ShaderModuleDescriptor<'a>>,
    vert_code: Option<wgpu::ShaderModuleDescriptor<'a>>,
}

impl<'a> ShaderCanvasBuilder<'a> {
    pub fn new() -> Self {
        Self {
            canvas_size: [256.0; 2],
            clear_color: [0.0, 0.0, 0.0, 1.0],
            label: None,
            display_format: None,
            frag_code: Some(wgpu::include_wgsl!("shader_canvas.frag.wgsl")),
            vert_code: Some(wgpu::include_wgsl!("shader_canvas.vert.wgsl")),
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

    pub fn use_swap_chain_desc(&mut self, config: &wgpu::SurfaceConfiguration) -> &mut Self {
        self.display_format(config.format);
        self.canvas_size(config.width as f32, config.height as f32)
    }

    pub fn fragment_shader(&mut self, code: wgpu::ShaderModuleDescriptor<'a>) -> &mut Self {
        self.frag_code = Some(code);
        self
    }

    pub fn vertex_shader(&mut self, code: wgpu::ShaderModuleDescriptor<'a>) -> &mut Self {
        self.vert_code = Some(code);
        self
    }

    pub fn build(&mut self, device: &wgpu::Device) -> Result<ShaderCanvas, ShaderBuildError> {
        let display_format = self
            .display_format
            .ok_or(ShaderBuildError::InvalidDisplayFormat)?;
        let frag_code = self
            .frag_code
            .take()
            .ok_or(ShaderBuildError::InvalidFragmentShader)?;
        let vert_code = self
            .vert_code
            .take()
            .ok_or(ShaderBuildError::InvalidVertexShader)?;

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
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let simulation_bind_group_layout =
            device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                label: self.label,
                entries: &[
                    // SimulationData
                    wgpu::BindGroupLayoutEntry {
                        binding: 0,
                        visibility: wgpu::ShaderStages::FRAGMENT,
                        count: None,
                        ty: wgpu::BindingType::Buffer {
                            ty: wgpu::BufferBindingType::Uniform,
                            has_dynamic_offset: false,
                            min_binding_size: None,
                        },
                    },
                ],
            });
        let simulation_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            layout: &simulation_bind_group_layout,
            label: self.label,
            entries: &[wgpu::BindGroupEntry {
                binding: 0,
                resource: simulation_data_buffer.as_entire_binding(),
            }],
        });

        let vert_module = device.create_shader_module(vert_code);
        let frag_module = device.create_shader_module(frag_code);

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: self.label,
            bind_group_layouts: &[&simulation_bind_group_layout],
            immediate_size: 0,
        });
        let pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: self.label,
            layout: Some(&pipeline_layout),
            vertex: wgpu::VertexState {
                entry_point: Some("main"),
                module: &vert_module,
                buffers: &[],
                compilation_options: Default::default(),
            },
            fragment: Some(wgpu::FragmentState {
                entry_point: Some("main"),
                module: &frag_module,
                targets: &[Some(wgpu::ColorTargetState {
                    format: display_format,
                    blend: Some(wgpu::BlendState {
                        color: wgpu::BlendComponent::REPLACE,
                        alpha: wgpu::BlendComponent::REPLACE,
                    }),
                    write_mask: wgpu::ColorWrites::ALL,
                })],
                compilation_options: Default::default(),
            }),
            primitive: wgpu::PrimitiveState {
                topology: wgpu::PrimitiveTopology::TriangleList,
                strip_index_format: None,
                front_face: wgpu::FrontFace::Ccw,
                cull_mode: Some(wgpu::Face::Back),
                // Setting this to anything other than Fill requires Features::POLYGON_MODE_LINE
                // or Features::POLYGON_MODE_POINT
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
            // tells wgpu to render to just specific texture layers.
            multiview_mask: None,
            // Useful for optimizing shader compilation on Android
            cache: None,
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
