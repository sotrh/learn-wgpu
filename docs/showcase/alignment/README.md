# Memory Layout in WGSL

<div class="warn">

This page is currently being reworked. I want to understand the topics a bit better, but as 0.12 is out I want to release what I have for now.

</div>

## Alignment of vertex and index buffers

Vertex buffers require defining a `VertexBufferLayout`, so the memory alignment is whatever you tell WebGPU it should be. This can be really convenient for keeping down memory usage on the GPU.

The Index Buffer uses the alignment of whatever primitive type you specify via the `IndexFormat` you pass into `RenderEncoder::set_index_buffer()`.

## Alignment of Uniform and Storage buffers

GPUs are designed to process thousands of pixels in parallel. In order to achieve this, some sacrifices had to be made. Graphics hardware likes to have all the bytes you intend on processing aligned by powers of 2. The exact specifics of why this is are beyond my level of knowledge, but it's important to know so that you can troubleshoot why your shaders aren't working.

<!-- The address of the position of an instance in memory has to be a multiple of its alignment. Normally alignment is the same as size. Exceptions are vec3, structs, and arrays. A vec3 is padded to be a vec4 which means it behaves as if it was a vec4 just that the last entry is not used. -->

Let's take a look at the following table:

---------------------------------------------------------------
| Type                   | Alignment in Bytes | Size in Bytes |
|------------------------|--------------------|---------------|
| scalar (i32, u32, f32) |                  4 |             4 |
| vec2&lt;T&gt;          |                  8 |             8 |
| vec3&lt;T&gt;          |             **16** |            12 |
| vec4&lt;T&gt;          |                 16 |            16 |

You can see for `vec3` the alignment is the next power of 2 from the size, 16. This can catch beginners (and even veterans) off guard as it's not the most intuitive. This becomes especially important when we start laying out structs. Take the light struct from the [lighting tutorial](../../intermediate/tutorial10-lighting/#seeing-the-light):

You can see the full table of the alignments in section [4.3.7.1 of the WGSL spec](https://www.w3.org/TR/WGSL/#alignment-and-size)

```wgsl
struct Light {
    position: vec3<f32>,
    color: vec3<f32>,
}
```

So what's the alignment of this struct? Your first guess would be that it's the sum of the alignments of the individual fields. That might make sense if we were in Rust-land, but in shader-land, it's a little more involved. The alignment for a given struct is given by the following equation:

```
// S is the struct in question
// M is a member of the struct
AlignOf(S) = max(AlignOfMember(S, M1), ... , AlignOfMember(S, Mn))
```

Basically, the alignment of the struct is the maximum of the alignments of the members of the struct. This means that:

```
AlignOf(Light) 
    = max(AlignOfMember(Light, position), AlignOfMember(Light, color))
    = max(16, 16)
    = 16
```

This is why the `LightUniform` has those padding fields. WGPU won't accept it if the data is not aligned correctly.

## How to deal with alignment issues

In general, 16 is the max alignment you'll see. In that case, you might think that we should be able to do something like the following:

```rust
#[repr(C, align(16))]
#[derive(Debug, Copy, Clone, bytemuck::Pod, bytemuck::Zeroable)]
struct LightUniform {
    position: [f32; 3],
    color: [f32; 3],
}
```

But this won't compile. The [bytemuck crate](https://docs.rs/bytemuck/) doesn't work with structs with implicit padding bytes. Rust can't guarantee that the memory between the fields has been initialized properly. This gave me an error when I tried it:

```
error[E0512]: cannot transmute between types of different sizes, or dependently-sized types
   --> code/intermediate/tutorial10-lighting/src/main.rs:246:8
    |
246 | struct LightUniform {
    |        ^^^^^^^^^^^^
    |
    = note: source type: `LightUniform` (256 bits)
    = note: target type: `_::{closure#0}::TypeWithoutPadding` (192 bits)
```

## Additional resources

If you're looking for more information check out the [write-up](https://gist.github.com/teoxoy/936891c16c2a3d1c3c5e7204ac6cd76c) by @teoxoy.