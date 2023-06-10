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
    pub config: wgpu::SurfaceConfiguration,
    pub device: wgpu::Device,
    pub queue: wgpu::Queue,
}

impl Display {
    pub async fn new(window: Window) -> Result<Self, Error> {
        let size = window.inner_size();
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
            backends: wgpu::Backends::all(),
            dx12_shader_compiler: Default::default(),
        });
        let surface = unsafe { instance.create_surface(&window) }.unwrap();
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::default(),
                compatible_surface: Some(&surface),
                force_fallback_adapter: false,
            })
            .await
            .unwrap();
        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: None,
                    features: wgpu::Features::empty(),
                    // WebGL doesn't support all of wgpu's features, so if
                    // we're building for the web we'll have to disable some.
                    limits: if cfg!(target_arch = "wasm32") {
                        wgpu::Limits::downlevel_webgl2_defaults()
                    } else {
                        wgpu::Limits::default()
                    },
                },
                None,
            )
            .await
            .unwrap();
        let surface_caps = surface.get_capabilities(&adapter);
        // Shader code in this tutorial assumes an Srgb surface texture. Using a different
        // one will result all the colors comming out darker. If you want to support non
        // Srgb surfaces, you'll need to account for that when drawing to the frame.
        let surface_format = surface_caps
            .formats
            .iter()
            .copied()
            .find(|f| f.is_srgb())
            .unwrap_or(surface_caps.formats[0]);
        let config = wgpu::SurfaceConfiguration {
            usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
            format: surface_format,
            width: size.width,
            height: size.height,
            present_mode: surface_caps.present_modes[0],
            alpha_mode: surface_caps.alpha_modes[0],
            view_formats: vec![],
        };
        surface.configure(&device, &config);

        Ok(Self {
            surface,
            window,
            config,
            device,
            queue,
        })
    }

    pub fn window(&self) -> &Window {
        &self.window
    }

    pub fn resize(&mut self, width: u32, height: u32) {
        self.config.width = width;
        self.config.height = height;
        self.surface.configure(&self.device, &self.config);
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

pub struct CameraUniform {
    data: UniformData,
    buffer: wgpu::Buffer,
}

impl CameraUniform {
    pub fn new(device: &wgpu::Device) -> Self {
        let data = UniformData {
            view_position: Zero::zero(),
            view_proj: cgmath::Matrix4::identity(),
        };
        let buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("Camera Buffer"),
            contents: bytemuck::cast_slice(&[data]),
            usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::UNIFORM,
        });

        Self { data, buffer }
    }

    pub fn update_view_proj(&mut self, camera: &camera::Camera, projection: &camera::Projection) {
        self.data.view_position = camera.position.to_homogeneous();
        self.data.view_proj = projection.calc_matrix() * camera.calc_matrix()
    }

    pub fn update_buffer(&self, device: &wgpu::Device, encoder: &mut wgpu::CommandEncoder) {
        let staging_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some("Camera Update Buffer"),
            contents: bytemuck::cast_slice(&[self.data]),
            usage: wgpu::BufferUsages::COPY_SRC,
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
 * just the CameraUniform struct.
 */
pub struct UniformBinding {
    pub layout: wgpu::BindGroupLayout,
    pub bind_group: wgpu::BindGroup,
}

impl UniformBinding {
    pub fn new(device: &wgpu::Device, camera_uniform: &CameraUniform) -> Self {
        let layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            entries: &[wgpu::BindGroupLayoutEntry {
                binding: 0,
                visibility: wgpu::ShaderStages::VERTEX | wgpu::ShaderStages::FRAGMENT,
                ty: wgpu::BindingType::Buffer {
                    ty: wgpu::BufferBindingType::Uniform,
                    has_dynamic_offset: false,
                    min_binding_size: None,
                },
                count: None,
            }],
            label: Some("CameraBinding::layout"),
        });
        let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            layout: &layout,
            entries: &[wgpu::BindGroupEntry {
                binding: 0,
                resource: camera_uniform.buffer.as_entire_binding(),
            }],
            label: Some("CameraBinding::bind_group"),
        });

        Self { layout, bind_group }
    }

    pub fn rebind(&mut self, device: &wgpu::Device, camera_uniform: &CameraUniform) {
        self.bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            layout: &self.layout,
            entries: &[wgpu::BindGroupEntry {
                binding: 0,
                resource: camera_uniform.buffer.as_entire_binding(),
            }],
            label: Some("CameraBinding::bind_group"),
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
    let mut demo = D::init(&display)?;
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
                if wid == display.window().id() {
                    let now = Instant::now();
                    let dt = now - last_update;
                    last_update = now;

                    demo.update(&display, dt);
                    demo.render(&mut display);
                    is_redraw_requested = false;
                }
            }
            Event::MainEventsCleared => {
                if is_focused && is_resumed && !is_redraw_requested {
                    display.window().request_redraw();
                    is_redraw_requested = true;
                } else {
                    // Freeze time while the demo is not in the foreground
                    last_update = Instant::now();
                }
            }
            Event::WindowEvent {
                event, window_id, ..
            } => {
                if window_id == display.window().id() {
                    match event {
                        WindowEvent::CloseRequested => *control_flow = ControlFlow::Exit,
                        WindowEvent::Focused(f) => is_focused = f,
                        WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
                            display.resize(new_inner_size.width, new_inner_size.height);
                            demo.resize(&display);
                        }
                        WindowEvent::Resized(new_inner_size) => {
                            display.resize(new_inner_size.width, new_inner_size.height);
                            demo.resize(&display);
                        }
                        _ => {}
                    }
                }
            }
            _ => {}
        }
    });
}
