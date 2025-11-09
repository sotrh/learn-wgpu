use anyhow::*;
use image::GenericImageView;
use std::mem;
use std::path::Path;

use crate::buffer;

pub struct Texture {
    pub texture: wgpu::Texture,
    pub view: wgpu::TextureView,
    pub sampler: wgpu::Sampler,
}

impl Texture {
    pub const DEPTH_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::Depth32Float;

    pub fn load<P: AsRef<Path>>(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        path: P,
        is_normal_map: bool,
    ) -> Result<Self> {
        // let path_copy = path.as_ref().to_path_buf();
        let img = image::open(&path)?;
        let label = path.as_ref().to_str().unwrap();
        Self::from_image(device, queue, &img, Some(label), is_normal_map)
    }

    pub fn from_descriptor(device: &wgpu::Device, desc: wgpu::TextureDescriptor<'_>) -> Self {
        let texture = device.create_texture(&desc);

        let view = texture.create_view(&wgpu::TextureViewDescriptor::default());
        let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::ClampToEdge,
            address_mode_v: wgpu::AddressMode::ClampToEdge,
            address_mode_w: wgpu::AddressMode::ClampToEdge,
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Nearest,
            mipmap_filter: wgpu::FilterMode::Nearest,
            lod_min_clamp: 0.0,
            lod_max_clamp: 100.0,
            compare: if desc.format.is_depth_stencil_format() {
                Some(wgpu::CompareFunction::LessEqual)
            } else {
                None
            },
            ..Default::default()
        });

        Self {
            texture,
            view,
            sampler,
        }
    }

    pub fn from_bytes(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        label: Option<&str>,
        is_normal_map: bool,
        bytes: &[u8],
    ) -> Result<Self> {
        let img = image::load_from_memory(bytes)?;
        Self::from_image(device, queue, &img, label, is_normal_map)
    }

    pub fn from_image(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        img: &image::DynamicImage,
        _label: Option<&str>,
        is_normal_map: bool,
    ) -> Result<Self> {
        let rgba = img.to_rgba8();
        let dimensions = img.dimensions();

        let size = wgpu::Extent3d {
            width: dimensions.0,
            height: dimensions.1,
            depth_or_array_layers: 1,
        };
        let format = if is_normal_map {
            wgpu::TextureFormat::Rgba8Unorm
        } else {
            wgpu::TextureFormat::Rgba8UnormSrgb
        };
        let desc = wgpu::TextureDescriptor {
            size,
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format,
            usage: wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
            label: None,
            view_formats: &[],
        };
        let texture = device.create_texture(&desc);

        queue.write_texture(
            wgpu::TexelCopyTextureInfo {
                aspect: wgpu::TextureAspect::All,
                texture: &texture,
                mip_level: 0,
                origin: wgpu::Origin3d::ZERO,
            },
            &rgba,
            wgpu::TexelCopyBufferLayout {
                offset: 0,
                bytes_per_row: Some(4 * dimensions.0),
                rows_per_image: Some(dimensions.1),
            },
            size,
        );

        let view = texture.create_view(&Default::default());
        let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::ClampToEdge,
            address_mode_v: wgpu::AddressMode::ClampToEdge,
            address_mode_w: wgpu::AddressMode::ClampToEdge,
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Nearest,
            mipmap_filter: wgpu::FilterMode::Nearest,
            lod_min_clamp: 0.0,
            lod_max_clamp: 100.0,
            compare: None,
            ..Default::default()
        });

        Ok(Self {
            texture,
            view,
            sampler,
        })
    }

    pub fn create_depth_texture(
        device: &wgpu::Device,
        config: &wgpu::SurfaceConfiguration,
    ) -> Self {
        let desc = wgpu::TextureDescriptor {
            label: None,
            size: wgpu::Extent3d {
                width: config.width,
                height: config.height,
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: Self::DEPTH_FORMAT,
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            view_formats: &[Self::DEPTH_FORMAT],
        };
        Self::from_descriptor(device, desc)
    }

    pub fn prepare_buffer_rgba(&self, device: &wgpu::Device) -> buffer::RawBuffer<[f32; 4]> {
        let num_pixels = self.texture.size().width
            * self.texture.size().height
            * self.texture.size().depth_or_array_layers;

        let buffer_size = num_pixels * mem::size_of::<[f32; 4]>() as u32;
        let buffer_usage = wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::MAP_READ;
        let buffer_desc = wgpu::BufferDescriptor {
            size: buffer_size as wgpu::BufferAddress,
            usage: buffer_usage,
            label: None,
            mapped_at_creation: false,
        };
        let buffer = device.create_buffer(&buffer_desc);

        let data = Vec::with_capacity(num_pixels as usize);

        let raw_buffer = buffer::RawBuffer::from_parts(buffer, data, buffer_usage);

        raw_buffer
    }
}
