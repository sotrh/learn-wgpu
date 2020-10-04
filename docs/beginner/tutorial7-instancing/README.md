# Instancing

Our scene right now is very simple: we have one object centered at (0,0,0). What if we wanted more objects? This is were instancing comes in. 

Instancing allows us to draw the same object multiple times with different properties (position, orientation, size, color, etc.). There are multiple ways of doing instancing. One way would be to modify the uniform buffer to include these properties and then update it before we draw each instance of our object.

We don't want to use this method for performance reasons. Updating the uniform buffer for each instance would require multiple buffer copies each frame. On top of that, our method to update the uniform buffer currently requires use to create a new buffer to store the updated data. That's a lot of time wasted between draw calls.

If we look at the parameters for the `draw_indexed` function [in the wgpu docs](https://docs.rs/wgpu/0.5.2/wgpu/struct.RenderPass.html#method.draw_indexed), we can see a solution to our problem.

```rust
pub fn draw_indexed(
    &mut self,
    indices: Range<u32>,
    base_vertex: i32,
    instances: Range<u32> // <-- This right here
)
```

The `instances` parameter takes a `Range<u32>`. This parameter tells the GPU how many copies, or instances, of our model we want to draw. Currently we are specifying `0..1`, which instructs the GPU to draw our model once, and then stop. If we used `0..5`, our code would draw 5 instances.

The fact that `instances` is a `Range<u32>` may seem weird as using `1..2` for instances would still draw 1 instance of our object. Seems like it would be simpler to just use a `u32` right? The reason it's a range is because sometimes we don't want to draw **all** of our objects. Sometimes we want to draw a selection of them, because others are not in frame, or we are debugging and want to look at a particular set of instances.

Ok, now we know how to draw multiple instances of an object, how do we tell wgpu what particular instance to draw? We are going to use something known as an instance buffer.

## The Instance Buffer

We'll create an instance buffer in a similar way to how we create a uniform buffer. First we'll create a struct called `Instance`.

```rust
// main.rs
// ...

// NEW!
struct Instance {
    position: cgmath::Vector3<f32>,
    rotation: cgmath::Quaternion<f32>,
}
```

<div class="note">

A `Quaternion` is a mathematical structure often used to represent rotation. The math behind them is beyond me (it involves imaginary numbers and 4D space) so I won't be covering them here. If you really want to dive into them [here's a Wolfram Alpha article](https://mathworld.wolfram.com/Quaternion.html).

</div>

Using these values directly in the shader would be a pain as quaternions don't have a GLSL analog. I don't feel like writing the math in the shader, so we'll convert the `Instance` data into a matrix and store it into a struct called `InstanceRaw`.

```rust
// NEW!
#[repr(C)]
#[derive(Copy, Clone)]
struct InstanceRaw {
    model: cgmath::Matrix4<f32>,
}

unsafe impl bytemuck::Pod for InstanceRaw {}
unsafe impl bytemuck::Zeroable for InstanceRaw {}
```

This is the data that will go into the `wgpu::Buffer`. We keep these separate so that we can update the `Instance` as much as we want without needing to mess with matrices. We only need to update the raw data before we draw.

Let's create a method on `Instance` to convert to `InstanceRaw`.

```rust
// NEW!
impl Instance {
    fn to_raw(&self) -> InstanceRaw {
        InstanceRaw {
            model: cgmath::Matrix4::from_translation(self.position) * cgmath::Matrix4::from(self.rotation),
        }
    }
}
```

Now we need to add 2 fields to `State`: `instances`, and `instance_buffer`.

```rust
struct State {
    instances: Vec<Instance>,
    #[allow(dead_code)]
    instance_buffer: wgpu::Buffer,
}
```

We'll create the instances in `new()`. We'll use some constants to simplify things. We'll display our instances in 10 rows of 10, and they'll be spaced evenly apart.

```rust
const NUM_INSTANCES_PER_ROW: u32 = 10;
const NUM_INSTANCES: u32 = NUM_INSTANCES_PER_ROW * NUM_INSTANCES_PER_ROW;
const INSTANCE_DISPLACEMENT: cgmath::Vector3<f32> = cgmath::Vector3::new(NUM_INSTANCES_PER_ROW as f32 * 0.5, 0.0, NUM_INSTANCES_PER_ROW as f32 * 0.5);
```

Now we can create the actual instances. 

```rust
impl State {
    async fn new(window: &Window) -> Self {
        // ...
        let instances = (0..NUM_INSTANCES_PER_ROW).flat_map(|z| {
            (0..NUM_INSTANCES_PER_ROW).map(move |x| {
                let position = cgmath::Vector3 { x: x as f32, y: 0.0, z: z as f32 } - INSTANCE_DISPLACEMENT;

                let rotation = if position.is_zero() {
                    // this is needed so an object at (0, 0, 0) won't get scaled to zero
                    // as Quaternions can effect scale if they're not created correctly
                    cgmath::Quaternion::from_axis_angle(cgmath::Vector3::unit_z(), cgmath::Deg(0.0))
                } else {
                    cgmath::Quaternion::from_axis_angle(position.clone().normalize(), cgmath::Deg(45.0))
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
        usage: wgpu::BufferUsage::STORAGE,
    }
);
```

We need a way to bind our new instance buffer so we can use it in the vertex shader. We could create a new bind group (and we probably should), but for simplicity, I'm going to add a binding to the `uniform_bind_group` that references our `instance_buffer`.

```rust
let uniform_bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
    entries: &[
        // ...
        // NEW!
        wgpu::BindGroupLayoutEntry {
            binding: 1,
            visibility: wgpu::ShaderStage::VERTEX,
            ty: wgpu::BindingType::StorageBuffer {
                // We don't plan on changing the size of this buffer
                dynamic: false,
                // The shader is not allowed to modify it's contents
                readonly: true,
                min_binding_size: None,
            },
            count: None,
        },
    ],
    label: Some("uniform_bind_group_layout"),
});

let uniform_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
    layout: &uniform_bind_group_layout,
    entries: &[
        // ...
        // NEW!
        wgpu::BindGroupEntry {
            binding: 1,
            resource: wgpu::BindingResource::Buffer(instance_buffer.slice(..))
        },
    ],
    label: Some("uniform_bind_group"),
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

The last change we need to make is in the `render()` method. We need to change the range we're using in `draw_indexed()` to include the number of instances.

```rust
render_pass.set_pipeline(&self.render_pipeline);
render_pass.set_bind_group(0, &self.diffuse_bind_group, &[]);
render_pass.set_bind_group(1, &self.uniform_bind_group, &[]);
render_pass.set_vertex_buffer(0, &self.vertex_buffer.slice(..));
render_pass.set_index_buffer(&self.index_buffer.slice(..));
// UPDATED!
render_pass.draw_indexed(0..self.num_indices, 0, 0..self.instances.len() as _);
```

<div class="warning">

Make sure if you add new instances to the `Vec` that you recreate the `instance_buffer` and as well as `uniform_bind_group`, otherwise your new instances won't show up correctly.

</div>

## Storage Buffers

When we modified `uniform_bind_group_layout`, we specified that our `instance_buffer` would be of type `wgpu::BindingType::StorageBuffer`. A storage buffer functions like an array that persists between shader invocations. Let's take a look at what it looks like in `shader.vert`.

```glsl
layout(set=1, binding=1) 
buffer Instances {
    mat4 s_models[];
};
```

We declare a storage buffer in a very similar way to how we declare a uniform block. The only real difference is that we use the `buffer` keyword. We can then use `s_models` to position our models in the scene. But how do we know what instance to use?

## gl_InstanceIndex

This GLSL variable lets us specify what instance we want to use. We can use the `gl_InstanceIndex` to index our `s_models` buffer to get the matrix for the current model.

```glsl
void main() {
    v_tex_coords = a_tex_coords;
    // UPDATED!
    gl_Position = u_view_proj * s_models[gl_InstanceIndex] * vec4(a_position, 1.0);
}
```

<div class="note">

The value of `gl_InstanceIndex` is based on the range passed to the `instances` parameter of `draw_indexed`. Using `3..instances.len() as _` would mean that the 1st-3rd instances would be skipped.

</div>

With all that done, we should have a forest of trees!

![./forest.png](./forest.png)

## Challenge

Modify the position and/or rotation of the instances every frame.

<AutoGithubLink/>
