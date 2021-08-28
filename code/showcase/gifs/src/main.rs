extern crate framework;

use anyhow::*;
use std::{iter, mem, num::NonZeroU32};

async fn run() {
    let instance = wgpu::Instance::new(wgpu::Backends::all());
    let adapter = instance
        .request_adapter(&wgpu::RequestAdapterOptions::default())
        .await
        .unwrap();
    let (device, queue) = adapter
        .request_device(
            &wgpu::DeviceDescriptor {
                label: Some("Device"),
                features: wgpu::Features::empty(),
                limits: wgpu::Limits::default(),
            },
            None, // Trace path
        )
        .await
        .unwrap();

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
            depth_or_array_layers: 1,
        },
        mip_level_count: 1,
        sample_count: 1,
        dimension: wgpu::TextureDimension::D2,
        format: wgpu::TextureFormat::Rgba8UnormSrgb,
        usage: wgpu::TextureUsages::COPY_SRC | wgpu::TextureUsages::RENDER_ATTACHMENT,
        label: None,
    };
    let render_target = framework::Texture::from_descriptor(&device, rt_desc);

    // wgpu requires texture -> buffer copies to be aligned using
    // wgpu::COPY_BYTES_PER_ROW_ALIGNMENT. Because of this we'll
    // need to save both the padded_bytes_per_row as well as the
    // unpadded_bytes_per_row
    let pixel_size = mem::size_of::<[u8; 4]>() as u32;
    let align = wgpu::COPY_BYTES_PER_ROW_ALIGNMENT;
    let unpadded_bytes_per_row = pixel_size * texture_size;
    let padding = (align - unpadded_bytes_per_row % align) % align;
    let padded_bytes_per_row = unpadded_bytes_per_row + padding;

    // create a buffer to copy the texture to so we can get the data
    let buffer_size = (padded_bytes_per_row * texture_size) as wgpu::BufferAddress;
    let buffer_desc = wgpu::BufferDescriptor {
        size: buffer_size,
        usage: wgpu::BufferUsage::COPY_DST | wgpu::BufferUsage::MAP_READ,
        label: Some("Output Buffer"),
        mapped_at_creation: false,
    };
    let output_buffer = device.create_buffer(&buffer_desc);

    // a simple render pipeline that draws a triangle
    let render_pipeline = create_render_pipeline(&device, &render_target);

    let mut frames = Vec::new();

    for c in &colors {
        let mut encoder =
            device.create_command_encoder(&wgpu::CommandEncoderDescriptor { label: None });

        let mut rpass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
            label: Some("GIF Pass"),
            color_attachments: &[wgpu::RenderPassColorAttachment {
                view: &render_target.view,
                resolve_target: None,
                ops: wgpu::Operations {
                    load: wgpu::LoadOp::Clear(wgpu::Color {
                        r: c[0],
                        g: c[1],
                        b: c[2],
                        a: 1.0,
                    }),
                    store: true,
                },
            }],
            depth_stencil_attachment: None,
        });

        rpass.set_pipeline(&render_pipeline);
        rpass.draw(0..3, 0..1);

        drop(rpass);

        encoder.copy_texture_to_buffer(
            wgpu::ImageCopyTexture {
                texture: &render_target.texture,
                mip_level: 0,
                origin: wgpu::Origin3d::ZERO,
            },
            wgpu::ImageCopyBuffer {
                buffer: &output_buffer,
                layout: wgpu::ImageDataLayout {
                    offset: 0,
                    bytes_per_row: NonZeroU32::new(padded_bytes_per_row),
                    rows_per_image: NonZeroU32::new(texture_size),
                },
            },
            render_target.desc.size,
        );

        queue.submit(iter::once(encoder.finish()));

        // Create the map request
        let buffer_slice = output_buffer.slice(..);
        let request = buffer_slice.map_async(wgpu::MapMode::Read);
        // wait for the GPU to finish
        device.poll(wgpu::Maintain::Wait);
        let result = request.await;

        match result {
            Ok(()) => {
                let padded_data = buffer_slice.get_mapped_range();
                let data = padded_data
                    .chunks(padded_bytes_per_row as _)
                    .map(|chunk| &chunk[..unpadded_bytes_per_row as _])
                    .flatten()
                    .map(|x| *x)
                    .collect::<Vec<_>>();
                drop(padded_data);
                output_buffer.unmap();
                frames.push(data);
            }
            _ => eprintln!("Something went wrong"),
        }
    }

    save_gif("output.gif", &mut frames, 10, texture_size as u16).unwrap();
}

fn save_gif(path: &str, frames: &mut Vec<Vec<u8>>, speed: i32, size: u16) -> Result<()> {
    use gif::{Encoder, Frame, Repeat, SetParameter};

    let mut image = std::fs::File::create(path)?;
    let mut encoder = Encoder::new(&mut image, size, size, &[])?;
    encoder.set(Repeat::Infinite)?;

    for mut frame in frames {
        encoder.write_frame(&Frame::from_rgba_speed(size, size, &mut frame, speed))?;
    }

    Ok(())
}

fn create_render_pipeline(
    device: &wgpu::Device,
    target: &framework::Texture,
) -> wgpu::RenderPipeline {
    let vs_src = wgpu::include_spirv!("shader.vert.spv");
    let fs_src = wgpu::include_spirv!("shader.frag.spv");
    let vs_module = device.create_shader_module(&vs_src);
    let fs_module = device.create_shader_module(&fs_src);

    let render_pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some("Render Pipeline Layout"),
        bind_group_layouts: &[],
        push_constant_ranges: &[],
    });

    let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
        layout: Some(&render_pipeline_layout),
        label: Some("Render Pipeline"),
        vertex: wgpu::VertexState {
            module: &vs_module,
            entry_point: "main",
            buffers: &[],
        },
        fragment: Some(wgpu::FragmentState {
            module: &fs_module,
            entry_point: "main",
            targets: &[wgpu::ColorTargetState {
                format: target.desc.format,
                blend: Some(wgpu::BlendState::REPLACE),
                write_mask: wgpu::ColorWrite::ALL,
            }],
        }),
        primitive: wgpu::PrimitiveState {
            topology: wgpu::PrimitiveTopology::TriangleList,
            strip_index_format: None,
            front_face: wgpu::FrontFace::Ccw,
            cull_mode: Some(wgpu::Face::Back),
            // Setting this to anything other than Fill requires Features::NON_FILL_POLYGON_MODE
            polygon_mode: wgpu::PolygonMode::Fill,
            // Requires Features::DEPTH_CLAMPING
            clamp_depth: false,
            // Requires Features::CONSERVATIVE_RASTERIZATION
            conservative: false,
        },
        depth_stencil: None,
        multisample: wgpu::MultisampleState {
            count: 1,
            mask: !0,
            alpha_to_coverage_enabled: false,
        },
    });

    render_pipeline
}

fn main() {
    pollster::block_on(run());
}
