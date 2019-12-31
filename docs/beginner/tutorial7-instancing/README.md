# Instancing

Up to this point we've been drawing just one object. Most games have hundreds of objects on screen at the same time. If we wanted to draw multiple instances of our model, we could copy the vertex buffer and modify it's vertices to be in the right place, but this would be hilariously inefficient. We have our model, and we now how to position it in 3d space with a matrix, like we did the camera, so all we have to do is change the matrix we're using when we draw. 

## The naive method

First let's modify `Uniforms` to include a `model` property.

```rust
#[repr(C)]
#[derive(Debug, Copy, Clone)]
struct Uniforms {
    view_proj: cgmath::Matrix4<f32>,
    model: cgmath::Matrix4<f32>, // NEW!
}

impl Uniforms {
    fn new() -> Self {
        use cgmath::SquareMatrix;
        Self {
            view_proj: cgmath::Matrix4::identity(),
            model: cgmath::Matrix4::identity(), // NEW!
        }
    }

    fn update_view_proj(&mut self, camera: &Camera) {
        self.view_proj = OPENGL_TO_WGPU_MATRIX * camera.build_view_projection_matrix();
    }
}
```

With that let's introduce another struct for our instances. We'll use it to store the position and rotation of our instances. We'll also have a method to convert our instance data into a matrix that we can give to `Uniforms`.

```rust
struct Instance {
    position: cgmath::Vector3<f32>,
    rotation: cgmath::Quaternion<f32>,
}

impl Instance {
    fn to_matrix(&self) -> cgmath::Matrix4<f32> {
        cgmath::Matrix4::from_translation(self.position) 
            * cgmath::Matrix4::from(self.rotation)
    }
}
```

Next we'll add `instances: Vec<Instance>,` to `State` and create our instances in new with the following in `new()`.

```rust
// ...

// add these at the top of the file
const NUM_INSTANCES_PER_ROW: u32 = 10;
const NUM_INSTANCES: u32 = NUM_INSTANCES_PER_ROW * NUM_INSTANCES_PER_ROW;
const INSTANCE_DISPLACEMENT: cgmath::Vector3<f32> = cgmath::Vector3::new(NUM_INSTANCES_PER_ROW as f32 * 0.5, 0.0, NUM_INSTANCES_PER_ROW as f32 * 0.5);

// make a 10 by 10 grid of objects
let instances = (0..NUM_INSTANCES_PER_ROW).flat_map(|z| {
    (0..NUM_INSTANCES_PER_ROW).map(move |x| {
        let position = cgmath::Vector3 { x: x as f32, y: 0.0, z: z as f32 } - INSTANCE_DISPLACEMENT;

        let rotation = if position.is_zero() {
            // this is needed so an object at (0, 0, 0) won't get scaled to zero
            // as Quaternions can effect scale if they're not create correctly
            cgmath::Quaternion::from_axis_angle(cgmath::Vector3::unit_z(), cgmath::Deg(0.0))
        } else {
            cgmath::Quaternion::from_axis_angle(position.clone().normalize(), cgmath::Deg(45.0))
        };

        Instance {
            position, rotation,
        }
    })
}).collect();

// ...

Self {
    // ...
    instances,
}
```

Now that that's done, we need to update `shader.vert` to use the model matrix passed in through `Uniforms`.

```glsl
#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;

layout(location=0) out vec2 v_tex_coords;

layout(set=1, binding=0) 
uniform Uniforms {
    mat4 u_view_proj;
    mat4 u_model; // NEW!
};

void main() {
    v_tex_coords = a_tex_coords;
    gl_Position = u_view_proj * u_model * vec4(a_position, 1.0); // UPDATED!
}
```

If you run the program now, you won't see anything different. That's because we aren't actually updating the uniform buffer at all. Using our current method, we need to update the uniform buffer for every instance we draw. We'll do this in `render()` with something like the following.

```rust
for instance in &self.instances {
    // 1.
    self.uniforms.model = instance.to_matrix();
    let staging_buffer = self.device
        .create_buffer_mapped(1, wgpu::BufferUsage::COPY_SRC)
        .fill_from_slice(&[self.uniforms]);
    encoder.copy_buffer_to_buffer(&staging_buffer, 0, &self.uniform_buffer, 0, std::mem::size_of::<Uniforms>() as wgpu::BufferAddress);

    // 2.
    let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
        color_attachments: &[
            wgpu::RenderPassColorAttachmentDescriptor {
                attachment: &frame.view,
                resolve_target: None,
                load_op: wgpu::LoadOp::Load, // 3.
                store_op: wgpu::StoreOp::Store,
                clear_color: wgpu::Color {
                    r: 0.1,
                    g: 0.2,
                    b: 0.3,
                    a: 1.0,
                },
            }
        ],
        depth_stencil_attachment: None,
    });

    render_pass.set_pipeline(&self.render_pipeline);
    render_pass.set_bind_group(0, &self.diffuse_bind_group, &[]);
    render_pass.set_bind_group(1, &self.uniform_bind_group, &[]);
    render_pass.set_vertex_buffers(0, &[(&self.vertex_buffer, 0)]);
    render_pass.set_index_buffer(&self.index_buffer, 0);
    render_pass.draw_indexed(0..self.num_indices, 0, 0..1);
}
```

Some things to note:
1. We're creating a hundred buffers a frame. This is inefficent, but we'll cover better ways of doing this later in this tutorial.
2. We have to create a new render pass per instance, as we can't modify the uniform buffer while we have one active.
3. We use `LoadOp::Load` here to prevent the render pass from clearing the entire screen after each draw. This means we lose our clear color. This makes the background black on my machine, but it may be filled with garbage data on yours. We can fix this by added another render pass before the loop.

```rust
{
    encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
        color_attachments: &[
            wgpu::RenderPassColorAttachmentDescriptor {
                attachment: &frame.view,
                resolve_target: None,
                load_op: wgpu::LoadOp::Clear,
                store_op: wgpu::StoreOp::Store,
                clear_color: wgpu::Color {
                    r: 0.1,
                    g: 0.2,
                    b: 0.3,
                    a: 1.0,
                },
            }
        ],
        depth_stencil_attachment: None,
    });
}
```

We should get something that looks like this when we're done.

![A beautiful forest](./forest.png)

If you haven't guessed already, this way of instancing is not the best. It requires hundreds of render passes, hundereds of staging buffers, and an extra render pass just to get the clear color working again. Cleary there must be a better way.

## A better way - uniform arrays

Since GLSL is based on C, it supports arrays. We can leverage this by store *all* of the instance matrices in the `Uniforms` struct. We need to make this change on the Rust side, as well as in our shader.

```rust
#[repr(C)]
#[derive(Copy, Clone)]
struct Uniforms {
    view_proj: cgmath::Matrix4<f32>,
    model: [cgmath::Matrix4<f32>; NUM_INSTANCES as usize],
}
```

```glsl
#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;

layout(location=0) out vec2 v_tex_coords;

layout(set=1, binding=0) 
uniform Uniforms {
    mat4 u_view_proj;
    mat4 u_model[100];
};

void main() {
    v_tex_coords = a_tex_coords;
    // gl_InstanceIndex what index we're currently on
    gl_Position = u_view_proj * u_model[gl_InstanceIndex] * vec4(a_position, 1.0);
}
```

Note that we're using an array, *not a `Vec`*. `Vec`s are basically pointers to an array on the heap. Our graphics card doesn't know how follow a pointer to the heap, so our data needs to be stored inline.

`Uniforms::new()` will change slightly as well.

```rust
fn new() -> Self {
    Self {
        view_proj: cgmath::Matrix4::identity(),
        model: [cgmath::Matrix4::identity(); NUM_INSTANCES as usize],
    }
}
```

We need to update our model matrices in `State::update()` before we create the `staging_buffer`.

```rust
for (i, instance) in self.instances.iter().enumerate() {
    self.uniforms.model[i] = instance.to_matrix();
}
```

Lastly we need to change our render code. Fortunately, it's a lot simpler than the before. In fact we can use the code from last tutorial and just change our draw call.

```rust
render_pass.draw_indexed(0..self.num_indices, 0, 0..NUM_INSTANCES);
```

You'll remember that the 3rd parameter in `draw_indexed` is the instance range. This controls how many times our object will be drawn. This is where our shader gets the value for `gl_InstanceIndex`.

Running the program now won't change anything visually from our last example, but the framerate will be better.

This technique has its drawbacks.
1. We can't use a `Vec` like we've mentioned before
2. We're limited in the number of instances we can process at a time requiring use to cap it at some abitrary number, or render things in "batches"

## Another better way - instance buffers

When we created the `VertexBufferDescriptor` for our model, it required a `step_mode` field. We specified

<!-- ## Another better way (storage buffers) -->