# Update to Wgpu 29.0

Another Wgpu update has come! A few things we should go over.

## Creating PipelineLayouts

The `bind_groups` in `PipelineDescriptor` are now `Option<&wgpu::BindGroupLayout>`
This means that when defining a pipeline layout you need to wrap your bind group
layouts with `Some()`.

```rust
        let model_pipeline_layout =
            display.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
                label: Some("model_pipeline_layout"),
                bind_group_layouts: &[Some(&camera_layout), Some(material_binder.layout())],
                immediate_size: 0,
            });
```

This means that you can have your bindings use consistent group numbers. For
example you can have your camera data be `@group(0)` material data always be
`@group(1)` even if the shader doesn't use the camera.

## CurrentSurfaceTexture

The `current_surface()` function now returns `CurrentSurfaceTexture` enum. This means
we have to change our render logic to handle this new way of working.

```rust
        let frame = match display.surface().get_current_texture() {
            wgpu::CurrentSurfaceTexture::Success(surface_texture) => surface_texture,
            wgpu::CurrentSurfaceTexture::Suboptimal(surface_texture) => {
                display.configure();
                surface_texture
            }
            wgpu::CurrentSurfaceTexture::Timeout
            | wgpu::CurrentSurfaceTexture::Occluded
            | wgpu::CurrentSurfaceTexture::Validation => return,
            wgpu::CurrentSurfaceTexture::Outdated => {
                display.configure();
                return;
            }
            wgpu::CurrentSurfaceTexture::Lost => {
                panic!("Context lost");
            }
        };
```

## Instance creation changes

The `InstanceDescriptor` struct now longer has a `Default` implementation. This is
because it now requires you to specify whether you want to use a `display` handle.
If you specify a `display` here, you don't have to use a matching one when you
create a `surface`. 

```rust
        let instance = wgpu::Instance::new(wgpu::InstanceDescriptor {
            #[cfg(not(target_arch = "wasm32"))]
            backends: wgpu::Backends::PRIMARY,
            #[cfg(target_arch = "wasm32")]
            backends: wgpu::Backends::GL,
            flags: Default::default(),
            memory_budget_thresholds: Default::default(),
            backend_options: Default::default(),
            display: None,
        });
```

If you don't want to specify all the fields you can use these convenience methods.

* `new_with_display_handle`
* `new_with_display_handle_from_env`
* `new_without_display_handle`
* `new_without_display_handle_from_env`

There are lots of other changes that you can check out in
[the official release](https://github.com/gfx-rs/wgpu/releases/tag/v29.0.0)

## Supporters

A special thanks to these supporters!

* Craft Links
* 大典 加藤
* Dude
* David Laban
* Alexander Kabirov
* Bernard Llanos
* Eliot Bolduc
* IC
* Nico Arbogast
* Ian Gowen
* Aron Granberg
* 折登 樹
* Julius Liu
* Jani Turkia
* Lions Heart
* Feng Liang
* Paul E Hansen
* Gunstein Vatnar
* Youngsuk Kim
* Danny McGee
* charlesk
* yutani
* Ben Anderson
* Ken
* Ryan
* ツナマヨ
* Tema
* dadofboi
* Lennart
* Felix
* Davide Prati
* Andrea Postal
* Zeh Fernando
* Filip
* Thunk

If this helped you out and you want to support checkout
[my patreon](https://patreon.com/sotrh) or [my kofi account](https://ko-fi.com/sotrh)!
