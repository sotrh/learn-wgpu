struct FragmentOutput {
    @location(0) f_color: vec4<f32>,
}

var<private> v_color_1: vec3<f32>;
var<private> f_color: vec4<f32>;

fn main_1() {
    let _e2 = v_color_1;
    f_color = vec4<f32>(_e2.x, _e2.y, _e2.z, 1.0);
    return;
}

@fragment 
fn main(@location(0) v_color: vec3<f32>) -> FragmentOutput {
    v_color_1 = v_color;
    main_1();
    let _e7 = f_color;
    return FragmentOutput(_e7);
}
