use std::{
    collections::{HashMap, HashSet},
    num::NonZero,
    path::Path,
    sync::Arc,
};

use bytemuck::{bytes_of, cast_slice};
use framework::{CameraBinder, CameraBinding, resources::load_binary};
use glam::{Vec2, Vec4, vec2};
use wgpu::{
    BlendState,
    util::{BufferInitDescriptor, DeviceExt},
};

pub struct BitmapFont {
    glyphs: HashMap<char, Glyph>,
    texture: wgpu::TextureView,
    line_height: f32,
}

impl BitmapFont {
    pub async fn load(
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        padding: u32,
        path: impl AsRef<Path>,
        chars: &HashSet<char>,
    ) -> anyhow::Result<Self> {
        let font_bytes = load_binary(path.as_ref()).await?;
        let glyph_scale = 32.0;

        let font = fontdue::Font::from_bytes(font_bytes, Default::default())
            .map_err(|e| anyhow::anyhow!("{e}"))?;

        // Figure out texture size
        let glyph_size = 64;
        let glyphs_per_row = chars.len().isqrt().next_power_of_two() as u32;
        let size = glyphs_per_row * glyph_size;
        let texture = device.create_texture(&wgpu::TextureDescriptor {
            label: Some(&format!("{}", path.as_ref().display())),
            size: wgpu::Extent3d {
                width: size,
                height: size,
                depth_or_array_layers: 1,
            },
            mip_level_count: 1,
            sample_count: 1,
            dimension: wgpu::TextureDimension::D2,
            format: wgpu::TextureFormat::R8Unorm,
            usage: wgpu::TextureUsages::TEXTURE_BINDING | wgpu::TextureUsages::COPY_DST,
            view_formats: &[],
        });

        let mut glyphs = HashMap::new();
        let mut x = padding;
        let mut y = padding;

        let mut max_g_height = 0;

        for c in chars.iter().copied() {
            let (metrics, coverage) = font.rasterize(c, glyph_scale);

            let offset = vec2(metrics.xmin as _, metrics.ymin as _);

            let mut texture_region = None;

            if coverage.len() > 0 {
                let g_width = metrics.width as u32;
                let g_height = metrics.height as u32;

                // Maybe have the texture atlas be layered
                if x + g_width >= texture.size().width {
                    x = padding;
                    y += max_g_height + padding;
                    max_g_height = 0;
                }

                if max_g_height < g_height {
                    max_g_height = g_height;
                }

                let bytes_per_row = g_width;
                queue.write_texture(
                    wgpu::TexelCopyTextureInfoBase {
                        texture: &texture,
                        mip_level: 0,
                        origin: wgpu::Origin3d { x, y, z: 0 },
                        aspect: wgpu::TextureAspect::All,
                    },
                    &coverage,
                    wgpu::TexelCopyBufferLayout {
                        offset: 0,
                        bytes_per_row: Some(bytes_per_row),
                        rows_per_image: Some(g_height),
                    },
                    wgpu::Extent3d {
                        width: g_width,
                        height: g_height,
                        depth_or_array_layers: 1,
                    },
                );

                let min = vec2(x as _, y as _);
                let max = min + vec2(g_width as _, g_height as _);
                let min_uv = min / texture.size().width as f32;
                let max_uv = max / texture.size().height as f32;

                x += g_width + padding;

                texture_region = Some(TextureRegion {
                    min,
                    max,
                    min_uv,
                    max_uv,
                })
            }

            glyphs.insert(
                c,
                Glyph {
                    h_advance: metrics.advance_width,
                    v_advance: metrics.advance_height,
                    offset,
                    texture_region,
                },
            );
        }

        Ok(Self {
            glyphs,
            texture: texture.create_view(&Default::default()),
            line_height: glyph_scale,
        })
    }

    fn glyph(&self, c: char) -> Option<&Glyph> {
        self.glyphs.get(&c)
    }
}

#[derive(Debug)]
pub struct Glyph {
    offset: Vec2,
    h_advance: f32,
    texture_region: Option<TextureRegion>,
    v_advance: f32,
}

#[derive(Debug)]
pub struct TextureRegion {
    min: Vec2,
    max: Vec2,
    min_uv: Vec2,
    max_uv: Vec2,
}

pub struct FontBinder {
    glyph_atlas_layout: wgpu::BindGroupLayout,
    text_buffer_layout: wgpu::BindGroupLayout,
}

impl FontBinder {
    pub fn new(device: &wgpu::Device) -> Self {
        let glyph_atlas_layout =
            device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                label: Some("FontBinder::glyph_atlas_layout"),
                entries: &[
                    wgpu::BindGroupLayoutEntry {
                        binding: 0,
                        visibility: wgpu::ShaderStages::FRAGMENT,
                        ty: wgpu::BindingType::Sampler(wgpu::SamplerBindingType::Filtering),
                        count: None,
                    },
                    wgpu::BindGroupLayoutEntry {
                        binding: 1,
                        visibility: wgpu::ShaderStages::FRAGMENT,
                        ty: wgpu::BindingType::Texture {
                            sample_type: wgpu::TextureSampleType::Float { filterable: true },
                            view_dimension: wgpu::TextureViewDimension::D2,
                            multisampled: false,
                        },
                        count: None,
                    },
                ],
            });

        let text_buffer_layout =
            device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
                label: Some("FontBinder::text_buffer_layout"),
                entries: &[wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::VERTEX,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Uniform,
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                }],
            });

        Self {
            glyph_atlas_layout,
            text_buffer_layout,
        }
    }

    pub fn bind_font(
        &self,
        device: &wgpu::Device,
        font: &BitmapFont,
        sampler: &wgpu::Sampler,
    ) -> FontBinding {
        let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: None,
            layout: &self.glyph_atlas_layout,
            entries: &[
                wgpu::BindGroupEntry {
                    binding: 0,
                    resource: wgpu::BindingResource::Sampler(sampler),
                },
                wgpu::BindGroupEntry {
                    binding: 1,
                    resource: wgpu::BindingResource::TextureView(&font.texture),
                },
            ],
        });

        FontBinding { bind_group }
    }

    fn bind_uniforms(
        &self,
        device: &wgpu::Device,
        uniform_buffer: &wgpu::Buffer,
    ) -> FontUniformsBinding {
        FontUniformsBinding {
            bind_group: device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("text bind_group"),
                layout: &self.text_buffer_layout,
                entries: &[wgpu::BindGroupEntry {
                    binding: 0,
                    resource: wgpu::BindingResource::Buffer(wgpu::BufferBinding {
                        buffer: uniform_buffer,
                        offset: 0,
                        size: NonZero::new(std::mem::size_of::<FontUniforms>() as _),
                    }),
                }],
            }),
        }
    }
}

pub struct FontBinding {
    bind_group: wgpu::BindGroup,
}

impl FontBinding {
    fn bind_group(&self) -> &wgpu::BindGroup {
        &self.bind_group
    }
}

pub struct FontUniformsBinding {
    bind_group: wgpu::BindGroup,
}

impl FontUniformsBinding {
    fn bind_group(&self) -> &wgpu::BindGroup {
        &self.bind_group
    }
}

#[derive(Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
pub struct FontVertex {
    position: Vec2,
    uv: Vec2,
    color: Vec4,
}

#[derive(Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
pub struct FontUniforms {
    position: Vec2,
    extents: Vec2,
}

impl FontVertex {
    const LAYOUT: wgpu::VertexBufferLayout<'static> = wgpu::VertexBufferLayout {
        array_stride: std::mem::size_of::<Self>() as _,
        step_mode: wgpu::VertexStepMode::Vertex,
        attributes: &wgpu::vertex_attr_array![
            0 => Float32x2,
            1 => Float32x2,
            2 => Float32x4,
        ],
    };
}

pub struct TextPipeline {
    debug: wgpu::RenderPipeline,
    draw_glyph: wgpu::RenderPipeline,
}

impl TextPipeline {
    pub fn new(
        device: &wgpu::Device,
        render_format: wgpu::TextureFormat,
        font_binder: &FontBinder,
        camera_binder: &CameraBinder,
    ) -> Self {
        let shader = device.create_shader_module(wgpu::include_wgsl!("text.wgsl"));

        let debug_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: None,
            bind_group_layouts: &[Some(&font_binder.glyph_atlas_layout)],
            immediate_size: 0,
        });

        let draw_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: None,
            bind_group_layouts: &[
                Some(&font_binder.glyph_atlas_layout),
                Some(camera_binder.layout()),
                Some(&font_binder.text_buffer_layout),
            ],
            immediate_size: 0,
        });

        let debug = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("TextPipeline::debug"),
            layout: Some(&debug_layout),
            vertex: wgpu::VertexState {
                module: &shader,
                entry_point: Some("vs_fullscreen"),
                compilation_options: Default::default(),
                buffers: &[],
            },
            primitive: Default::default(),
            depth_stencil: None,
            multisample: Default::default(),
            fragment: Some(wgpu::FragmentState {
                module: &shader,
                entry_point: Some("fs_glyph"),
                compilation_options: Default::default(),
                targets: &[Some(wgpu::ColorTargetState {
                    format: render_format,
                    blend: Some(BlendState::ALPHA_BLENDING),
                    write_mask: wgpu::ColorWrites::ALL,
                })],
            }),
            multiview_mask: None,
            cache: None,
        });

        let draw_glyph = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("TextPipeline::draw_glyph"),
            layout: Some(&draw_layout),
            vertex: wgpu::VertexState {
                module: &shader,
                entry_point: Some("vs_glyph"),
                compilation_options: Default::default(),
                buffers: &[Some(FontVertex::LAYOUT)],
            },
            primitive: Default::default(),
            depth_stencil: None,
            multisample: Default::default(),
            fragment: Some(wgpu::FragmentState {
                module: &shader,
                entry_point: Some("fs_glyph"),
                compilation_options: Default::default(),
                targets: &[Some(wgpu::ColorTargetState {
                    format: render_format,
                    blend: Some(BlendState::ALPHA_BLENDING),
                    write_mask: wgpu::ColorWrites::ALL,
                })],
            }),
            multiview_mask: None,
            cache: None,
        });

        Self { debug, draw_glyph }
    }

    pub fn buffer_text(
        &self,
        device: &wgpu::Device,
        font: Arc<BitmapFont>,
        font_binder: &FontBinder,
        sampler: &wgpu::Sampler,
        text: &str,
        position: Vec2,
        color: Vec4,
    ) -> TextBuffer {
        let (indices, bytes, uniforms) = layout_glyphs(&font, text, position, color);

        let uniform_vertex_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some(text),
            contents: &bytes,
            usage: wgpu::BufferUsages::VERTEX
                | wgpu::BufferUsages::UNIFORM
                | wgpu::BufferUsages::COPY_DST,
        });
        let index_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some(text),
            contents: bytemuck::cast_slice(&indices),
            usage: wgpu::BufferUsages::INDEX | wgpu::BufferUsages::COPY_DST,
        });

        let glyph_atlas_binding = font_binder.bind_font(device, &font, sampler);
        let uniforms_binding = font_binder.bind_uniforms(device, &uniform_vertex_buffer);

        TextBuffer {
            uniform_vertex_buffer,
            index_buffer,
            glyph_atlas_binding,
            uniforms_binding,
            num_indices: indices.len() as u32,
            uniforms,
            font: font.clone(),
        }
    }

    pub fn debug_glyph_texture(&self, font: &FontBinding, pass: &mut wgpu::RenderPass<'_>) {
        pass.set_pipeline(&self.debug);
        pass.set_bind_group(0, &font.bind_group, &[]);
        pass.draw(0..3, 0..1);
    }

    pub fn draw_text(
        &self,
        text: &TextBuffer,
        camera: &CameraBinding,
        pass: &mut wgpu::RenderPass<'_>,
    ) {
        pass.set_pipeline(&self.draw_glyph);
        pass.set_bind_group(0, text.glyph_atlas_binding.bind_group(), &[]);
        pass.set_bind_group(1, camera.bind_group(), &[]);
        pass.set_bind_group(2, text.uniforms_binding.bind_group(), &[]);

        // Since the uniform buffer takes up the first part of
        // the buffer we need to tell wgpu to start after that
        pass.set_vertex_buffer(
            0,
            text.uniform_vertex_buffer
                .slice((std::mem::size_of::<FontUniforms>() as u64)..),
        );

        pass.set_index_buffer(text.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
        pass.draw_indexed(0..text.num_indices, 0, 0..1);
    }
}

fn layout_glyphs(
    font: &BitmapFont,
    text: &str,
    position: Vec2,
    color: Vec4,
) -> (Vec<u32>, Vec<u8>, FontUniforms) {
    let mut vertices = Vec::new();
    let mut indices = Vec::new();
    let mut current_position = Vec2::ZERO;
    let mut extents = Vec2::ZERO;

    for c in text.chars() {
        let glyph = font.glyph(c).unwrap();

        if c == '\n' {
            current_position.x = 0.0;
            current_position.y -= font.line_height;
            continue;
        }

        if let Some(region) = &glyph.texture_region {
            let start_vertex = vertices.len() as u32;

            let size = region.max - region.min;
            let min = current_position + glyph.offset;
            let max = min + size;

            // Update the bounds with the next character
            extents = max;

            vertices.push(FontVertex {
                position: min,
                uv: vec2(region.min_uv.x, region.max_uv.y),
                color,
            });
            vertices.push(FontVertex {
                position: vec2(max.x, min.y),
                uv: vec2(region.max_uv.x, region.max_uv.y),
                color,
            });
            vertices.push(FontVertex {
                position: max,
                uv: vec2(region.max_uv.x, region.min_uv.y),
                color,
            });
            vertices.push(FontVertex {
                position: vec2(min.x, max.y),
                uv: vec2(region.min_uv.x, region.min_uv.y),
                color,
            });

            indices.push(start_vertex);
            indices.push(start_vertex + 1);
            indices.push(start_vertex + 2);
            indices.push(start_vertex);
            indices.push(start_vertex + 2);
            indices.push(start_vertex + 3);
        }

        current_position.x += glyph.h_advance;

        // Only used for vertical fonts
        current_position.y += glyph.v_advance;
    }

    let vertex_bytes: &[u8] = cast_slice(&vertices);
    let mut bytes: Vec<u8> =
        Vec::with_capacity(std::mem::size_of::<FontUniforms>() + vertex_bytes.len());

    let uniforms = FontUniforms { position, extents };
    let uniform_bytes = bytes_of(&uniforms);

    // Put the uniform data at the start of the buffer
    bytes.extend(uniform_bytes);

    // and the vertices at the end
    bytes.extend(vertex_bytes);

    (indices, bytes, uniforms)
}

#[derive(Debug, Clone, Copy, Default, serde::Serialize, serde::Deserialize)]
pub enum TextAlignment {
    #[default]
    Start,
    Center,
    End,
}

pub struct TextBuffer {
    uniforms: FontUniforms,
    num_indices: u32,
    glyph_atlas_binding: FontBinding,
    uniforms_binding: FontUniformsBinding,
    uniform_vertex_buffer: wgpu::Buffer,
    index_buffer: wgpu::Buffer,
    font: Arc<BitmapFont>,
}

impl TextBuffer {
    pub fn update_layout(
        &mut self,
        display: &framework::Display,
        position: Vec2,
        horizontal: TextAlignment,
        vertical: TextAlignment,
    ) {
        match horizontal {
            TextAlignment::Start => {
                self.uniforms.position.x = position.x;
            }
            TextAlignment::Center => {
                self.uniforms.position.x =
                    position.x + (display.width() as f32 - self.uniforms.extents.x) * 0.5;
            }
            TextAlignment::End => {
                self.uniforms.position.x =
                    position.x + display.width() as f32 - self.uniforms.extents.x;
            }
        }

        match vertical {
            TextAlignment::Start => {
                self.uniforms.position.y = position.y;
            }
            TextAlignment::Center => {
                self.uniforms.position.y =
                    position.y + (display.height() as f32 - self.uniforms.extents.y) * 0.5;
            }
            TextAlignment::End => {
                self.uniforms.position.y =
                    position.y + display.height() as f32 - self.uniforms.extents.y;
            }
        }

        display
            .queue
            .write_buffer(&self.uniform_vertex_buffer, 0, bytes_of(&self.uniforms));
    }

    pub fn update_text(
        &mut self,
        device: &wgpu::Device,
        queue: &wgpu::Queue,
        color: Vec4,
        text: &str,
    ) {
        let (indices, bytes, uniforms) =
            layout_glyphs(&self.font, text, self.uniforms.position, color);

        self.uniforms = uniforms;
        self.num_indices = indices.len() as _;

        let index_bytes: &[u8] = cast_slice(&indices);

        if self.uniform_vertex_buffer.size() < bytes.len() as wgpu::BufferAddress {
            self.uniform_vertex_buffer = device.create_buffer_init(&BufferInitDescriptor {
                label: Some(text),
                contents: &bytes,
                usage: wgpu::BufferUsages::VERTEX
                    | wgpu::BufferUsages::UNIFORM
                    | wgpu::BufferUsages::COPY_DST,
            });
        } else {
            queue.write_buffer(&self.uniform_vertex_buffer, 0, &bytes);
        }

        if self.index_buffer.size() < index_bytes.len() as wgpu::BufferAddress {
            self.index_buffer = device.create_buffer_init(&BufferInitDescriptor {
                label: Some(text),
                contents: bytemuck::cast_slice(&indices),
                usage: wgpu::BufferUsages::INDEX | wgpu::BufferUsages::COPY_DST,
            });
        } else {
            queue.write_buffer(&self.index_buffer, 0, index_bytes);
        }
    }
}
