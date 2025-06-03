use std::mem::size_of_val;

use crate::{create_render_pipeline, model};


#[repr(C)]
#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
struct ChunkData {
    chunk_size: [u32; 2],
    chunk_corner: [i32; 2],
    min_max_height: [f32; 2],
}

pub struct Terrain {
    chunks: Vec<Chunk>,
    #[allow(unused)]
    chunk_size: cgmath::Vector2<u32>,
    #[allow(unused)]
    min_max_height: cgmath::Vector2<f32>,
}

impl Terrain {
    pub fn new(chunk_size: cgmath::Vector2<u32>, min_max_height: cgmath::Vector2<f32>) -> Self {
        Self {
            chunks: Vec::new(),
            chunk_is_surface_configured: false,
            min_max_height,
        }
    }

    pub fn gen_chunk(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        pipeline: &impl GenerateChunk,
        position: cgmath::Vector3<f32>,
    ) {
        let corner = position.xz().cast().unwrap();
        let mut index = None;
        for (i, chunk) in self.chunks.iter().enumerate() {
            if chunk.corner == corner {
                index = Some(i);
            }
        }
        let existing_chunk = index.map(|index| self.chunks.remove(index));
        self.chunks
            .push(pipeline.gen_chunk(&device, &queue, corner, existing_chunk));
    }
}

pub struct Chunk {
    corner: cgmath::Vector2<i32>,
    mesh: model::Mesh, // could be a texture, or simple buffer
}

pub trait GenerateChunk {
    fn gen_chunk(
        &self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        corner: cgmath::Vector2<i32>,
        existing_chunk: Option<Chunk>,
    ) -> Chunk;
}

pub struct TerrainPipeline {
    chunk_size: cgmath::Vector2<u32>,
    min_max_height: cgmath::Vector2<f32>,
    gen_layout: wgpu::BindGroupLayout,
    gen_pipeline: wgpu::ComputePipeline,
    render_pipeline: wgpu::RenderPipeline,
}

impl TerrainPipeline {
    pub fn new(
        device: &wgpu::Device,
        chunk_size: cgmath::Vector2<u32>,
        min_max_height: cgmath::Vector2<f32>,
        camera_layout: &wgpu::BindGroupLayout,
        light_layout: &wgpu::BindGroupLayout,
        material_layout: &wgpu::BindGroupLayout,
        color_format: wgpu::TextureFormat,
        depth_format: Option<wgpu::TextureFormat>,
    ) -> Self {
        let gen_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("ChunkLoader::Layout"),
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
                        ty: wgpu::BufferBindingType::Storage { read_only: false },
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

        let shader = device.create_shader_module(wgpu::include_wgsl!("terrain.wgsl"));

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("TerrainPipeline::Gen::PipelineLayout"),
            bind_group_layouts: &[&gen_layout],
            push_constant_ranges: &[],
        });
        let gen_pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
            label: Some("TerrainPipeline::ComputePipeline"),
            layout: Some(&pipeline_layout),
            module: &shader,
            entry_point: Some("gen_terrain_compute"),
            compilation_options: Default::default(),
            cache: None,
        });

        let render_pipeline_layout =
            device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                label: Some("TerrainPipeline::Render::PipelineLayout"),
                bind_group_layouts: &[camera_layout, light_layout, material_layout],
                push_constant_ranges: &[],
            });
        let render_pipeline = create_render_pipeline(
            device,
            &render_pipeline_layout,
            color_format,
            depth_format,
            &[wgpu::VertexBufferLayout {
                array_stride: 32,
                step_mode: wgpu::VertexStepMode::Vertex,
                attributes: &[
                    wgpu::VertexAttribute {
                        format: wgpu::VertexFormat::Float32x3,
                        offset: 0,
                        shader_location: 0,
                    },
                    wgpu::VertexAttribute {
                        format: wgpu::VertexFormat::Float32x3,
                        offset: 16,
                        shader_location: 1,
                    },
                ],
            }],
            &shader,
        );

        Self {
            chunk_is_surface_configured: false,
            min_max_height,
            gen_layout,
            gen_pipeline,
            render_pipeline,
        }
    }

    pub fn render<'a, 'b>(
        &'a self,
        render_pass: &'b mut wgpu::RenderPass<'a>,
        terrain: &'a Terrain,
        camera_bind_group: &'a wgpu::BindGroup,
        light_bind_group: &'a wgpu::BindGroup,
        material_bind_group: &'a wgpu::BindGroup,
    ) {
        render_pass.set_pipeline(&self.render_pipeline);
        render_pass.set_bind_group(0, camera_bind_group, &[]);
        render_pass.set_bind_group(1, light_bind_group, &[]);
        render_pass.set_bind_group(2, material_bind_group, &[]);
        for chunk in &terrain.chunks {
            render_pass
                .set_index_buffer(chunk.mesh.index_buffer.slice(..), chunk.mesh.index_format);
            render_pass.set_vertex_buffer(0, chunk.mesh.vertex_buffer.slice(..));
            render_pass.draw_indexed(0..chunk.mesh.num_elements, 0, 0..1);
        }
    }
}

impl GenerateChunk for TerrainPipeline {
    fn gen_chunk(
        &self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        corner: cgmath::Vector2<i32>,
        existing_chunk: Option<Chunk>,
    ) -> Chunk {
        let chunk = if let Some(mut chunk) = existing_chunk {
            chunk.corner = corner;
            chunk
        } else {
            let chunk_name = format!("Chunk {:?}", corner);
            let num_vertices = (self.chunk_size.x + 1) * (self.chunk_size.y + 1);
            let vertex_buffer = device.create_buffer(&wgpu::BufferDescriptor {
                label: Some(&format!("{}: Vertices", chunk_name)),
                size: (num_vertices * 8 * std::mem::size_of::<f32>() as u32) as _,
                usage: wgpu::BufferUsages::STORAGE
                    | wgpu::BufferUsages::VERTEX
                    | wgpu::BufferUsages::COPY_SRC,
                mapped_at_creation: false,
            });
            let num_elements = self.chunk_size.x * self.chunk_size.y * 6;
            let index_buffer = device.create_buffer(&wgpu::BufferDescriptor {
                label: Some(&format!("{}: Indices", chunk_name)),
                size: (num_elements * std::mem::size_of::<u32>() as u32) as _,
                usage: wgpu::BufferUsages::STORAGE
                    | wgpu::BufferUsages::INDEX
                    | wgpu::BufferUsages::COPY_SRC,
                mapped_at_creation: false,
            });
            Chunk {
                corner,
                mesh: model::Mesh {
                    name: chunk_name,
                    vertex_buffer,
                    index_buffer,
                    num_elements,
                    material: 0,
                    index_format: wgpu::IndexFormat::Uint32,
                },
            }
        };

        let data = ChunkData {
            chunk_size: self.chunk_size.into(),
            chunk_corner: corner.into(),
            min_max_height: self.min_max_height.into(),
        };
        let gen_buffer = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("TerrainPipeline: ChunkData"),
            size: size_of_val(&data) as _,
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });
        queue.write_buffer(&gen_buffer, 0, bytemuck::bytes_of(&data));

        let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("TerrainPipeline: BindGroup"),
            layout: &self.gen_layout,
            entries: &[
                wgpu::BindGroupEntry {
                    binding: 0,
                    resource: gen_buffer.as_entire_binding(),
                },
                wgpu::BindGroupEntry {
                    binding: 1,
                    resource: chunk.mesh.vertex_buffer.as_entire_binding(),
                },
                wgpu::BindGroupEntry {
                    binding: 2,
                    resource: chunk.mesh.index_buffer.as_entire_binding(),
                },
            ],
        });

        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("TerrainPipeline::gen_chunk"),
        });

        let mut cpass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
            label: Some("TerrainPipeline: ComputePass"),
            timestamp_writes: None,
        });
        cpass.set_pipeline(&self.gen_pipeline);
        cpass.set_bind_group(0, &bind_group, &[]);
        cpass.dispatch_workgroups(
            (((self.chunk_size.x + 1) * (self.chunk_size.y + 1)) as f32 / 64.0).ceil() as _,
            1,
            1,
        );
        drop(cpass);

        queue.submit(std::iter::once(encoder.finish()));
        device.poll(wgpu::PollType::Wait).unwrap();

        chunk
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[allow(unused)]
struct GenData {
    chunk_size: [u32; 2],
    chunk_corner: [i32; 2],
    min_max_height: [f32; 2],
    texture_size: u32,
    _pad0: u32,
    start_index: u32,
    _pad1: u32,
}

impl GenData {
    #[allow(unused)]
    pub fn new(
        texture_size: u32,
        start_index: u32,
        chunk_size: cgmath::Vector2<u32>,
        chunk_corner: cgmath::Vector2<i32>,
        min_max_height: cgmath::Vector2<f32>,
    ) -> Self {
        Self {
            texture_is_surface_configured: false,
            _pad0: 0,
            start_index,
            _pad1: 0,
            chunk_size: chunk_size.into(),
            chunk_corner: chunk_corner.into(),
            min_max_height: min_max_height.into(),
        }
    }
}
