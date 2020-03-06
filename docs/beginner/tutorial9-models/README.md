# Model Loading

Up to this point we've been creating our models manually. While this is an acceptable way to do this, but it's really slow if we want to include complex models with lots of polygons. Because of this, we're going modify our code to leverage the obj model format so that we can create a model in a software such as blender and display it in our code.

Our `main.rs` file is getting pretty cluttered, let's create a `model.rs` file that we can put our model loading code into.

```rust
// model.rs
pub trait Vertex {
    fn desc<'a>() -> wgpu::VertexBufferDescriptor<'a>;
}

#[repr(C)]
#[derive(Copy, Clone, Debug)]
pub struct ModelVertex {
    position: [f32; 3],
    tex_coords: [f32; 2],
    normal: [f32; 3],
}

impl Vertex for ModelVertex {
    fn desc<'a>() -> wgpu::VertexBufferDescriptor<'a> {
        unimplemented!();
    }
}
```

You'll notice a couple of things here. In `main.rs` we had `Vertex` as a struct, here we're using a trait. We could have multiple vertex types (model, UI, instance data, etc.). Making `Vertex` a trait will allow us to abstract our the `VertexBufferDescriptor` creation code to make creating `RenderPipeline`s simpler.

Another thing to mention is the `normal` field in `ModelVertex`. We won't use this until we talk about lighting, but will add it to the struct for now.

Let's define our `VertexBufferDescriptor`.

```rust
impl Vertex for ModelVertex {
    fn desc<'a>() -> wgpu::VertexBufferDescriptor<'a> {
        use std::mem;
        wgpu::VertexBufferDescriptor {
            stride: mem::size_of::<ModelVertex>() as wgpu::BufferAddress,
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
                wgpu::VertexAttributeDescriptor {
                    offset: mem::size_of::<[f32; 5]>() as wgpu::BufferAddress,
                    shader_location: 2,
                    format: wgpu::VertexFormat::Float3,
                },
            ]
        }
    }
}
```

This is basically the same as the original `VertexBufferDescriptor`, but we added a `VertexAttributeDescriptor` for the `normal`.

With all that in place we need a model to render. If you have one already that's great, but I've supplied a [zip file](https://github.com/sotrh/learn-wgpu/tree/master/code/beginner/tutorial9-model/src/res) with the model and all of it's textures. We're going to put this model in a new `res` folder.

Speaking of textures, let's add a `load()` method to `Texture` in `texture.rs`.

```rust
use std::path::Path;

impl Texture {
    pub fn load<P: AsRef<Path>>(device: &wgpu::Device, path: P) -> Result<(Self, wgpu::CommandBuffer), failure::Error> {
        let img = image::open(path)?;
        Self::from_image(device, &img)
    }
}
```

The `load` method will be useful when we load the textures for our models, as `include_bytes!` requires that we know the name of the file at compile time which we can't really guarantee with model textures.


## Loading models with TOBJ

