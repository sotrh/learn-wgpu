struct SimulationData {
    clear_color: vec4<f32>,
    canvas_size: vec2<f32>,
    mouse_pos: vec2<f32>,
    time: vec2<f32>,
}

struct FragmentOutput {
    @location(0) frag_color: vec4<f32>,
}

var<private> clip_coords_1: vec3<f32>;
var<private> frag_color: vec4<f32>;
@group(0) @binding(0) 
var<uniform> global: SimulationData;

fn main_1() {
    var t: f32;
    var uv: vec3<f32>;
    var col: vec4<f32>;

    let _e10 = global.time;
    t = _e10.x;
    let _e13 = clip_coords_1;
    uv = ((_e13 * 0.5f) + vec3(0.5f));
    let _e20 = uv;
    let _e26 = global.clear_color;
    let _e27 = t;
    col = mix(vec4<f32>(_e20.x, _e20.y, _e20.z, 1f), _e26, vec4(sin(_e27)));
    let _e32 = col;
    frag_color = _e32;
    return;
}

@fragment 
fn main(@location(0) clip_coords: vec3<f32>) -> FragmentOutput {
    clip_coords_1 = clip_coords;
    main_1();
    let _e15 = frag_color;
    return FragmentOutput(_e15);
}
