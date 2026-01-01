struct Vertex {
    @location(0) position: vec3<f32>,
}

struct Camera {
    view_pos: vec4<f32>,
    view_proj: mat4x4<f32>,
}

struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) world_position: vec3<f32>,
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

@vertex
fn vs_main(vertex: Vertex) -> VertexOutput {
    let world_position = vertex.position;

    return VertexOutput(
        camera.view_proj * vec4(world_position, 1.0),
        world_position,
    );
}

@fragment
fn fs_main(vs: VertexOutput) -> @location(0) vec4<f32> {
    let albedo = textureSample(d_texture, d_sampler, vs.world_position.xz);

    // let tbn = mat3x3(
    //     normalize(vs.tangent),
    //     normalize(vs.bitangent),
    //     normalize(vs.normal),
    // );

    // let normal_sample = textureSample(n_texture, n_sampler, vs.uv).xyz * 2.0 - 1.0;
    // let N = tbn * normal_sample;

    // let L = tbn * normalize(camera.view_pos.xyz - vs.world_position);

    // let diffuse = max(0.0, dot(N, L));
    let diffuse = 1.0;

    var color = albedo.rgb * diffuse;
    // color = fract(vs.world_position);
    // color = vec3(fract(vs.world_position.xz), 0.0);

    return vec4(color, albedo.a);
}