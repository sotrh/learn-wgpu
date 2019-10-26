fn main() {
    let instance = wgpu::Instance::new();
    let adapter = instance.request_adapter(&Default::default());
    let mut device = adapter.request_device(&Default::default());

    let texture_size = 32u32;
    let texture_desc = wgpu::TextureDescriptor {
        size: wgpu::Extent3d {
            width: texture_size,
            height: texture_size,
            depth: 1,
        },
        array_layer_count: 1,
        mip_level_count: 0,
        sample_count: 1,
        dimension: wgpu::TextureDimension::D2,
        format: wgpu::TextureFormat::Rgba8UnormSrgb,
        usage: wgpu::TextureUsage::COPY_SRC 
            | wgpu::TextureUsage::OUTPUT_ATTACHMENT,
    };

    let texture = device.create_texture(&texture_desc);
    let texture_view = texture.create_default_view();

    let row_pitch = std::mem::size_of::<u32>() as u32;
    let output_buffer_size = (row_pitch * texture_size * texture_size) as wgpu::BufferAddress;
    let output_buffer_desc = wgpu::BufferDescriptor {
        size: output_buffer_size,
        usage: wgpu::BufferUsage::COPY_DST,
    };
    let output_buffer = device.create_buffer(&output_buffer_desc);

    let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
        todo: 0,
    });

    {
        let render_pass_desc = wgpu::RenderPassDescriptor {
            color_attachments: &[
                wgpu::RenderPassColorAttachmentDescriptor {
                    attachment: &texture_view,
                    resolve_target: None,
                    load_op: wgpu::LoadOp::Clear,
                    store_op: wgpu::StoreOp::Store,
                    clear_color: wgpu::Color::BLACK,
                }
            ],
            depth_stencil_attachment: None,
        };
        let mut render_pass = encoder.begin_render_pass(&render_pass_desc);
    }

    encoder.copy_texture_to_buffer(
        wgpu::TextureCopyView {
            texture: &texture,
            mip_level: 0,
            array_layer: 1,
            origin: wgpu::Origin3d::ZERO,
        }, 
        wgpu::BufferCopyView {
            buffer: &output_buffer,
            offset: 0,
            row_pitch,
            image_height: texture_size,
        }, 
        texture_desc.size,
    );

    device.get_queue().submit(&[encoder.finish()]);

    output_buffer.map_read_async(0, output_buffer_size, move |result: wgpu::BufferMapAsyncResult<&[u8]>| {
        println!("Testing 1, 2, 3");
        let mapping = result.unwrap();
        let data = mapping.data;

        use image::{ImageBuffer, Rgba};
        let buffer = ImageBuffer::<Rgba<u8>, _>::from_raw(
            texture_size,
            texture_size,
            data,
        ).unwrap();

        buffer.save("image.png").unwrap();
    });

    device.poll(true);
}