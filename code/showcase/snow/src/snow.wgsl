struct Particle {
    @location(0)
    position_rotation: vec4<f32>,
    @location(1)
    velocity_life: vec4<f32>,
    @location(2)
    debug: vec4<f32>,
}

struct ParticleConfig {
    emitter_position: vec4<f32>,
    particle_spread: vec4<f32>,
    forces: vec4<f32>,
    life_spread_time_and_dt: vec4<f32>,
}

const TAU: f32 = 6.28318530718;

@group(0)
@binding(0)
var<uniform> config: ParticleConfig;
@group(0)
@binding(1)
var<storage, read> src_particles: array<Particle>;
@group(0)
@binding(2)
var<storage, read_write> dst_particles: array<Particle>;

@compute
@workgroup_size(64, 1, 1)
fn move_particles(
    @builtin(global_invocation_id)
    global_id: vec3<u32>,
) {
    let src_p = src_particles[global_id.x];
    var dst_p = dst_particles[global_id.x];

    let life_spread = config.life_spread_time_and_dt.xy;
    let t = config.life_spread_time_and_dt[2];
    let dt = config.life_spread_time_and_dt[3];

    var seed = vec2(t, f32(global_id.x));

    // dst_p.debug = vec4(vec3(fract(f32(global_id.x) / 64.0)), 1.0);

    if src_p.velocity_life.w <= 0.0 {
        dst_p.velocity_life = vec4(vec3(0.0, 0.0, 0.0), mix(life_spread.x, life_spread.y, rand(&seed)));
        dst_p.position_rotation = vec4(config.emitter_position.xyz + config.particle_spread.xyz * rand3(&seed), TAU * rand(&seed));
    } else {
        dst_p.position_rotation = src_p.position_rotation + vec4(src_p.velocity_life.xyz * dt, dt);
        dst_p.velocity_life = src_p.velocity_life + vec4(config.forces.xyz * dt, -dt);
    }

    dst_particles[global_id.x] = dst_p;
}

struct VsOut {
    @builtin(position)
    frag_position: vec4<f32>,
    @location(0)
    texcoord: vec2<f32>,
}

struct Uniforms {
    view_proj: vec4<f32>,
}

@group(0)
@binding(0)
var<uniform> uniforms: Uniforms;

@vertex
fn vs_main(
    particle: Particle,
) -> VsOut {
    let frag_position = vec4(particle.position_rotation.xyz, 1.0);
    // let frag_position = uniforms.view_proj * vec4(particle.position_rotation.xyz, 1.0);
    // let frag_position = vec4(0.5, 0.5, 0.5, 1.0);
    return VsOut(frag_position, vec2(1.0));
    // return VsOut(frag_position, frag_position.xy * 2.0 - 1.0);
}

@fragment
fn fs_main(
    vs: VsOut,
) -> @location(0) vec4<f32> {
    return vec4(vs.texcoord, 1.0, 1.0);
}

fn rand(seed: ptr<function, vec2<f32>>) -> f32 {
    let n = snoise2(*seed);
    (*seed).x = n;
    return n;
}

fn rand2(seed: ptr<function, vec2<f32>>) -> vec2<f32> {
    return vec2(
        rand(seed),
        rand(seed),
    );
}

fn rand3(seed: ptr<function, vec2<f32>>) -> vec3<f32> {
    return vec3(
        rand(seed),
        rand(seed),
        rand(seed),
    );
}

// https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39
//  MIT License. © Ian McEwan, Stefan Gustavson, Munrocket
// - Less condensed glsl implementation with comments can be found at https://weber.itn.liu.se/~stegu/jgt2012/article.pdf

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
