use std::mem;
use wgpu::util::{BufferInitDescriptor, DeviceExt};

pub trait ToRaw {
    type Output;
    fn to_raw(&self) -> Self::Output;
}

pub struct RawBuffer<R>
where
    R: Copy + bytemuck::Pod + bytemuck::Zeroable,
{
    pub buffer: wgpu::Buffer,
    pub data: Vec<R>,
}

impl<R: Copy + bytemuck::Pod + bytemuck::Zeroable> RawBuffer<R> {
    pub fn from_slice<T: ToRaw<Output = R>>(
        device: &wgpu::Device,
        data: &[T],
        usage: wgpu::BufferUsages,
    ) -> Self {
        let raw_data = data.iter().map(ToRaw::to_raw).collect::<Vec<R>>();
        Self::from_vec(device, raw_data, usage)
    }

    pub fn from_vec(device: &wgpu::Device, data: Vec<R>, usage: wgpu::BufferUsages) -> Self {
        let buffer = device.create_buffer_init(&BufferInitDescriptor {
            contents: bytemuck::cast_slice(&data),
            usage,
            label: None,
        });
        Self::from_parts(buffer, data, usage)
    }

    pub fn from_parts(buffer: wgpu::Buffer, data: Vec<R>, _usage: wgpu::BufferUsages) -> Self {
        Self { buffer, data }
    }

    pub fn buffer_size(&self) -> wgpu::BufferAddress {
        (self.data.len() * mem::size_of::<R>()) as wgpu::BufferAddress
    }
}

pub struct Buffer<U: ToRaw<Output = R>, R: Copy + bytemuck::Pod + bytemuck::Zeroable> {
    pub data: Vec<U>,
    pub raw_buffer: RawBuffer<R>,
    pub usage: wgpu::BufferUsages,
}

impl<U: ToRaw<Output = R>, R: Copy + bytemuck::Pod + bytemuck::Zeroable> Buffer<U, R> {
    pub fn uniform(device: &wgpu::Device, datum: U) -> Self {
        let data = vec![datum];
        let usage = wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST;
        Self::with_usage(device, data, usage)
    }

    pub fn storage(device: &wgpu::Device, data: Vec<U>) -> Self {
        let usage = wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST;
        Self::with_usage(device, data, usage)
    }

    pub fn staging(device: &wgpu::Device, other: &Self) -> Self {
        let buffer_size = other.raw_buffer.buffer_size();
        let usage = wgpu::BufferUsages::COPY_SRC
            | wgpu::BufferUsages::MAP_READ
            | wgpu::BufferUsages::MAP_WRITE;
        let buffer = device.create_buffer(&wgpu::BufferDescriptor {
            size: buffer_is_surface_configured: false,
            usage,
            label: None,
            mapped_at_creation: false,
        });
        let raw_buffer = RawBuffer::from_parts(buffer, Vec::new(), usage);
        Self::from_parts(Vec::new(), raw_buffer, usage)
    }

    pub fn with_usage(device: &wgpu::Device, data: Vec<U>, usage: wgpu::BufferUsages) -> Self {
        let raw_buffer = RawBuffer::from_slice(device, &data, usage);
        Self::from_parts(data, raw_buffer, usage)
    }

    pub fn from_parts(data: Vec<U>, raw_buffer: RawBuffer<R>, usage: wgpu::BufferUsages) -> Self {
        Self {
            data,
            raw_buffer,
            usage,
        }
    }
}
