struct Camera {
    view_pos: vec4<f32>,
    view_proj: mat4x4<f32>,
    inv_view_proj: mat4x4<f32>,
}
@group(0) @binding(0)
var<uniform> camera: Camera;

@group(1)
@binding(0)
var env_map: texture_cube<f32>;
@group(1)
@binding(1)
var env_sampler: sampler;

struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) view_dir: vec3<f32>,
}

@vertex
fn vs_main(
    @builtin(vertex_index) id: u32,
) -> VertexOutput {
    let uv = vec2<f32>(vec2<u32>(
        (id << 1u) & 2u,
        id & 2u
    ));
    var out: VertexOutput;
    out.clip_position = vec4(uv * 2.0 - 1.0, 1.0, 1.0);
    out.view_dir = normalize((camera.inv_view_proj * vec4(normalize(out.clip_position.xyz), 1.0)).xyz);
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    // let sample = textureSample(env_map, env_sampler, in.view_dir);
    let sample = vec4(in.view_dir, 1.0);
    return sample;
}