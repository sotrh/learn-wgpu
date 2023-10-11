struct Camera {
    view_pos: vec4<f32>,
    view: mat4x4<f32>,
    view_proj: mat4x4<f32>,
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
}
@group(0) @binding(0)
var<uniform> camera: Camera;

struct PositionColor {
    @location(0) position: vec3<f32>,
    @location(1) color: vec3<f32>,
}

struct VsOut {
    @builtin(position) frag_position: vec4<f32>,
    @location(0) color: vec3<f32>,
}

@vertex
fn vs_main(
    v: PositionColor,
) -> VsOut {
    let frag_position = camera.view_proj * vec4(v.position, 1.0);
    return VsOut(frag_position, v.color);
}

@fragment
fn fs_main(
    v: VsOut,
) -> @location(0) vec4<f32> {
    return vec4(v.color, 1.0);
}