# Multi-threading with Wgpu and Rayon

The main selling point of Vulkan, DirectX 12, Metal, and by extension Wgpu is that these APIs is that they designed from the ground up to be thread safe. Up to this point we have been doing everything on a single thread. That's about to change.

<div class="note">

I won't go into what threads are in this tutorial. That is a course in and of itself. All we'll be covering is using threading to make loading resources faster.

We won't go over multithreading rendering as we don't have enough different types of objects to justify that yet. This will change in a coming tutorial

</div>

## Threading build.rs

If you remember [the pipeline tutorial](../../beginner/tutorial3-pipeline), we created a build script to compile our GLSL shaders to spirv. That had a section in the `main` function that looked like this.

```rust
// This could be parallelized
let shaders = shader_paths.iter_mut()
    .flatten()
    .map(|glob_result| {
        ShaderData::load(glob_result?)
    })
    .collect::<Vec<Result<_>>>()
    .into_iter()
    .collect::<Result<Vec<_>>>();
```

That `This could be parallelized` comment will soon become `This is parallelized`. We're going to add a build dependecy to [rayon](https://docs.rs/rayon) to our `Cargo.toml`.

```toml
[build-dependencies]
anyhow = "1.0"
fs_extra = "1.2"
glob = "0.3"
rayon = "1.4" # NEW!
shaderc = "0.7"
```

First some housekeeping. Our `build.rs` code currently uses an array to store the globs to find our projects shaders. We're going to switch to using a `Vec` to make things play nicer with `rayon`.

```rust
// Collect all shaders recursively within /src/
// UDPATED!
let mut shader_paths = Vec::new();
shader_paths.extend(glob("./src/**/*.vert")?);
shader_paths.extend(glob("./src/**/*.frag")?);
shader_paths.extend(glob("./src/**/*.comp")?);
```

We'll also need to import `rayon` as well.

```rust
use rayon::prelude::*;
```

Now we can change our shader source collection code to the following.

```rust
// UPDATED!
// This is parallelized
let shaders = shader_paths.into_par_iter()
    .map(|glob_result| {
        ShaderData::load(glob_result?)
    })
    .collect::<Vec<Result<_>>>()
    .into_iter()
    .collect::<Result<Vec<_>>>();
```

Super simple isn't it? By using `into_par_iter`, `rayon` will try to spread our shader loading across multiple threads if it can. This means that our build script will load the shader text source for multiple shaders at the same time. This has the potential to drastically reduce our build times. 

We can compare the speeds of our compilation by running `cargo build` on both this tutorial and the previous one.

```bash
$ cargo build --bin tutorial12-camera
   Compiling tutorial12-camera v0.1.0 (/home/benjamin/dev/learn-wgpu/code/intermediate/tutorial12-camera)
    Finished dev [unoptimized + debuginfo] target(s) in 1m 13s
$ cargo build --bin tutorial13-threading
   Compiling tutorial13-threading v0.1.0 (/home/benjamin/dev/learn-wgpu/code/intermediate/tutorial13-threading)
    Finished dev [unoptimized + debuginfo] target(s) in 24.33s
```

Our build speed is a little more than twice as fast!

<div class="note">

I got these build speeds after building the project one time to get `rayon` installed, and then deleting the .spv files from the previous two projects.

</div>

## Parallelizing loading models and textures

Currently we load the materials and meshes of our model one at a time. This is a perfect opportunity for multithreading! All our changes will be in `model.rs`. Let's first start with the materials. We'll convert the regular for loop into a `par_iter().map()`.

```rust
// model.rs

impl Model {
    pub fn load<P: AsRef<Path>>(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        layout: &wgpu::BindGroupLayout,
        path: P,
    ) -> Result<Self> {
        // ...
        // UPDATED!
        let materials = obj_materials.par_iter().map(|mat| {
            // We can also parallelize loading the textures!
            let mut textures = [
                (containing_folder.join(&mat.diffuse_texture), false),
                (containing_folder.join(&mat.normal_texture), true),
            ].par_iter().map(|(texture_path, is_normal_map)| {
                texture::Texture::load(device, queue, texture_path, *is_normal_map)
            }).collect::<Result<Vec<_>>>()?;
            
            // Pop removes from the end of the list.
            let normal_texture = textures.pop().unwrap();
            let diffuse_texture = textures.pop().unwrap();

            Ok(Material::new(
                device,
                &mat.name,
                diffuse_texture,
                normal_texture,
                layout,
            ))
        }).collect::<Result<Vec<Material>>>()?;
        // ...
    }
    // ...
}
```

Next we can update the meshes to be loaded in parallel.

```rust
impl Model {
    pub fn load<P: AsRef<Path>>(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        layout: &wgpu::BindGroupLayout,
        path: P,
    ) -> Result<Self> {
        // ...
        // UPDATED!
        let meshes = obj_models.par_iter().map(|m| {
            let mut vertices = (0..m.mesh.positions.len() / 3).into_par_iter().map(|i| {
                ModelVertex {
                    position: [
                        m.mesh.positions[i * 3],
                        m.mesh.positions[i * 3 + 1],
                        m.mesh.positions[i * 3 + 2],
                    ].into(),
                    tex_coords: [
                        m.mesh.texcoords[i * 2], 
                        m.mesh.texcoords[i * 2 + 1]
                    ].into(),
                    normal: [
                        m.mesh.normals[i * 3],
                        m.mesh.normals[i * 3 + 1],
                        m.mesh.normals[i * 3 + 2],
                    ].into(),
                    // We'll calculate these later
                    tangent: [0.0; 3].into(),
                    bitangent: [0.0; 3].into(),
                }
            }).collect::<Vec<_>>();
            // ...
        }
        // ...
    }
    // ...
}
```

We've parallelized loading the meshes, and making the vertex array for them. Propably a bit overkill, but `rayon` should prevent us from using too many threads.

<div class="note">

You'll notice that we didn't use `rayon` for calculating the tangent, and bitangent. I tried to get it to work, but I was having trouble finding a way to do it without multiple mutable references to `vertices`. I don't feel like introducing a `std::sync::Mutex`, so I'll leave it for now.

This is honestly a better job for a compute shader, as the model data is going to get loaded into a buffer anyway.

</div>

## It's that easy!

Most of the `wgpu` types are `Send + Sync`, so we can use them in threads without much trouble. It was so easy, that I feel like this tutorial is too short! I'll just leave off with a speed comparison between the previous model loading code and the current code.

```
Elapsed (Original): 309.596382ms
Elapsed (Threaded): 199.645027ms
```

We're not loading that many resources, so the speed up is minimal. We'll be doing more stuff with threading, but this is a good introduction.

<AutoGithubLink/>