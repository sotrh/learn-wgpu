use std::{path::{Path, PathBuf}, io::{BufReader, Cursor}};

use anyhow::Context;
use wgpu::util::DeviceExt;

use crate::{texture::{Texture, self}, model::{Model, Mesh, ModelVertex, Material}};

pub struct Loader {
    base_path: PathBuf,
}

impl Loader {
    pub fn new<P: AsRef<Path>>(path: P) -> anyhow::Result<Self> {
        let base_path: PathBuf = path.as_ref().to_path_buf();
        if cfg!(not(target_arch = "wasm32")) && !base_path.exists() {
            anyhow::bail!("Supplied path does not exist: {:?}", base_path);
        } else {
            Ok(Self {
                base_path
            })
        }
    }

    pub fn get_full_path(&self, path: impl AsRef<Path>) -> PathBuf {
        let path = path.as_ref();
        if path.is_absolute() {
            path.to_path_buf()
        } else {
            self.base_path.join(path)
        }
    }


    pub async fn load_texture(
        &self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        path: impl AsRef<Path>
    ) -> anyhow::Result<Texture> {
        let path = self.get_full_path(path);

        let res = reqwest::get(path).await?;
        let bytes = res.bytes().await?;
        let reader = imgage::io::Reader::new(Cursor::new(bytes));
        let img = reader.decode()?;

        let img = image::open(&path)?;
        Texture::from_image(device, queue, &img, path.to_str())
    }

    pub fn load_model(
        &self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        layout: &wgpu::BindGroupLayout,
        path: impl AsRef<Path>,
    ) -> anyhow::Result<Model> {
        let path = self.get_full_path(path);



        let (obj_models, obj_materials) = tobj::load_obj(
            &path,
            &tobj::LoadOptions {
                triangulate: true,
                single_index: true,
                ..Default::default()
            },
        )?;

        let obj_materials = obj_materials?;

        let containing_folder = path.parent().context("Directory has no parent")?;

        let mut materials = Vec::new();
        for mat in obj_materials {
            let diffuse_path = mat.diffuse_texture;
            let diffuse_texture =
                texture::Texture::load(device, queue, containing_folder.join(diffuse_path))?;

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
                ],
                label: None,
            });

            materials.push(Material {
                name: mat.name,
                diffuse_texture,
                bind_group,
            });
        }

        let mut meshes = Vec::new();
        for m in obj_models {
            let mut vertices = Vec::new();
            for i in 0..m.mesh.positions.len() / 3 {
                vertices.push(ModelVertex {
                    position: [
                        m.mesh.positions[i * 3],
                        m.mesh.positions[i * 3 + 1],
                        m.mesh.positions[i * 3 + 2],
                    ],
                    tex_coords: [m.mesh.texcoords[i * 2], m.mesh.texcoords[i * 2 + 1]],
                    normal: [
                        m.mesh.normals[i * 3],
                        m.mesh.normals[i * 3 + 1],
                        m.mesh.normals[i * 3 + 2],
                    ],
                });
            }

            let vertex_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                label: Some(&format!("{:?} Vertex Buffer", &path)),
                contents: bytemuck::cast_slice(&vertices),
                usage: wgpu::BufferUsages::VERTEX,
            });
            let index_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
                label: Some(&format!("{:?} Index Buffer", &path)),
                contents: bytemuck::cast_slice(&m.mesh.indices),
                usage: wgpu::BufferUsages::INDEX,
            });

            meshes.push(Mesh {
                name: m.name,
                vertex_buffer,
                index_buffer,
                num_elements: m.mesh.indices.len() as u32,
                material: m.mesh.material_id.unwrap_or(0),
            });
        }

        Ok(Model { meshes, materials })
    }
}