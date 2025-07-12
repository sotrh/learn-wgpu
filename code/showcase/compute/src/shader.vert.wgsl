struct Camera {
    u_view_position: vec3<f32>,
    u_view_proj: mat4x4<f32>,
}

struct Light {
    light_position: vec3<f32>,
    light_color: vec3<f32>,
}

struct VertexOutput {
    @location(0) v_tex_coords: vec2<f32>,
    @location(1) v_position: vec3<f32>,
    @location(2) v_light_position: vec3<f32>,
    @location(3) v_view_position: vec3<f32>,
    @builtin(position) gl_Position: vec4<f32>,
}

var<private> a_position_1: vec3<f32>;
var<private> a_tex_coords_1: vec2<f32>;
var<private> a_normal_1: vec3<f32>;
var<private> a_tangent_1: vec3<f32>;
var<private> a_bitangent_1: vec3<f32>;
var<private> v_tex_coords: vec2<f32>;
var<private> v_position: vec3<f32>;
var<private> v_light_position: vec3<f32>;
var<private> v_view_position: vec3<f32>;
@group(1) @binding(0) 
var<uniform> global: Camera;
var<private> model_matrix_0_1: vec4<f32>;
var<private> model_matrix_1_1: vec4<f32>;
var<private> model_matrix_2_1: vec4<f32>;
var<private> model_matrix_3_1: vec4<f32>;
var<private> normal_matrix_0_1: vec3<f32>;
var<private> normal_matrix_1_1: vec3<f32>;
var<private> normal_matrix_2_1: vec3<f32>;
@group(2) @binding(0) 
var<uniform> global_1: Light;
var<private> gl_Position: vec4<f32>;

fn main_1() {
    var model_matrix: mat4x4<f32>;
    var normal_matrix: mat3x3<f32>;
    var normal: vec3<f32>;
    var tangent: vec3<f32>;
    var bitangent: vec3<f32>;
    var tangent_matrix: mat3x3<f32>;
    var model_space: vec4<f32>;

    let _e24 = model_matrix_0_1;
    let _e25 = model_matrix_1_1;
    let _e26 = model_matrix_2_1;
    let _e27 = model_matrix_3_1;
    model_matrix = mat4x4<f32>(vec4<f32>(_e24.x, _e24.y, _e24.z, _e24.w), vec4<f32>(_e25.x, _e25.y, _e25.z, _e25.w), vec4<f32>(_e26.x, _e26.y, _e26.z, _e26.w), vec4<f32>(_e27.x, _e27.y, _e27.z, _e27.w));
    let _e50 = a_tex_coords_1;
    v_tex_coords = _e50;
    let _e51 = normal_matrix_0_1;
    let _e52 = normal_matrix_1_1;
    let _e53 = normal_matrix_2_1;
    normal_matrix = mat3x3<f32>(vec3<f32>(_e51.x, _e51.y, _e51.z), vec3<f32>(_e52.x, _e52.y, _e52.z), vec3<f32>(_e53.x, _e53.y, _e53.z));
    let _e68 = normal_matrix;
    let _e69 = a_normal_1;
    normal = normalize((_e68 * _e69));
    let _e73 = normal_matrix;
    let _e74 = a_tangent_1;
    tangent = normalize((_e73 * _e74));
    let _e78 = normal_matrix;
    let _e79 = a_bitangent_1;
    bitangent = normalize((_e78 * _e79));
    let _e83 = tangent;
    let _e84 = bitangent;
    let _e85 = normal;
    tangent_matrix = transpose(mat3x3<f32>(vec3<f32>(_e83.x, _e83.y, _e83.z), vec3<f32>(_e84.x, _e84.y, _e84.z), vec3<f32>(_e85.x, _e85.y, _e85.z)));
    let _e101 = model_matrix;
    let _e102 = a_position_1;
    model_space = (_e101 * vec4<f32>(_e102.x, _e102.y, _e102.z, 1f));
    let _e110 = tangent_matrix;
    let _e111 = model_space;
    v_position = (_e110 * _e111.xyz);
    let _e114 = tangent_matrix;
    let _e115 = global_1.light_position;
    v_light_position = (_e114 * _e115);
    let _e117 = tangent_matrix;
    let _e118 = global.u_view_position;
    v_view_position = (_e117 * _e118);
    let _e121 = global.u_view_proj;
    let _e122 = model_space;
    gl_Position = (_e121 * _e122);
    return;
}

@vertex 
fn main(@location(0) a_position: vec3<f32>, @location(1) a_tex_coords: vec2<f32>, @location(2) a_normal: vec3<f32>, @location(3) a_tangent: vec3<f32>, @location(4) a_bitangent: vec3<f32>, @location(5) model_matrix_0_: vec4<f32>, @location(6) model_matrix_1_: vec4<f32>, @location(7) model_matrix_2_: vec4<f32>, @location(8) model_matrix_3_: vec4<f32>, @location(9) normal_matrix_0_: vec3<f32>, @location(10) normal_matrix_1_: vec3<f32>, @location(11) normal_matrix_2_: vec3<f32>) -> VertexOutput {
    a_position_1 = a_position;
    a_tex_coords_1 = a_tex_coords;
    a_normal_1 = a_normal;
    a_tangent_1 = a_tangent;
    a_bitangent_1 = a_bitangent;
    model_matrix_0_1 = model_matrix_0_;
    model_matrix_1_1 = model_matrix_1_;
    model_matrix_2_1 = model_matrix_2_;
    model_matrix_3_1 = model_matrix_3_;
    normal_matrix_0_1 = normal_matrix_0_;
    normal_matrix_1_1 = normal_matrix_1_;
    normal_matrix_2_1 = normal_matrix_2_;
    main_1();
    let _e65 = v_tex_coords;
    let _e67 = v_position;
    let _e69 = v_light_position;
    let _e71 = v_view_position;
    let _e73 = gl_Position;
    return VertexOutput(_e65, _e67, _e69, _e71, _e73);
}
