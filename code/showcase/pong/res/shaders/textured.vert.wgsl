struct VertexOutput {
    [[builtin(position)]] member: vec4<f32>;
};

var<private> aPosition_1: vec2<f32>;
var<private> gl_Position: vec4<f32>;

fn main_1() {
    let e2: vec2<f32> = aPosition_1;
    gl_Position = vec4<f32>(e2, f32(0), f32(1));
    return;
}

[[stage(vertex)]]
fn main([[location(0)]] aPosition: vec2<f32>) -> VertexOutput {
    aPosition_1 = aPosition;
    main_1();
    let e5: vec4<f32> = gl_Position;
    return VertexOutput(e5);
}
