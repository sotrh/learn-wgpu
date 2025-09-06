# Intro to Compute Pipelines

Compute pipelines are one of the most exciting features that WebGPU provides.
They allow you to run arbitrary compute workloads at speeds only possible with
modern GPU's massive core counts. You can run machine learning models on the
web, perform image manipulation without needing to set up the rendering pipeline
steps such as vertex processing and fragment shading, process massive numbers of
particles, animate hundreds of rigged characters, etc.

There are a log of topics we could cover, and what you specifically want to use
compute shaders for might not be covered here, but hopefully it will be enough
to get you started. On top of that I'm trying a new format where I'll include less
of the boilerplate code and focus more on the concepts. The code will still be
linked at the bottom of the article if you get stuck with your implementation.

## Why GPU compute is fast

GPUs are generally considered to be faster than CPUs, but that's technically not
accurate. GPU processing speed is about the same as CPUs sometimes even slower.
According to [NVIDIA](https://www.nvidia.com/en-us/geforce/graphics-cards/compare/)
most of their modern cards have clock speeds around 2.5 GHz.
[Qualcomm advertises](https://www.qualcomm.com/products/mobile/snapdragon/laptops-and-tablets/snapdragon-x-elite)
that the Snapdragon X Elite has clock speeds of 3.4 - 4.3 Ghz.

So why are GPUs so popular for massive compute loads?

The answer is core count. The Snapdragon X Elite has 12 cores. The RTX 5090 has a
whopping 21760 cores. That's 4 orders of magnitude difference. With some back of
the napkin math if an algorithm takes a second to run one operation on the CPU and
2 on the GPU, than given 12000 items the CPU will take 1000 seconds (about 16 minutes)
while the GPU will take 2 seconds (not accounting for sending data to / from the GPU and
setup time).

Perhaps a demonstration is in order.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vGWoV-8lteA?si=Sgl2Qq0CFoaGXMQa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

GPUs are fast because they can do thousands of things at the same time. That being
said, not all algorithms benefit from leveraging this compute power.

## When should I use compute pipelines?

I can't possibly make a comprehensive list of all the things you could use a GPU for,
but here are some rules of thumb:

- Tasks that can be easily parrallelized. GPUs don't like switching tasks, so if you
need the computation to use data from previous operations, compute shaders are likely
to be slower than a CPU based approach. If each operation can excute without any
knowledge of other operations, you can get a lot out of the GPU.
- You already have the data on the GPU. If your working with texture or model data
It can often be faster to process it with a compute shader rather than copying the data
to the CPU, modifying it, than shipping that back to the GPU.
- You have a massive amount of data. At some point the size of your data starts to outweigh
the setup time and complexity of using a compute pipeline. You'll still need to tailor
your approach to the data and processing you need to do.

Now with that out of the way, let's get started!

## Setting up the device and queue

Using compute shaders requires a lot less code than using a render pipeline. We
don't need a window, so we can get a WGPU instance, request and adapter, and request
a device and queue with this simple code:

```rust
    let instance = wgpu::Instance::new(&Default::default());
    let adapter = instance.request_adapter(&Default::default()).block_on()?;
    let (device, queue) = adapter.request_device(&Default::default()).block_on()?;
```

<div class="note">

I'm using [pollster](https://docs.rs/pollster) to handle `async` code in these examples. You can use whatever
`async` implementation you like though. I'm also using [anyhow](https://docs.rs/anyhow)
for error handling.

</div>

If you want more info about these calls and the potential arguments you can pass
to them check out [the rendering guide](../../beginner/tutorial2-surface/).

Now that we have a device to talk to the GPU let's start talking about how to set up a
compute pipeline.

## Compute Pipelines

Compute pipelines are a lot simpler to setup than render pipelines. We don't have to setup
the traditional vertex pipeline. Take a look!

```rust
    let shader = device.create_shader_module(wgpu::include_wgsl!("introduction.wgsl"));

    let pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
        label: Some("Introduction Compute Pipeline"),
        layout: None,
        module: &shader,
        entry_point: None,
        compilation_options: Default::default(),
        cache: Default::default(),
    });
```

I'm using the default values for everything here except the `label` and the shader `module`
that contains the actual shader code. I'm not specifying a bind group `layout` which means
wgpu will use the shader code to derive one. I don't supply an `entry_point` as WGPU will
select a function with a `@compute` tag if there is only one in the file.

The shader code for this example is simple too:

```wgsl
// A read-only storage buffer that stores and array of unsigned 32bit integers
@group(0) @binding(0) var<storage, read> input: array<u32>;
// This storage buffer can be read from and written to
@group(0) @binding(1) var<storage, read_write> output: array<u32>;

// Tells wgpu that this function is a valid compute pipeline entry_point
@compute
// Specifies the "dimension" of this work group
@workgroup_size(64)
fn main(
    // global_invocation_id specifies our position in the invocation grid
    @builtin(global_invocation_id) global_invocation_id: vec3<u32>
) {
    let index = global_invocation_id.x;
    let total = arrayLength(&input);

    // workgroup_size may not be a multiple of the array size so
    // we need to exit out a thread that would index out of bounds.
    if (index >= total) {
        return;
    }

    // a simple copy operation
    output[global_invocation_id.x] = input[global_invocation_id.x];
}
```

This shader is very simple. All it does is copy the contents of one buffer to another.
The one thing I feel needs some explaining is the concept of workgroups and `workgroup_size`.

## Workgroups

While GPUs prefer that each thread can blindly process it's work, real problems
require some amount of synchronization. Compute shaders accomplish this through work groups.

A workgroup is a group of `X * Y * Z` threads that share some information about a task.
we define the size of this workgroup using the `workgroup_size` flag. We saw an
abreviated version of that above but here's the full version:

```wgsl
@workgroup_size(64, 1, 1)
```

This means that our compute shader will create workgroups with `64 * 1 * 1` threads which simplifies
to just 64 threads per workgroup. If we instead used:

```wgsl
@workgroup_size(64, 64, 1)
```

We'd get `64 * 64 * 1` threads, or 4096 threads per workgroup.

The max supported work group size can very depending on your device, but the WebGPU spec guarantees
that the following:

- A max workgroup size X of 256
- A max workgroup size Y of 256
- A max workgroup size Z of 64
- A total workgroup size of 256

This means that we might not be able to use `@workgroup_size(64, 64, 1)` but `@workgroup_size(16, 16, 1)`
should work on most devices.

<div class="note">

### Why XYZ?

A lot of data used in GPU programming comes in 2D and even 3D arrays. Because of this `workgroup_size`
using 3 dimensions instead of 1 to make writing multidimensional code more convenient.

For example, a blur on a 2D image would benefit from a 2D work group so each thread would
match up to a pixel in the image. A marching cubes implementation would benefit from a 3D workgroup,
so each thread handles the geometry for one voxel in the voxel grid.

</div>

## The global invocation id

Each thread in a workgroup has an id associated with it that tells what thread what workgroup
the thread belongs to. If we access this using the `workgroup_id` built in.

```wgsl
@compute
@workgroup_size(64)
fn main(
    @builtin(workgroup_id) workgroup_id: vec3<u32>,
) {
    // ...
}
```

Knowing where we are in the workgroup is helpful too and we do that using the
`local_invocation_id` built in.

```wgsl
@compute
@workgroup_size(64)
fn main(
    @builtin(workgroup_id) workgroup_id: vec3<u32>,
    @builtin(local_invocation_id) local_invocation_id: vec3<u32>,
) {
    // ...
}
```

We can then compute our global position in the workgroup invocation grid using

```wgsl
let id = workgroup_id * workgroup_size + local_invocation_id;
```

We can also just us the `global_invocation_id` builtin like we did in the shader
code listed above.

### Where does workgroup_id come from?

When we dispatch our compute shader we need to specify the X, Y, and Z dimensions
of what's called the "compute shader grid". Consider this code.

```rust

    {
        // We specified 64 threads per workgroup in the shader, so we need to compute how many
        // workgroups we need to dispatch.
        let num_dispatches = input_data.len() as u32 / 64 + (input_data.len() % 64 > 0) as u32;

        let mut pass = encoder.begin_compute_pass(&Default::default());
        pass.set_pipeline(&pipeline);
        pass.set_bind_group(0, &bind_group, &[]);
        pass.dispatch_workgroups(num_dispatches, 1, 1);
    }
```

In the `pass.dispatch_workgroups()` call we use a grid with dimensions `(num_dispatches, 1, 1)`
which means we'll launch `num_dispatches * 1 * 1` workgroups. The GPU then assigns each workgroup
an id with the x coordinate being between 0 and `num_dispatches - 1`.

This is important to know because if you change workgroup size, the `global_invocation_id` can change
meaning you are potentially use more threads than you need or not enough.

## Buffers

While I've covered buffers in the [rendering guide](../../beginner/tutorial4-buffer/),
I'll go over them briefly here too. In WebGPU a buffer is memory on the GPU that you've
set aside. This memory can be used for anything from vertex data, to neurons in a
neural network. For the most part the GPU doesn't care what data the buffer contains,
but it does care about how that data is used.

Here's an example of setting up an input and output buffer.

```rust
    let input_buffer = device.create_buffer_init(&BufferInitDescriptor {
        label: Some("input"),
        contents: bytemuck::cast_slice(&input_data),
        usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::STORAGE,
    });

    let output_buffer = device.create_buffer(&wgpu::BufferDescriptor {
        label: Some("output"),
        size: input_buffer.size(),
        usage: wgpu::BufferUsages::COPY_SRC | wgpu::BufferUsages::STORAGE,
        mapped_at_creation: false,
    });
```

We specifically need the `STORAGE` usage our buffer is this shader. We can
use `UNIFORM` for some things, but uniform buffers are more limited in what
size they can be and they can't be modified in the shader.

## Bindgroup setup

Again I won't go into detail about how to define bind groups here, as I've
already done that in [the rendering guide](../../beginner/tutorial5-textures/),
but I cover the theory. In WebGPU a bind group describes resources that can
be used by the shader. These can be textures, buffers, samplers, etc. A
`BindGroupLayout` defines how these resources are grouped what shaders stages
have access to them, and how the shader will interpret the resources.

You can manually specify the `BindGroupLayout`, but WGPU can infer the layout
based on shader code. For example:

```wgsl
@group(0) @binding(0) var<storage, read> input: array<u32>;
@group(0) @binding(1) var<storage, read_write> output: array<u32>;
```

WGPU interprets this as a layout with 2 entries, a read only storage buffer
called `input` at binding 0, and a storage buffer that can be read from and
written to called `output` at binding 1. We can easily create a bindgroup that
satisfies this with the following code:

```rust
    let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
        label: None,
        layout: &pipeline.get_bind_group_layout(0),
        entries: &[
            wgpu::BindGroupEntry {
                binding: 0,
                resource: input_buffer.as_entire_binding(),
            },
            wgpu::BindGroupEntry {
                binding: 1,
                resource: output_buffer.as_entire_binding(),
            },
        ],
    });
```

## Getting data out of the GPU

Depending on your applications needs, the data you process in a compute shader
may stay on the the GPU as it is only used for rendering or other compute pipelines.
If you do need to get that data from the GPU to the CPU, or if you just want to
take a look at it, there is fortunately a way to do that.

The process is a little involved so let's look at the code.

```rust
{
        // The mapping process is async, so we'll need to create a channel to get
        // the success flag for our mapping
        let (tx, rx) = channel();

        // We send the success or failure of our mapping via a callback
        temp_buffer.map_async(wgpu::MapMode::Read, .., move |result| tx.send(result).unwrap());

        // The callback we submitted to map async will only get called after the
        // device is polled or the queue submitted
        device.poll(wgpu::PollType::Wait)?;

        // We check if the mapping was successful here
        rx.recv()??;

        // We then get the bytes that were stored in the buffer
        let output_data = temp_buffer.get_mapped_range(..);

        // Now we have the data on the CPU we can do what ever we want to with it
        assert_eq!(&input_data, bytemuck::cast_slice(&output_data));
    }

    // We need to unmap the buffer to be able to use it again
    temp_buffer.unmap();
```

You may have noticed I used a variable called `temp_buffer` and not `output_buffer`
in the mapping. The reason for this is that we need the buffer being mapped to have
the `MAP_READ` usage. This usage is only compatable with the `COPY_DST` usage, meaning
it can't have the `STORAGE` nor the `UNIFORM` usage, meaning we can't use the buffer
in a compute shader. We get around this by creating a temporary buffer that we copy
the `output_buffer` to, and we then map that. Here's the setup code for the `temp_buffer`:

```rust
    let temp_buffer = device.create_buffer(&wgpu::BufferDescriptor {
        label: Some("temp"),
        size: input_buffer.size(),
        usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::MAP_READ,
        mapped_at_creation: false,
    });
```

We need to perform this copy before we submit the queue.

```rust
    encoder.copy_buffer_to_buffer(&output_buffer, 0, &temp_buffer, 0, output_buffer.size());

    queue.submit([encoder.finish()]);
```

## Conclusion

That's it. Not too difficult especially compared to setting up a render pipeline. Now that
we know how to use a compute pipeline we can actually start to do more interesting things.
This guide can't possible cover all the ways to use compute shaders, but I plan to cover
some of the core building blocks you need to build most algorithms. After that you can take
the concepts and apply them to your own projects!

<!-- ## Demo -->

<!-- <WasmExample example="compute" noCanvas="true" autoLoad="true"></WasmExample> -->

<AutoGithubLink path="/compute/src/"/>
