use core::f32;
use core::f32::consts::PI;
use std::path::Path;

use framework::{Demo, MaterialBinder, ModelVertex, Vertex};
use glam::{Vec3, Vec4};
use framework::rand::{self, Rng};
use winit::keyboard::KeyCode;

#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
struct InstanceVertex {
    position: Vec4,
    color: Vec4,
}
impl InstanceVertex {
    const DESC: wgpu::VertexBufferLayout<'static> = wgpu::VertexBufferLayout {
        array_stride: std::mem::size_of::<InstanceVertex>() as _,
        step_mode: wgpu::VertexStepMode::Instance,
        attributes: &wgpu::vertex_attr_array![
            5 => Float32x4,
            6 => Float32x4,
        ],
    };
}

fn random_position_scale(min: Vec3, max: Vec3) -> Vec4 {
    let mut rng = rand::thread_rng();
    Vec4::new(
        rng.gen_range(min.x..=max.x),
        rng.gen_range(min.y..=max.y),
        rng.gen_range(min.z..=max.z),
        0.5,
    )
}

pub struct Stencil {
    instance_buffer: framework::RawBuffer<InstanceVertex>,
    camera_uniforms: framework::CameraUniform,
    camera: framework::Camera,
    camera_controller: framework::CameraController,
    camera_bind_group: wgpu::BindGroup,
    projection: framework::Projection,
    depth_stencil: wgpu::Texture,
    depth_stencil_view: wgpu::TextureView,
    depth_stencil_format: wgpu::TextureFormat,
    mask_pipeline: wgpu::RenderPipeline,
    mask_color_pipeline: wgpu::RenderPipeline,
    #[allow(dead_code)]
    mask_texture: framework::Texture,
    mask_bind_group: wgpu::BindGroup,
    model: framework::Model,
    visible_pipeline: wgpu::RenderPipeline,
    hidden_pipeline: wgpu::RenderPipeline,
    lmb_presssed: bool,
}

impl std::fmt::Debug for Stencil {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Stencil").finish()
    }
}

impl Demo for Stencil {
    async fn init(display: &framework::Display, res_dir: &Path) -> anyhow::Result<Self> {
        log::info!("instances");
        let num_instances = 64;
        let half_instanes = num_instances / 2;
        let instances = (0..num_instances)
            .map(|i| InstanceVertex {
                position: random_position_scale(Vec3::splat(-5.0), Vec3::splat(5.0)),
                color: Vec4::new(
                    (i < half_instanes) as u32 as f32,
                    0.0,
                    (i >= half_instanes) as u32 as f32,
                    1.0,
                ),
            })
            .collect::<Vec<_>>();

        let instance_buffer = framework::RawBuffer::from_vec(
            &display.device,
            instances,
            wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::VERTEX,
        );

        let camera = framework::Camera::new(glam::vec3(10.0, 10.0, 10.0), -2.37, -0.5);
        let camera_controller = framework::CameraController::new(1.0, 0.01);
        let projection = framework::Projection::new(
            display.config.width,
            display.config.height,
            PI * 0.25,
            0.1,
            100.0,
        );
        let lmb_presssed = false;

        let mut camera_uniforms = framework::CameraUniform::new(&display.device);
        camera_uniforms.update_view_proj(&camera, &projection);

        let camera_layout =
            display
                .device
                .create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                    label: None,
                    entries: &[wgpu::BindGroupLayoutEntry {
                        binding: 0,
                        visibility: wgpu::ShaderStages::VERTEX_FRAGMENT,
                        ty: wgpu::BindingType::Buffer {
                            ty: wgpu::BufferBindingType::Uniform,
                            has_dynamic_offset: false,
                            min_binding_size: None,
                        },
                        count: None,
                    }],
                });

        let camera_bind_group = display
            .device
            .create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("uniforms_bind_group"),
                layout: &camera_layout,
                entries: &[wgpu::BindGroupEntry {
                    binding: 0,
                    resource: camera_uniforms.buffer.as_entire_binding(),
                }],
            });

        log::info!("depth_stencil");
        let depth_stencil_format = wgpu::TextureFormat::Depth24PlusStencil8;
        let depth_stencil = display.device.create_texture(&wgpu::TextureDescriptor {
            label: Some("depth_stencil"),
            size: wgpu::Extent3d {
                width: display.config.width.max(1),
                height: display.config.height.max(1),
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: depth_stencil_format,
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            view_formats: &[],
        });
        let depth_stencil_view = depth_stencil.create_view(&Default::default());

        log::info!("Mask");
        let mask_texture = framework::resources::load_texture(
            res_dir.join("textures/mask.png"),
            false,
            &display.device,
            &display.queue,
        ).await?;

        let material_binder = MaterialBinder::new(&display.device);

        log::info!("Model");
        let model = framework::resources::load_obj(
            res_dir.join("models/cube.obj"), // Fix for web
            &display.device,
            &display.queue,
            &material_binder,
        )
        .await?;

        let mask_bind_group_layout =
            display
                .device
                .create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                    label: Some("mask_bind_group_layout"),
                    entries: &[
                        wgpu::BindGroupLayoutEntry {
                            binding: 0,
                            visibility: wgpu::ShaderStages::FRAGMENT,
                            ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
                            count: None,
                        },
                        wgpu::BindGroupLayoutEntry {
                            binding: 1,
                            visibility: wgpu::ShaderStages::FRAGMENT,
                            ty: wgpu::BindingType::Texture {
                                sample_type: wgpu::TextureSampleType::Float { filterable: true },
                                view_dimension: wgpu::TextureViewDimension::D2,
                                multisampled: false,
                            },
                            count: None,
                        },
                    ],
                });

        let mask_bind_group = display
            .device
            .create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("mask_bind_group"),
                layout: &mask_bind_group_layout,
                entries: &[
                    wgpu::BindGroupEntry {
                        binding: 0,
                        resource: wgpu::BindingResource::Sampler(&mask_texture.sampler),
                    },
                    wgpu::BindGroupEntry {
                        binding: 1,
                        resource: wgpu::BindingResource::TextureView(&mask_texture.view),
                    },
                ],
            });

        let mask_pipeline_layout =
            display
                .device
                .create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                    label: Some("mask_pipeline_layout"),
                    bind_group_layouts: &[&mask_bind_group_layout],
                    immediate_size: 0,
                });

        let mask_shader = wgpu::include_wgsl!("mask.wgsl");
        let mask_pipeline = framework::RenderPipelineBuilder::new()
            .vertex_shader(mask_shader.clone())
            .fragment_shader(mask_shader.clone())
            .fragment_entry_point("fs_mask")
            .cull_mode(Some(wgpu::Face::Back))
            .depth_stencil(wgpu::DepthStencilState {
                format: depth_stencil_format,
                depth_write_enabled: false,
                depth_compare: wgpu::CompareFunction::Always,
                stencil: wgpu::StencilState {
                    write_mask: 0xFF,
                    read_mask: 0xFF,
                    front: wgpu::StencilFaceState {
                        compare: wgpu::CompareFunction::Always,
                        pass_op: wgpu::StencilOperation::Replace,
                        ..Default::default()
                    },
                    back: wgpu::StencilFaceState::IGNORE,
                },
                bias: wgpu::DepthBiasState::default(),
            })
            .layout(&mask_pipeline_layout)
            .build(&display.device)?;

        let mask_color_pipeline = framework::RenderPipelineBuilder::new()
            .vertex_shader(mask_shader.clone())
            .fragment_shader(mask_shader)
            .fragment_entry_point("fs_color")
            .color_state(wgpu::ColorTargetState {
                format: display.config.format,
                blend: Some(wgpu::BlendState::ALPHA_BLENDING),
                write_mask: wgpu::ColorWrites::ALL,
            })
            .layout(&mask_pipeline_layout)
            .build(&display.device)?;

        let model_pipeline_layout =
            display.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                label: Some("model_pipeline_layout"),
                bind_group_layouts: &[&camera_layout, material_binder.layout()],
                immediate_size: 0,
            });
        let model_shader = wgpu::include_wgsl!("model.wgsl");
        let visible_pipeline = framework::RenderPipelineBuilder::new()
            .layout(&model_pipeline_layout)
            .vertex_shader(model_shader.clone())
            .fragment_shader(model_shader.clone())
            .cull_mode(Some(wgpu::Face::Back))
            .color_state(wgpu::ColorTargetState {
                format: display.config.format,
                blend: None,
                write_mask: wgpu::ColorWrites::ALL,
            })
            .depth_stencil(wgpu::DepthStencilState {
                format: depth_stencil.format(),
                depth_write_enabled: true,
                depth_compare: wgpu::CompareFunction::Less,
                stencil: wgpu::StencilState::default(),
                bias: wgpu::DepthBiasState::default(),
            })
            .vertex_buffer_desc(ModelVertex::desc())
            .vertex_buffer_desc(InstanceVertex::DESC)
            .build(&display.device)?;

        let hidden_pipeline = framework::RenderPipelineBuilder::new()
            .layout(&model_pipeline_layout)
            .vertex_shader(model_shader.clone())
            .fragment_shader(model_shader.clone())
            .cull_mode(Some(wgpu::Face::Back))
            .color_state(wgpu::ColorTargetState {
                format: display.config.format,
                blend: None,
                write_mask: wgpu::ColorWrites::ALL,
            })
            .depth_stencil(wgpu::DepthStencilState {
                format: depth_stencil.format(),
                depth_write_enabled: true,
                depth_compare: wgpu::CompareFunction::Less,
                stencil: wgpu::StencilState {
                    read_mask: 0xFF,
                    write_mask: 0xFF,
                    front: wgpu::StencilFaceState {
                        compare: wgpu::CompareFunction::Equal,
                        depth_fail_op: wgpu::StencilOperation::Keep,
                        ..Default::default()
                    },
                    back: wgpu::StencilFaceState::IGNORE,
                },
                bias: wgpu::DepthBiasState::default(),
            })
            .vertex_buffer_desc(ModelVertex::desc())
            .vertex_buffer_desc(InstanceVertex::DESC)
            .build(&display.device)?;

        Ok(Self {
            instance_buffer,
            camera_uniforms,
            camera,
            camera_controller,
            camera_bind_group,
            projection,
            depth_stencil,
            depth_stencil_view,
            depth_stencil_format,
            mask_pipeline,
            mask_color_pipeline,
            mask_texture,
            mask_bind_group,
            model,
            visible_pipeline,
            hidden_pipeline,
            lmb_presssed,
        })
    }

    fn handle_mouse_button(&mut self, button: u32, pressed: bool) {
        if button == 1 {
            self.lmb_presssed = pressed;
        }
    }

    fn handle_mouse_move(&mut self, dx: f64, dy: f64) {
        if self.lmb_presssed {
            self.camera_controller.process_mouse(dx, dy);
        }
    }

    fn handle_keyboard(&mut self, key: KeyCode, pressed: bool) {
        self.camera_controller.process_keyboard(key, pressed);
    }

    fn resize(&mut self, display: &framework::Display) {
        self.projection.resize(display.width(), display.height());
        self.depth_stencil = display.device.create_texture(&wgpu::TextureDescriptor {
            label: Some("depth_stencil"),
            size: wgpu::Extent3d {
                width: display.width(),
                height: display.height(),
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: self.depth_stencil_format,
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            view_formats: &[],
        });
        self.depth_stencil_view = self.depth_stencil.create_view(&Default::default());
        self.projection.resize(display.width(), display.height());
    }

    fn update(&mut self, _display: &framework::Display, dt: std::time::Duration) {
        self.camera_controller.update_camera(&mut self.camera, dt);
        self.camera_uniforms
            .update_view_proj(&self.camera, &self.projection);
    }

    fn render(&mut self, display: &mut framework::Display) {
        let frame = match display.surface().get_current_texture() {
            Ok(frame) => frame,
            Err(wgpu::SurfaceError::Outdated) => return,
            Err(e) => panic!("{}", e),
        };

        let view = frame.texture.create_view(&Default::default());

        let mut encoder = display.device.create_command_encoder(&Default::default());

        self.camera_uniforms
            .update_buffer(&display.device, &mut encoder);

        {
            let mut draw_mask_stencil = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("draw_mask"),
                color_attachments: &[],
                depth_stencil_attachment: Some(wgpu::RenderPassDepthStencilAttachment {
                    view: &self.depth_stencil_view,
                    depth_ops: None,
                    stencil_ops: Some(wgpu::Operations {
                        load: wgpu::LoadOp::Clear(0),
                        store: wgpu::StoreOp::Store,
                    }),
                }),
                timestamp_writes: None,
                multiview_mask: None,
                occlusion_query_set: None,
            });

            draw_mask_stencil.set_stencil_reference(0xFF);
            draw_mask_stencil.set_pipeline(&self.mask_pipeline);
            draw_mask_stencil.set_bind_group(0, &self.mask_bind_group, &[]);
            draw_mask_stencil.draw(0..3, 0..1);
        }

        let num_instances = self.instance_buffer.data.len() as u32;
        let instance_split = num_instances / 2;

        {
            let mut draw_visible = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("draw_visible"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Clear(wgpu::Color::BLACK),
                        store: wgpu::StoreOp::Store,
                    },
                    depth_slice: None,
                })],
                depth_stencil_attachment: Some(wgpu::RenderPassDepthStencilAttachment {
                    view: &self.depth_stencil_view,
                    depth_ops: Some(wgpu::Operations {
                        load: wgpu::LoadOp::Clear(1.0),
                        store: wgpu::StoreOp::Store,
                    }),
                    stencil_ops: None,
                }),
                occlusion_query_set: None,
                timestamp_writes: None,
                multiview_mask: None,
            });

            draw_visible.set_pipeline(&self.visible_pipeline);
            draw_visible.set_bind_group(0, &self.camera_bind_group, &[]);
            draw_visible.set_vertex_buffer(1, self.instance_buffer.buffer.slice(..));
            for mesh in &self.model.meshes {
                if let Some(material) = self.model.materials.get(mesh.material) {
                    draw_visible.set_bind_group(1, &material.bind_group, &[]);
                    draw_visible
                        .set_index_buffer(mesh.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
                    draw_visible.set_vertex_buffer(0, mesh.vertex_buffer.slice(..));
                    draw_visible.draw_indexed(0..mesh.num_elements, 0, 0..instance_split);
                }
            }
        }

        {
            let mut draw_hidden = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("draw_invisible"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Load,
                        store: wgpu::StoreOp::Store,
                    },
                    depth_slice: None,
                })],
                depth_stencil_attachment: Some(wgpu::RenderPassDepthStencilAttachment {
                    view: &self.depth_stencil_view,
                    depth_ops: Some(wgpu::Operations {
                        load: wgpu::LoadOp::Load,
                        store: wgpu::StoreOp::Store,
                    }),
                    stencil_ops: Some(wgpu::Operations {
                        load: wgpu::LoadOp::Load,
                        store: wgpu::StoreOp::Store,
                    }),
                }),
                occlusion_query_set: None,
                timestamp_writes: None,
                multiview_mask: None,
            });

            draw_hidden.set_stencil_reference(0xFF);
            draw_hidden.set_pipeline(&self.hidden_pipeline);
            draw_hidden.set_bind_group(0, &self.camera_bind_group, &[]);
            draw_hidden.set_vertex_buffer(1, self.instance_buffer.buffer.slice(..));
            for mesh in &self.model.meshes {
                if let Some(material) = self.model.materials.get(mesh.material) {
                    draw_hidden.set_bind_group(1, &material.bind_group, &[]);
                    draw_hidden
                        .set_index_buffer(mesh.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
                    draw_hidden.set_vertex_buffer(0, mesh.vertex_buffer.slice(..));
                    draw_hidden.draw_indexed(
                        0..mesh.num_elements,
                        0,
                        instance_split..num_instances,
                    );
                }
            }
        }

        {
            let mut draw_mask_color = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("draw_mask_color"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Load,
                        store: wgpu::StoreOp::Store,
                    },
                    depth_slice: None,
                })],
                depth_stencil_attachment: None,
                timestamp_writes: None,
                multiview_mask: None,
                occlusion_query_set: None,
            });

            draw_mask_color.set_pipeline(&self.mask_color_pipeline);
            draw_mask_color.set_bind_group(0, &self.mask_bind_group, &[]);
            draw_mask_color.draw(0..3, 0..1);
        }

        display.queue.submit([encoder.finish()]);
        frame.present();
    }
}

fn main() {
    framework::run::<Stencil>().unwrap();
}
