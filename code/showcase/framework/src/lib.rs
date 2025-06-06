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
use pollster::FutureExt;
pub use shader_canvas::*;
pub use texture::*;

use cgmath::*;
use std::sync::Arc;
use std::time::{Duration, Instant};
use wgpu::util::{BufferInitDescriptor, DeviceExt};
use winit::application::ApplicationHandler;
use winit::event_loop::EventLoopProxy;
use winit::{
    event::*,
    event_loop::EventLoop,
    keyboard::{KeyCode, PhysicalKey},
    window::Window,
};

#[derive(Debug)]
pub struct Display {
    surface: wgpu::Surface<'static>,
    pub window: Arc<Window>,
    pub config: wgpu::SurfaceConfiguration,
    pub device: wgpu::Device,
    pub queue: wgpu::Queue,
}

impl Display {
    pub async fn new(window: Arc<Window>) -> anyhow::Result<Display> {
        let size = window.inner_size();
        let instance = wgpu::Instance::new(&wgpu::InstanceDescriptor {
            #[cfg(not(target_arch = "wasm32"))]
            backends: wgpu::Backends::PRIMARY,
            #[cfg(target_arch = "wasm32")]
            backends: wgpu::Backends::GL,
            ..Default::default()
        });
        let surface = instance.create_surface(window.clone()).unwrap();
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::default(),
                compatible_surface: Some(&surface),
                force_fallback_adapter: false,
            })
            .await?;
        let (device, queue) = adapter
            .request_device(&wgpu::DeviceDescriptor {
                label: None,
                required_features: wgpu::Features::empty(),
                // WebGL doesn't support all of wgpu's features, so if
                // we're building for the web we'll have to disable some.
                required_limits: if cfg!(target_arch = "wasm32") {
                    wgpu::Limits::downlevel_webgl2_defaults()
                } else {
                    wgpu::Limits::default()
                },
                memory_hints: Default::default(),
                trace: wgpu::Trace::Off,
            })
            .await?;
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
            desired_maximum_frame_latency: 2,
        };

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

    pub fn surface(&self) -> &wgpu::Surface {
        &self.surface
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

pub trait Demo: 'static + Sized + Send + std::fmt::Debug {
    fn init(display: &Display) -> anyhow::Result<Self>;
    fn process_mouse(&mut self, dx: f64, dy: f64);
    fn process_keyboard(&mut self, key: KeyCode, pressed: bool);
    fn resize(&mut self, display: &Display);
    fn update(&mut self, display: &Display, dt: Duration);
    fn render(&mut self, display: &mut Display);
}

pub struct App<D: Demo> {
    demo: Option<(Display, D)>,
    proxy: Option<EventLoopProxy<(Display, D)>>,
    last_time: Instant,
}

impl<D: Demo + 'static> App<D> {
    pub fn new(event_loop: &EventLoop<(Display, D)>) -> Self {
        Self {
            demo: None,
            proxy: Some(event_loop.create_proxy()),
            last_time: Instant::now(),
        }
    }
}

impl<D: Demo + 'static> ApplicationHandler<(Display, D)> for App<D> {
    fn resumed(&mut self, event_loop: &winit::event_loop::ActiveEventLoop) {
        #[allow(unused_mut)]
        let mut window_attributes = Window::default_attributes();

        #[cfg(target_arch = "wasm32")]
        {
            use wasm_bindgen::JsCast;
            use winit::platform::web::WindowAttributesExtWebSys;

            const CANVAS_ID: &str = "canvas";

            let window = wgpu::web_sys::window().unwrap_throw();
            let document = window.document().unwrap_throw();
            let canvas = document.get_element_by_id(CANVAS_ID).unwrap_throw();
            let html_canvas_element = canvas.unchecked_into();
            window_attributes = window_attributes.with_canvas(Some(html_canvas_element));
        }

        let window = Arc::new(event_loop.create_window(window_attributes).unwrap());

        if let Some(proxy) = self.proxy.take() {
            let display_future = Display::new(window.clone());
            std::thread::spawn(move || {
                let display = display_future.block_on()?;
                let demo = D::init(&display)?;

                proxy
                    .send_event((display, demo))
                    .expect("Unable to send (display, demo)");

                anyhow::Ok(())
            });
        }
    }

    fn user_event(
        &mut self,
        _event_loop: &winit::event_loop::ActiveEventLoop,
        event: (Display, D),
    ) {
        event.0.window.request_redraw();
        self.demo = Some(event);
        self.last_time = Instant::now();
    }

    fn device_event(
        &mut self,
        _event_loop: &winit::event_loop::ActiveEventLoop,
        _device_id: DeviceId,
        event: DeviceEvent,
    ) {
        let (_, demo) = if let Some(demo) = &mut self.demo {
            demo
        } else {
            return;
        };

        match event {
            DeviceEvent::MouseMotion { delta: (dx, dy) } => {
                demo.process_mouse(dx, dy);
            }
            _ => {}
        }
    }

    fn window_event(
        &mut self,
        event_loop: &winit::event_loop::ActiveEventLoop,
        _window_id: winit::window::WindowId,
        event: WindowEvent,
    ) {
        if let Some(demo) = &mut self.demo {
            let (display, demo) = demo;
            match event {
                WindowEvent::CloseRequested => event_loop.exit(),
                WindowEvent::Resized(new_size) => {
                    display.resize(new_size.width, new_size.height);
                    demo.resize(&display);
                }
                WindowEvent::KeyboardInput {
                    event:
                        KeyEvent {
                            physical_key: PhysicalKey::Code(key),
                            state,
                            ..
                        },
                    ..
                } => {
                    demo.process_keyboard(key, state.is_pressed());
                }
                WindowEvent::RedrawRequested => {
                    display.window.request_redraw();
                    let dt = self.last_time.elapsed();
                    self.last_time = Instant::now();

                    demo.update(display, dt);
                    demo.render(display);
                }
                _ => {}
            }
        } else {
            return;
        }
    }
}

pub fn run<D: Demo>() -> anyhow::Result<()> {
    wgpu_subscriber::initialize_default_subscriber(None);

    let event_loop = EventLoop::with_user_event().build()?;
    let mut app = App::<D>::new(&event_loop);
    event_loop.run_app(&mut app)?;

    Ok(())
}
