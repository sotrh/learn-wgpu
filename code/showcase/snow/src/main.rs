mod camera;

use std::f32::consts::PI;

use camera::{Camera, Projection, CameraController};
use wgpu::util::{BufferInitDescriptor, DeviceExt};

const MAX_PARTICLES: u32 = 1000;
const PARTICLE_SIZE: u64 = 4 * 4 * 2;
const PARTICLE_LAYOUT: wgpu::VertexBufferLayout<'static> = wgpu::VertexBufferLayout {
    array_stride: PARTICLE_SIZE,
    step_mode: wgpu::VertexStepMode::Instance,
    attributes: &wgpu::vertex_attr_array![
        0 => Float32x4,
        1 => Float32x4,
    ],
};

#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
struct ParticleConfig {
    // The vec3 uniform is the same size as vec4
    emitter_position: glam::Vec4,
    particle_spread: glam::Vec4,
    forces: glam::Vec4,
    // These two get interpretted as vec4 by the shader
    life_spread: glam::Vec2,
    time_and_dt: glam::Vec2,
}

#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
struct Uniforms {
    view_proj: glam::Mat4,
}

struct Snow {
    move_particles: wgpu::ComputePipeline,
    particle_buffers: [wgpu::Buffer; 2],
    particle_bind_groups: [wgpu::BindGroup; 2],
    config: ParticleConfig,
    config_buffer: wgpu::Buffer,
    iteration: usize,
    num_particles: u32,
    camera: Camera,
    projection: Projection,
    uniforms: Uniforms,
    uniform_buffer: wgpu::Buffer,
    uniforms_bind_group: wgpu::BindGroup,
    draw_particles: wgpu::RenderPipeline,
    camera_controller: CameraController,
    uniforms_dirty: bool,
    time_since_spawn: f32,
    spawn_timer: f32,
}

impl framework::Demo for Snow {
    fn init(display: &framework::Display) -> anyhow::Result<Self> {
        let particle_layout =
            display
                .device
                .create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                    label: Some("particle_layout"),
                    entries: &[
                        wgpu::BindGroupLayoutEntry {
                            binding: 0,
                            visibility: wgpu::ShaderStages::COMPUTE,
                            ty: wgpu::BindingType::Buffer {
                                ty: wgpu::BufferBindingType::Uniform,
                                has_dynamic_offset: false,
                                min_binding_size: None,
                            },
                            count: None,
                        },
                        wgpu::BindGroupLayoutEntry {
                            binding: 1,
                            visibility: wgpu::ShaderStages::COMPUTE,
                            ty: wgpu::BindingType::Buffer {
                                ty: wgpu::BufferBindingType::Storage { read_only: true },
                                has_dynamic_offset: false,
                                min_binding_size: None,
                            },
                            count: None,
                        },
                        wgpu::BindGroupLayoutEntry {
                            binding: 2,
                            visibility: wgpu::ShaderStages::COMPUTE,
                            ty: wgpu::BindingType::Buffer {
                                ty: wgpu::BufferBindingType::Storage { read_only: false },
                                has_dynamic_offset: false,
                                min_binding_size: None,
                            },
                            count: None,
                        },
                    ],
                });

        let config = ParticleConfig {
            emitter_position: glam::Vec4::new(0.0, 10.0, 0.0, 0.0),
            particle_spread: glam::Vec4::new(10.0, 0.0, 10.0, 0.0),
            forces: glam::Vec4::new(0.0, 0.0, 0.0, 0.0),
            life_spread: glam::Vec2 { x: 1.0, y: 5.0 },
            time_and_dt: glam::Vec2::ZERO,
        };

        let config_buffer = display.device.create_buffer_init(&BufferInitDescriptor {
            label: Some("config_buffer"),
            contents: bytemuck::bytes_of(&config),
            usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::UNIFORM,
        });

        let particle_buffers = [
            create_particle_buffer(&display.device),
            create_particle_buffer(&display.device),
        ];

        let particle_bind_groups = [
            create_particle_bind_group(
                &display.device,
                &particle_layout,
                &config_buffer,
                &particle_buffers[0],
                &particle_buffers[1],
            ),
            create_particle_bind_group(
                &display.device,
                &particle_layout,
                &config_buffer,
                &particle_buffers[1],
                &particle_buffers[0],
            ),
        ];

        let shader = display
            .device
            .create_shader_module(wgpu::include_wgsl!("snow.wgsl"));

        let move_pipeline_layout =
            display
                .device
                .create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                    label: None,
                    bind_group_layouts: &[&particle_layout],
                    push_constant_ranges: &[],
                });

        let move_particles =
            display
                .device
                .create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
                    label: None,
                    layout: Some(&move_pipeline_layout),
                    module: &shader,
                    entry_point: "move_particles",
                });

        let camera = Camera::new(glam::vec3(0.0, 0.0, 0.0), 0.0, 0.0);
        let camera_controller = CameraController::new(0.1, 1.0);
        let projection = Projection::new(
            display.config.width,
            display.config.height,
            PI * 0.25,
            0.1,
            100.0,
        );

        let uniforms = Uniforms {
            view_proj: projection.calc_matrix() * camera.calc_matrix(),
        };
        let uniform_buffer = display.device.create_buffer_init(&BufferInitDescriptor {
            label: Some("uniform_buffer"),
            contents: bytemuck::bytes_of(&uniforms),
            usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::UNIFORM,
        });

        let uniforms_bind_group_layout =
            display
                .device
                .create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                    label: None,
                    entries: &[wgpu::BindGroupLayoutEntry {
                        binding: 0,
                        visibility: wgpu::ShaderStages::VERTEX,
                        ty: wgpu::BindingType::Buffer { ty: wgpu::BufferBindingType::Uniform, has_dynamic_offset: false, min_binding_size: None },
                        count: None,
                    }],
                });

        let uniforms_bind_group = display.device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("uniforms_bind_group"),
            layout: &uniforms_bind_group_layout,
            entries: &[
                wgpu::BindGroupEntry {
                    binding: 0,
                    resource: uniform_buffer.as_entire_binding(),
                }
            ],
        });

        let draw_particles_layout =
            display
                .device
                .create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                    label: None,
                    bind_group_layouts: &[&uniforms_bind_group_layout],
                    push_constant_ranges: &[],
                });

        let draw_particles =
            display
                .device
                .create_render_pipeline(&wgpu::RenderPipelineDescriptor {
                    label: Some("draw_particles"),
                    layout: Some(&draw_particles_layout),
                    vertex: wgpu::VertexState {
                        module: &shader,
                        entry_point: "vs_main",
                        buffers: &[PARTICLE_LAYOUT],
                    },
                    primitive: wgpu::PrimitiveState {
                        topology: wgpu::PrimitiveTopology::PointList,
                        ..Default::default()
                    },
                    depth_stencil: None,
                    multisample: Default::default(),
                    fragment: Some(wgpu::FragmentState {
                        module: &shader,
                        entry_point: "fs_main",
                        targets: &[Some(wgpu::ColorTargetState {
                            format: display.config.format,
                            blend: Some(wgpu::BlendState::REPLACE),
                            write_mask: wgpu::ColorWrites::ALL,
                        })],
                    }),
                    multiview: None,
                });

        Ok(Self {
            config,
            config_buffer,
            iteration: 0,
            num_particles: 0,
            time_since_spawn: 0.0,
            spawn_timer: 1.0,
            particle_buffers,
            particle_bind_groups,
            move_particles,
            camera,
            camera_controller,
            projection,
            uniforms,
            uniform_buffer,
            uniforms_bind_group,
            uniforms_dirty: false,
            draw_particles,
        })
    }

    fn process_mouse(&mut self, dx: f64, dy: f64) {
        self.camera_controller.process_mouse(dx, dy);
        self.uniforms_dirty = true;
    }
    
    fn process_keyboard(&mut self, key: winit::event::VirtualKeyCode, pressed: bool) {
        self.camera_controller.process_keyboard(key, pressed);
        self.uniforms_dirty = true;
    }

    fn resize(&mut self, display: &framework::Display) {
        self.projection.resize(display.config.width, display.config.height);
        self.uniforms_dirty = true;
        self.uniforms_dirty = true;
    }

    fn update(&mut self, display: &framework::Display, dt: std::time::Duration) {
        // Update uniforms
        if self.uniforms_dirty {
            self.uniforms_dirty = false;
            self.camera_controller.update_camera(&mut self.camera, dt);
            self.uniforms.view_proj = self.projection.calc_matrix() * self.camera.calc_matrix();
            display.queue.write_buffer(&self.uniform_buffer, 0, bytemuck::bytes_of(&self.uniforms));
        }

        let dt = dt.as_secs_f32();

        // Spawn particles
        if self.time_since_spawn > self.spawn_timer {
            self.time_since_spawn = 0.0;
            self.num_particles = MAX_PARTICLES.min(self.num_particles + 1);
        } else {
            self.time_since_spawn += dt;
        }

        // Update the config
        self.config.time_and_dt.x += dt;
        self.config.time_and_dt.y = dt;
        display
            .queue
            .write_buffer(&self.config_buffer, 0, bytemuck::bytes_of(&self.config));

        // Update the actual particles
        let mut encoder = display.device.create_command_encoder(&Default::default());
        let mut move_pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
            label: Some("move_pass"),
            timestamp_writes: None,
        });
        move_pass.set_pipeline(&self.move_particles);
        move_pass.set_bind_group(0, &self.particle_bind_groups[self.iteration % 2], &[]);
        move_pass.dispatch_workgroups(self.num_particles, 1, 1);
        drop(move_pass);
        display.queue.submit([encoder.finish()]);

        // Switch the buffers
        self.iteration += 1;
    }

    fn render(&mut self, display: &mut framework::Display) {
        let frame = match display.surface().get_current_texture() {
            Ok(frame) => frame,
            Err(wgpu::SurfaceError::Outdated) => return,
            Err(e) => panic!("{}", e),
        };

        let view = frame.texture.create_view(&Default::default());

        let mut encoder = display.device.create_command_encoder(&Default::default());

        let mut draw_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("draw_pass"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view: &view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Clear(wgpu::Color::BLACK),
                    store: wgpu::StoreOp::Store,
                },
            })],
            depth_stencil_attachment: None,
            occlusion_query_set: None,
            timestamp_writes: None,
        });

        draw_pass.set_pipeline(&self.draw_particles);
        draw_pass.set_bind_group(0, &self.uniforms_bind_group, &[]);
        draw_pass.set_vertex_buffer(0, self.particle_buffers[self.iteration % 2].slice(..));
        draw_pass.draw(0..1, 0..self.num_particles);

        drop(draw_pass);

        display.queue.submit([encoder.finish()]);
        frame.present();
    }
}

fn create_particle_buffer(device: &wgpu::Device) -> wgpu::Buffer {
    device.create_buffer(&wgpu::BufferDescriptor {
        label: None,
        size: PARTICLE_SIZE * MAX_PARTICLES as u64,
        usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::VERTEX,
        mapped_at_creation: false,
    })
}

fn create_particle_bind_group(
    device: &wgpu::Device,
    layout: &wgpu::BindGroupLayout,
    config_buffer: &wgpu::Buffer,
    src_buffer: &wgpu::Buffer,
    dst_buffer: &wgpu::Buffer,
) -> wgpu::BindGroup {
    device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: None,
        layout,
        entries: &[
            wgpu::BindGroupEntry {
                binding: 0,
                resource: config_buffer.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 1,
                resource: src_buffer.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 2,
                resource: dst_buffer.as_entire_binding(),
            },
        ],
    })
}

fn main() {
    pollster::block_on(framework::run::<Snow>()).unwrap();
}
