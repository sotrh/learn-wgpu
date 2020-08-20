extern crate framework;

use std::mem;
use std::sync::{Arc, Mutex};

async fn run() {
    let adapter = wgpu::Adapter::request(
        &wgpu::RequestAdapterOptions {
            power_preference: wgpu::PowerPreference::Default,
            compatible_surface: None,
        },
        wgpu::BackendBit::PRIMARY, // Vulkan + Metal + DX12 + Browser WebGPU
    ).await.unwrap();

    let (device, queue) = adapter.request_device(&wgpu::DeviceDescriptor {
        extensions: wgpu::Extensions {
            anisotropic_filtering: false,
        },
        limits: Default::default(),
    }).await;
    
    let colors = [
        [0.0, 0.0, 0.0],
        [0.0, 0.0, 0.2],
        [0.0, 0.2, 0.2],
        [0.2, 0.2, 0.2],
        [0.2, 0.2, 0.2],
        [0.0, 0.2, 0.2],
        [0.0, 0.0, 0.2],
        [0.0, 0.0, 0.0],
    ];

    // create a texture to render to
    let texture_size = 256u32;
    let rt_desc = wgpu::TextureDescriptor {
        size: wgpu::Extent3d {
            width: texture_size,
            height: texture_size,
            depth: 1,
        },
        array_layer_count: colors.len() as u32,
        mip_level_count: 1,
        sample_count: 1,
        dimension: wgpu::TextureDimension::D2,
        format: wgpu::TextureFormat::Rgba8UnormSrgb,
        usage: wgpu::TextureUsage::COPY_SRC
            | wgpu::TextureUsage::OUTPUT_ATTACHMENT,
        label: None,
    };
    let render_target = framework::Texture::from_descriptor(&device, rt_desc);

    // create a buffer to copy the texture to so we can get the data
    let pixel_size = mem::size_of::<[u8;4]>() as u32;
    let buffer_size = (pixel_size * texture_size * texture_size) as wgpu::BufferAddress;
    let buffer_desc = wgpu::BufferDescriptor {
        size: buffer_size,
        usage: wgpu::BufferUsage::COPY_DST | wgpu::BufferUsage::MAP_READ,
        label: None,
    };
    let output_buffer = device.create_buffer(&buffer_desc);

    // a simple render pipeline that draws a triangle
    let render_pipeline = create_render_pipeline(&device, &render_target);

    // we need to store this in and arc-mutex so we can pass it to the mapping function
    let frames = Arc::new(Mutex::new(Vec::new()));

    for c in &colors {
        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: None,
        });

        let mut rpass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            color_attachments: &[
                wgpu::RenderPassColorAttachmentDescriptor {
                    attachment: &render_target.view,
                    resolve_target: None,
                    load_op: wgpu::LoadOp::Clear,
                    store_op: wgpu::StoreOp::Store,
                    // modify the clear color so the gif changes
                    clear_color: wgpu::Color {
                        r: c[0],
                        g: c[1],
                        b: c[2],
                        a: 1.0,
                    }
                }
            ],
            depth_stencil_attachment: None,
        });

        rpass.set_pipeline(&render_pipeline);
        rpass.draw(0..3, 0..1);

        drop(rpass);

        encoder.copy_texture_to_buffer(
            wgpu::TextureCopyView {
                texture: &render_target.texture,
                mip_level: 0,
                array_layer: 0,
                origin: wgpu::Origin3d::ZERO,
            }, 
            wgpu::BufferCopyView {
                buffer: &output_buffer,
                offset: 0,
                bytes_per_row: pixel_size * texture_size,
                rows_per_image: texture_size,
            },
            render_target.desc.size
        );

        queue.submit(&[encoder.finish()]);

        let frames_clone = frames.clone();
        
        // Create the map request
        let request = output_buffer.map_read(0, buffer_size);
        // wait for the GPU to finish
        device.poll(wgpu::Maintain::Wait);
        let result = request.await;
        
        match result {
            Ok(pixels) => {
                let data = Vec::from(pixels.as_slice());
                let mut f = frames_clone.lock().unwrap();
                (*f).push(data);
            }
            _ => { eprintln!("Something went wrong") }
        }

    }
    
    let mut frames = Arc::try_unwrap(frames)
        .unwrap()
        .into_inner()
        .unwrap();

    save_gif("output.gif", &mut frames, 10, texture_size as u16).unwrap();
}

fn save_gif(path: &str, frames: &mut Vec<Vec<u8>>, speed: i32, size: u16) -> Result<(), failure::Error> {
    use gif::{Frame, Encoder, Repeat, SetParameter};
    
    let mut image = std::fs::File::create(path)?;
    let mut encoder = Encoder::new(&mut image, size, size, &[])?;
    encoder.set(Repeat::Infinite)?;

    for mut frame in frames {
        encoder.write_frame(&Frame::from_rgba_speed(size, size, &mut frame, speed))?;
    }

    Ok(())
}


fn create_render_pipeline(device: &wgpu::Device, target: &framework::Texture) -> wgpu::RenderPipeline {
    let vs_src = include_str!("res/shader.vert");
    let fs_src = include_str!("res/shader.frag");
    let mut compiler = shaderc::Compiler::new().unwrap();
    let vs_spirv = compiler.compile_into_spirv(vs_src, shaderc::ShaderKind::Vertex, "shader.vert", "main", None).unwrap();
    let fs_spirv = compiler.compile_into_spirv(fs_src, shaderc::ShaderKind::Fragment, "shader.frag", "main", None).unwrap();
    let vs_data = wgpu::read_spirv(std::io::Cursor::new(vs_spirv.as_binary_u8())).unwrap();
    let fs_data = wgpu::read_spirv(std::io::Cursor::new(fs_spirv.as_binary_u8())).unwrap();
    let vs_module = device.create_shader_module(&vs_data);
    let fs_module = device.create_shader_module(&fs_data);

    let render_pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        bind_group_layouts: &[],
    });

    let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
        layout: &render_pipeline_layout,
        vertex_stage: wgpu::ProgrammableStageDescriptor {
            module: &vs_module,
            entry_point: "main",
        },
        fragment_stage: Some(wgpu::ProgrammableStageDescriptor {
            module: &fs_module,
            entry_point: "main",
        }),
        rasterization_state: Some(wgpu::RasterizationStateDescriptor {
            front_face: wgpu::FrontFace::Ccw,
            cull_mode: wgpu::CullMode::Back,
            depth_bias: 0,
            depth_bias_slope_scale: 0.0,
            depth_bias_clamp: 0.0,
        }),
        primitive_topology: wgpu::PrimitiveTopology::TriangleList,
        color_states: &[
            wgpu::ColorStateDescriptor {
                format: target.desc.format,
                color_blend: wgpu::BlendDescriptor::REPLACE,
                alpha_blend: wgpu::BlendDescriptor::REPLACE,
                write_mask: wgpu::ColorWrite::ALL,
            },
        ],
        depth_stencil_state: None,
        vertex_state: wgpu::VertexStateDescriptor {
            index_format: wgpu::IndexFormat::Uint16,
            vertex_buffers: &[],
        },
        sample_count: 1,
        sample_mask: !0,
        alpha_to_coverage_enabled: false,
    });

    render_pipeline
}

fn main() {
    use futures::executor::block_on;
    block_on(run());
}
