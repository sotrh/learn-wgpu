use wgpu::util::{BufferInitDescriptor, DeviceExt};

pub(crate) struct Mipmapper {
    pub(crate) compute_mipmap: wgpu::ComputePipeline,
    pub(crate) uniform_bind_group: wgpu::BindGroup,
    pub(crate) max_mips: u32,
    pub(crate) texture_layout: wgpu::BindGroupLayout,
}

impl Mipmapper {
    pub fn new(device: &wgpu::Device, max_mips: u32) -> Self {
        let uniform_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("Mipmapper::uniform_layout"),
            entries: &[wgpu::BindGroupLayoutEntry {
                binding: 0,
                visibility: wgpu::ShaderStages::COMPUTE,
                ty: wgpu::BindingType::Buffer {
                    ty: wgpu::BufferBindingType::Uniform,
                    has_dynamic_offset: true,
                    min_binding_size: None,
                },
                count: None,
            }],
        });

        let texture_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("Mipmapper::texture_layout"),
            entries: &[wgpu::BindGroupLayoutEntry {
                binding: 0,
                visibility: wgpu::ShaderStages::COMPUTE,
                ty: wgpu::BindingType::StorageTexture {
                    access: wgpu::StorageTextureAccess::ReadOnly,
                    format: wgpu::TextureFormat::Rgba8UnormSrgb,
                    view_dimension: wgpu::TextureViewDimension::D2,
                },
                count: None,
            }],
        });

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: None,
            bind_group_layouts: &[&uniform_layout, &texture_layout],
            immediate_size: 0,
        });
        let module = device.create_shader_module(wgpu::include_wgsl!("mipmap.wgsl"));
        let compute_mipmap = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
            label: Some("Mipmapper"),
            layout: Some(&pipeline_layout),
            module: &module,
            entry_point: Some("compute_mipmap"),
            compilation_options: Default::default(),
            cache: None,
        });

        let uniform_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("Mipmapper::uniform_buffer"),
            usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::UNIFORM,
            contents: bytemuck::cast_slice(&(1..max_mips).collect::<Vec<_>>()),
        });

        let uniform_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("Mipmapper::uniform_bind_group"),
            layout: &compute_mipmap.get_bind_group_layout(0),
            entries: &[wgpu::BindGroupEntry {
                binding: 0,
                resource: uniform_buffer.as_entire_binding(),
            }],
        });

        Self {
            max_mips,
            uniform_bind_group,
            texture_layout,
            compute_mipmap,
        }
    }

    pub(crate) fn compute_mipmaps(
        &self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        view: &wgpu::TextureView,
    ) {
        let mut encoder = device.create_command_encoder(&Default::default());

        let dispatch_x = view.texture().width().div_ceil(64);
        let dispatch_y = view.texture().height().div_ceil(64);

        {
            let mut src_view = view.clone();
            let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor::default());
            pass.set_pipeline(&self.compute_mipmap);
            for mip in 1..view.texture().mip_level_count().min(self.max_mips) {
                let dst_view = src_view
                    .texture()
                    .create_view(&wgpu::TextureViewDescriptor {
                        base_mip_level: mip,
                        ..Default::default()
                    });
                let texture_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
                    label: None,
                    layout: &self.texture_layout,
                    entries: &[
                        wgpu::BindGroupEntry {
                            binding: 0,
                            resource: wgpu::BindingResource::TextureView(&src_view),
                        },
                        wgpu::BindGroupEntry {
                            binding: 1,
                            resource: wgpu::BindingResource::TextureView(&dst_view),
                        },
                    ],
                });
                pass.set_bind_group(
                    0,
                    &self.uniform_bind_group,
                    &[(mip - 1) * std::mem::size_of::<u32>() as u32],
                );
                pass.set_bind_group(1, &texture_bind_group, &[]);
                pass.dispatch_workgroups(dispatch_x, dispatch_y, 1);

                src_view = dst_view;
            }
        }

        queue.submit([encoder.finish()]);
    }
}
