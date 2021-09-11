[[block]]
struct Camera {
    u_view_position: vec3<f32>;
    u_view_proj: mat4x4<f32>;
};

[[block]]
struct Light {
    light_position: vec3<f32>;
    light_color: vec3<f32>;
};

struct VertexOutput {
    [[location(0)]] v_tex_coords: vec2<f32>;
    [[location(1)]] v_position: vec3<f32>;
    [[location(2)]] v_light_position: vec3<f32>;
    [[location(3)]] v_view_position: vec3<f32>;
    [[builtin(position)]] member: vec4<f32>;
};

var<private> a_position1: vec3<f32>;
var<private> a_tex_coords1: vec2<f32>;
var<private> a_normal1: vec3<f32>;
var<private> a_tangent1: vec3<f32>;
var<private> a_bitangent1: vec3<f32>;
var<private> v_tex_coords: vec2<f32>;
var<private> v_position: vec3<f32>;
var<private> v_light_position: vec3<f32>;
var<private> v_view_position: vec3<f32>;
[[group(1), binding(0)]]
var<uniform> global: Camera;
var<private> model_matrix_0_1: vec4<f32>;
var<private> model_matrix_1_1: vec4<f32>;
var<private> model_matrix_2_1: vec4<f32>;
var<private> model_matrix_3_1: vec4<f32>;
var<private> normal_matrix_0_1: vec3<f32>;
var<private> normal_matrix_1_1: vec3<f32>;
var<private> normal_matrix_2_1: vec3<f32>;
[[group(2), binding(0)]]
var<uniform> global1: Light;
var<private> gl_Position: vec4<f32>;

fn main1() {
    var model_matrix: mat4x4<f32>;
    var normal_matrix: mat3x3<f32>;
    var normal: vec3<f32>;
    var tangent: vec3<f32>;
    var bitangent: vec3<f32>;
    var tangent_matrix: mat3x3<f32>;
    var model_space: vec4<f32>;

    let _e24: vec4<f32> = model_matrix_0_1;
    let _e25: vec4<f32> = model_matrix_1_1;
    let _e26: vec4<f32> = model_matrix_2_1;
    let _e27: vec4<f32> = model_matrix_3_1;
    model_matrix = mat4x4<f32>(vec4<f32>(_e24.x, _e24.y, _e24.z, _e24.w), vec4<f32>(_e25.x, _e25.y, _e25.z, _e25.w), vec4<f32>(_e26.x, _e26.y, _e26.z, _e26.w), vec4<f32>(_e27.x, _e27.y, _e27.z, _e27.w));
    let _e50: vec2<f32> = a_tex_coords1;
    v_tex_coords = _e50;
    let _e51: vec3<f32> = normal_matrix_0_1;
    let _e52: vec3<f32> = normal_matrix_1_1;
    let _e53: vec3<f32> = normal_matrix_2_1;
    normal_matrix = mat3x3<f32>(vec3<f32>(_e51.x, _e51.y, _e51.z), vec3<f32>(_e52.x, _e52.y, _e52.z), vec3<f32>(_e53.x, _e53.y, _e53.z));
    let _e68: mat3x3<f32> = normal_matrix;
    let _e69: vec3<f32> = a_normal1;
    let _e71: mat3x3<f32> = normal_matrix;
    let _e72: vec3<f32> = a_normal1;
    normal = normalize((_e71 * _e72));
    let _e76: mat3x3<f32> = normal_matrix;
    let _e77: vec3<f32> = a_tangent1;
    let _e79: mat3x3<f32> = normal_matrix;
    let _e80: vec3<f32> = a_tangent1;
    tangent = normalize((_e79 * _e80));
    let _e84: mat3x3<f32> = normal_matrix;
    let _e85: vec3<f32> = a_bitangent1;
    let _e87: mat3x3<f32> = normal_matrix;
    let _e88: vec3<f32> = a_bitangent1;
    bitangent = normalize((_e87 * _e88));
    let _e92: vec3<f32> = tangent;
    let _e93: vec3<f32> = bitangent;
    let _e94: vec3<f32> = normal;
    let _e108: vec3<f32> = tangent;
    let _e109: vec3<f32> = bitangent;
    let _e110: vec3<f32> = normal;
    tangent_matrix = transpose(mat3x3<f32>(vec3<f32>(_e108.x, _e108.y, _e108.z), vec3<f32>(_e109.x, _e109.y, _e109.z), vec3<f32>(_e110.x, _e110.y, _e110.z)));
    let _e126: mat4x4<f32> = model_matrix;
    let _e127: vec3<f32> = a_position1;
    model_space = (_e126 * vec4<f32>(_e127, 1.0));
    let _e132: mat3x3<f32> = tangent_matrix;
    let _e133: vec4<f32> = model_space;
    v_position = (_e132 * _e133.xyz);
    let _e136: mat3x3<f32> = tangent_matrix;
    let _e137: vec3<f32> = global1.light_position;
    v_light_position = (_e136 * _e137);
    let _e139: mat3x3<f32> = tangent_matrix;
    let _e140: vec3<f32> = global.u_view_position;
    v_view_position = (_e139 * _e140);
    let _e143: mat4x4<f32> = global.u_view_proj;
    let _e144: vec4<f32> = model_space;
    gl_Position = (_e143 * _e144);
    return;
}

[[stage(vertex)]]
fn main([[location(0)]] a_position: vec3<f32>, [[location(1)]] a_tex_coords: vec2<f32>, [[location(2)]] a_normal: vec3<f32>, [[location(3)]] a_tangent: vec3<f32>, [[location(4)]] a_bitangent: vec3<f32>, [[location(5)]] model_matrix_0_: vec4<f32>, [[location(6)]] model_matrix_1_: vec4<f32>, [[location(7)]] model_matrix_2_: vec4<f32>, [[location(8)]] model_matrix_3_: vec4<f32>, [[location(9)]] normal_matrix_0_: vec3<f32>, [[location(10)]] normal_matrix_1_: vec3<f32>, [[location(11)]] normal_matrix_2_: vec3<f32>) -> VertexOutput {
    a_position1 = a_position;
    a_tex_coords1 = a_tex_coords;
    a_normal1 = a_normal;
    a_tangent1 = a_tangent;
    a_bitangent1 = a_bitangent;
    model_matrix_0_1 = model_matrix_0_;
    model_matrix_1_1 = model_matrix_1_;
    model_matrix_2_1 = model_matrix_2_;
    model_matrix_3_1 = model_matrix_3_;
    normal_matrix_0_1 = normal_matrix_0_;
    normal_matrix_1_1 = normal_matrix_1_;
    normal_matrix_2_1 = normal_matrix_2_;
    main1();
    let _e65: vec2<f32> = v_tex_coords;
    let _e67: vec3<f32> = v_position;
    let _e69: vec3<f32> = v_light_position;
    let _e71: vec3<f32> = v_view_position;
    let _e73: vec4<f32> = gl_Position;
    return VertexOutput(_e65, _e67, _e69, _e71, _e73);
}
