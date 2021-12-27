struct ModelVertex {
    x: f32;
    y: f32;
    z: f32;
    uv: f32;
    uw: f32;
    nx: f32;
    ny: f32;
    nz: f32;
    tx: f32;
    ty: f32;
    tz: f32;
    bx: f32;
    by: f32;
    bz: f32;
    pad0_: u32;
    pad1_: u32;
};

[[block]]
struct SrcVertexBuffer {
    srcVertices: [[stride(64)]] array<ModelVertex>;
};

[[block]]
struct DstVertexBuffer {
    dstVertices: [[stride(64)]] array<ModelVertex>;
};

[[block]]
struct IndexBuffer {
    indices: [[stride(4)]] array<u32>;
};

[[block]]
struct ComputeInfo {
    numVertices: u32;
    numIndices: u32;
};

[[group(0), binding(0)]]
var<storage> global: SrcVertexBuffer;
[[group(0), binding(1)]]
var<storage, read_write> global_1: DstVertexBuffer;
[[group(0), binding(2)]]
var<storage> global_2: IndexBuffer;
[[group(0), binding(3)]]
var<uniform> global_3: ComputeInfo;
var<private> gl_GlobalInvocationID: vec3<u32>;

fn getPos(v: ModelVertex) -> vec3<f32> {
    var v_1: ModelVertex;

    v_1 = v;
    let e12: ModelVertex = v_1;
    let e14: ModelVertex = v_1;
    let e16: ModelVertex = v_1;
    return vec3<f32>(e12.x, e14.y, e16.z);
}

fn getUV(v_2: ModelVertex) -> vec2<f32> {
    var v_3: ModelVertex;

    v_3 = v_2;
    let e12: ModelVertex = v_3;
    let e14: ModelVertex = v_3;
    return vec2<f32>(e12.uv, e14.uw);
}

fn getNormal(v_4: ModelVertex) -> vec3<f32> {
    var v_5: ModelVertex;

    v_5 = v_4;
    let e12: ModelVertex = v_5;
    let e14: ModelVertex = v_5;
    let e16: ModelVertex = v_5;
    return vec3<f32>(e12.nx, e14.ny, e16.nz);
}

fn calcTangentBitangent(vertexIndex: u32) -> ModelVertex {
    var vertexIndex_1: u32;
    var v_6: ModelVertex;
    var tangent: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
    var bitangent: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
    var trianglesIncluded: u32 = 0u;
    var i: u32 = 0u;
    var index0_: u32;
    var index1_: u32;
    var index2_: u32;
    var v0_: ModelVertex;
    var v1_: ModelVertex;
    var v2_: ModelVertex;
    var pos0_: vec3<f32>;
    var pos1_: vec3<f32>;
    var pos2_: vec3<f32>;
    var uv0_: vec2<f32>;
    var uv1_: vec2<f32>;
    var uv2_: vec2<f32>;
    var delta_pos1_: vec3<f32>;
    var delta_pos2_: vec3<f32>;
    var delta_uv1_: vec2<f32>;
    var delta_uv2_: vec2<f32>;
    var r: f32;

    vertexIndex_1 = vertexIndex;
    let e12: u32 = vertexIndex_1;
    let e14: ModelVertex = global.srcVertices[e12];
    v_6 = e14;
    loop {
        let e30: u32 = i;
        let e31: u32 = global_3.numIndices;
        if (!((e30 < e31))) {
            break;
        }
        {
            let e38: u32 = i;
            let e40: u32 = global_2.indices[e38];
            index0_ = e40;
            let e42: u32 = i;
            let e47: u32 = global_2.indices[(e42 + u32(1))];
            index1_ = e47;
            let e49: u32 = i;
            let e54: u32 = global_2.indices[(e49 + u32(2))];
            index2_ = e54;
            let e56: u32 = index0_;
            let e57: u32 = vertexIndex_1;
            let e59: u32 = index1_;
            let e60: u32 = vertexIndex_1;
            let e63: u32 = index2_;
            let e64: u32 = vertexIndex_1;
            if ((((e56 == e57) || (e59 == e60)) || (e63 == e64))) {
                {
                    let e67: u32 = index0_;
                    let e69: ModelVertex = global.srcVertices[e67];
                    v0_ = e69;
                    let e71: u32 = index1_;
                    let e73: ModelVertex = global.srcVertices[e71];
                    v1_ = e73;
                    let e75: u32 = index2_;
                    let e77: ModelVertex = global.srcVertices[e75];
                    v2_ = e77;
                    let e80: ModelVertex = v0_;
                    let e81: vec3<f32> = getPos(e80);
                    pos0_ = e81;
                    let e84: ModelVertex = v1_;
                    let e85: vec3<f32> = getPos(e84);
                    pos1_ = e85;
                    let e88: ModelVertex = v2_;
                    let e89: vec3<f32> = getPos(e88);
                    pos2_ = e89;
                    let e92: ModelVertex = v0_;
                    let e93: vec2<f32> = getUV(e92);
                    uv0_ = e93;
                    let e96: ModelVertex = v1_;
                    let e97: vec2<f32> = getUV(e96);
                    uv1_ = e97;
                    let e100: ModelVertex = v2_;
                    let e101: vec2<f32> = getUV(e100);
                    uv2_ = e101;
                    let e103: vec3<f32> = pos1_;
                    let e104: vec3<f32> = pos0_;
                    delta_pos1_ = (e103 - e104);
                    let e107: vec3<f32> = pos2_;
                    let e108: vec3<f32> = pos0_;
                    delta_pos2_ = (e107 - e108);
                    let e111: vec2<f32> = uv1_;
                    let e112: vec2<f32> = uv0_;
                    delta_uv1_ = (e111 - e112);
                    let e115: vec2<f32> = uv2_;
                    let e116: vec2<f32> = uv0_;
                    delta_uv2_ = (e115 - e116);
                    let e120: vec2<f32> = delta_uv1_;
                    let e122: vec2<f32> = delta_uv2_;
                    let e125: vec2<f32> = delta_uv1_;
                    let e127: vec2<f32> = delta_uv2_;
                    r = (1.0 / ((e120.x * e122.y) - (e125.y * e127.x)));
                    let e133: vec3<f32> = tangent;
                    let e134: vec3<f32> = delta_pos1_;
                    let e135: vec2<f32> = delta_uv2_;
                    let e138: vec3<f32> = delta_pos2_;
                    let e139: vec2<f32> = delta_uv1_;
                    let e143: f32 = r;
                    tangent = (e133 + (((e134 * e135.y) - (e138 * e139.y)) * e143));
                    let e146: vec3<f32> = bitangent;
                    let e147: vec3<f32> = delta_pos2_;
                    let e148: vec2<f32> = delta_uv1_;
                    let e151: vec3<f32> = delta_pos1_;
                    let e152: vec2<f32> = delta_uv2_;
                    let e156: f32 = r;
                    bitangent = (e146 + (((e147 * e148.x) - (e151 * e152.x)) * e156));
                    let e159: u32 = trianglesIncluded;
                    trianglesIncluded = (e159 + u32(1));
                }
            }
        }
        continuing {
            let e34: u32 = i;
            i = (e34 + u32(3));
        }
    }
    let e163: u32 = trianglesIncluded;
    if ((e163 > u32(0))) {
        {
            let e167: vec3<f32> = tangent;
            let e168: u32 = trianglesIncluded;
            tangent = (e167 / vec3<f32>(f32(e168)));
            let e172: vec3<f32> = bitangent;
            let e173: u32 = trianglesIncluded;
            bitangent = (e172 / vec3<f32>(f32(e173)));
            let e178: vec3<f32> = tangent;
            tangent = normalize(e178);
            let e181: vec3<f32> = bitangent;
            bitangent = normalize(e181);
        }
    }
    let e184: vec3<f32> = tangent;
    v_6.tx = e184.x;
    let e187: vec3<f32> = tangent;
    v_6.ty = e187.y;
    let e190: vec3<f32> = tangent;
    v_6.tz = e190.z;
    let e193: vec3<f32> = bitangent;
    v_6.bx = e193.x;
    let e196: vec3<f32> = bitangent;
    v_6.by = e196.y;
    let e199: vec3<f32> = bitangent;
    v_6.bz = e199.z;
    let e201: ModelVertex = v_6;
    return e201;
}

fn main_1() {
    var vertexIndex_2: u32;
    var result: ModelVertex;

    let e11: vec3<u32> = gl_GlobalInvocationID;
    vertexIndex_2 = e11.x;
    let e15: u32 = vertexIndex_2;
    let e16: ModelVertex = calcTangentBitangent(e15);
    result = e16;
    let e18: u32 = vertexIndex_2;
    let e20: ModelVertex = result;
    global_1.dstVertices[e18] = e20;
    return;
}

[[stage(compute), workgroup_size(64, 1, 1)]]
fn main([[builtin(global_invocation_id)]] param: vec3<u32>) {
    gl_GlobalInvocationID = param;
    main_1();
    return;
}
