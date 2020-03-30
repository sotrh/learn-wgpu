extern crate framework;

use std::mem;
use std::sync::{Arc, Mutex};

fn main() {
    let adapter = wgpu::Adapter::request(&Default::default()).unwrap();
    let (device, mut queue) = adapter.request_device(&Default::default());
    
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
    };
    let render_target = framework::Texture::from_descriptor(&device, rt_desc);

    // create a buffer to copy the texture to so we can get the data
    let pixel_size = mem::size_of::<[u8;4]>() as u32;
    let buffer_size = (pixel_size * texture_size * texture_size) as wgpu::BufferAddress;
    let buffer_desc = wgpu::BufferDescriptor {
        size: buffer_size,
        usage: wgpu::BufferUsage::COPY_DST | wgpu::BufferUsage::MAP_READ,
    };
    let output_buffer = device.create_buffer(&buffer_desc);

    // a simple render pipeline that draws a triangle
    let render_pipeline = create_render_pipeline(&device, &render_target);

    // we need to store this in and arc-mutex so we can pass it to the mapping function
    let frames = Arc::new(Mutex::new(Vec::new()));

    for c in &colors {
        let mut encoder = device.create_command_encoder(&Default::default());

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
                row_pitch: pixel_size * texture_size,
                image_height: texture_size,
            },
            render_target.desc.size
        );

        queue.submit(&[encoder.finish()]);

        let frames_clone = frames.clone();
        output_buffer.map_read_async(0, buffer_size, move |result: wgpu::BufferMapAsyncResult<&[u8]>| {
            match result {
                Ok(mapping) => {
                    let data = Vec::from(mapping.data);
                    let mut f = frames_clone.lock().unwrap();
                    (*f).push(data);
                }
                _ => { eprintln!("Something went wrong") }
            }
        });

        // wait for the GPU to finish
        device.poll(true);
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

// The image crate currently doesn't support looping gifs, so I'm not using this
// code. I'm keeping it around in case image adds looping support.
#[allow(unused)]
fn save_gif_old(path: &str, frames: &mut Vec<Vec<u8>>, speed: i32, size: u16) -> Result<(), failure::Error> {
    let output = std::fs::File::create(path)?;
    let mut encoder = image::gif::Encoder::new(output);

    for mut data in frames {
        let frame = image::gif::Frame::from_rgba_speed(size, size, &mut data, speed);
        encoder.encode(&frame)?;
    }

    Ok(())
}


fn create_render_pipeline(device: &wgpu::Device, target: &framework::Texture) -> wgpu::RenderPipeline {
    let vs_src = include_str!("res/shader.vert");
    let fs_src = include_str!("res/shader.frag");
    let vs_spirv = glsl_to_spirv::compile(vs_src, glsl_to_spirv::ShaderType::Vertex).unwrap();
    let fs_spirv = glsl_to_spirv::compile(fs_src, glsl_to_spirv::ShaderType::Fragment).unwrap();
    let vs_data = wgpu::read_spirv(vs_spirv).unwrap();
    let fs_data = wgpu::read_spirv(fs_spirv).unwrap();
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
        index_format: wgpu::IndexFormat::Uint16,
        vertex_buffers: &[],
        sample_count: 1,
        sample_mask: !0,
        alpha_to_coverage_enabled: false,
    });

    render_pipeline
}

