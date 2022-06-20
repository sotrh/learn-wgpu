// ============================
// Terrain Generation
// ============================

// todo: look into https://www.shadertoy.com/view/ltfSzr
fn permute(x: vec3<f32>) -> vec3<f32> {
    return (((x * 34.0) + 1.0) * x) % 289.0;
}

fn snoise(v: vec2<f32>) -> f32 {
    let C: vec4<f32> = vec4<f32>(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    var i  = floor(v + dot(v, C.yy) );
    var x0 = v - i + dot(i, C.xx);
    var i1: vec2<f32>;
    i1 = select(vec2<f32>(1.0, 0.0), vec2<f32>(0.0, 1.0), (x0.x > x0.y));
    var x12 = x0.xyxy + C.xxzz;
    x12.x = x12.x - i1.x;
    x12.y = x12.y - i1.y;
    i = i % 289.0;
    var p = permute( permute( i.y + vec3<f32>(0.0, i1.y, 1.0 ))
    + i.x + vec3<f32>(0.0, i1.x, 1.0 ));
    var m = max(0.5 - vec3<f32>(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), vec3<f32>(0.0));
    m = m*m;
    m = m*m;
    var x = 2.0 * fract(p * C.www) - 1.0;
    var h = abs(x) - 0.5;
    var ox = floor(x + 0.5);
    var a0 = x - ox;
    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));
    var g: vec3<f32>;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.y = a0.y * x12.x + h.y * x12.y;
    g.z = a0.z * x12.z + h.z * x12.w;
    return 130.0 * dot(m, g);
}


fn fbm(p: vec2<f32>) -> f32 {
    let NUM_OCTAVES: u32 = 5u;
    var x = p * 0.01;
    var v = 0.0;
    var a = 0.5;
    let shift = vec2<f32>(100.0);
    let cs = vec2<f32>(cos(0.5), sin(0.5));
    let rot = mat2x2<f32>(cs.x, cs.y, -cs.y, cs.x);

    for (var i=0u; i<NUM_OCTAVES; i=i+1u) {
        v = v + a * snoise(x);
        x = rot * x * 2.0 + shift;
        a = a * 0.5;
    }

    return v;
}

struct ChunkData {
    chunk_size: vec2<u32>;
    chunk_corner: vec2<i32>;
    min_max_height: vec2<f32>;
};

struct Vertex {
    [[location(0)]] position: vec3<f32>;
    [[location(1)]] normal: vec3<f32>;
};

struct VertexBuffer {
    data: [[stride(32)]] array<Vertex>;
};

struct IndexBuffer {
    data: array<u32>;
};

[[group(0), binding(0)]] var<uniform> chunk_data: ChunkData;
[[group(0), binding(1)]] var<storage, read_write> vertices: VertexBuffer;
[[group(0), binding(2)]] var<storage, read_write> indices: IndexBuffer;

fn terrain_point(p: vec2<f32>) -> vec3<f32> {
    return vec3<f32>(
        p.x,
        mix(chunk_data.min_max_height.x,chunk_data.min_max_height.y, fbm(p)),
        p.y,
    );
}

fn terrain_vertex(p: vec2<f32>) -> Vertex {
    // var p2 = p * 0.01;
    let v = terrain_point(p);

    let tpx = terrain_point(p + vec2<f32>(0.1, 0.0)) - v;
    let tpz = terrain_point(p + vec2<f32>(0.0, 0.1)) - v;
    let tnx = terrain_point(p + vec2<f32>(-0.1, 0.0)) - v;
    let tnz = terrain_point(p + vec2<f32>(0.0, -0.1)) - v;

    let pn = normalize(cross(tpz, tpx));
    let nn = normalize(cross(tnz, tnx));

    let n = (pn + nn) * 0.5;

    return Vertex(v, n);
}

[[stage(compute), workgroup_size(8)]]
fn gen_terrain(
    [[builtin(global_invocation_id)]] gid: vec3<u32>
) {
    // if (gid.x > (chunk_data.chunk_size.x + 1u) * (chunk_data.chunk_size.y + 1u)) { return; }

    // Create vertex
    let vertex_index = gid.x;

    let p = vec2<f32>(
        f32(vertex_index) % f32(chunk_data.chunk_size.x + 1u),
        f32(vertex_index / (chunk_data.chunk_size.x + 1u)),
    ) + vec2<f32>(chunk_data.chunk_corner);

    vertices.data[vertex_index] = terrain_vertex(p);

    // if (u32(p.x) >= chunk_data.chunk_size.x || u32(p.y) >= chunk_data.chunk_size.y) { return; }

    // Create indices
    let start_index = gid.x * 6u; // using TriangleList

    if (start_index >= (chunk_data.chunk_size.x * chunk_data.chunk_size.y * 6u)) { return; }

    let v00 = vertex_index + gid.x / chunk_data.chunk_size.x;
    let v10 = v00 + 1u;
    let v01 = v00 + chunk_data.chunk_size.x + 1u;
    let v11 = v01 + 1u;

    indices.data[start_index] = v00;
    indices.data[start_index + 1u] = v01;
    indices.data[start_index + 2u] = v11;
    indices.data[start_index + 3u] = v00;
    indices.data[start_index + 4u] = v11;
    indices.data[start_index + 5u] = v10;
}

// ============================
// Terrain Rendering
// ============================

struct Camera {
    view_pos: vec4<f32>;
    view_proj: mat4x4<f32>;
};
[[group(0), binding(0)]]
var<uniform> camera: Camera;

// struct Light {
//     position: vec3<f32>;
//     color: vec3<f32>;
// };
// [[group(1), binding(0)]]
// var<uniform> light: Light;

struct VertexOutput {
    [[builtin(position)]] clip_position: vec4<f32>;
    [[location(0)]] normal: vec3<f32>;
    [[location(1)]] world_pos: vec3<f32>;
};

[[stage(vertex)]]
fn vs_main(
    vertex: Vertex,
) -> VertexOutput {
    let clip_position = camera.view_proj * vec4<f32>(vertex.position, 1.);
    let normal = vertex.normal;
    return VertexOutput(clip_position, normal, vertex.position);
}

// [[group(2), binding(0)]]
// var t_diffuse: texture_2d<f32>;
// [[group(2), binding(1)]]
// var s_diffuse: sampler;
// [[group(2), binding(2)]]
// var t_normal: texture_2d<f32>;
// [[group(2), binding(3)]]
// var s_normal: sampler;

[[stage(fragment)]]
fn fs_main(in: VertexOutput) -> [[location(0)]] vec4<f32> {
    var color = smoothStep(vec3<f32>(0.0), vec3<f32>(0.1), fract(in.world_pos));
    color = mix(vec3<f32>(0.5, 0.1, 0.7), vec3<f32>(0.2, 0.2, 0.2), vec3<f32>(color.x * color.y * color.z));

    let uv = in.world_pos.xz;
    let f = fbm(uv) * 0.5 + 0.5;
    color = color * f;
    // let v = terrain_point(uv);
    // color = vec3<f32>(in.clip_position.z);
    return vec4<f32>(color, 1.0);
}