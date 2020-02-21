# Working with Lights

While we can tell that our scene is 3d because of our camera, it still feels very flat. That's because our model stays the same color regardless of how it's oriented. If we want to change that we need to add lighting to our scene.

In the real world, a light source emits photons which bounce around until they enter into our eyes. The color we see is the light's original color minus whatever energy it lost while it was bouncing around.

In the computer graphics world, modeling individual photons would be hilariously computationally expensive. A single 100 Watt light bulb emits about 3.27 x 10^20 photons *per second*. Just imagine that for the sun! To get around this, we're gonna use math to cheat.

Let's discuss a few options.

## Ray/Path Tracing

This is an *advanced* topic, and we won't be covering it in depth here. It's the closest model to the way light really works so I felt I had to mention it. Check out the [ray tracing tutorial](../../todo/) if you want to learn more.

## Gouraud Shading

Named after [Henri Gourad](https://en.wikipedia.org/wiki/Gouraud_shading), Gourad shading uses a surface normal vector per vertex to determine what direction the surface is facing and then compares that normal to the light's direction to calculate how bright the surface should be. In other words, the surfaces facing the light are brighter than the ones facing way.

![normals.png](./normals.png)

To start we first need to modify our vertex data to include normals for every vertex.

```rust
#[repr(C)]
#[derive(Copy, Clone, Debug)]
struct Vertex {
    position: [f32; 3],
    tex_coords: [f32; 2],
    normal: [f32; 3], // NEW
}

// UPDATED
const VERTICES: &[Vertex] = &[
    Vertex { position: [-0.0868241, -0.49240386, 0.0], tex_coords: [1.0 - 0.4131759, 1.0 - 0.00759614], normal: [0.0, 0.0, -1.0]}, // A
    Vertex { position: [-0.49513406, -0.06958647, 0.0], tex_coords: [1.0 - 0.0048659444, 1.0 - 0.43041354], normal: [0.0, 0.0, -1.0]}, // B
    Vertex { position: [-0.21918549, 0.44939706, 0.0], tex_coords: [1.0 - 0.28081453, 1.0 - 0.949397057], normal: [0.0, 0.0, -1.0]}, // C
    Vertex { position: [0.35966998, 0.3473291, 0.0], tex_coords: [1.0 - 0.85967, 1.0 - 0.84732911], normal: [0.0, 0.0, -1.0]}, // D
    Vertex { position: [0.44147372, -0.2347359, 0.0], tex_coords: [1.0 - 0.9414737, 1.0 - 0.2652641], normal: [0.0, 0.0, -1.0]}, // E
];
```

Each vertex has the same normal `[0.0, 0.0, -1.0]`. This normal specifies that our model is facing towards the screen.

We need to reflect this change in our `VertexBufferDescriptor`, in order for our shader to get the data it needs.

```rust
impl Vertex {
    fn desc<'a>() -> wgpu::VertexBufferDescriptor<'a> {
        use std::mem;
        wgpu::VertexBufferDescriptor {
            stride: mem::size_of::<Vertex>() as wgpu::BufferAddress,
            step_mode: wgpu::InputStepMode::Vertex,
            attributes: &[
                wgpu::VertexAttributeDescriptor {
                    offset: 0,
                    shader_location: 0,
                    format: wgpu::VertexFormat::Float3,
                },
                wgpu::VertexAttributeDescriptor {
                    offset: mem::size_of::<[f32; 3]>() as wgpu::BufferAddress,
                    shader_location: 1,
                    format: wgpu::VertexFormat::Float2,
                },
                // NEW
                wgpu::VertexAttributeDescriptor {
                    offset: mem::size_of::<[f32; 5]>() as wgpu::BufferAddress,
                    shader_location: 2,
                    format: wgpu::VertexFormat::Float3,
                }
            ]
        }
    }
}
```

With that done, we can change our vertex shader to use our new normals.

```glsl
#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;
layout(location=2) in vec3 a_normal; // NEW

layout(location=0) out vec2 v_tex_coords;
layout(location=1) out vec3 v_normal; // NEW

layout(set=1, binding=0) 
uniform Uniforms {
    mat4 u_view_proj;
};

layout(set=1, binding=1) 
buffer Instances {
    mat4 s_models[];
};

void main() {
    v_tex_coords = a_tex_coords;

    // UPDATED
    mat4 model = s_models[gl_InstanceIndex];
    v_normal = transpose(inverse(mat3(model))) * a_normal;
    gl_Position = u_view_proj * model * vec4(a_position, 1.0);
}
```

We pull out the model-view-projection matrix that we use to transform our model, because we are going to need it transform our normals. Because a normal is just a direction, not a position, we need to pull out the rotational part of the `model` matrix. That's why we convert it to `mat3`. I'm not sure why the `transpose` and `invert` bit are needed, but they are.

The fragment shader will take that normal, and a new `u_light` uniform, and perform the calculation.

```glsl
#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec3 v_normal;

layout(location=0) out vec4 f_color;

layout(set = 0, binding = 0) uniform texture2D t_diffuse;
layout(set = 0, binding = 1) uniform sampler s_diffuse;

layout(set=1, binding=2) 
uniform Lights {
    vec3 u_light;
};

void main() {
    vec4 diffuse = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);
    float brightness = dot(normalize(v_normal), normalize(u_light)); // 1.
    vec4 ambient = vec4(0.0, 0.0, 0.0, 1.0); // 2.
    f_color = mix(ambient, diffuse, brightness); // 3.
}
```

1. The dot product gives us the cosine of the angle between the two vectors multiplied by the magnitude of each vector. Normalizing the vectors gives them a magnitude of one, so we get just the cosine of the angle between the two. We can use this value to determine how "similar" they are. A value of 1.0 means that the vectors are the same. A value of -1.0 means that they point in opposite directions.
2. The ambient value is the color the object would be in the dark.
3. We get the final color by mixing the ambient and diffuse colors using our brightness value.

Before we can see the results, we need to create the uniform buffer to hold the light data. We're going to create a new buffer to make it easier to store multiple lights.

```rust
#[repr(C)]
#[derive(Copy, Clone)]
struct Light {
    direction: cgmath::Vector3<f32>,
}

let light = Light {
    direction: (-1.0, 0.4, -0.9).into(),
};
let light_buffer = device
    .create_buffer_mapped(1, wgpu::BufferUsage::UNIFORM)
    .fill_from_slice(&[light]);
```

We need to update the uniform bind group as well.

```rust
let uniform_bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
    bindings: &[
        // ...
        wgpu::BindGroupLayoutBinding {
            binding: 2,
            visibility: wgpu::ShaderStage::FRAGMENT,
            ty: wgpu::BindingType::UniformBuffer {
                dynamic: false,
            },
        },
    ]
});

let uniform_bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
    layout: &uniform_bind_group_layout,
    bindings: &[
        // ...
        wgpu::Binding {
            binding: 2,
            resource: wgpu::BindingResource::Buffer {
                buffer: &light_buffer,
                range: 0..std::mem::size_of_val(&light) as wgpu::BufferAddress,
            }
        },
    ],
});
```

With all that you should get something that looks like this.

![gouraud.png](./gouraud.png)

You can see that the models that are pointed down are darker than the ones that are pointing up.

## Blinn-Phong Shading

Gouraud shading works, but it's not super accurate. It's missing specular reflection.

Specular reflection is the light that's reflected of surface without getting scattered as the diffuse reflection. It's the bright spots you see on s shiny surface such as an apple.

Fortunately we only have to change the fragment shader code to get this new effect.

