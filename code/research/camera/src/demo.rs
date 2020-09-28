use cgmath::*;
use std::time::Duration;
use winit::dpi::*;
use winit::event::*;
use winit::window::Window;

use crate::camera::*;
use crate::data::*;
use crate::pipeline::*;
use crate::resource::*;

pub struct Demo {
    surface: wgpu::Surface,
    #[allow(dead_code)]
    adapter: wgpu::Adapter,
    device: wgpu::Device,
    queue: wgpu::Queue,
    sc_desc: wgpu::SwapChainDescriptor,
    swap_chain: wgpu::SwapChain,
    debug_pipeline: wgpu::RenderPipeline,
    // other resources
    axes: Mesh,
    clear_color: wgpu::Color,
    pub is_running: bool,
    camera: Camera,
    controller: CameraController,
    projection: Projection,
    uniforms: Uniforms,
    uniforms_bind_group: wgpu::BindGroup,
    last_mouse_pos: PhysicalPosition<f64>,
    mouse_pressed: bool,
}

impl Demo {
    pub async fn new(window: &Window) -> Self {
        let surface = wgpu::Surface::create(window);
        let adapter: wgpu::Adapter = wgpu::Adapter::request(
            &wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::Default,
                compatible_surface: Some(&surface),
            },
            wgpu::BackendBit::PRIMARY,
        )
        .await
        .unwrap();
        let (device, queue): (wgpu::Device, wgpu::Queue) =
            adapter.request_device(&Default::default()).await;
        let inner_size = window.inner_size();
        let sc_desc = wgpu::SwapChainDescriptor {
            usage: wgpu::TextureUsage::OUTPUT_ATTACHMENT,
            format: wgpu::TextureFormat::Bgra8UnormSrgb,
            width: inner_size.width,
            height: inner_size.height,
            present_mode: wgpu::PresentMode::Fifo,
        };
        let swap_chain = device.create_swap_chain(&surface, &sc_desc);
        let camera = Camera::new((0.0, 0.5, 3.0), Deg(-90.0), Deg(0.0));
        let controller = CameraController::new(0.5);
        let projection =
            Projection::new(inner_size.width, inner_size.height, Deg(45.0), 0.1, 1000.0);
        let uniforms = Uniforms::new(&device, &camera, &projection);
        let (uniform_layout, uniforms_bind_group) = create_uniform_binding(&device, &uniforms);
        let debug_pipeline_layout =
            device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                bind_group_layouts: &[&uniform_layout],
            });
        let debug_pipeline = RenderPipelineBuilder::new()
            .layout(&debug_pipeline_layout)
            .color_solid(sc_desc.format)
            .primitive_topology(wgpu::PrimitiveTopology::LineList)
            .vertex_shader(include_bytes!("debug.vert.spv"))
            .fragment_shader(include_bytes!("debug.frag.spv"))
            .index_format(wgpu::IndexFormat::Uint16)
            .vertex_buffer(Vertex::desc())
            .cull_mode(wgpu::CullMode::None)
            .build(&device)
            .unwrap();
        let axes = Mesh::axes(&device);

        Self {
            surface,
            adapter,
            device,
            queue,
            sc_desc,
            swap_chain,
            debug_pipeline,
            axes,
            clear_color: wgpu::Color {
                r: 0.1,
                g: 0.2,
                b: 0.3,
                a: 1.0,
            },
            is_running: true,
            camera,
            controller,
            projection,
            uniforms,
            uniforms_bind_group,
            last_mouse_pos: (0.0, 0.0).into(),
            mouse_pressed: false,
        }
    }

    pub fn resize(&mut self, new_size: PhysicalSize<u32>) {
        self.sc_desc.width = new_size.width;
        self.sc_desc.height = new_size.height;
        self.swap_chain = self.device.create_swap_chain(&self.surface, &self.sc_desc);
        self.projection.resize(new_size.width, new_size.height);
        self.uniforms.apply_projection(&self.projection);
    }

    pub fn input(&mut self, event: &WindowEvent) -> bool {
        match event {
            WindowEvent::KeyboardInput {
                input:
                    KeyboardInput {
                        virtual_keycode: Some(key),
                        state,
                        ..
                    },
                ..
            } => {
                self.controller.process_keyboard(*key, *state)
                    || match (key, *state == ElementState::Pressed) {
                        (VirtualKeyCode::Escape, true) => {
                            self.is_running = false;
                            true
                        }
                        _ => false,
                    }
            }
            WindowEvent::MouseInput {
                button: MouseButton::Left,
                state,
                ..
            } => {
                self.mouse_pressed = *state == ElementState::Pressed;
                true
            }
            WindowEvent::CursorMoved { position, .. } => {
                let mouse_dx = position.x - self.last_mouse_pos.x;
                let mouse_dy = position.y - self.last_mouse_pos.y;
                self.last_mouse_pos = *position;
                if self.mouse_pressed {
                    self.controller.process_mouse(mouse_dx, mouse_dy);
                    true
                } else {
                    false
                }
            }
            _ => false,
        }
    }

    pub fn update(&mut self, dt: Duration) {
        if self.controller.is_dirty() {
            self.controller.update_camera(&mut self.camera, dt);
            self.uniforms.apply_camera(&self.camera);
        }
        if let Some(cmds) = self.uniforms.update(&self.device) {
            self.queue.submit(&[cmds]);
        }
    }

    pub fn render(&mut self) {
        let mut encoder = self
            .device
            .create_command_encoder(&wgpu::CommandEncoderDescriptor { label: None });
        let frame = self
            .swap_chain
            .get_next_texture()
            .expect("Unable to retrieve swap chain texture");

        {
            let mut pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                color_attachments: &[wgpu::RenderPassColorAttachmentDescriptor {
                    attachment: &frame.view,
                    resolve_target: None,
                    load_op: wgpu::LoadOp::Clear,
                    store_op: wgpu::StoreOp::Store,
                    clear_color: self.clear_color,
                }],
                depth_stencil_attachment: None,
            });
            pass.set_pipeline(&self.debug_pipeline);
            pass.set_bind_group(0, &self.uniforms_bind_group, &[]);
            pass.set_index_buffer(&self.axes.index_buffer, 0, 0);
            pass.set_vertex_buffer(0, &self.axes.vertex_buffer, 0, 0);
            pass.draw_indexed(0..self.axes.index_count, 0, 0..1);
        }

        self.queue.submit(&[encoder.finish()]);
    }
}
