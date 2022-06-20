# Multi-threading with Wgpu and Rayon

<div class="warn">

This example has not been tested on WASM. Rayon has support for multi threading on WASM via [wasm-bindgen-rayon](https://docs.rs/crate/wasm-bindgen-rayon/latest), though that implementation is only currently working on Chrome-based browsers. Because of this I've elected not to make a WASM version of this tutorial at this time.

</div>

The main selling point of Vulkan, DirectX 12, Metal, and by extension Wgpu is that these APIs is that they designed from the ground up to be thread safe. Up to this point, we have been doing everything on a single thread. That's about to change.

<div class="note">

This example is based on the code for [tutorial12-camera](../intermediate/tutorial12-camera)

</div>

<div class="note">

I won't go into what threads are in this tutorial. That is a full CS course in and of itself. All we'll be covering is using threading to make loading resources faster.

We won't go over multithreading rendering as we don't have enough different types of objects to justify that yet. This will change in a coming tutorial

</div>

## Parallelizing loading models and textures

Currently, we load the materials and meshes of our model one at a time. This is a perfect opportunity for multithreading! All our changes will be in `model.rs`. Let's first start with the materials. We'll convert the regular for loop into a `par_iter().map()`.

```rust
// resources.rs

#[cfg(not(target_arch="wasm32"))]
use rayon::iter::IntoParallelIterator;

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

Next, we can update the meshes to be loaded in parallel.

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
            let index_buffer = device.create_buffer_init(
                &wgpu::util::BufferInitDescriptor {
                    label: Some(&format!("{:?} Index Buffer", m.name)), // UPDATED!
                    contents: bytemuck::cast_slice(&m.mesh.indices),
                    usage: wgpu::BufferUsages::INDEX,
                }
            );
            // ...
            // UPDATED!
            Ok(Mesh {
                // ...
            })
        }).collect::<Result<Vec<_>>>()?;
        // ...
    }
    // ...
}
```

We've parallelized loading the meshes, and making the vertex array for them. Probably a bit overkill, but `rayon` should prevent us from using too many threads.

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

We're not loading that many resources, so the speedup is minimal. We'll be doing more stuff with threading, but this is a good introduction.

<!-- <WasmExample example="tutorial12_camera"></WasmExample> -->

<AutoGithubLink/>