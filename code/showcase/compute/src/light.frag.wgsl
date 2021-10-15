struct FragmentOutput {
    [[location(0)]] f_color: vec4<f32>;
};

var<private> v_color1: vec3<f32>;
var<private> f_color: vec4<f32>;

fn main1() {
    let e2: vec3<f32> = v_color1;
    f_color = vec4<f32>(e2, 1.0);
    return;
}

[[stage(fragment)]]
fn main([[location(0)]] v_color: vec3<f32>) -> FragmentOutput {
    v_color1 = v_color;
    main1();
    let e7: vec4<f32> = f_color;
    return FragmentOutput(e7);
}
