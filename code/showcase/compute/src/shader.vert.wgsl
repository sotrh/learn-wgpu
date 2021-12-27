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

var<private> a_position_1: vec3<f32>;
var<private> a_tex_coords_1: vec2<f32>;
var<private> a_normal_1: vec3<f32>;
var<private> a_tangent_1: vec3<f32>;
var<private> a_bitangent_1: vec3<f32>;
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

    let e24: vec4<f32> = model_matrix_0_1;
    let e25: vec4<f32> = model_matrix_1_1;
    let e26: vec4<f32> = model_matrix_2_1;
    let e27: vec4<f32> = model_matrix_3_1;
    model_matrix = mat4x4<f32>(vec4<f32>(e24.x, e24.y, e24.z, e24.w), vec4<f32>(e25.x, e25.y, e25.z, e25.w), vec4<f32>(e26.x, e26.y, e26.z, e26.w), vec4<f32>(e27.x, e27.y, e27.z, e27.w));
    let e50: vec2<f32> = a_tex_coords_1;
    v_tex_coords = e50;
    let e51: vec3<f32> = normal_matrix_0_1;
    let e52: vec3<f32> = normal_matrix_1_1;
    let e53: vec3<f32> = normal_matrix_2_1;
    normal_matrix = mat3x3<f32>(vec3<f32>(e51.x, e51.y, e51.z), vec3<f32>(e52.x, e52.y, e52.z), vec3<f32>(e53.x, e53.y, e53.z));
    let e68: mat3x3<f32> = normal_matrix;
    let e69: vec3<f32> = a_normal_1;
    let e71: mat3x3<f32> = normal_matrix;
    let e72: vec3<f32> = a_normal_1;
    normal = normalize((e71 * e72));
    let e76: mat3x3<f32> = normal_matrix;
    let e77: vec3<f32> = a_tangent_1;
    let e79: mat3x3<f32> = normal_matrix;
    let e80: vec3<f32> = a_tangent_1;
    tangent = normalize((e79 * e80));
    let e84: mat3x3<f32> = normal_matrix;
    let e85: vec3<f32> = a_bitangent_1;
    let e87: mat3x3<f32> = normal_matrix;
    let e88: vec3<f32> = a_bitangent_1;
    bitangent = normalize((e87 * e88));
    let e92: vec3<f32> = tangent;
    let e93: vec3<f32> = bitangent;
    let e94: vec3<f32> = normal;
    let e108: vec3<f32> = tangent;
    let e109: vec3<f32> = bitangent;
    let e110: vec3<f32> = normal;
    tangent_matrix = transpose(mat3x3<f32>(vec3<f32>(e108.x, e108.y, e108.z), vec3<f32>(e109.x, e109.y, e109.z), vec3<f32>(e110.x, e110.y, e110.z)));
    let e126: mat4x4<f32> = model_matrix;
    let e127: vec3<f32> = a_position_1;
    model_space = (e126 * vec4<f32>(e127, 1.0));
    let e132: mat3x3<f32> = tangent_matrix;
    let e133: vec4<f32> = model_space;
    v_position = (e132 * e133.xyz);
    let e136: mat3x3<f32> = tangent_matrix;
    let e137: vec3<f32> = global_1.light_position;
    v_light_position = (e136 * e137);
    let e139: mat3x3<f32> = tangent_matrix;
    let e140: vec3<f32> = global.u_view_position;
    v_view_position = (e139 * e140);
    let e143: mat4x4<f32> = global.u_view_proj;
    let e144: vec4<f32> = model_space;
    gl_Position = (e143 * e144);
    return;
}

[[stage(vertex)]]
fn main([[location(0)]] a_position: vec3<f32>, [[location(1)]] a_tex_coords: vec2<f32>, [[location(2)]] a_normal: vec3<f32>, [[location(3)]] a_tangent: vec3<f32>, [[location(4)]] a_bitangent: vec3<f32>, [[location(5)]] model_matrix_0_: vec4<f32>, [[location(6)]] model_matrix_1_: vec4<f32>, [[location(7)]] model_matrix_2_: vec4<f32>, [[location(8)]] model_matrix_3_: vec4<f32>, [[location(9)]] normal_matrix_0_: vec3<f32>, [[location(10)]] normal_matrix_1_: vec3<f32>, [[location(11)]] normal_matrix_2_: vec3<f32>) -> VertexOutput {
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
    let e65: vec2<f32> = v_tex_coords;
    let e67: vec3<f32> = v_position;
    let e69: vec3<f32> = v_light_position;
    let e71: vec3<f32> = v_view_position;
    let e73: vec4<f32> = gl_Position;
    return VertexOutput(e65, e67, e69, e71, e73);
}
