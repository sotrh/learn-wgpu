struct VertexOutput {
    [[location(0)]] clip_coords: vec3<f32>;
    [[builtin(position)]] member: vec4<f32>;
};

var<private> clip_coords: vec3<f32>;
var<private> gl_VertexIndex: u32;
var<private> gl_Position: vec4<f32>;

fn main_1() {
    var x: f32;
    var y: f32;

    let _e2 = gl_VertexIndex;
    x = f32((((u32(_e2) + 2u) / 3u) % 2u));
    let _e12 = gl_VertexIndex;
    y = f32((((u32(_e12) + 1u) / 3u) % 2u));
    let _e25 = x;
    let _e31 = y;
    gl_Position = vec4<f32>((-(1.0) + (_e25 * 2.0)), (-(1.0) + (_e31 * 2.0)), 0.0, 1.0);
    let _e38 = gl_Position;
    clip_coords = _e38.xyz;
    return;
}

[[stage(vertex)]]
fn main([[builtin(vertex_index)]] param: u32) -> VertexOutput {
    gl_VertexIndex = param;
    main_1();
    let _e5 = clip_coords;
    let _e7 = gl_Position;
    return VertexOutput(_e5, _e7);
}
