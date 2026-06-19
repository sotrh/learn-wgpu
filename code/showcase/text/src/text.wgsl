struct FontVertex {
    @location(0)
    position: vec2<f32>,
    @location(1)
    uv: vec2<f32>,
    @location(2)
    color: vec4<f32>,
}

struct VertexOutput {
    @builtin(position)
    clip_position: vec4<f32>,
    @location(0)
    uv: vec2<f32>,
    @location(1)
    color: vec4<f32>,
}

struct Camera {
    view: mat4x4<f32>,
    proj: mat4x4<f32>,
    view_proj: mat4x4<f32>,
}

struct FontUniforms {
    position: vec2<f32>,
}


@group(0)
@binding(0)
var font_sampler: sampler;
@group(0)
@binding(1)
var font_texture: texture_2d<f32>;

@group(1)
@binding(0)
var<uniform> camera: Camera;

@group(2)
@binding(0)
var<uniform> uniforms: FontUniforms;

@vertex
fn vs_fullscreen(
    @builtin(vertex_index) in_vertex_index: u32,
) -> VertexOutput {
    var out: VertexOutput;
    // Create fullscreen triangle
    let x = f32((in_vertex_index << 1u) & 2u);
    let y = f32(in_vertex_index & 2u);
    out.clip_position = vec4<f32>(x * 2.0 - 1.0, y * 2.0 - 1.0, 0.0, 1.0);
    out.uv = vec2<f32>(x, 1.0 - y);
    out.color = vec4(1.0);
    return out;
}

@vertex
fn vs_glyph(
    v: FontVertex,
) -> VertexOutput {
    var out: VertexOutput;

    out.clip_position = camera.view_proj * vec4(v.position + uniforms.position, 0.0, 1.0);
    out.uv = v.uv;
    out.color = v.color;

    return out;
}

@fragment
fn fs_glyph(in: VertexOutput) -> @location(0) vec4<f32> {
    let coverage = textureSample(font_texture, font_sampler, in.uv).r;
    var col = in.color;
    col.a *= coverage;
    return col;
}