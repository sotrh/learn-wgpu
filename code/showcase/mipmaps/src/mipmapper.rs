use anyhow::bail;
use framework::RenderPipelineBuilder;

/// Pipeline for creating mipmaps
pub(crate) struct Mipmapper {
    compute_mipmap: wgpu::ComputePipeline,
    storage_texture_layout: wgpu::BindGroupLayout,
    blit_mipmap: wgpu::RenderPipeline,
    blit_sampler: wgpu::Sampler,
}

impl Mipmapper {
    pub fn new(device: &wgpu::Device) -> Self {
        let storage_texture_layout =
            device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                label: Some("Mipmapper::texture_layout"),
                entries: &[
                    wgpu::BindGroupLayoutEntry {
                        binding: 0,
                        visibility: wgpu::ShaderStages::COMPUTE,
                        ty: wgpu::BindingType::StorageTexture {
                            access: wgpu::StorageTextureAccess::ReadOnly,
                            format: wgpu::TextureFormat::Rgba8Unorm,
                            view_dimension: wgpu::TextureViewDimension::D2,
                        },
                        count: None,
                    },
                    wgpu::BindGroupLayoutEntry {
                        binding: 1,
                        visibility: wgpu::ShaderStages::COMPUTE,
                        ty: wgpu::BindingType::StorageTexture {
                            access: wgpu::StorageTextureAccess::WriteOnly,
                            format: wgpu::TextureFormat::Rgba8Unorm,
                            view_dimension: wgpu::TextureViewDimension::D2,
                        },
                        count: None,
                    },
                ],
            });

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: None,
            bind_group_layouts: &[&storage_texture_layout],
            immediate_size: 0,
        });
        let compute_module = device.create_shader_module(wgpu::include_wgsl!("mipmap.wgsl"));
        let compute_mipmap = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
            label: Some("Mipmapper"),
            layout: Some(&pipeline_layout),
            module: &compute_module,
            entry_point: Some("compute_mipmap"),
            compilation_options: Default::default(),
            cache: None,
        });

        let blit_shader = wgpu::include_wgsl!("blit.wgsl");
        let blit_format = wgpu::TextureFormat::Rgba8Unorm;
        let blit_mipmap = RenderPipelineBuilder::new()
            .vertex_shader(blit_shader.clone())
            .fragment_shader(blit_shader.clone())
            .cull_mode(Some(wgpu::Face::Back))
            .color_solid(blit_format)
            .build(device)
            .unwrap();
        let blit_sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            min_filter: wgpu::FilterMode::Linear,
            mag_filter: wgpu::FilterMode::Linear,
            ..Default::default()
        });

        Self {
            storage_texture_layout,
            compute_mipmap,
            blit_mipmap,
            blit_sampler,
        }
    }

    pub fn blit_mipmaps(
        &self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        texture: &wgpu::Texture,
    ) -> anyhow::Result<()> {
        // We would need to change the render pipeline to support different texture types
        match texture.format() {
            wgpu::TextureFormat::Rgba8Unorm | wgpu::TextureFormat::Rgba8UnormSrgb => {}
            _ => bail!("Unsupported format {:?}", texture.format()),
        }

        // Exit early if there is only one mip level.
        if texture.mip_level_count() == 1 {
            return Ok(());
        }

        let mut encoder = device.create_command_encoder(&Default::default());

        // We need to render to this texture, so if the supplied texture
        // isn't setup for rendering, we need to create a temporary one.
        let (mut src_view, maybe_temp) = if texture
            .usage()
            .contains(wgpu::TextureUsages::RENDER_ATTACHMENT)
        {
            (
                texture.create_view(&wgpu::TextureViewDescriptor {
                    // sRGB and non sRGB textures can be interchanged, but
                    // we specified RGBA8Unorm when we created the pipeline
                    // so we need a view with the same format.
                    format: Some(texture.format().remove_srgb_suffix()),
                    base_mip_level: 0,
                    // When rendering to a mip we need to ignore all other
                    // mip levels.
                    mip_level_count: Some(1),
                    ..Default::default()
                }),
                None,
            )
        } else {
            // Create a temporary texture that can be rendered to since the
            // supplied texture can't be rendered to. It will be basically
            // identical to the original apart from the usage field and removing
            // sRGB from the format if it's present.
            let temp = device.create_texture(&wgpu::TextureDescriptor {
                label: Some("Mipmapper::compute_mipmaps::temp"),
                size: texture.size(),
                mip_level_count: texture.mip_level_count(),
                sample_count: texture.sample_count(),
                dimension: texture.dimension(),
                format: texture.format().remove_srgb_suffix(),
                usage: wgpu::TextureUsages::RENDER_ATTACHMENT
                    | wgpu::TextureUsages::TEXTURE_BINDING
                    | wgpu::TextureUsages::COPY_DST
                    | wgpu::TextureUsages::COPY_SRC,
                view_formats: &[],
            });

            encoder.copy_texture_to_texture(
                texture.as_image_copy(),
                temp.as_image_copy(),
                temp.size(),
            );

            (
                temp.create_view(&wgpu::TextureViewDescriptor {
                    mip_level_count: Some(1),
                    ..Default::default()
                }),
                Some(temp),
            )
        };

        for mip in 1..texture.mip_level_count() {
            let dst_view = src_view
                .texture()
                .create_view(&wgpu::TextureViewDescriptor {
                    format: Some(texture.format().remove_srgb_suffix()),
                    // What mip we want to render to
                    base_mip_level: mip,
                    // Like src_view we need to ignore other mips
                    mip_level_count: Some(1),
                    ..Default::default()
                });

            let texture_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: None,
                layout: &self.blit_mipmap.get_bind_group_layout(0),
                entries: &[
                    wgpu::BindGroupEntry {
                        binding: 0,
                        resource: wgpu::BindingResource::TextureView(&src_view),
                    },
                    wgpu::BindGroupEntry {
                        binding: 1,
                        resource: wgpu::BindingResource::Sampler(&self.blit_sampler),
                    },
                ],
            });

            let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: None,
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &dst_view,
                    depth_slice: None,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Load,
                        store: wgpu::StoreOp::Store,
                    },
                })],
                depth_stencil_attachment: None,
                timestamp_writes: None,
                occlusion_query_set: None,
                multiview_mask: None,
            });
            pass.set_pipeline(&self.blit_mipmap);
            pass.set_bind_group(0, &texture_bind_group, &[]);
            pass.draw(0..3, 0..1);

            // Make sure that we use the mip we just generated for the
            // next iteration.
            src_view = dst_view;
        }

        // If we created a temporary texture, now we need to copy it back
        // into the original.
        if let Some(temp) = maybe_temp {
            let mut size = temp.size();
            for mip_level in 0..temp.mip_level_count() {
                encoder.copy_texture_to_texture(
                    wgpu::TexelCopyTextureInfo {
                        mip_level,
                        ..temp.as_image_copy()
                    },
                    wgpu::TexelCopyTextureInfo {
                        mip_level,
                        ..texture.as_image_copy()
                    },
                    size,
                );

                // Each mipmap is half the size of the original,
                // so we need to half the copy size as well.
                size.width /= 2;
                size.height /= 2;
            }
        }

        queue.submit([encoder.finish()]);

        Ok(())
    }

    pub(crate) fn compute_mipmaps(
        &self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        texture: &wgpu::Texture,
    ) -> anyhow::Result<()> {
        // We would need to change the shader to support different texture types
        match texture.format() {
            wgpu::TextureFormat::Rgba8Unorm | wgpu::TextureFormat::Rgba8UnormSrgb => {}
            _ => bail!("Unsupported format {:?}", texture.format()),
        }

        if texture.mip_level_count() == 1 {
            return Ok(());
        }

        let mut encoder = device.create_command_encoder(&Default::default());

        // Create temp texture
        let (mut src_view, maybe_temp) = if texture
            .usage()
            .contains(wgpu::TextureUsages::STORAGE_BINDING)
        {
            (
                texture.create_view(&wgpu::TextureViewDescriptor {
                    mip_level_count: Some(1),
                    ..Default::default()
                }),
                None,
            )
        } else {
            println!("Creating temp texture");

            // create a temp
            let temp = device.create_texture(&wgpu::TextureDescriptor {
                label: Some("Mipmapper::compute_mipmaps::temp"),
                size: texture.size(),
                mip_level_count: texture.mip_level_count(),
                sample_count: texture.sample_count(),
                dimension: texture.dimension(),
                format: texture.format().remove_srgb_suffix(),
                usage: wgpu::TextureUsages::STORAGE_BINDING
                    | wgpu::TextureUsages::COPY_DST
                    | wgpu::TextureUsages::COPY_SRC,
                view_formats: &[],
            });

            encoder.copy_texture_to_texture(
                texture.as_image_copy(),
                temp.as_image_copy(),
                temp.size(),
            );

            (
                temp.create_view(&wgpu::TextureViewDescriptor {
                    mip_level_count: Some(1),
                    ..Default::default()
                }),
                Some(temp),
            )
        };

        let dispatch_x = texture.width().div_ceil(16);
        let dispatch_y = texture.height().div_ceil(16);

        {
            let mut pass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor::default());
            pass.set_pipeline(&self.compute_mipmap);
            for mip in 1..texture.mip_level_count() {
                let dst_view = src_view
                    .texture()
                    .create_view(&wgpu::TextureViewDescriptor {
                        base_mip_level: mip,
                        mip_level_count: Some(1),
                        ..Default::default()
                    });
                let texture_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
                    label: None,
                    layout: &self.storage_texture_layout,
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
                pass.set_bind_group(0, &texture_bind_group, &[]);
                pass.dispatch_workgroups(dispatch_x, dispatch_y, 1);

                src_view = dst_view;
            }
        }

        if let Some(temp) = maybe_temp {
            let mut size = temp.size();
            for mip_level in 0..temp.mip_level_count() {
                encoder.copy_texture_to_texture(
                    wgpu::TexelCopyTextureInfo {
                        mip_level,
                        ..temp.as_image_copy()
                    },
                    wgpu::TexelCopyTextureInfo {
                        mip_level,
                        ..texture.as_image_copy()
                    },
                    size,
                );

                // Each mipmap is half the size of the original
                size.width /= 2;
                size.height /= 2;
            }
        }

        queue.submit([encoder.finish()]);

        Ok(())
    }
}
