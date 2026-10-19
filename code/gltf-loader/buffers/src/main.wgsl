struct Vertex {
    @location(0)
    position: vec3<f32>,
}

struct Camera {
    view: mat4x4<f32>,
    proj: mat4x4<f32>,
    view_proj: mat4x4<f32>,
}

struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> camera: Camera;

@vertex
fn vs_main(vertex: Vertex) -> VertexOutput {
    let world_position = vertex.position;

    return VertexOutput(
        camera.view_proj * vec4(world_position, 1.0),
    );
}

@fragment
fn fs_main(vs: VertexOutput) -> @location(0) vec4<f32> {
    return vec4(1.0);
}