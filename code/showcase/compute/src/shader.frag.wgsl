struct Light {
    light_position: vec3<f32>,
    light_color: vec3<f32>,
}

struct FragmentOutput {
    @location(0) f_color: vec4<f32>,
}

var<private> v_tex_coords_1: vec2<f32>;
var<private> v_position_1: vec3<f32>;
var<private> v_light_position_1: vec3<f32>;
var<private> v_view_position_1: vec3<f32>;
var<private> f_color: vec4<f32>;
@group(0) @binding(0) 
var t_diffuse: texture_2d<f32>;
@group(0) @binding(1) 
var s_diffuse: sampler;
@group(0) @binding(2) 
var t_normal: texture_2d<f32>;
@group(0) @binding(3) 
var s_normal: sampler;
@group(2) @binding(0) 
var<uniform> global: Light;

fn main_1() {
    var object_color: vec4<f32>;
    var object_normal: vec4<f32>;
    var ambient_strength: f32 = 0.1f;
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

    let _e13 = v_tex_coords_1;
    let _e14 = textureSample(t_diffuse, s_diffuse, _e13);
    object_color = _e14;
    let _e16 = v_tex_coords_1;
    let _e17 = textureSample(t_normal, s_normal, _e16);
    object_normal = _e17;
    let _e21 = global.light_color;
    let _e22 = ambient_strength;
    ambient_color = (_e21 * _e22);
    let _e25 = object_normal;
    normal = normalize(((_e25.xyz * 2f) - vec3(1f)));
    let _e34 = v_light_position_1;
    let _e35 = v_position_1;
    light_dir = normalize((_e34 - _e35));
    let _e39 = normal;
    let _e40 = light_dir;
    diffuse_strength = max(dot(_e39, _e40), 0f);
    let _e45 = global.light_color;
    let _e46 = diffuse_strength;
    diffuse_color = (_e45 * _e46);
    let _e49 = v_view_position_1;
    let _e50 = v_position_1;
    view_dir = normalize((_e49 - _e50));
    let _e54 = view_dir;
    let _e55 = light_dir;
    half_dir = normalize((_e54 + _e55));
    let _e59 = normal;
    let _e60 = half_dir;
    specular_strength = pow(max(dot(_e59, _e60), 0f), 32f);
    let _e68 = specular_strength;
    let _e69 = global.light_color;
    specular_color = (_e68 * _e69);
    let _e72 = ambient_color;
    let _e73 = diffuse_color;
    let _e75 = specular_color;
    let _e77 = object_color;
    result = (((_e72 + _e73) + _e75) * _e77.xyz);
    let _e81 = result;
    let _e82 = object_color;
    f_color = vec4<f32>(_e81.x, _e81.y, _e81.z, _e82.w);
    return;
}

@fragment 
fn main(@location(0) v_tex_coords: vec2<f32>, @location(1) v_position: vec3<f32>, @location(2) v_light_position: vec3<f32>, @location(3) v_view_position: vec3<f32>) -> FragmentOutput {
    v_tex_coords_1 = v_tex_coords;
    v_position_1 = v_position;
    v_light_position_1 = v_light_position;
    v_view_position_1 = v_view_position;
    main_1();
    let _e31 = f_color;
    return FragmentOutput(_e31);
}
