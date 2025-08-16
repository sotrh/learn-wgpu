struct Uniforms {
    view_proj: mat4x4<f32>,
}

@group(0)
@binding(0)
var<uniform> uniforms: Uniforms;

struct SnowField {
    scale_max_snow_height: vec2<f32>,
}

@group(1)
@binding(0)
var<uniform> snow_field: SnowField;

@group(1)
@binding(1)
var heightmap: texture_2d<f32>;

// @group(1)
// @binding(2)
// var heightmap_sampler: sampler;

struct VsOut {
    @builtin(position)
    frag_position: vec4<f32>,
    @location(0)
    uv: vec2<f32>,
}

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
) -> VsOut {
    let size = textureDimensions(heightmap);

    let p = vec2(
        in_vertex_index % size.x,
        in_vertex_index / size.x,
    );

    let x = f32(p.x) - f32(size.x) * 0.5;
    let z = f32(p.y) - f32(size.y) * 0.5;

    // let uv = vec2(
    //     f32(p.x) / f32(size.x),
    //     f32(p.y) / f32(size.y),
    // );

    let uv = vec2(
        snoise2(vec2<f32>(p)),
    );

    let y = textureLoad(heightmap, p, 0).r * snow_field.scale_max_snow_height.y - 1.0;

    let frag_position = uniforms.view_proj * vec4(x, y, z, 1.0);

    return VsOut(frag_position, uv);
}

@fragment
fn fs_main(vs: VsOut) -> @location(0) vec4<f32> {
    return vec4(vs.uv, 0.0, 1.0);
}

fn permute3(x: vec3<f32>) -> vec3<f32> { return (((x * 34.) + 1.) * x) % vec3<f32>(289.); }

fn snoise2(v: vec2<f32>) -> f32 {
    let C = vec4<f32>(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    var i: vec2<f32> = floor(v + dot(v, C.yy));
    let x0 = v - i + dot(i, C.xx);
    // I flipped the condition here from > to < as it fixed some artifacting I was observing
    var i1: vec2<f32> = select(vec2<f32>(1., 0.), vec2<f32>(0., 1.), (x0.x < x0.y));
    var x12: vec4<f32> = x0.xyxy + C.xxzz - vec4<f32>(i1, 0., 0.);
    i = i % vec2<f32>(289.);
    let p = permute3(permute3(i.y + vec3<f32>(0., i1.y, 1.)) + i.x + vec3<f32>(0., i1.x, 1.));
    var m: vec3<f32> = max(0.5 - vec3<f32>(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3<f32>(0.));
    m = m * m;
    m = m * m;
    let x = 2. * fract(p * C.www) - 1.;
    let h = abs(x) - 0.5;
    let ox = floor(x + 0.5);
    let a0 = x - ox;
    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));
    let g = vec3<f32>(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);
    return 130. * dot(m, g);
}