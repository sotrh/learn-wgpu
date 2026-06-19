use std::{
    collections::{HashMap, HashSet},
    path::Path,
};

use ab_glyph::{Font as _, ScaleFont};
use framework::{CameraBinder, CameraBinding, resources::load_binary};
use glam::{Vec2, vec2};
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
        let glyph_scale = 64.0;

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

            // let glyph = font.scaled_glyph(c);
            // let glyph_id = glyph.id;
            let mut offset = vec2(metrics.xmin as _, metrics.ymin as _);

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
    layout: wgpu::BindGroupLayout,
}

impl FontBinder {
    pub fn new(device: &wgpu::Device) -> Self {
        let layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("FontBinder"),
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
        Self { layout }
    }

    pub fn bind(
        &self,
        device: &wgpu::Device,
        font: &BitmapFont,
        sampler: &wgpu::Sampler,
    ) -> FontBinding {
        let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: None,
            layout: &self.layout,
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
}

pub struct FontBinding {
    bind_group: wgpu::BindGroup,
}

impl FontBinding {
    fn bind_group(&self) -> &wgpu::BindGroup {
        &self.bind_group
    }
}

#[derive(Clone, Copy, bytemuck::Pod, bytemuck::Zeroable)]
#[repr(C)]
pub struct FontVertex {
    position: glam::Vec2,
    uv: glam::Vec2,
    color: glam::Vec4,
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
    render_format: wgpu::TextureFormat,
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
            bind_group_layouts: &[Some(&font_binder.layout)],
            immediate_size: 0,
        });

        let draw_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: None,
            bind_group_layouts: &[Some(&font_binder.layout), Some(camera_binder.layout())],
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
                buffers: &[FontVertex::LAYOUT],
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

        Self {
            debug,
            draw_glyph,
            render_format,
        }
    }

    pub fn buffer_text(
        &self,
        device: &wgpu::Device,
        font: &BitmapFont,
        font_binder: &FontBinder,
        sampler: &wgpu::Sampler,
        text: &str,
        position: glam::Vec2,
        color: glam::Vec4,
    ) -> TextBuffer {
        let mut vertices = Vec::new();
        let mut indices = Vec::new();
        let mut current_position = position;

        for c in text.chars() {
            let glyph = font.glyph(c).unwrap();

            if c == '\n' {
                current_position.x = position.x;
                current_position.y -= font.line_height;
                continue;
            }

            if let Some(region) = &glyph.texture_region {
                let start_vertex = vertices.len() as u32;

                let size = region.max - region.min;
                let min = current_position + glyph.offset;
                let max = min + size;

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
        }

        let vertex_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some(text),
            contents: bytemuck::cast_slice(&vertices),
            usage: wgpu::BufferUsages::VERTEX | wgpu::BufferUsages::COPY_DST,
        });
        let index_buffer = device.create_buffer_init(&BufferInitDescriptor {
            label: Some(text),
            contents: bytemuck::cast_slice(&indices),
            usage: wgpu::BufferUsages::INDEX | wgpu::BufferUsages::COPY_DST,
        });

        let binding = font_binder.bind(device, font, sampler);

        TextBuffer {
            vertex_buffer,
            index_buffer,
            binding,
            num_indices: indices.len() as u32,
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
        pass.set_bind_group(0, text.binding.bind_group(), &[]);
        pass.set_bind_group(1, camera.bind_group(), &[]);
        pass.set_vertex_buffer(0, text.vertex_buffer.slice(..));
        pass.set_index_buffer(text.index_buffer.slice(..), wgpu::IndexFormat::Uint32);
        pass.draw_indexed(0..text.num_indices, 0, 0..1);
    }
}

pub struct TextBuffer {
    vertex_buffer: wgpu::Buffer,
    index_buffer: wgpu::Buffer,
    binding: FontBinding,
    num_indices: u32,
}
