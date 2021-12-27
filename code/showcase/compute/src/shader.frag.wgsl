[[block]]
struct Light {
    light_position: vec3<f32>;
    light_color: vec3<f32>;
};

struct FragmentOutput {
    [[location(0)]] f_color: vec4<f32>;
};

var<private> v_tex_coords_1: vec2<f32>;
var<private> v_position_1: vec3<f32>;
var<private> v_light_position_1: vec3<f32>;
var<private> v_view_position_1: vec3<f32>;
var<private> f_color: vec4<f32>;
[[group(0), binding(0)]]
var t_diffuse: texture_2d<f32>;
[[group(0), binding(1)]]
var s_diffuse: sampler;
[[group(0), binding(2)]]
var t_normal: texture_2d<f32>;
[[group(0), binding(3)]]
var s_normal: sampler;
[[group(2), binding(0)]]
var<uniform> global: Light;

fn main_1() {
    var object_color: vec4<f32>;
    var object_normal: vec4<f32>;
    var ambient_strength: f32 = 0.10000000149011612;
    var ambient_color: vec3<f32>;
    var normal: vec3<f32>;
    var light_dir: vec3<f32>;
    var diffuse_strength: f32;
    var diffuse_color: vec3<f32>;
    var view_dir: vec3<f32>;
    var half_dir: vec3<f32>;
    var specular_strength: f32;
    var specular_color: vec3<f32>;
    var result: vec3<f32>;

    let e14: vec2<f32> = v_tex_coords_1;
    let e15: vec4<f32> = textureSample(t_diffuse, s_diffuse, e14);
    object_color = e15;
    let e18: vec2<f32> = v_tex_coords_1;
    let e19: vec4<f32> = textureSample(t_normal, s_normal, e18);
    object_normal = e19;
    let e23: vec3<f32> = global.light_color;
    let e24: f32 = ambient_strength;
    ambient_color = (e23 * e24);
    let e27: vec4<f32> = object_normal;
    let e34: vec4<f32> = object_normal;
    normal = normalize(((e34.xyz * 2.0) - vec3<f32>(1.0)));
    let e43: vec3<f32> = v_light_position_1;
    let e44: vec3<f32> = v_position_1;
    let e46: vec3<f32> = v_light_position_1;
    let e47: vec3<f32> = v_position_1;
    light_dir = normalize((e46 - e47));
    let e53: vec3<f32> = normal;
    let e54: vec3<f32> = light_dir;
    let e59: vec3<f32> = normal;
    let e60: vec3<f32> = light_dir;
    diffuse_strength = max(dot(e59, e60), 0.0);
    let e65: vec3<f32> = global.light_color;
    let e66: f32 = diffuse_strength;
    diffuse_color = (e65 * e66);
    let e69: vec3<f32> = v_view_position_1;
    let e70: vec3<f32> = v_position_1;
    let e72: vec3<f32> = v_view_position_1;
    let e73: vec3<f32> = v_position_1;
    view_dir = normalize((e72 - e73));
    let e77: vec3<f32> = view_dir;
    let e78: vec3<f32> = light_dir;
    let e80: vec3<f32> = view_dir;
    let e81: vec3<f32> = light_dir;
    half_dir = normalize((e80 + e81));
    let e87: vec3<f32> = normal;
    let e88: vec3<f32> = half_dir;
    let e93: vec3<f32> = normal;
    let e94: vec3<f32> = half_dir;
    let e101: vec3<f32> = normal;
    let e102: vec3<f32> = half_dir;
    let e107: vec3<f32> = normal;
    let e108: vec3<f32> = half_dir;
    specular_strength = pow(max(dot(e107, e108), 0.0), f32(32));
    let e116: f32 = specular_strength;
    let e117: vec3<f32> = global.light_color;
    specular_color = (e116 * e117);
    let e120: vec3<f32> = ambient_color;
    let e121: vec3<f32> = diffuse_color;
    let e123: vec3<f32> = specular_color;
    let e125: vec4<f32> = object_color;
    result = (((e120 + e121) + e123) * e125.xyz);
    let e129: vec3<f32> = result;
    let e130: vec4<f32> = object_color;
    f_color = vec4<f32>(e129, e130.w);
    return;
}

[[stage(fragment)]]
fn main([[location(0)]] v_tex_coords: vec2<f32>, [[location(1)]] v_position: vec3<f32>, [[location(2)]] v_light_position: vec3<f32>, [[location(3)]] v_view_position: vec3<f32>) -> FragmentOutput {
    v_tex_coords_1 = v_tex_coords;
    v_position_1 = v_position;
    v_light_position_1 = v_light_position;
    v_view_position_1 = v_view_position;
    main_1();
    let e31: vec4<f32> = f_color;
    return FragmentOutput(e31);
}
