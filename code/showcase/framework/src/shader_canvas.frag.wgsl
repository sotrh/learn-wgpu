struct SimulationData {
    clear_color: vec4<f32>;
    canvas_size: vec2<f32>;
    mouse_pos: vec2<f32>;
    time: vec2<f32>;
};

struct FragmentOutput {
    [[location(0)]] frag_color: vec4<f32>;
};

var<private> clip_coords_1: vec3<f32>;
var<private> frag_color: vec4<f32>;
[[group(0), binding(0)]]
var<uniform> global: SimulationData;

fn main_1() {
    var t: f32;
    var uv: vec3<f32>;
    var col: vec4<f32>;

    let _e10 = global.time;
    t = _e10.x;
    let _e13 = clip_coords_1;
    uv = ((_e13 * 0.5) + vec3<f32>(0.5));
    let _e20 = uv;
    let _e28 = t;
    let _e30 = uv;
    let _e36 = global.clear_color;
    let _e38 = t;
    col = mix(vec4<f32>(_e30.x, _e30.y, _e30.z, 1.0), _e36, vec4<f32>(sin(_e38)));
    let _e43 = col;
    frag_color = _e43;
    return;
}

[[stage(fragment)]]
fn main([[location(0)]] clip_coords: vec3<f32>) -> FragmentOutput {
    clip_coords_1 = clip_coords;
    main_1();
    let _e15 = frag_color;
    return FragmentOutput(_e15);
}
