use failure::bail;
use image::GenericImageView;
use std::path::Path;

use crate::pipeline;

pub struct Texture {
    pub texture: wgpu::Texture,
    pub view: wgpu::TextureView,
    pub sampler: wgpu::Sampler,
}

impl Texture {
    pub const DEPTH_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::Depth32Float;

    pub fn load<P: AsRef<Path>>(
        device: &wgpu::Device,
        path: P,
        is_normal_map: bool,
    ) -> Result<(Self, wgpu::CommandBuffer), failure::Error> {
        let path_copy = path.as_ref().to_path_buf();

        // The label currently can only be 64 characters, so we'll need
        // to use just the file name for the label.
        let label = path_copy.file_name().unwrap().to_str();

        let img = image::open(path)?;
        Self::from_image(device, &img, label, is_normal_map)
    }

    pub fn create_depth_texture(
        device: &wgpu::Device,
        sc_desc: &wgpu::SwapChainDescriptor,
        label: &str,
    ) -> Self {
        let size = wgpu::Extent3d {
            width: sc_desc.width,
            height: sc_desc.height,
            depth: 1,
        };
        let desc = wgpu::TextureDescriptor {
            label: Some(label),
            size,
            array_layer_count: 1,
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: Self::DEPTH_FORMAT,
            usage: wgpu::TextureUsage::RENDER_ATTACHMENT
                | wgpu::TextureUsage::SAMPLED
                | wgpu::TextureUsage::COPY_SRC,
        };
        let texture = device.create_texture(&desc);

        let view = texture.create_default_view();
        let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::ClampToEdge,
            address_mode_v: wgpu::AddressMode::ClampToEdge,
            address_mode_w: wgpu::AddressMode::ClampToEdge,
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Linear,
            mipmap_filter: wgpu::FilterMode::Nearest,
            lod_min_clamp: 0.0,
            lod_max_clamp: 100.0,
            compare: wgpu::CompareFunction::LessEqual,
        });

        Self {
            texture,
            view,
            sampler,
        }
    }

    #[allow(dead_code)]
    pub fn from_bytes(
        device: &wgpu::Device,
        bytes: &[u8],
        label: &str,
        is_normal_map: bool,
    ) -> Result<(Self, wgpu::CommandBuffer), failure::Error> {
        let img = image::load_from_memory(bytes)?;
        Self::from_image(device, &img, Some(label), is_normal_map)
    }

    pub fn from_image(
        device: &wgpu::Device,
        img: &image::DynamicImage,
        label: Option<&str>,
        is_normal_map: bool,
    ) -> Result<(Self, wgpu::CommandBuffer), failure::Error> {
        let rgba = img.to_rgba();
        let dimensions = img.dimensions();

        if dimensions.0 == 0 || dimensions.1 == 0 {
            bail!(
                "Image {} has invalid dimensions! {:?}",
                label.unwrap_or("UNAMED_IMAGE"),
                dimensions
            )
        }

        let size = wgpu::Extent3d {
            width: dimensions.0,
            height: dimensions.1,
            depth: 1,
        };

        // Get the number of mip maps from the images width
        let mip_level_count = (size.width as f32).log2().round() as u32;
        let texture_desc = wgpu::TextureDescriptor {
            label,
            size,
            array_layer_count: 1,
            mip_level_count, // UPDATED!
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: if is_normal_map {
                wgpu::TextureFormat::Rgba8Unorm
            } else {
                wgpu::TextureFormat::Rgba8UnormSrgb
            },
            usage: wgpu::TextureUsage::SAMPLED
                | wgpu::TextureUsage::COPY_DST
                // Needed for to make the mip maps.
                | wgpu::TextureUsage::RENDER_ATTACHMENT,
        };
        let texture = device.create_texture(&texture_desc);

        let buffer = device.create_buffer_with_data(&rgba, wgpu::BufferUsage::COPY_SRC);

        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("texture_buffer_copy_encoder"),
        });

        encoder.copy_buffer_to_texture(
            wgpu::BufferCopyView {
                buffer: &buffer,
                offset: 0,
                bytes_per_row: 4 * dimensions.0,
                rows_per_image: dimensions.1,
            },
            wgpu::TextureCopyView {
                texture: &texture,
                mip_level: 0,
                array_layer: 0,
                origin: wgpu::Origin3d::ZERO,
            },
            size,
        );

        // Make sure to do this after you've copied the buffer
        // to the texture, other wise your mipmaps will be black.
        Self::generate_mipmaps(
            &mut encoder,
            &device,
            &texture,
            &texture_desc,
            mip_level_count,
        );

        let cmd_buffer = encoder.finish();

        let view = texture.create_default_view();
        let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::ClampToEdge,
            address_mode_v: wgpu::AddressMode::ClampToEdge,
            address_mode_w: wgpu::AddressMode::ClampToEdge,
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Nearest,
            mipmap_filter: wgpu::FilterMode::Linear,
            lod_min_clamp: -100.0,
            lod_max_clamp: 100.0,
            compare: wgpu::CompareFunction::LessEqual,
        });

        Ok((
            Self {
                texture,
                view,
                sampler,
            },
            cmd_buffer,
        ))
    }

    pub fn generate_mipmaps(
        encoder: &mut wgpu::CommandEncoder,
        device: &wgpu::Device,
        texture: &wgpu::Texture,
        texture_desc: &wgpu::TextureDescriptor,
        mip_count: u32,
    ) {
        let bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            bindings: &[
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStage::FRAGMENT,
                    ty: wgpu::BindingType::SampledTexture {
                        multisampled: false,
                        component_type: wgpu::TextureSampleType::Float { filterable: true },
                        dimension: wgpu::TextureViewDimension::D2,
                    },
                },
                wgpu::BindGroupLayoutEntry {
                    binding: 1,
                    visibility: wgpu::ShaderStage::FRAGMENT,
                    ty: wgpu::BindingType::Sampler { 
                            comparison: false,
                            filtering: true, 
                        },
                },
            ],
            label: None,
        });
        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            bind_group_layouts: &[&bind_group_layout],
        });

        // This pipeline will render out a texture to another texture.
        // We create the mipmaps by rendering to increasingly smaller
        // textures.
        let blit_pipeline = pipeline::RenderPipelineBuilder::new()
            .layout(&pipeline_layout)
            .color_solid(texture_desc.format)
            .vertex_shader(include_bytes!("blit.vert.spv"))
            .fragment_shader(include_bytes!("blit.frag.spv"))
            // Using wgpu::TriangleStrip makes our lives easier in the shader.
            .primitive_topology(wgpu::PrimitiveTopology::TriangleStrip)
            .build(device)
            .unwrap();

        // This sampler ensures that the smaller textures get the right
        // color data.
        let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::ClampToEdge,
            address_mode_v: wgpu::AddressMode::ClampToEdge,
            address_mode_w: wgpu::AddressMode::ClampToEdge,
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Nearest,
            mipmap_filter: wgpu::FilterMode::Nearest,
            // Since we are using this sampler to generate mipmaps,
            // we don't need it the use level of detail values.
            lod_min_clamp: 0.0,
            lod_max_clamp: 0.0,
            compare: wgpu::CompareFunction::Always,
        });

        // Create a view for every mip level.
        let views = (0..mip_count)
            .map(|mip| {
                texture.create_view(&wgpu::TextureViewDescriptor {
                    format: texture_desc.format,
                    dimension: wgpu::TextureViewDimension::D2,
                    aspect: wgpu::TextureAspect::All,
                    base_mip_level: mip,
                    level_count: 1,
                    base_array_layer: 0,
                    array_layer_count: 1,
                })
            })
            .collect::<Vec<_>>();

        // Skip the first view, as that is the base one
        for target_mip in 1..mip_count as usize {
            let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
                layout: &bind_group_layout,
                bindings: &[
                    wgpu::Binding {
                        binding: 0,
                        // Bind to the view before this one
                        resource: wgpu::BindingResource::TextureView(&views[target_mip - 1]),
                    },
                    wgpu::Binding {
                        binding: 1,
                        resource: wgpu::BindingResource::Sampler(&sampler),
                    },
                ],
                label: None,
            });

            let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                color_attachments: &[wgpu::RenderPassColorAttachmentDescriptor {
                    attachment: &views[target_mip],
                    resolve_target: None,
                    clear_color: wgpu::Color::WHITE,
                    load_op: wgpu::LoadOp::Clear,
                    store_op: wgpu::StoreOp::Store,
                }],
                depth_stencil_attachment: None,
            });

            pass.set_pipeline(&blit_pipeline);
            pass.set_bind_group(0, &bind_group, &[]);
            pass.draw(0..4, 0..1);
        }
    }
}
