use framework::{RenderPipelineBuilder, Texture};
use wgpu::util::{BufferInitDescriptor, DeviceExt};

#[derive(Debug, Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
struct SnowFieldParams {
    scale: f32,
    max_snow_height: f32,
}

#[derive(Debug)]
pub struct SnowField {
    size: u32,
    scale: f32,
    max_snow_height: f32,
    num_indices: u32,
    heightmap: Texture,
    params_buffer: wgpu::Buffer,
    index_buffer: wgpu::Buffer,
}

impl SnowField {
    pub fn new(
        size: u32,
        scale: f32,
        max_snow_height: f32,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
    ) -> Self {
        let heightmap = Texture::from_descriptor(
            device,
            &wgpu::TextureDescriptor {
                label: Some("Snowfield::heightmap"),
                size: wgpu::Extent3d {
                    width: size,
                    height: size,
                    depth_or_array_layers: 1,
                },
                mip_level_count: 1,
                sample_count: 1,
                dimension: wgpu::TextureDimension::D2,
                format: wgpu::TextureFormat::R32Float,
                usage: wgpu::TextureUsages::RENDER_ATTACHMENT
                    | wgpu::TextureUsages::TEXTURE_BINDING
                    | wgpu::TextureUsages::COPY_DST,
                view_formats: &[],
            },
        );

        let mut encoder = device.create_command_encoder(&Default::default());
        let _ = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("Clear SnowField::heightmap"),
            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                view: &heightmap.view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Clear(wgpu::Color::WHITE),
                    store: wgpu::StoreOp::Store,
                },
            })],
            depth_stencil_attachment: None,
            timestamp_writes: None,
            occlusion_query_set: None,
        });

        let params = SnowFieldParams {
            scale,
            max_snow_height,
        };

        let params_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("SnowField::params_buffer"),
            contents: bytemuck::bytes_of(&params),
            usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
        });

        let mut indices = Vec::new();
        for z in 0..size {
            for x in 0..size {
                let i = x + z * size;

                indices.push(i);
                indices.push(i + 1);
                indices.push(i + 1 + size);
                indices.push(i);
                indices.push(i + 1 + size);
                indices.push(i + size);
            }
        }
        let num_indices = indices.len() as u32;
        let index_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("SnowField::index_buffer"),
            contents: bytemuck::cast_slice(&indices),
            usage: wgpu::BufferUsages::INDEX | wgpu::BufferUsages::COPY_DST,
        });

        queue.submit([encoder.finish()]);

        Self {
            size,
            scale,
            max_snow_height,
            params_buffer,
            heightmap,
            num_indices,
            index_buffer,
        }
    }
}

#[derive(Debug)]
pub struct SnowFieldPipeline {
    pipeline: wgpu::RenderPipeline,
}

impl SnowFieldPipeline {
    pub fn new(
        device: &wgpu::Device,
        surface_format: wgpu::TextureFormat,
        uniform_layout: &wgpu::BindGroupLayout,
    ) -> anyhow::Result<Self> {
        let shader = device.create_shader_module(wgpu::include_wgsl!("snow_field.wgsl"));
        let snow_field_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("SnowFieldPipeline::<snow_field_layout>"),
            entries: &[
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::VERTEX,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Uniform,
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                },
                wgpu::BindGroupLayoutEntry {
                    binding: 1,
                    visibility: wgpu::ShaderStages::VERTEX_FRAGMENT,
                    ty: wgpu::BindingType::Texture {
                        sample_type: wgpu::TextureSampleType::Float { filterable: false },
                        view_dimension: wgpu::TextureViewDimension::D2,
                        multisampled: false,
                    },
                    count: None,
                },
                // wgpu::BindGroupLayoutEntry {
                //     binding: 2,
                //     visibility: wgpu::ShaderStages::FRAGMENT,
                //     ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::NonFiltering),
                //     count: None,
                // },
            ],
        });
        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("SnowFieldPipeline::<pipeline_layout>"),
            bind_group_layouts: &[&uniform_layout, &snow_field_layout],
            push_constant_ranges: &[],
        });
        let pipeline = RenderPipelineBuilder::new()
            .pipeline_layout(&pipeline_layout)
            .vertex_shader(&shader, Some("vs_main"))
            .fragment_shader(&shader, Some("fs_main"))
            .color_solid(surface_format)
            .build(device)?;

        Ok(Self { pipeline })
    }

    pub fn bind(&self, device: &wgpu::Device, field: &SnowField) -> wgpu::BindGroup {
        let layout = self.pipeline.get_bind_group_layout(1);

        device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("SnowField bindgroup"),
            layout: &layout,
            entries: &[
                wgpu::BindGroupEntry {
                    binding: 0,
                    resource: field.params_buffer.as_entire_binding(),
                },
                wgpu::BindGroupEntry {
                    binding: 1,
                    resource: wgpu::BindingResource::TextureView(&field.heightmap.view),
                },
                // wgpu::BindGroupEntry {
                //     binding: 2,
                //     resource: wgpu::BindingResource::Sampler(&field.heightmap.sampler),
                // },
            ],
        })
    }

    pub fn draw<'a, 'b: 'a>(
        &'a self,
        uniforms_bindgroup: &'a wgpu::BindGroup,
        snow_field_bindgroup: &'a wgpu::BindGroup,
        snow_field: &'a SnowField,
        pass: &'a mut wgpu::RenderPass<'b>,
    ) {
        pass.set_pipeline(&self.pipeline);
        pass.set_bind_group(0, uniforms_bindgroup, &[]);
        pass.set_bind_group(1, snow_field_bindgroup, &[]);
        pass.set_index_buffer(snow_field.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
        pass.draw_indexed(0..snow_field.num_indices, 0, 0..1);
    }
}
