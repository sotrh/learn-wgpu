mod buffer;
mod camera;
mod light;
mod model;
mod pipeline;
pub mod prelude;
mod shader_canvas;
mod texture;

pub use buffer::*;
pub use camera::*;
pub use light::*;
pub use model::*;
pub use pipeline::*;
pub use shader_canvas::*;
pub use texture::*;

use anyhow::*;
use cgmath::*;
use std::time::{Duration, Instant};
use wgpu::util::{BufferInitDescriptor, DeviceExt};
use winit::event::*;
use winit::event_loop::{ControlFlow, EventLoop};
use winit::window::{Window, WindowBuilder};

pub struct Display {
    surface: wgpu::Surface,
    pub window: Window,
    pub sc_desc: wgpu::SwapChainDescriptor,
    pub swap_chain: wgpu::SwapChain,
    pub device: wgpu::Device,
    pub queue: wgpu::Queue,
}

impl Display {
    pub async fn new(window: Window) -> Result<Self, Error> {
        let size = window.inner_size();
        let instance = wgpu::Instance::new(wgpu::BackendBit::PRIMARY);
        let surface = unsafe { instance.create_surface(&window) };
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::default(),
                compatible_surface: Some(&surface),
            })
            .await
            .unwrap();
        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: None,
                    features: wgpu::Features::empty(),
                    limits: wgpu::Limits::default(),
                },
                None,
            )
            .await
            .unwrap();
        let sc_desc = wgpu::SwapChainDescriptor {
            usage: wgpu::TextureUsage::RENDER_ATTACHMENT,
            format: adapter.get_swap_chain_preferred_format(&surface),
            width: size.width,
            height: size.height,
            present_mode: wgpu::PresentMode::Fifo,
        };
        let swap_chain = device.create_swap_chain(&surface, &sc_desc);

        Ok(Self {
            surface,
            window,
            sc_desc,
            swap_chain,
            device,
            queue,
        })
    }

    pub fn resize(&mut self, width: u32, height: u32) {
        self.sc_desc.width = width;
        self.sc_desc.height = height;
        self.swap_chain = self.device.create_swap_chain(&self.surface, &self.sc_desc);
    }
}

/**
 * Holds the camera data to be passed to wgpu.
 */
#[repr(C)]
#[derive(Copy, Clone)]
pub struct UniformData {
    view_position: cgmath::Vector4<f32>,
    view_proj: cgmath::Matrix4<f32>,
}

unsafe impl bytemuck::Zeroable for UniformData {}
unsafe impl bytemuck::Pod for UniformData {}

pub struct Uniforms {
    data: UniformData,
    buffer: wgpu::Buffer,
}

impl Uniforms {
    pub fn new(device: &wgpu::Device) -> Self {
        let data = UniformData {
            view_position: Zero::zero(),
            view_proj: cgmath::Matrix4::identity(),
        };
        let buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("Uniform Buffer"),
            contents: bytemuck::cast_slice(&[data]),
            usage: wgpu::BufferUsage::COPY_DST | wgpu::BufferUsage::UNIFORM,
        });

        Self { data, buffer }
    }

    pub fn update_view_proj(&mut self, camera: &camera::Camera, projection: &camera::Projection) {
        self.data.view_position = camera.position.to_homogeneous();
        self.data.view_proj = projection.calc_matrix() * camera.calc_matrix()
    }

    pub fn update_buffer(&self, device: &wgpu::Device, encoder: &mut wgpu::CommandEncoder) {
        let staging_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("Uniform Update Buffer"),
            contents: bytemuck::cast_slice(&[self.data]),
            usage: wgpu::BufferUsage::COPY_SRC,
        });
        encoder.copy_buffer_to_buffer(
            &staging_buffer,
            0,
            &self.buffer,
            0,
            std::mem::size_of::<UniformData>() as _,
        );
    }
}

/**
 * Holds the wgpu::BindGroupLayout and one wgpu::BindGroup for the
 * just the Uniforms struct.
 */
pub struct UniformBinding {
    pub layout: wgpu::BindGroupLayout,
    pub bind_group: wgpu::BindGroup,
}

impl UniformBinding {
    pub fn new(device: &wgpu::Device, uniforms: &Uniforms) -> Self {
        let layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            entries: &[wgpu::BindGroupLayoutEntry {
                binding: 0,
                visibility: wgpu::ShaderStage::VERTEX | wgpu::ShaderStage::FRAGMENT,
                ty: wgpu::BindingType::Buffer {
                    ty: wgpu::BufferBindingType::Uniform,
                    has_dynamic_offset: false,
                    min_binding_size: None,
                },
                count: None,
            }],
            label: Some("UniformBinding::layout"),
        });
        let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            layout: &layout,
            entries: &[wgpu::BindGroupEntry {
                binding: 0,
                resource: wgpu::BindingResource::Buffer(uniforms.buffer.slice(..)),
            }],
            label: Some("UniformBinding::bind_group"),
        });

        Self { layout, bind_group }
    }

    pub fn rebind(&mut self, device: &wgpu::Device, uniforms: &Uniforms) {
        self.bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            layout: &self.layout,
            entries: &[wgpu::BindGroupEntry {
                binding: 0,
                resource: wgpu::BindingResource::Buffer(uniforms.buffer.slice(..)),
            }],
            label: Some("UniformBinding::bind_group"),
        });
    }
}

pub trait Demo: 'static + Sized {
    fn init(display: &Display) -> Result<Self, Error>;
    fn process_mouse(&mut self, dx: f64, dy: f64);
    fn resize(&mut self, display: &Display);
    fn update(&mut self, display: &Display, dt: Duration);
    fn render(&mut self, display: &mut Display);
}

pub async fn run<D: Demo>() -> Result<(), Error> {
    wgpu_subscriber::initialize_default_subscriber(None);

    let event_loop = EventLoop::new();
    let window = WindowBuilder::new()
        .with_title(env!("CARGO_PKG_NAME"))
        .build(&event_loop)?;
    let mut display = Display::new(window).await?;
    let mut demo = D::init(&mut display)?;
    let mut last_update = Instant::now();
    let mut is_resumed = true;
    let mut is_focused = true;
    let mut is_redraw_requested = true;

    event_loop.run(move |event, _, control_flow| {
        *control_flow = if is_resumed && is_focused {
            ControlFlow::Poll
        } else {
            ControlFlow::Wait
        };

        match event {
            Event::Resumed => is_resumed = true,
            Event::Suspended => is_resumed = false,
            Event::RedrawRequested(wid) => {
                if wid == display.window.id() {
                    let now = Instant::now();
                    let dt = now - last_update;
                    last_update = now;

                    demo.update(&mut display, dt);
                    demo.render(&mut display);
                    is_redraw_requested = false;
                }
            }
            Event::MainEventsCleared => {
                if is_focused && is_resumed && !is_redraw_requested {
                    display.window.request_redraw();
                    is_redraw_requested = true;
                } else {
                    // Freeze time while the demo is not in the foreground
                    last_update = Instant::now();
                }
            }
            Event::WindowEvent {
                event, window_id, ..
            } => {
                if window_id == display.window.id() {
                    match event {
                        WindowEvent::CloseRequested => *control_flow = ControlFlow::Exit,
                        WindowEvent::Focused(f) => is_focused = f,
                        WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
                            display.resize(new_inner_size.width, new_inner_size.height);
                            demo.resize(&mut display);
                        }
                        WindowEvent::Resized(new_inner_size) => {
                            display.resize(new_inner_size.width, new_inner_size.height);
                            demo.resize(&mut display);
                        }
                        _ => {}
                    }
                }
            }
            _ => {}
        }
    });
}
