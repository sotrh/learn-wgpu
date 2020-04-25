use image::GenericImageView;
use std::path::Path;
use std::mem;

use crate::buffer;


pub struct Texture<'a> {
    pub texture: wgpu::Texture,
    pub view: wgpu::TextureView,
    pub sampler: wgpu::Sampler,
    pub desc: wgpu::TextureDescriptor<'a>,
}

impl<'a> Texture<'a> {
    pub const DEPTH_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::Depth32Float;

    pub fn load<P: AsRef<Path>>(device: &wgpu::Device, path: P) -> Result<(Self, wgpu::CommandBuffer), failure::Error> {
        let img = image::open(path)?;
        Self::from_image(device, &img)
    }

    pub fn create_depth_texture(device: &wgpu::Device, sc_desc: &wgpu::SwapChainDescriptor) -> Self {
        let desc = wgpu::TextureDescriptor {
            label: None,
            size: wgpu::Extent3d {
                width: sc_desc.width,
                height: sc_desc.height,
                depth: 1,
            },
            array_layer_count: 1,
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: Self::DEPTH_FORMAT,
            usage: wgpu::TextureUsage::OUTPUT_ATTACHMENT,
        };
        Self::from_descriptor(device, desc)
    }

    pub fn from_descriptor(device: &wgpu::Device, desc: wgpu::TextureDescriptor<'a>) -> Self {
        let texture = device.create_texture(&desc);

        let view = texture.create_default_view();
        let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::ClampToEdge,
            address_mode_v: wgpu::AddressMode::ClampToEdge,
            address_mode_w: wgpu::AddressMode::ClampToEdge,
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Nearest,
            mipmap_filter: wgpu::FilterMode::Nearest,
            lod_min_clamp: -100.0,
            lod_max_clamp: 100.0,
            compare: wgpu::CompareFunction::LessEqual,
        });

        Self { texture, view, sampler, desc }
    }

    pub fn from_bytes(device: &wgpu::Device, bytes: &[u8]) -> Result<(Self, wgpu::CommandBuffer), failure::Error> {
        let img = image::load_from_memory(bytes)?;
        Self::from_image(device, &img)
    }

    pub fn from_image(device: &wgpu::Device, img: &image::DynamicImage) -> Result<(Self, wgpu::CommandBuffer), failure::Error> {
        let rgba = img.to_rgba();
        let dimensions = img.dimensions();

        let size = wgpu::Extent3d {
            width: dimensions.0,
            height: dimensions.1,
            depth: 1,
        };
        let desc = wgpu::TextureDescriptor {
            size,
            array_layer_count: 1,
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::Rgba8UnormSrgb,
            usage: wgpu::TextureUsage::SAMPLED | wgpu::TextureUsage::COPY_DST,
            label: None,
        };
        let texture = device.create_texture(&desc);

        let buffer = device.create_buffer_with_data(
            &rgba, 
            wgpu::BufferUsage::COPY_SRC,
        );

        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: None,
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

        let cmd_buffer = encoder.finish();

        let view = texture.create_default_view();
        let sampler = device.create_sampler(&wgpu::SamplerDescriptor {
            address_mode_u: wgpu::AddressMode::ClampToEdge,
            address_mode_v: wgpu::AddressMode::ClampToEdge,
            address_mode_w: wgpu::AddressMode::ClampToEdge,
            mag_filter: wgpu::FilterMode::Linear,
            min_filter: wgpu::FilterMode::Nearest,
            mipmap_filter: wgpu::FilterMode::Nearest,
            lod_min_clamp: -100.0,
            lod_max_clamp: 100.0,
            compare: wgpu::CompareFunction::Always,
        });
        
        Ok((Self { texture, view, sampler, desc }, cmd_buffer))
    }

    pub fn prepare_buffer_rgba(&self, device: &wgpu::Device) -> buffer::RawBuffer<[f32;4]> {
        let num_pixels = self.desc.size.width * self.desc.size.height * self.desc.size.depth;

        let buffer_size = num_pixels * mem::size_of::<[f32;4]>() as u32;
        let buffer_usage = wgpu::BufferUsage::COPY_DST | wgpu::BufferUsage::MAP_READ;
        let buffer_desc = wgpu::BufferDescriptor {
            size: buffer_size as wgpu::BufferAddress,
            usage: buffer_usage,
            label: None,
        };
        let buffer = device.create_buffer(&buffer_desc);

        let data = Vec::with_capacity(num_pixels as usize);

        let raw_buffer = buffer::RawBuffer::from_parts(buffer, data, buffer_usage);

        raw_buffer
    }
} 