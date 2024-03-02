# Instancing

Our scene right now is very simple: we have one object centered at (0,0,0). What if we wanted more objects? This is where instancing comes in.

Instancing allows us to draw the same object multiple times with different properties (position, orientation, size, color, etc.). There are multiple ways of doing instancing. One way would be to modify the uniform buffer to include these properties and then update it before we draw each instance of our object.

We don't want to use this method for performance reasons. Updating the uniform buffer for each instance would require multiple buffer copies for each frame. On top of that, our method to update the uniform buffer currently requires us to create a new buffer to store the updated data. That's a lot of time wasted between draw calls.

If we look at the parameters for the `draw_indexed` function [in the wgpu docs](https://docs.rs/wgpu/latest/wgpu/struct.RenderPass.html#method.draw_indexed), we can see a solution to our problem.

```rust
pub fn draw_indexed(
    &mut self,
    indices: Range<u32>,
    base_vertex: i32,
    instances: Range<u32> // <-- This right here
)
```

The `instances` parameter takes a `Range<u32>`. This parameter tells the GPU how many copies, or instances, of the model we want to draw. Currently, we are specifying `0..1`, which instructs the GPU to draw our model once and then stop. If we used `0..5`, our code would draw five instances.

The fact that `instances` is a `Range<u32>` may seem weird, as using `1..2` for instances would still draw one instance of our object. It seems like it would be simpler just to use a `u32`, right? The reason it's a range is that sometimes we don't want to draw **all** of our objects. Sometimes, we want to draw a selection of them because others are not in the frame, or we are debugging and want to look at a particular set of instances.

Ok, now we know how to draw multiple instances of an object. How do we tell wgpu what particular instance to draw? We are going to use something known as an instance buffer.

## The Instance Buffer

We'll create an instance buffer similarly to how we create a uniform buffer. First, we'll create a struct called `Instance`.

```rust
// lib.rs
// ...

// NEW!
struct Instance {
    position: cgmath::Vector3<f32>,
    rotation: cgmath::Quaternion<f32>,
}
```

<div class="note">

A `Quaternion` is a mathematical structure often used to represent rotation. The math behind them is beyond me (it involves imaginary numbers and 4D space), so I won't be covering them here. If you really want to dive into them [here's a Wolfram Alpha article](https://mathworld.wolfram.com/Quaternion.html).

</div>

Using these values directly in the shader would be a pain, as quaternions don't have a WGSL analog. I don't feel like writing the math in the shader, so we'll convert the `Instance` data into a matrix and store it in a struct called `InstanceRaw`.

```rust
// NEW!
#[repr(C)]
#[derive(Copy, Clone, bytemuck::Pod, bytemuck::Zeroable)]
struct InstanceRaw {
    model: [[f32; 4]; 4],
}
```

This is the data that will go into the `wgpu::Buffer`. We keep these separate so that we can update the `Instance` as much as we want without needing to mess with matrices. We only need to update the raw data before we draw.

Let's create a method on `Instance` to convert to `InstanceRaw`.

```rust
// NEW!
impl Instance {
    fn to_raw(&self) -> InstanceRaw {
        InstanceRaw {
            model: (cgmath::Matrix4::from_translation(self.position) * cgmath::Matrix4::from(self.rotation)).into(),
        }
    }
}
```

Now we need to add two fields to `State`: `instances` and `instance_buffer`.

```rust
struct State {
    instances: Vec<Instance>,
    instance_buffer: wgpu::Buffer,
}
```

The `cgmath` crate uses traits to provide common mathematical methods across its structs, such as `Vector3`, which must be imported before these methods can be called. For convenience, the `prelude` module within the crate provides the most common of these extension crates when it is imported.

To import this prelude module, put this line near the top of `lib.rs`.

```rust
use cgmath::prelude::*;
```

We'll create the instances in `new()`. We'll use some constants to simplify things. We'll display our instances in 10 rows of 10, and they'll be spaced evenly apart.

```rust
const NUM_INSTANCES_PER_ROW: u32 = 10;
const INSTANCE_DISPLACEMENT: cgmath::Vector3<f32> = cgmath::Vector3::new(NUM_INSTANCES_PER_ROW as f32 * 0.5, 0.0, NUM_INSTANCES_PER_ROW as f32 * 0.5);
```

Now, we can create the actual instances.

```rust
impl<'a> State<'a> {
    async fn new(window: &'a Window) -> State<'a> {
        // ...
        let instances = (0..NUM_INSTANCES_PER_ROW).flat_map(|z| {
            (0..NUM_INSTANCES_PER_ROW).map(move |x| {
                let position = cgmath::Vector3 { x: x as f32, y: 0.0, z: z as f32 } - INSTANCE_DISPLACEMENT;

                let rotation = if position.is_zero() {
                    // this is needed so an object at (0, 0, 0) won't get scaled to zero
                    // as Quaternions can affect scale if they're not created correctly
                    cgmath::Quaternion::from_axis_angle(cgmath::Vector3::unit_z(), cgmath::Deg(0.0))
                } else {
                    cgmath::Quaternion::from_axis_angle(position.normalize(), cgmath::Deg(45.0))
                };

                Instance {
                    position, rotation,
                }
            })
        }).collect::<Vec<_>>();
        // ...
    }
}
```

Now that we have our data, we can create the actual `instance_buffer`.

```rust
let instance_data = instances.iter().map(Instance::to_raw).collect::<Vec<_>>();
let instance_buffer = device.create_buffer_init(
    &wgpu::util::BufferInitDescriptor {
        label: Some("Instance Buffer"),
        contents: bytemuck::cast_slice(&instance_data),
        usage: wgpu::BufferUsages::VERTEX,
    }
);
```

We're going to need to create a new `VertexBufferLayout` for `InstanceRaw`.

```rust
impl InstanceRaw {
    fn desc() -> wgpu::VertexBufferLayout<'static> {
        use std::mem;
        wgpu::VertexBufferLayout {
            array_stride: mem::size_of::<InstanceRaw>() as wgpu::BufferAddress,
            // We need to switch from using a step mode of Vertex to Instance
            // This means that our shaders will only change to use the next
            // instance when the shader starts processing a new instance
            step_mode: wgpu::VertexStepMode::Instance,
            attributes: &[
                // A mat4 takes up 4 vertex slots as it is technically 4 vec4s. We need to define a slot
                // for each vec4. We'll have to reassemble the mat4 in the shader.
                wgpu::VertexAttribute {
                    offset: 0,
                    // While our vertex shader only uses locations 0, and 1 now, in later tutorials, we'll
                    // be using 2, 3, and 4, for Vertex. We'll start at slot 5, not conflict with them later
                    shader_location: 5,
                    format: wgpu::VertexFormat::Float32x4,
                },
                wgpu::VertexAttribute {
                    offset: mem::size_of::<[f32; 4]>() as wgpu::BufferAddress,
                    shader_location: 6,
                    format: wgpu::VertexFormat::Float32x4,
                },
                wgpu::VertexAttribute {
                    offset: mem::size_of::<[f32; 8]>() as wgpu::BufferAddress,
                    shader_location: 7,
                    format: wgpu::VertexFormat::Float32x4,
                },
                wgpu::VertexAttribute {
                    offset: mem::size_of::<[f32; 12]>() as wgpu::BufferAddress,
                    shader_location: 8,
                    format: wgpu::VertexFormat::Float32x4,
                },
            ],
        }
    }
}
```

We need to add this descriptor to the render pipeline so that we can use it when we render.

```rust
let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
    // ...
    vertex: wgpu::VertexState {
        // ...
        // UPDATED!
        buffers: &[Vertex::desc(), InstanceRaw::desc()],
    },
    // ...
});
```

Don't forget to return our new variables!

```rust
Self {
    // ...
    // NEW!
    instances,
    instance_buffer,
}
```

The last change we need to make is in the `render()` method. We need to bind our `instance_buffer` and change the range we're using in `draw_indexed()` to include the number of instances.

```rust
render_pass.set_pipeline(&self.render_pipeline);
render_pass.set_bind_group(0, &self.diffuse_bind_group, &[]);
render_pass.set_bind_group(1, &self.camera_bind_group, &[]);
render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
// NEW!
render_pass.set_vertex_buffer(1, self.instance_buffer.slice(..));
render_pass.set_index_buffer(self.index_buffer.slice(..), wgpu::IndexFormat::Uint16);

// UPDATED!
render_pass.draw_indexed(0..self.num_indices, 0, 0..self.instances.len() as _);
```

<div class="warning">

Make sure that if you add new instances to the `Vec`, you recreate the `instance_buffer` as well as `camera_bind_group`. Otherwise, your new instances won't show up correctly.

</div>

We need to reference the parts of our new matrix in `shader.wgsl` so that we can use it for our instances. Add the following to the top of `shader.wgsl`.

```wgsl
struct InstanceInput {
    @location(5) model_matrix_0: vec4<f32>,
    @location(6) model_matrix_1: vec4<f32>,
    @location(7) model_matrix_2: vec4<f32>,
    @location(8) model_matrix_3: vec4<f32>,
};
```

We need to reassemble the matrix before we can use it.

```wgsl
@vertex
fn vs_main(
    model: VertexInput,
    instance: InstanceInput,
) -> VertexOutput {
    let model_matrix = mat4x4<f32>(
        instance.model_matrix_0,
        instance.model_matrix_1,
        instance.model_matrix_2,
        instance.model_matrix_3,
    );
    // Continued...
}
```

We'll apply the `model_matrix` before we apply `camera_uniform.view_proj`. We do this because the `camera_uniform.view_proj` changes the coordinate system from `world space` to `camera space`. Our `model_matrix` is a `world space` transformation, so we don't want to be in `camera space` when using it.

```wgsl
@vertex
fn vs_main(
    model: VertexInput,
    instance: InstanceInput,
) -> VertexOutput {
    // ...
    var out: VertexOutput;
    out.tex_coords = model.tex_coords;
    out.clip_position = camera.view_proj * model_matrix * vec4<f32>(model.position, 1.0);
    return out;
}
```

With all that done, we should have a forest of trees!

![./forest.png](./forest.png)

## Challenge

Modify the position and/or rotation of the instances every frame.


<WasmExample example="tutorial7_instancing"></WasmExample>

<AutoGithubLink/>
