struct ModelVertex {
    @location(0)
    position: vec3<f32>,
    @location(1)
    uv: vec2<f32>,
    @location(2)
    normal: vec3<f32>,
    @location(3)
    tangent: vec3<f32>,
    @location(4)
    bitangent: vec3<f32>,
}

struct InstanceVertex {
    @location(5)
    position_scale: vec4<f32>,
    @location(6)
    color: vec3<f32>,
}

struct Camera {
    view_pos: vec4<f32>,
    view_proj: mat4x4<f32>,
}

struct VertexOutput {
    @builtin(position)
    clip_position: vec4<f32>,
    @location(0)
    uv: vec2<f32>,
    @location(1)
    normal: vec3<f32>,
    @location(2)
    color: vec3<f32>,
}

@group(0)
@binding(0)
var<uniform> camera: Camera;

@group(1)
@binding(0)
var d_texture: texture_2d<f32>;
@group(1)
@binding(1)
var d_sampler: sampler;
@group(1)
@binding(2)
var n_texture: texture_2d<f32>;
@group(1)
@binding(3)
var n_sampler: sampler;

@vertex
fn vs_main(vertex: ModelVertex, instance: InstanceVertex) -> VertexOutput {
    return VertexOutput(
        camera.view_proj * vec4(vertex.position * instance.position_scale.w + instance.position_scale.xyz, 1.0),
        vertex.uv,
        vertex.normal,
        instance.color,
    );
}

@fragment
fn fs_main(vs: VertexOutput) -> @location(0) vec4<f32> {
    let albedo = textureSample(d_texture, d_sampler, vs.uv);

    let color = albedo.rgb * vs.color * max(0.0, dot(vs.normal, normalize(vec3(1.0))));

    return vec4(color, albedo.a);
}