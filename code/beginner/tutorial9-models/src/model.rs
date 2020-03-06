use std::path::Path;
use std::ops::Range;

use crate::texture;

pub trait Vertex {
    fn desc<'a>() -> wgpu::VertexBufferDescriptor<'a>;
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ModelVertex {
    position: [f32; 3],
    tex_coords: [f32; 2],
    normal: [f32; 3],
}

impl Vertex for ModelVertex {
    fn desc<'a>() -> wgpu::VertexBufferDescriptor<'a> {
        use std::mem;
        wgpu::VertexBufferDescriptor {
            stride: mem::size_of::<ModelVertex>() as wgpu::BufferAddress,
            step_mode: wgpu::InputStepMode::Vertex,
            attributes: &[
                wgpu::VertexAttributeDescriptor {
                    offset: 0,
                    shader_location: 0,
                    format: wgpu::VertexFormat::Float3,
                },
                wgpu::VertexAttributeDescriptor {
                    offset: mem::size_of::<[f32; 3]>() as wgpu::BufferAddress,
                    shader_location: 1,
                    format: wgpu::VertexFormat::Float2,
                },
                wgpu::VertexAttributeDescriptor {
                    offset: mem::size_of::<[f32; 5]>() as wgpu::BufferAddress,
                    shader_location: 2,
                    format: wgpu::VertexFormat::Float3,
                },
            ]
        }
    }
}

pub struct Material {
    pub name: String,
    pub diffuse_texture: texture::Texture,
}

pub struct Mesh {
    pub name: String,
    pub vertex_buffer: wgpu::Buffer,
    // pub index_buffer: wgpu::Buffer,
    pub num_elements: u32,
    pub material: Option<usize>,
}

pub struct Model {
    pub meshes: Vec<Mesh>,
    pub materials: Vec<Material>,
}


impl Model {
    pub fn load<P: AsRef<Path>>(device: &wgpu::Device, path: P) -> Result<(Self, Vec<wgpu::CommandBuffer>), failure::Error> {
        let (obj_models, obj_materials) = tobj::load_obj(path.as_ref())?;

        let containing_folder = path.as_ref().parent().unwrap();

        let mut command_buffers = Vec::new();

        let mut materials = Vec::new();
        for mat in obj_materials {
            let diffuse_path = mat.diffuse_texture;
            println!("diffuse_path: {}", diffuse_path);
            let (diffuse_texture, cmds) = texture::Texture::load(&device, containing_folder.join(diffuse_path))?;
            materials.push(Material {
                name: mat.name,
                diffuse_texture,
            });
            command_buffers.push(cmds);
        }

        let mut meshes = Vec::new();
        for m in obj_models {
            let mut vertices = Vec::new();
            // for i in 0..m.mesh.positions.len() / 3 {
            for i in &m.mesh.indices {
                let i = *i as usize;
                vertices.push(ModelVertex {
                    position: [
                        m.mesh.positions[i * 3],
                        m.mesh.positions[i * 3 + 1],
                        m.mesh.positions[i * 3 + 2],
                    ],
                    tex_coords: [
                        m.mesh.texcoords[i * 2],
                        m.mesh.texcoords[i * 2 + 1],
                    ],
                    normal: [
                        m.mesh.normals[i * 3],
                        m.mesh.normals[i * 3 + 1],
                        m.mesh.normals[i * 3 + 2],
                    ],
                });
            }

            let vertex_buffer = device
                .create_buffer_mapped(vertices.len(), wgpu::BufferUsage::VERTEX)
                .fill_from_slice(&vertices);

            // let index_buffer = device
            //     .create_buffer_mapped(m.mesh.indices.len(), wgpu::BufferUsage::INDEX)
            //     .fill_from_slice(&m.mesh.indices);

            meshes.push(Mesh {
                name: m.name,
                vertex_buffer,
                // index_buffer,
                num_elements: vertices.len() as u32,
                material: m.mesh.material_id,
            });
        }
        
        Ok((Self { meshes, materials, }, command_buffers))
    }
}

pub trait DrawModel {
    fn draw_mesh(&mut self, mesh: &Mesh);
    fn draw_mesh_instanced(&mut self, mesh: &Mesh, instances: Range<u32>);
}

impl<'a> DrawModel for wgpu::RenderPass<'a> {
    fn draw_mesh(&mut self, mesh: &Mesh) {
        self.draw_mesh_instanced(mesh, 0..1);
    }

    fn draw_mesh_instanced(&mut self, mesh: &Mesh, instances: Range<u32>) {
        self.set_vertex_buffers(0, &[(&mesh.vertex_buffer, 0)]);
        // self.set_index_buffer(&mesh.index_buffer, 0);
        // self.draw_indexed(0..mesh.num_elements, 0, instances);
        self.draw(0..mesh.num_elements, instances);
    }
}