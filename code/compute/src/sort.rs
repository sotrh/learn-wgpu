use flume::bounded;
use wgpu::util::{BufferInitDescriptor, DeviceExt};

pub async fn run() -> anyhow::Result<()> {
    let instance = wgpu::Instance::new(&Default::default());
    let adapter = instance.request_adapter(&Default::default()).await.unwrap();
    let (device, queue) = adapter.request_device(&Default::default()).await.unwrap();

    let shader = device.create_shader_module(wgpu::include_wgsl!("sort.wgsl"));

    let pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some("Compute Pipeline"),
        layout: None,
        module: &shader,
        entry_point: None,
        compilation_options: Default::default(),
        cache: Default::default(),
    });

    let input_data = (0u32..128 * 9).rev().collect::<Vec<_>>();

    let odd_data = [1u32];
    let even_data = [0u32];

    let data_buffer = device.create_buffer_init(&BufferInitDescriptor {
        label: Some("data"),
        contents: bytemuck::cast_slice(&input_data),
        usage: wgpu::BufferUsages::COPY_SRC | wgpu::BufferUsages::STORAGE,
    });

    let odd_buffer = device.create_buffer_init(&BufferInitDescriptor {
        label: Some("odd flag"),
        contents: bytemuck::cast_slice(&odd_data),
        usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
    });

    let even_buffer = device.create_buffer_init(&BufferInitDescriptor {
        label: Some("even flag"),
        contents: bytemuck::cast_slice(&even_data),
        usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
    });

    let temp_buffer = device.create_buffer(&wgpu::BufferDescriptor {
        label: Some("temp"),
        size: data_buffer.size(),
        usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::MAP_READ,
        mapped_at_creation: false,
    });

    let odd_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: None,
        layout: &pipeline.get_bind_group_layout(0),
        entries: &[
            wgpu::BindGroupEntry {
                binding: 0,
                resource: data_buffer.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 1,
                resource: odd_buffer.as_entire_binding(),
            },
        ],
    });

    let even_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: None,
        layout: &pipeline.get_bind_group_layout(0),
        entries: &[
            wgpu::BindGroupEntry {
                binding: 0,
                resource: data_buffer.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 1,
                resource: even_buffer.as_entire_binding(),
            },
        ],
    });

    let mut encoder = device.create_command_encoder(&Default::default());

    let num_items_per_workgroup = 64;
    let num_dispatches = (input_data.len() / num_items_per_workgroup) as u32
        + (input_data.len() % num_items_per_workgroup > 0) as u32;
    // We do 2 dispatches so we only need to do half the passes
    let num_passes = input_data.len() / 2 + input_data.len() % 2;

    {
        let mut pass = encoder.begin_compute_pass(&Default::default());

        for _ in 0..num_passes {
            pass.set_pipeline(&pipeline);
            pass.set_bind_group(0, &odd_bind_group, &[]);
            pass.dispatch_workgroups(num_dispatches, 1, 1);
            pass.set_bind_group(0, &even_bind_group, &[]);
            pass.dispatch_workgroups(num_dispatches, 1, 1);
        }
    }

    encoder.copy_buffer_to_buffer(&data_buffer, 0, &temp_buffer, 0, data_buffer.size());

    queue.submit([encoder.finish()]);

    {
        let (tx, rx) = bounded(1);
        temp_buffer.map_async(wgpu::MapMode::Read, .., move |result| {
            tx.send(result).unwrap()
        });
        device.poll(wgpu::PollType::wait_indefinitely())?;
        rx.recv_async().await??;

        let output_data = temp_buffer.get_mapped_range(..);
        let u32_data = bytemuck::cast_slice::<_, u32>(&output_data);

        // Confirm that the list is sorted
        for i in 1..u32_data.len() {
            assert!(
                u32_data[i] > u32_data[i - 1],
                "{}, {}",
                u32_data[i - 1],
                u32_data[i]
            );
        }
    }

    temp_buffer.unmap();

    log::info!("Success!");

    Ok(())
}
