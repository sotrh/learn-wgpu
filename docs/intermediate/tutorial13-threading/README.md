# Multi-threading with Wgpu and Rayon

The main selling point of Vulkan, DirectX 12, Metal, and by extension Wgpu is that these APIs is that they designed from the ground up to be thread safe. Up to this point we have been doing everything on a single thread. That's about to change.

<div class="note">

I won't go into what threads are in this tutorial. That is a course in and of itself.

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
shaderc = "0.6"
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