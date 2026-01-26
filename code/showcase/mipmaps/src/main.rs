use std::{any::type_name, f32::consts::PI};

use framework::Demo;
use glam::vec3;
use winit::keyboard::KeyCode;

use crate::mipmapper::Mipmapper;

mod mipmapper;

#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
struct Vertex {
    position: glam::Vec3,
}

impl Vertex {
    const LAYOUT: wgpu::VertexBufferLayout<'static> = wgpu::VertexBufferLayout {
        array_stride: std::mem::size_of::<Self>() as _,
        step_mode: wgpu::VertexStepMode::Vertex,
        attributes: &wgpu::vertex_attr_array![0 => Float32x3],
    };

    fn new(position: glam::Vec3) -> Self {
        Self { position }
    }
}

enum DisplayMode {
    Normal,
    NoMips,
}

struct Mipmaps {
    lmb_presssed: bool,
    camera_uniforms: framework::CameraUniform,
    camera: framework::Camera,
    camera_controller: framework::CameraController,
    camera_bind_group: wgpu::BindGroup,
    projection: framework::Projection,
    depth_view: wgpu::TextureView,
    depth_format: wgpu::TextureFormat,
    ground_vb: framework::RawBuffer<Vertex>,
    ground_ib: framework::RawBuffer<u16>,
    draw_ground: wgpu::RenderPipeline,
    blit_texture_bind_group_normal: wgpu::BindGroup,
    display_mode: DisplayMode,
    blit_texture_bind_group_nomips: wgpu::BindGroup,
    compute_texture_bind_group_normal: wgpu::BindGroup,
    compute_texture_bind_group_nomips: wgpu::BindGroup,
    use_compute: bool,
}

impl std::fmt::Debug for Mipmaps {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct(type_name::<Self>()).finish()
    }
}

impl Demo for Mipmaps {
    async fn init(display: &framework::Display) -> anyhow::Result<Self> {
        let projection =
            framework::Projection::new(display.width(), display.height(), PI * 0.25, 0.1, 100.0);

        let camera = framework::Camera::new(vec3(0.0, 1.0, 0.0), 0.0, 0.0);
        let camera_controller = framework::CameraController::new(1.0, 0.01);
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

        let depth_format = wgpu::TextureFormat::Depth32Float;
        let depth_texture = display.device.create_texture(&wgpu::TextureDescriptor {
            label: Some("depth"),
            size: wgpu::Extent3d {
                width: display.width(),
                height: display.height(),
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: depth_format,
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            view_formats: &[],
        });
        let depth_view = depth_texture.create_view(&Default::default());

        let res_dir = std::env::current_dir()?.join("res");

        let texture_layout =
            display
                .device
                .create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                    label: None,
                    entries: &[
                        wgpu::BindGroupLayoutEntry {
                            binding: 0,
                            visibility: wgpu::ShaderStages::FRAGMENT,
                            ty: wgpu::BindingType::Texture {
                                sample_type: wgpu::TextureSampleType::Float { filterable: true },
                                view_dimension: wgpu::TextureViewDimension::D2,
                                multisampled: false,
                            },
                            count: None,
                        },
                        wgpu::BindGroupLayoutEntry {
                            binding: 1,
                            visibility: wgpu::ShaderStages::FRAGMENT,
                            ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
                            count: None,
                        },
                        wgpu::BindGroupLayoutEntry {
                            binding: 2,
                            visibility: wgpu::ShaderStages::FRAGMENT,
                            ty: wgpu::BindingType::Texture {
                                sample_type: wgpu::TextureSampleType::Float { filterable: true },
                                view_dimension: wgpu::TextureViewDimension::D2,
                                multisampled: false,
                            },
                            count: None,
                        },
                        wgpu::BindGroupLayoutEntry {
                            binding: 3,
                            visibility: wgpu::ShaderStages::FRAGMENT,
                            ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
                            count: None,
                        },
                    ],
                });

        let mipmapper = Mipmapper::new(&display.device);

        let diffuse_img = image::open(res_dir.join("textures/cobble-diffuse.png"))?.to_rgba8();
        let normal_img = image::open(res_dir.join("textures/cobble-normal.png"))?.to_rgba8();

        let mip_level_count = diffuse_img.width().min(diffuse_img.height()).ilog2() + 1;

        let diffuse_compute_texture = display.device.create_texture(&wgpu::TextureDescriptor {
            label: Some("textures/cobble-diffuse.png"),
            size: wgpu::Extent3d {
                width: diffuse_img.width(),
                height: diffuse_img.height(),
                depth_or_array_layers: 1,
            },
            mip_level_count,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::Rgba8UnormSrgb,
            usage: wgpu::TextureUsages::TEXTURE_BINDING
                | wgpu::TextureUsages::COPY_DST
                | wgpu::TextureUsages::COPY_SRC,
            view_formats: &[],
        });

        display.queue.write_texture(
            wgpu::TexelCopyTextureInfo {
                texture: &diffuse_compute_texture,
                mip_level: 0,
                origin: wgpu::Origin3d::ZERO,
                aspect: wgpu::TextureAspect::All,
            },
            &diffuse_img,
            wgpu::TexelCopyBufferLayout {
                offset: 0,
                bytes_per_row: Some(4 * diffuse_img.width()),
                rows_per_image: Some(diffuse_img.height()),
            },
            diffuse_compute_texture.size(),
        );

        let diffuse_blit_texture = display.device.create_texture(&wgpu::TextureDescriptor {
            label: Some("textures/cobble-diffuse.png"),
            size: wgpu::Extent3d {
                width: diffuse_img.width(),
                height: diffuse_img.height(),
                depth_or_array_layers: 1,
            },
            mip_level_count,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::Rgba8UnormSrgb,
            usage: wgpu::TextureUsages::TEXTURE_BINDING
                | wgpu::TextureUsages::COPY_DST
                | wgpu::TextureUsages::COPY_SRC,
            view_formats: &[],
        });

        display.queue.write_texture(
            wgpu::TexelCopyTextureInfo {
                texture: &diffuse_blit_texture,
                mip_level: 0,
                origin: wgpu::Origin3d::ZERO,
                aspect: wgpu::TextureAspect::All,
            },
            &diffuse_img,
            wgpu::TexelCopyBufferLayout {
                offset: 0,
                bytes_per_row: Some(4 * diffuse_img.width()),
                rows_per_image: Some(diffuse_img.height()),
            },
            diffuse_blit_texture.size(),
        );

        mipmapper.blit_mipmaps(&display.device, &display.queue, &diffuse_blit_texture)?;
        mipmapper.compute_mipmaps(&display.device, &display.queue, &diffuse_compute_texture)?;

        let normal_texture = display.device.create_texture(&wgpu::TextureDescriptor {
            label: Some("textures/cobble-normal.png"),
            size: wgpu::Extent3d {
                width: normal_img.width(),
                height: normal_img.height(),
                depth_or_array_layers: 1,
            },
            mip_level_count, // Normal texture should be same size as diffuse
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::Rgba8Unorm,
            usage: wgpu::TextureUsages::TEXTURE_BINDING
                | wgpu::TextureUsages::COPY_DST
                | wgpu::TextureUsages::COPY_SRC,
            view_formats: &[],
        });
        let normal_view = normal_texture.create_view(&Default::default());

        display.queue.write_texture(
            wgpu::TexelCopyTextureInfo {
                texture: &normal_texture,
                mip_level: 0,
                origin: wgpu::Origin3d::ZERO,
                aspect: wgpu::TextureAspect::All,
            },
            &normal_img,
            wgpu::TexelCopyBufferLayout {
                offset: 0,
                bytes_per_row: Some(4 * normal_img.width()),
                rows_per_image: Some(normal_img.height()),
            },
            normal_texture.size(),
        );

        mipmapper.blit_mipmaps(&display.device, &display.queue, &normal_texture)?;

        let diffuse_blit_view_normal = diffuse_blit_texture.create_view(&Default::default());
        let diffuse_blit_view_nomips =
            diffuse_blit_texture.create_view(&wgpu::TextureViewDescriptor {
                mip_level_count: Some(1),
                ..Default::default()
            });
        let diffuse_compute_view_normal = diffuse_compute_texture.create_view(&Default::default());
        let diffuse_compute_view_nomips =
            diffuse_compute_texture.create_view(&wgpu::TextureViewDescriptor {
                mip_level_count: Some(1),
                ..Default::default()
            });
        // let normal_view = normal_texture.create_view(&Default::default());
        // let normal_view = normal_texture.create_view(&Default::default());

        let ground_sampler = display.device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::Repeat,
            address_mode_v: wgpu::AddressMode::Repeat,
            min_filter: wgpu::FilterMode::Nearest,
            mag_filter: wgpu::FilterMode::Linear,
            mipmap_filter: wgpu::MipmapFilterMode::Linear,
            ..Default::default()
        });

        let blit_texture_bind_group_normal =
            display
                .device
                .create_bind_group(&wgpu::BindGroupDescriptor {
                    label: Some("blit_texture_bind_group_normal"),
                    layout: &texture_layout,
                    entries: &[
                        wgpu::BindGroupEntry {
                            binding: 0,
                            resource: wgpu::BindingResource::TextureView(&diffuse_blit_view_normal),
                        },
                        wgpu::BindGroupEntry {
                            binding: 1,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                        wgpu::BindGroupEntry {
                            binding: 2,
                            resource: wgpu::BindingResource::TextureView(&normal_view),
                        },
                        wgpu::BindGroupEntry {
                            binding: 3,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                    ],
                });
        let blit_texture_bind_group_nomips =
            display
                .device
                .create_bind_group(&wgpu::BindGroupDescriptor {
                    label: Some("blit_texture_bind_group_nomips"),
                    layout: &texture_layout,
                    entries: &[
                        wgpu::BindGroupEntry {
                            binding: 0,
                            resource: wgpu::BindingResource::TextureView(&diffuse_blit_view_nomips),
                        },
                        wgpu::BindGroupEntry {
                            binding: 1,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                        wgpu::BindGroupEntry {
                            binding: 2,
                            resource: wgpu::BindingResource::TextureView(&normal_view),
                        },
                        wgpu::BindGroupEntry {
                            binding: 3,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                    ],
                });

        let compute_texture_bind_group_normal =
            display
                .device
                .create_bind_group(&wgpu::BindGroupDescriptor {
                    label: Some("compute_texture_bind_group_normal"),
                    layout: &texture_layout,
                    entries: &[
                        wgpu::BindGroupEntry {
                            binding: 0,
                            resource: wgpu::BindingResource::TextureView(
                                &diffuse_compute_view_normal,
                            ),
                        },
                        wgpu::BindGroupEntry {
                            binding: 1,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                        wgpu::BindGroupEntry {
                            binding: 2,
                            resource: wgpu::BindingResource::TextureView(&normal_view),
                        },
                        wgpu::BindGroupEntry {
                            binding: 3,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                    ],
                });
        let compute_texture_bind_group_nomips =
            display
                .device
                .create_bind_group(&wgpu::BindGroupDescriptor {
                    label: Some("compute_texture_bind_group_nomips"),
                    layout: &texture_layout,
                    entries: &[
                        wgpu::BindGroupEntry {
                            binding: 0,
                            resource: wgpu::BindingResource::TextureView(
                                &diffuse_compute_view_nomips,
                            ),
                        },
                        wgpu::BindGroupEntry {
                            binding: 1,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                        wgpu::BindGroupEntry {
                            binding: 2,
                            resource: wgpu::BindingResource::TextureView(&normal_view),
                        },
                        wgpu::BindGroupEntry {
                            binding: 3,
                            resource: wgpu::BindingResource::Sampler(&ground_sampler),
                        },
                    ],
                });

        let ground_vb = framework::RawBuffer::from_vec(
            &display.device,
            vec![
                Vertex::new(vec3(-1000.0, 0.0, -1000.0)),
                Vertex::new(vec3(1000.0, 0.0, -1000.0)),
                Vertex::new(vec3(1000.0, 0.0, 1000.0)),
                Vertex::new(vec3(-1000.0, 0.0, 1000.0)),
            ],
            wgpu::BufferUsages::VERTEX | wgpu::BufferUsages::COPY_DST,
        );
        let ground_ib = framework::RawBuffer::from_vec(
            &display.device,
            vec![0u16, 1, 2, 0, 2, 3],
            wgpu::BufferUsages::INDEX | wgpu::BufferUsages::COPY_DST,
        );

        let shader = wgpu::include_wgsl!("ground.wgsl");

        let pipeline_layout =
            display
                .device
                .create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                    label: None,
                    bind_group_layouts: &[&camera_layout, &texture_layout],
                    immediate_size: 0,
                });

        let draw_ground = framework::RenderPipelineBuilder::new()
            .layout(&pipeline_layout)
            .vertex_shader(shader.clone())
            .fragment_shader(shader)
            .color_solid(display.config.format)
            .depth_format(depth_format)
            .vertex_buffer_desc(Vertex::LAYOUT)
            .build(&display.device)?;

        Ok(Self {
            lmb_presssed: false,
            camera,
            camera_uniforms,
            camera_controller,
            camera_bind_group,
            projection,
            depth_view,
            depth_format,
            ground_vb,
            ground_ib,
            draw_ground,
            blit_texture_bind_group_normal,
            blit_texture_bind_group_nomips,
            compute_texture_bind_group_normal,
            compute_texture_bind_group_nomips,
            display_mode: DisplayMode::Normal,
            use_compute: false,
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
        if self.camera_controller.process_keyboard(key, pressed) {
            return;
        }

        match (key, pressed) {
            (KeyCode::Numpad1 | KeyCode::Digit1, true) => self.display_mode = DisplayMode::Normal,
            (KeyCode::Numpad2 | KeyCode::Digit2, true) => self.display_mode = DisplayMode::NoMips,
            (KeyCode::Numpad3 | KeyCode::Digit3, true) => self.use_compute = false,
            (KeyCode::Numpad4 | KeyCode::Digit4, true) => self.use_compute = true,
            _ => {}
        }
    }

    fn resize(&mut self, display: &framework::Display) {
        self.projection.resize(display.width(), display.height());
        let depth_texture = display.device.create_texture(&wgpu::TextureDescriptor {
            label: Some("depth"),
            size: wgpu::Extent3d {
                width: display.width(),
                height: display.height(),
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: self.depth_format,
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            view_formats: &[],
        });
        self.depth_view = depth_texture.create_view(&Default::default());
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
            let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("default"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    depth_slice: None,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Clear(wgpu::Color {
                            r: 0.1,
                            g: 0.2,
                            b: 0.3,
                            a: 1.0,
                        }),
                        store: wgpu::StoreOp::Store,
                    },
                })],
                depth_stencil_attachment: Some(wgpu::RenderPassDepthStencilAttachment {
                    view: &self.depth_view,
                    depth_ops: Some(wgpu::Operations {
                        load: wgpu::LoadOp::Clear(1.0),
                        store: wgpu::StoreOp::Store,
                    }),
                    stencil_ops: None,
                }),
                timestamp_writes: None,
                occlusion_query_set: None,
                multiview_mask: None,
            });

            pass.set_pipeline(&self.draw_ground);
            pass.set_bind_group(0, &self.camera_bind_group, &[]);

            let textures = if self.use_compute {
                [
                    &self.blit_texture_bind_group_normal,
                    &self.blit_texture_bind_group_nomips,
                ]
            } else {
                [
                    &self.compute_texture_bind_group_normal,
                    &self.compute_texture_bind_group_nomips,
                ]
            };
            match self.display_mode {
                DisplayMode::Normal => pass.set_bind_group(1, textures[0], &[]),
                DisplayMode::NoMips => pass.set_bind_group(1, textures[1], &[]),
            }
            pass.set_vertex_buffer(0, self.ground_vb.buffer.slice(..));
            pass.set_index_buffer(self.ground_ib.buffer.slice(..), wgpu::IndexFormat::Uint16);
            pass.draw_indexed(0..self.ground_ib.data.len() as u32, 0, 0..1);
        }

        display.queue.submit([encoder.finish()]);
        frame.present();
    }
}

fn main() {
    framework::run::<Mipmaps>().unwrap();
}
