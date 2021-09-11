[[block]]
struct Light {
    light_position: vec3<f32>;
    light_color: vec3<f32>;
};

struct FragmentOutput {
    [[location(0)]] f_color: vec4<f32>;
};

var<private> v_tex_coords1: vec2<f32>;
var<private> v_position1: vec3<f32>;
var<private> v_light_position1: vec3<f32>;
var<private> v_view_position1: vec3<f32>;
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

fn main1() {
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

    let _e14: vec2<f32> = v_tex_coords1;
    let _e15: vec4<f32> = textureSample(t_diffuse, s_diffuse, _e14);
    object_color = _e15;
    let _e18: vec2<f32> = v_tex_coords1;
    let _e19: vec4<f32> = textureSample(t_normal, s_normal, _e18);
    object_normal = _e19;
    let _e23: vec3<f32> = global.light_color;
    let _e24: f32 = ambient_strength;
    ambient_color = (_e23 * _e24);
    let _e27: vec4<f32> = object_normal;
    let _e34: vec4<f32> = object_normal;
    normal = normalize(((_e34.xyz * 2.0) - vec3<f32>(1.0)));
    let _e43: vec3<f32> = v_light_position1;
    let _e44: vec3<f32> = v_position1;
    let _e46: vec3<f32> = v_light_position1;
    let _e47: vec3<f32> = v_position1;
    light_dir = normalize((_e46 - _e47));
    let _e53: vec3<f32> = normal;
    let _e54: vec3<f32> = light_dir;
    let _e59: vec3<f32> = normal;
    let _e60: vec3<f32> = light_dir;
    diffuse_strength = max(dot(_e59, _e60), 0.0);
    let _e65: vec3<f32> = global.light_color;
    let _e66: f32 = diffuse_strength;
    diffuse_color = (_e65 * _e66);
    let _e69: vec3<f32> = v_view_position1;
    let _e70: vec3<f32> = v_position1;
    let _e72: vec3<f32> = v_view_position1;
    let _e73: vec3<f32> = v_position1;
    view_dir = normalize((_e72 - _e73));
    let _e77: vec3<f32> = view_dir;
    let _e78: vec3<f32> = light_dir;
    let _e80: vec3<f32> = view_dir;
    let _e81: vec3<f32> = light_dir;
    half_dir = normalize((_e80 + _e81));
    let _e87: vec3<f32> = normal;
    let _e88: vec3<f32> = half_dir;
    let _e93: vec3<f32> = normal;
    let _e94: vec3<f32> = half_dir;
    let _e101: vec3<f32> = normal;
    let _e102: vec3<f32> = half_dir;
    let _e107: vec3<f32> = normal;
    let _e108: vec3<f32> = half_dir;
    specular_strength = pow(max(dot(_e107, _e108), 0.0), f32(32));
    let _e116: f32 = specular_strength;
    let _e117: vec3<f32> = global.light_color;
    specular_color = (_e116 * _e117);
    let _e120: vec3<f32> = ambient_color;
    let _e121: vec3<f32> = diffuse_color;
    let _e123: vec3<f32> = specular_color;
    let _e125: vec4<f32> = object_color;
    result = (((_e120 + _e121) + _e123) * _e125.xyz);
    let _e129: vec3<f32> = result;
    let _e130: vec4<f32> = object_color;
    f_color = vec4<f32>(_e129, _e130.w);
    return;
}

[[stage(fragment)]]
fn main([[location(0)]] v_tex_coords: vec2<f32>, [[location(1)]] v_position: vec3<f32>, [[location(2)]] v_light_position: vec3<f32>, [[location(3)]] v_view_position: vec3<f32>) -> FragmentOutput {
    v_tex_coords1 = v_tex_coords;
    v_position1 = v_position;
    v_light_position1 = v_light_position;
    v_view_position1 = v_view_position;
    main1();
    let _e31: vec4<f32> = f_color;
    return FragmentOutput(_e31);
}
