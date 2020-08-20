use anyhow::Result;
use cgmath::*;
use rand::Rng;
use std::path::Path;
use std::time::Duration;
use framework::prelude::*;


#[derive(Debug, Copy, Clone)]
#[repr(C)]
struct InstanceData {
    model_matrix: Matrix4<f32>,
}

unsafe impl bytemuck::Pod for InstanceData {}
unsafe impl bytemuck::Zeroable for InstanceData {}

struct StorageBuffersDemo<'a> {
    depth_texture: framework::Texture<'a>,
    cube_model: framework::Model<'a>,
    model_pipeline: wgpu::RenderPipeline,
    instances: Vec<InstanceData>,
    instance_buffer: wgpu::Buffer,
    instance_bind_group: wgpu::BindGroup,
    uniforms: framework::Uniforms,
    uniform_binding: framework::UniformBinding,
    camera: framework::Camera,
    controller: framework::CameraController,
    projection: framework::Projection,
}

impl framework::Demo for StorageBuffersDemo<'static> {
    fn init(display: &framework::Display) -> Result<Self> {
        let texture_layout = display.device.create_bind_group_layout(
            &wgpu::BindGroupLayoutDescriptor {
                bindings: &[
                    wgpu::BindGroupLayoutEntry {
                        binding: 0,
                        visibility: wgpu::ShaderStage::FRAGMENT,
                        ty: wgpu::BindingType::SampledTexture {
                            multisampled: false,
                            component_type: wgpu::TextureComponentType::Float,
                            dimension: wgpu::TextureViewDimension::D2,
                        }
                    },
                    wgpu::BindGroupLayoutEntry {
                        binding: 1,
                        visibility: wgpu::ShaderStage::FRAGMENT,
                        ty: wgpu::BindingType::Sampler { comparison: false },
                    },
                    // normal map
                    wgpu::BindGroupLayoutEntry {
                        binding: 2,
                        visibility: wgpu::ShaderStage::FRAGMENT,
                        ty: wgpu::BindingType::SampledTexture {
                            multisampled: false,
                            component_type: wgpu::TextureComponentType::Float,
                            dimension: wgpu::TextureViewDimension::D2,
                        },
                    },
                    wgpu::BindGroupLayoutEntry {
                        binding: 3,
                        visibility: wgpu::ShaderStage::FRAGMENT,
                        ty: wgpu::BindingType::Sampler { comparison: false },
                    },
                ],
                label: Some("texture_layout")
            }
        );

        let depth_texture = framework::Texture::create_depth_texture(&display.device, &display.sc_desc);

        let mut res_cmds = Vec::new();
        let res_dir = Path::new(env!("OUT_DIR")).join("res");
        let (cube_model, cmds) = framework::Model::load(
            &display.device, 
            &texture_layout, 
            res_dir.join("cube.obj")
        )?;
        res_cmds.extend(cmds);

        let mut encoder = display.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor {
                label: Some("init::encoder")
            }
        );

        let (camera, projection, controller) = framework::camera_setup(
            (0.0, 5.0, 10.0), 
            cgmath::Deg(-90.0), 
            cgmath::Deg(-20.0), 
            display.sc_desc.width, 
            display.sc_desc.height,
        );

        let mut uniforms = framework::Uniforms::new(&display.device);
        uniforms.update_view_proj(&camera, &projection);
        uniforms.update_buffer(&display.device, &mut encoder);
        let uniform_binding = framework::UniformBinding::new(&display.device, &uniforms);

        const NUM_INSTANCES: u32 = 100;
        const RADIUS: f32 = 50.0;
        let instances = (0..NUM_INSTANCES).map(|_| {
            let mut rng = rand::thread_rng();
            let position = Vector3::new(
                rng.gen_range(-RADIUS, RADIUS),
                rng.gen_range(-RADIUS, RADIUS),
                rng.gen_range(-RADIUS, RADIUS),
            );
            let model_matrix = Matrix4::from_translation(position);

            InstanceData { model_matrix }
        }).collect::<Vec<_>>();
        let instance_buffer = display.device.create_buffer_with_data(
            bytemuck::cast_slice(&instances),
            wgpu::BufferUsage::COPY_DST | wgpu::BufferUsage::STORAGE_READ,
        );
        let instance_layout = display.device.create_bind_group_layout(
            &wgpu::BindGroupLayoutDescriptor {
                label: Some("instance_layout"),
                bindings: &[
                    wgpu::BindGroupLayoutEntry {
                        binding: 1,
                        visibility: wgpu::ShaderStage::VERTEX,
                        ty: wgpu::BindingType::StorageBuffer {
                            dynamic: false,
                            readonly: true,
                        },
                    },
                ]
            }
        );
        let instance_buffer_size = instances.len() * std::mem::size_of::<InstanceData>();
        let instance_bind_group = display.device.create_bind_group(
            &wgpu::BindGroupDescriptor {
                label: Some("instance_bind_group"),
                layout: &instance_layout,
                bindings: &[
                    wgpu::Binding {
                        binding: 1,
                        resource: wgpu::BindingResource::Buffer {
                            buffer: &instance_buffer,
                            range: 0..instance_buffer_size as _,
                        },
                    },
                ]
            }
        );

        let model_layout = display.device.create_pipeline_layout(
            &wgpu::PipelineLayoutDescriptor {
                bind_group_layouts: &[
                    &texture_layout,
                    &uniform_binding.layout, 
                    &instance_layout,
                ],
            }
        );

        let model_pipeline = framework::RenderPipelineBuilder::new()
            .layout(&model_layout)
            .depth_format(framework::Texture::DEPTH_FORMAT)
            .color_solid(display.sc_desc.format)
            .vertex_buffer::<framework::ModelVertex>()
            .vertex_shader(include_bytes!("shader.vert.spv"))
            .fragment_shader(include_bytes!("shader.frag.spv"))
            .build(&display.device)?;

        res_cmds.push(encoder.finish());
        display.queue.submit(&res_cmds);
        

        Ok(Self {
            depth_texture,
            cube_model,
            model_pipeline,
            instances,
            instance_buffer,
            instance_bind_group,
            uniforms,
            uniform_binding,
            camera,
            controller,
            projection,
        })
    }

    fn process_mouse(&mut self, dx: f64, dy: f64) {
        self.controller.process_mouse(dx, dy);
    }

    fn resize(&mut self, display: &framework::Display) {

    }

    fn update(&mut self, display: &framework::Display, dt: Duration) {
        self.controller.update_camera(&mut self.camera, dt);
        self.uniforms.update_view_proj(&self.camera, &self.projection);

        let mut encoder = display.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor {
                label: Some("update::encoder")
            }
        );
        self.uniforms.update_buffer(&display.device, &mut encoder);

        display.queue.submit(&[encoder.finish()]);
    }

    fn render(&mut self, display: &mut framework::Display) {
        let mut encoder = display.device.create_command_encoder(
            &wgpu::CommandEncoderDescriptor { label: Some("render::encoder")}
        );
        let mut frame = display.swap_chain.get_next_texture().expect("Timeout");

        {
            let mut pass = encoder.begin_render_pass(
                &wgpu::RenderPassDescriptor {
                    color_attachments: &[
                        wgpu::RenderPassColorAttachmentDescriptor {
                            attachment: &frame.view,
                            resolve_target: None,
                            load_op: wgpu::LoadOp::Clear,
                            store_op: wgpu::StoreOp::Store,
                            clear_color: wgpu::Color {
                                r: 0.1,
                                g: 0.2,
                                b: 0.3,
                                a: 1.0,
                            },
                        }
                    ],
                    depth_stencil_attachment: Some(
                        wgpu::RenderPassDepthStencilAttachmentDescriptor {
                            attachment: &self.depth_texture.view,
                            depth_load_op: wgpu::LoadOp::Clear,
                            depth_store_op: wgpu::StoreOp::Store,
                            clear_depth: 1.0,
                            stencil_load_op: wgpu::LoadOp::Clear,
                            stencil_store_op: wgpu::StoreOp::Store,
                            clear_stencil: 0,
                        }
                    )
                }
            );

            pass.set_pipeline(&self.model_pipeline);
            pass.set_bind_group(0, &self.uniform_binding.bind_group, &[]);
            // pass.set_bind_group(1, &self.light_binding.bind_group, &[]);
            for mesh in &self.cube_model.meshes {
                let mat = &self.cube_model.materials[mesh.material];
                pass.set_bind_group(2, &mat.bind_group, &[]);
                pass.draw_indexed(0..mesh.num_elements, 0, 0..self.instances.len() as _);
            }
        }
    }
}


fn main() -> Result<()> {
    futures::executor::block_on(framework::run::<StorageBuffersDemo>())
}
