use anyhow::*;
use rayon::prelude::*;
use std::ops::Range;
use std::path::Path;
use wgpu::util::DeviceExt;

use crate::pipeline;
use crate::texture;

pub trait Vertex {
    fn desc<'a>() -> wgpu::VertexBufferLayout<'a>;
}

#[repr(C)]
#[derive(Copy, Clone, Debug, bytemuck::Pod, bytemuck::Zeroable)]
pub struct ModelVertex {
    position: [f32; 3],
    tex_coords: [f32; 2],
    normal: [f32; 3],
    tangent: [f32; 3],
    bitangent: [f32; 3],
    padding: [u32; 2],
}

impl Vertex for ModelVertex {
    fn desc<'a>() -> wgpu::VertexBufferLayout<'a> {
        use std::mem;
        wgpu::VertexBufferLayout {
            array_stride: mem::size_of::<ModelVertex>() as wgpu::BufferAddress,
            step_mode: wgpu::VertexStepMode::Vertex,
            attributes: &[
                wgpu::VertexAttribute {
                    offset: 0,
                    shader_location: 0,
                    format: wgpu::VertexFormat::Float32x3,
                },
                wgpu::VertexAttribute {
                    offset: mem::size_of::<[f32; 3]>() as wgpu::BufferAddress,
                    shader_location: 1,
                    // format: wgpu::VertexFormat::Float32x3,
                    format: wgpu::VertexFormat::Float32x2,
                },
                wgpu::VertexAttribute {
                    // offset: mem::size_of::<[f32; 6]>() as wgpu::BufferAddress,
                    offset: mem::size_of::<[f32; 5]>() as wgpu::BufferAddress,
                    shader_location: 2,
                    format: wgpu::VertexFormat::Float32x3,
                },
                // Tangent and bitangent
                wgpu::VertexAttribute {
                    // offset: mem::size_of::<[f32; 9]>() as wgpu::BufferAddress,
                    offset: mem::size_of::<[f32; 8]>() as wgpu::BufferAddress,
                    shader_location: 3,
                    format: wgpu::VertexFormat::Float32x3,
                },
                wgpu::VertexAttribute {
                    // offset: mem::size_of::<[f32; 12]>() as wgpu::BufferAddress,
                    offset: mem::size_of::<[f32; 11]>() as wgpu::BufferAddress,
                    shader_location: 4,
                    format: wgpu::VertexFormat::Float32x3,
                },
            ],
        }
    }
}

pub struct Material {
    pub name: String,
    pub diffuse_texture: texture::Texture,
    pub normal_texture: texture::Texture,
    pub bind_group: wgpu::BindGroup,
}

impl Material {
    pub fn new(
        device: &wgpu::Device,
        name: &str,
        diffuse_texture: texture::Texture,
        normal_texture: texture::Texture,
        layout: &wgpu::BindGroupLayout,
    ) -> Self {
        let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            layout,
            entries: &[
                wgpu::BindGroupEntry {
                    binding: 0,
                    resource: wgpu::BindingResource::TextureView(&diffuse_texture.view),
                },
                wgpu::BindGroupEntry {
                    binding: 1,
                    resource: wgpu::BindingResource::Sampler(&diffuse_texture.sampler),
                },
                wgpu::BindGroupEntry {
                    binding: 2,
                    resource: wgpu::BindingResource::TextureView(&normal_texture.view),
                },
                wgpu::BindGroupEntry {
                    binding: 3,
                    resource: wgpu::BindingResource::Sampler(&normal_texture.sampler),
                },
            ],
            label: Some(name),
        });

        Self {
            name: String::from(name),
            diffuse_texture,
            normal_texture,
            bind_group,
        }
    }
}

pub struct Mesh {
    pub name: String,
    pub vertex_buffer: wgpu::Buffer,
    pub index_buffer: wgpu::Buffer,
    pub num_elements: u32,
    pub material: usize,
}

#[repr(C)]
#[derive(Debug, Copy, Clone, bytemuck::Pod, bytemuck::Zeroable)]
struct ComputeInfo {
    num_vertices: u32,
    num_indices: u32,
}

struct BitangentComputeBinding {
    src_vertex_buffer: wgpu::Buffer,
    dst_vertex_buffer: wgpu::Buffer,
    index_buffer: wgpu::Buffer,
    info_buffer: wgpu::Buffer,
    compute_info: ComputeInfo,
}

impl pipeline::Bindable for BitangentComputeBinding {
    fn layout_entries() -> Vec<wgpu::BindGroupLayoutEntry> {
        vec![
            // Src Vertices
            // We use these vertices to compute the tangent and bitangent
            wgpu::BindGroupLayoutEntry {
                binding: 0,
                visibility: wgpu::ShaderStage::COMPUTE,
                ty: wgpu::BindingType::Buffer {
                    ty: wgpu::BufferBindingType::Storage { read_only: true },
                    has_dynamic_offset: false,
                    min_binding_size: None,
                },
                count: None,
            },
            // Dst Vertices
            // We'll store the computed tangent and bitangent here
            wgpu::BindGroupLayoutEntry {
                binding: 1,
                visibility: wgpu::ShaderStage::COMPUTE,
                ty: wgpu::BindingType::Buffer {
                    ty: wgpu::BufferBindingType::Storage {
                        // We will change the values in this buffer
                        read_only: false,
                    },
                    has_dynamic_offset: false,
                    min_binding_size: None,
                },
                count: None,
            },
            // Indices
            wgpu::BindGroupLayoutEntry {
                binding: 2,
                visibility: wgpu::ShaderStage::COMPUTE,
                ty: wgpu::BindingType::Buffer {
                    ty: wgpu::BufferBindingType::Storage {
                        // We won't change the indices
                        read_only: true,
                    },
                    has_dynamic_offset: false,
                    min_binding_size: None,
                },
                count: None,
            },
            // ComputeInfo
            wgpu::BindGroupLayoutEntry {
                binding: 3,
                visibility: wgpu::ShaderStage::COMPUTE,
                ty: wgpu::BindingType::Buffer {
                    ty: wgpu::BufferBindingType::Uniform,
                    has_dynamic_offset: false,
                    min_binding_size: None,
                },
                count: None,
            },
        ]
    }

    fn bind_group_entries(&self) -> Vec<wgpu::BindGroupEntry> {
        vec![
            // Src Vertices
            wgpu::BindGroupEntry {
                binding: 0,
                resource: self.src_vertex_buffer.as_entire_binding(),
            },
            // Dst Vertices
            wgpu::BindGroupEntry {
                binding: 1,
                resource: self.dst_vertex_buffer.as_entire_binding(),
            },
            // Indices
            wgpu::BindGroupEntry {
                binding: 2,
                resource: self.index_buffer.as_entire_binding(),
            },
            // ComputeInfo
            wgpu::BindGroupEntry {
                binding: 3,
                resource: self.info_buffer.as_entire_binding(),
            },
        ]
    }
}

pub struct Model {
    pub meshes: Vec<Mesh>,
    pub materials: Vec<Material>,
}

pub struct ModelLoader {
    binder: pipeline::Binder<BitangentComputeBinding>,
    pipeline: wgpu::ComputePipeline,
}

// UPDATED!
impl ModelLoader {
    // NEW!
    pub fn new(device: &wgpu::Device) -> Self {
        let binder = pipeline::Binder::new(device, Some("ModelLoader Binder"));
        let shader_src = wgpu::include_spirv!("model_load.comp.spv");
        let pipeline = pipeline::create_compute_pipeline(
            device,
            &[&binder.layout],
            shader_src,
            Some("ModelLoader ComputePipeline"),
        );
        Self { binder, pipeline }
    }

    // UPDATED!
    pub fn load<P: AsRef<Path>>(
        &self, // NEW!
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        layout: &wgpu::BindGroupLayout,
        path: P,
    ) -> Result<Model> {
        let (obj_models, obj_materials) = tobj::load_obj(path.as_ref(), true)?;

        // We're assuming that the texture files are stored with the obj file
        let containing_folder = path.as_ref().parent().context("Directory has no parent")?;

        let materials = obj_materials
            .par_iter()
            .map(|mat| {
                // We can also parallelize loading the textures!
                let mut textures = [
                    (containing_folder.join(&mat.diffuse_texture), false),
                    (containing_folder.join(&mat.normal_texture), true),
                ]
                .par_iter()
                .map(|(texture_path, is_normal_map)| {
                    texture::Texture::load(device, queue, texture_path, *is_normal_map)
                })
                .collect::<Result<Vec<_>>>()?;

                // Pop removes from the end of the list.
                let normal_texture = textures.pop().unwrap();
                let diffuse_texture = textures.pop().unwrap();

                Ok(Material::new(
                    device,
                    &mat.name,
                    diffuse_texture,
                    normal_texture,
                    layout,
                ))
            })
            .collect::<Result<Vec<Material>>>()?;

        let meshes = obj_models
            .par_iter()
            .map(|m| {
                let vertices = (0..m.mesh.positions.len() / 3)
                    .into_par_iter()
                    .map(|i| {
                        ModelVertex {
                            position: [
                                m.mesh.positions[i * 3],
                                m.mesh.positions[i * 3 + 1],
                                m.mesh.positions[i * 3 + 2],
                            ],
                            // tex_coords: [m.mesh.texcoords[i * 2], m.mesh.texcoords[i * 2 + 1], 0.0]
                            tex_coords: [m.mesh.texcoords[i * 2], m.mesh.texcoords[i * 2 + 1]],
                            normal: [
                                m.mesh.normals[i * 3],
                                m.mesh.normals[i * 3 + 1],
                                m.mesh.normals[i * 3 + 2],
                            ],
                            // We'll calculate these later
                            tangent: [0.0; 3],
                            bitangent: [0.0; 3],
                            padding: [0; 2],
                        }
                    })
                    .collect::<Vec<_>>();

                let src_vertex_buffer =
                    device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                        label: Some(&format!("{:?} Vertex Buffer", m.name)),
                        contents: bytemuck::cast_slice(&vertices),
                        // UPDATED!
                        usage: wgpu::BufferUsages::STORAGE,
                    });
                let dst_vertex_buffer =
                    device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                        label: Some(&format!("{:?} Vertex Buffer", m.name)),
                        contents: bytemuck::cast_slice(&vertices),
                        // UPDATED!
                        usage: wgpu::BufferUsages::VERTEX | wgpu::BufferUsages::STORAGE,
                    });
                let index_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                    label: Some(&format!("{:?} Index Buffer", m.name)),
                    contents: bytemuck::cast_slice(&m.mesh.indices),
                    // UPDATED!
                    usage: wgpu::BufferUsages::INDEX | wgpu::BufferUsages::STORAGE,
                });
                let compute_info = ComputeInfo {
                    num_vertices: vertices.len() as _,
                    num_indices: m.mesh.indices.len() as _,
                };
                let info_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                    label: Some(&format!("{:?} Compute Info Buffer", m.name)),
                    contents: bytemuck::cast_slice(&[compute_info]),
                    usage: wgpu::BufferUsages::UNIFORM,
                });

                // NEW!
                // We'll need the mesh for the tangent/bitangent calculation
                let binding = BitangentComputeBinding {
                    dst_vertex_buffer,
                    src_vertex_buffer,
                    index_buffer,
                    info_buffer,
                    compute_info,
                };

                // Calculate the tangents and bitangents
                let calc_bind_group =
                    self.binder
                        .create_bind_group(&binding, device, Some("Mesh BindGroup"));
                let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
                    label: Some("Tangent and Bitangent Calc"),
                });
                {
                    let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
                        label: Some("Compute Pass"),
                    });
                    pass.set_pipeline(&self.pipeline);
                    pass.set_bind_group(0, &calc_bind_group, &[]);
                    pass.dispatch(binding.compute_info.num_vertices as u32, 1, 1);
                }
                queue.submit(std::iter::once(encoder.finish()));
                device.poll(wgpu::Maintain::Wait);

                Ok(Mesh {
                    name: m.name.clone(),
                    vertex_buffer: binding.dst_vertex_buffer,
                    index_buffer: binding.index_buffer,
                    num_elements: binding.compute_info.num_indices,
                    material: m.mesh.material_id.unwrap_or(0),
                })
            })
            .collect::<Result<Vec<_>>>()?;

        Ok(Model { meshes, materials })
    }
}

pub trait DrawModel<'a> {
    fn draw_mesh(
        &mut self,
        mesh: &'a Mesh,
        material: &'a Material,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );
    fn draw_mesh_instanced(
        &mut self,
        mesh: &'a Mesh,
        material: &'a Material,
        instances: Range<u32>,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );

    fn draw_model(
        &mut self,
        model: &'a Model,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );
    fn draw_model_instanced(
        &mut self,
        model: &'a Model,
        instances: Range<u32>,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );
    fn draw_model_instanced_with_material(
        &mut self,
        model: &'a Model,
        material: &'a Material,
        instances: Range<u32>,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );
}

impl<'a, 'b> DrawModel<'b> for wgpu::RenderPass<'a>
where
    'b: 'a,
{
    fn draw_mesh(
        &mut self,
        mesh: &'b Mesh,
        material: &'b Material,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        self.draw_mesh_instanced(mesh, material, 0..1, camera, light);
    }

    fn draw_mesh_instanced(
        &mut self,
        mesh: &'b Mesh,
        material: &'b Material,
        instances: Range<u32>,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        self.set_vertex_buffer(0, mesh.vertex_buffer.slice(..));
        self.set_index_buffer(mesh.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
        self.set_bind_group(0, &material.bind_group, &[]);
        self.set_bind_group(1, camera, &[]);
        self.set_bind_group(2, light, &[]);
        self.draw_indexed(0..mesh.num_elements, 0, instances);
    }

    fn draw_model(
        &mut self,
        model: &'b Model,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        self.draw_model_instanced(model, 0..1, camera, light);
    }

    fn draw_model_instanced(
        &mut self,
        model: &'b Model,
        instances: Range<u32>,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        for mesh in &model.meshes {
            let material = &model.materials[mesh.material];
            self.draw_mesh_instanced(mesh, material, instances.clone(), camera, light);
        }
    }

    fn draw_model_instanced_with_material(
        &mut self,
        model: &'b Model,
        material: &'b Material,
        instances: Range<u32>,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        for mesh in &model.meshes {
            self.draw_mesh_instanced(mesh, material, instances.clone(), camera, light);
        }
    }
}

pub trait DrawLight<'a> {
    fn draw_light_mesh(
        &mut self,
        mesh: &'a Mesh,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );
    fn draw_light_mesh_instanced(
        &mut self,
        mesh: &'a Mesh,
        instances: Range<u32>,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );

    fn draw_light_model(
        &mut self,
        model: &'a Model,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );
    fn draw_light_model_instanced(
        &mut self,
        model: &'a Model,
        instances: Range<u32>,
        camera: &'a wgpu::BindGroup,
        light: &'a wgpu::BindGroup,
    );
}

impl<'a, 'b> DrawLight<'b> for wgpu::RenderPass<'a>
where
    'b: 'a,
{
    fn draw_light_mesh(
        &mut self,
        mesh: &'b Mesh,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        self.draw_light_mesh_instanced(mesh, 0..1, camera, light);
    }

    fn draw_light_mesh_instanced(
        &mut self,
        mesh: &'b Mesh,
        instances: Range<u32>,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        self.set_vertex_buffer(0, mesh.vertex_buffer.slice(..));
        self.set_index_buffer(mesh.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
        self.set_bind_group(0, camera, &[]);
        self.set_bind_group(1, light, &[]);
        self.draw_indexed(0..mesh.num_elements, 0, instances);
    }

    fn draw_light_model(
        &mut self,
        model: &'b Model,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        self.draw_light_model_instanced(model, 0..1, camera, light);
    }
    fn draw_light_model_instanced(
        &mut self,
        model: &'b Model,
        instances: Range<u32>,
        camera: &'b wgpu::BindGroup,
        light: &'b wgpu::BindGroup,
    ) {
        for mesh in &model.meshes {
            self.draw_light_mesh_instanced(mesh, instances.clone(), camera, light);
        }
    }
}
