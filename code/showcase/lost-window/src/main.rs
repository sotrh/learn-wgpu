use std::time::{Duration, Instant};

use winit::{
    event::{Event, WindowEvent},
    event_loop::EventLoop,
    window::WindowBuilder,
};

async fn run() -> anyhow::Result<()> {
    let event_loop = EventLoop::new();
    let mut window = Some(WindowBuilder::new()
        .with_visible(false)
        .build(&event_loop)?);

    let window2 = WindowBuilder::new()
        .with_visible(false)
        .build(&event_loop)?;

    let backends = wgpu::Backends::all();
    let instance = wgpu::Instance::new(backends);
    let surface = unsafe { instance.create_surface(window.as_ref().unwrap()) };
    let adapter = instance
        .enumerate_adapters(backends)
        .filter(|a| a.is_surface_supported(&surface))
        .next()
        .unwrap();
    let (device, queue) = adapter
        .request_device(
            &wgpu::DeviceDescriptor {
                label: None,
                features: Default::default(),
                limits: Default::default(),
            },
            None,
        )
        .await?;

    let inner_size = window.as_ref().unwrap().inner_size();
    let mut config = wgpu::SurfaceConfiguration {
        width: inner_size.width,
        height: inner_size.height,
        format: surface.get_supported_formats(&adapter)[0],
        usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
        present_mode: Default::default(),
        alpha_mode: wgpu::CompositeAlphaMode::Auto,
    };
    surface.configure(&device, &config);

    let mut last_time = Instant::now();
    window.as_ref().unwrap().set_visible(true);
    window2.set_visible(true);
    event_loop.run(move |ev, _, cf| {
        match ev {
            Event::WindowEvent { event, window_id } => {
                match event {
                    WindowEvent::Resized(size) => {
                        if window.is_some() && window_id == window.as_ref().unwrap().id() {
                            config.width = size.width;
                            config.height = size.height;
                            surface.configure(&device, &config);
                        }
                    }
                    WindowEvent::CloseRequested => {
                        // You'll only really want to close the window while testing
                        cf.set_exit()
                    }
                    _ => (),
                }
            }
            Event::RedrawRequested(_) => {
                let frame = match surface.get_current_texture() {
                    Ok(frame) => frame,
                    Err(wgpu::SurfaceError::Outdated) => return,
                    Err(e) => panic!("An error occurred: {:?}", e),
                };

                let view = frame.texture.create_view(&Default::default());
                let mut encoder = device.create_command_encoder(&Default::default());
                drop(encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                    label: None,
                    color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                        view: &view,
                        resolve_target: None,
                        ops: Default::default(),
                    })],
                    depth_stencil_attachment: None,
                }));
                queue.submit([encoder.finish()]);
                frame.present();
            }
            Event::RedrawEventsCleared => {
                let current_time = Instant::now();
                let dt = current_time - last_time;
                // last_time = current_time;

                if let Some(w) = window.as_ref() {
                    w.request_redraw();
                }
                window2.request_redraw();

                println!("dt: {:?}", dt);

                if dt > Duration::from_secs(2) {
                    // Dispose of the first window
                    window = None;
                }
                
                if dt > Duration::from_secs(5) {
                    // Attempt to get a frame (for testing)
                    println!("{:?}", surface.get_current_texture());

                    // Exit the loop
                    cf.set_exit();
                }
            }
            _ => (),
        }
    });

    Ok(())
}

fn main() -> anyhow::Result<()> {
    pollster::block_on(run())
}
