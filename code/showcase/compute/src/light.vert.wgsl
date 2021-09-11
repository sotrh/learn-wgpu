[[block]]
struct Camera {
    u_view_position: vec3<f32>;
    u_view_proj: mat4x4<f32>;
};

[[block]]
struct Light {
    u_position: vec3<f32>;
    u_color: vec3<f32>;
};

struct VertexOutput {
    [[location(0)]] v_color: vec3<f32>;
    [[builtin(position)]] member: vec4<f32>;
};

var<private> a_position1: vec3<f32>;
var<private> v_color: vec3<f32>;
[[group(0), binding(0)]]
var<uniform> global: Camera;
[[group(1), binding(0)]]
var<uniform> global1: Light;
var<private> scale: f32 = 0.25;
var<private> gl_Position: vec4<f32>;

fn main1() {
    var v_position: vec3<f32>;

    let _e11: vec3<f32> = a_position1;
    let _e12: f32 = scale;
    let _e14: vec3<f32> = global1.u_position;
    v_position = ((_e11 * _e12) + _e14);
    let _e18: mat4x4<f32> = global.u_view_proj;
    let _e19: vec3<f32> = v_position;
    gl_Position = (_e18 * vec4<f32>(_e19, f32(1)));
    let _e24: vec3<f32> = global1.u_color;
    v_color = _e24;
    return;
}

[[stage(vertex)]]
fn main([[location(0)]] a_position: vec3<f32>) -> VertexOutput {
    a_position1 = a_position;
    main1();
    let _e18: vec3<f32> = v_color;
    let _e20: vec4<f32> = gl_Position;
    return VertexOutput(_e18, _e20);
}
