# Creating gifs 

Sometimes you've created a nice simulation/animation, and you want to show it off. While you can record a video, that might be a bit overkill to break our your video recording if you just want something to post on twitter. That's where what [GIF](https://en.wikipedia.org/wiki/GIF)s are for.

Also, GIF is pronounced GHIF, not JIF as JIF is not only [peanut butter](https://en.wikipedia.org/wiki/Jif_%28peanut_butter%29), it is also a [different image format](https://filext.com/file-extension/JIF).

## How are we making the GIF?

We're going to create a function using the [gif crate](https://docs.rs/gif/) to encode the actual image.

```rust
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
```

<!-- image-rs doesn't currently support looping, so I switched to gif -->
<!-- A GIF is a type of image, and fortunately the [image crate](https://docs.rs/image/) supports GIFs natively. It's pretty simple to use. -->

<!-- ```rust
fn save_gif(path: &str, frames: &mut Vec<Vec<u8>>, speed: i32, size: u16) -> Result<(), failure::Error> {
    let output = std::fs::File::create(path)?;
    let mut encoder = image::gif::Encoder::new(output);

    for mut data in frames {
        let frame = image::gif::Frame::from_rgba_speed(size, size, &mut data, speed);
        encoder.encode(&frame)?;
    }

    Ok(())
}
``` -->

All we need to use this code is the frames of the GIF, how fast it should run, and the size of the GIF (you could use width and height seperately, but I didn't).

## How do we make the frames?

If you checked out the [windowless showcase](../windowless/#a-triangle-without-a-window), you'll know that we render directly to a `wgpu::Texture`. We'll create a texture to render to and a buffer the copy the output to.

```rust
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
```

With that we can render a frame, and then copy that frame to a `Vec<u8>`.

```rust
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
```

Once that's done we can pull the frame data our of the `Arc<Mutex<_>>`, and pass it into `save_gif()`.

```rust
let mut frames = Arc::try_unwrap(frames)
    .unwrap()
    .into_inner()
    .unwrap();

save_gif("output.gif", &mut frames, 1, texture_size as u16).unwrap();
```

That's the gist of it. We can improve things using a texture array, and sending the draw commands all at once, but this gets the idea across. With the shader I wrote we get the following GIF.


![./output.gif](./output.gif)

<AutoGithubLink/>