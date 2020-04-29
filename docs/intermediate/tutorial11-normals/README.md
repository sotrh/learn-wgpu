# Normal Mapping

With just lighting, our scene is already looking pretty good. Still, our models are still overly smooth. This is understandable because we are using a very simple model. If we were using a texture that was supposed to be smooth, this wouldn't be a problem, but our brick texture is supposed to be rougher. We could solve this by adding more geometry, but that would slow our scene down, and it would hard to know where to new polygons. This is were normal mapping comes in.

Remember in [the instancing tutorial](/beginner/tutorial7-instancing/#a-different-way-textures), we experimented with storing instance data in a texture? A normal map is doing just that with normal data! We'll use the normals in the normal map in our lighting calculation in addition to the vertex normal.

The brick texture I found came with a normal map. Let's take a look at it!

![./cube-normal.png](./cube-normal.png)

The r, g, and b components of the texture correspond to the x, y, and z components or the normals. All the z values should be positive, that's why the normal map has a bluish tint.

We'll need to modify our `Material` struct in `model.rs` to include a `normal_texture`.

```rust
pub struct Material {
    pub name: String,
    pub diffuse_texture: texture::Texture,
    pub normal_texture: texture::Texture,
    pub bind_group: wgpu::BindGroup,
}
```

We'll have to update the `texture_bind_group_layout` to include the normal map as well.

```rust
let texture_bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
    bindings: &[
        // ...
        // normal map
        wgpu::BindGroupLayoutEntry {
            binding: 2,
            visibility: wgpu::ShaderStage::FRAGMENT,
            ty: wgpu::BindingType::SampledTexture {
                multisampled: false,
                component_type: wgpu::TextureComponentType::Float,
                dimension: wgpu::TextureViewDimension::D2,
            },
        },
        wgpu::BindGroupLayoutEntry {
            binding: 3,
            visibility: wgpu::ShaderStage::FRAGMENT,
            ty: wgpu::BindingType::Sampler { comparison: false },
        },
    ],
    label: None,
});
```

We'll need to actually the normal map itself. We'll do this in the loop we create the materials in.

```rust
let diffuse_path = mat.diffuse_texture;
let (diffuse_texture, cmds) = texture::Texture::load(device, containing_folder.join(diffuse_path))?;
command_buffers.push(cmds);

let normal_path = match mat.unknown_param.get("map_Bump") {
    Some(v) => Ok(v),
    None => Err(failure::err_msg("Unable to find normal map"))
};
let (normal_texture, cmds) = texture::Texture::load(device, containing_folder.join(normal_path?))?;
command_buffers.push(cmds);
```

* Note: I duplicated and moved teh `command_buffers.push(cmds);` line. This means we can reuse the `cmds` variable for both the normal map and diffuse/color map.

Our `Material`'s `bind_group` will have to change as well. 

```rust
let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
    layout,
    bindings: &[
        // ...
        wgpu::Binding {
            binding: 2,
            resource: wgpu::BindingResource::TextureView(&normal_texture.view),
        },
        wgpu::Binding {
            binding: 3,
            resource: wgpu::BindingResource::Sampler(&normal_texture.sampler),
        },
    ],
    label: None,
});
```

Don't forget to pass the `normal_texture` into the `Material` struct!

```rust
materials.push(Material {
    name: mat.name,
    diffuse_texture,
    normal_texture, // NEW!
    bind_group,
});
```

Now we can add use the texture in the fragment shader. Color values are by default in the range `[0, 1]`, so we'll have to convert the normal values to `[-1, 1]`.

```glsl
// shader.frag
// ...

layout(set = 0, binding = 2) uniform texture2D t_normal;
layout(set = 0, binding = 3) uniform sampler s_normal;

// ...

void main() {
    vec4 object_color = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);
    vec4 object_normal = texture(sampler2D(t_normal, s_normal), v_tex_coords); // NEW!

    // ...

    vec3 normal = normalize(object_normal.rgb * 2.0 - 1.0); // UPDATED!
    
    // ...
}
```

## View Space

I mentioned it briefly in the [lighting tutorial](/intermediate/tutorial10-lighting/#the-normal-matrix), that we were doing our lighting calculation in "world space". This meant that the entire scene was oriented with respect to the *world's* coordinate system. 
