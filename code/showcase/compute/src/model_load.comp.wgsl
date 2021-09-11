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
var<storage, read_write> global1: DstVertexBuffer;
[[group(0), binding(2)]]
var<storage> global2: IndexBuffer;
[[group(0), binding(3)]]
var<uniform> global3: ComputeInfo;
var<private> gl_GlobalInvocationID: vec3<u32>;

fn getPos(v: ModelVertex) -> vec3<f32> {
    var v1: ModelVertex;

    v1 = v;
    let _e12: ModelVertex = v1;
    let _e14: ModelVertex = v1;
    let _e16: ModelVertex = v1;
    return vec3<f32>(_e12.x, _e14.y, _e16.z);
}

fn getUV(v2: ModelVertex) -> vec2<f32> {
    var v3: ModelVertex;

    v3 = v2;
    let _e12: ModelVertex = v3;
    let _e14: ModelVertex = v3;
    return vec2<f32>(_e12.uv, _e14.uw);
}

fn getNormal(v4: ModelVertex) -> vec3<f32> {
    var v5: ModelVertex;

    v5 = v4;
    let _e12: ModelVertex = v5;
    let _e14: ModelVertex = v5;
    let _e16: ModelVertex = v5;
    return vec3<f32>(_e12.nx, _e14.ny, _e16.nz);
}

fn calcTangentBitangent(vertexIndex: u32) -> ModelVertex {
    var vertexIndex1: u32;
    var v6: ModelVertex;
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

    vertexIndex1 = vertexIndex;
    let _e12: u32 = vertexIndex1;
    let _e14: ModelVertex = global.srcVertices[_e12];
    v6 = _e14;
    loop {
        let _e30: u32 = i;
        let _e31: u32 = global3.numIndices;
        if (!((_e30 < _e31))) {
            break;
        }
        {
            let _e38: u32 = i;
            let _e40: u32 = global2.indices[_e38];
            index0_ = _e40;
            let _e42: u32 = i;
            let _e47: u32 = global2.indices[(_e42 + u32(1))];
            index1_ = _e47;
            let _e49: u32 = i;
            let _e54: u32 = global2.indices[(_e49 + u32(2))];
            index2_ = _e54;
            let _e56: u32 = index0_;
            let _e57: u32 = vertexIndex1;
            let _e59: u32 = index1_;
            let _e60: u32 = vertexIndex1;
            let _e63: u32 = index2_;
            let _e64: u32 = vertexIndex1;
            if ((((_e56 == _e57) || (_e59 == _e60)) || (_e63 == _e64))) {
                {
                    let _e67: u32 = index0_;
                    let _e69: ModelVertex = global.srcVertices[_e67];
                    v0_ = _e69;
                    let _e71: u32 = index1_;
                    let _e73: ModelVertex = global.srcVertices[_e71];
                    v1_ = _e73;
                    let _e75: u32 = index2_;
                    let _e77: ModelVertex = global.srcVertices[_e75];
                    v2_ = _e77;
                    let _e80: ModelVertex = v0_;
                    let _e81: vec3<f32> = getPos(_e80);
                    pos0_ = _e81;
                    let _e84: ModelVertex = v1_;
                    let _e85: vec3<f32> = getPos(_e84);
                    pos1_ = _e85;
                    let _e88: ModelVertex = v2_;
                    let _e89: vec3<f32> = getPos(_e88);
                    pos2_ = _e89;
                    let _e92: ModelVertex = v0_;
                    let _e93: vec2<f32> = getUV(_e92);
                    uv0_ = _e93;
                    let _e96: ModelVertex = v1_;
                    let _e97: vec2<f32> = getUV(_e96);
                    uv1_ = _e97;
                    let _e100: ModelVertex = v2_;
                    let _e101: vec2<f32> = getUV(_e100);
                    uv2_ = _e101;
                    let _e103: vec3<f32> = pos1_;
                    let _e104: vec3<f32> = pos0_;
                    delta_pos1_ = (_e103 - _e104);
                    let _e107: vec3<f32> = pos2_;
                    let _e108: vec3<f32> = pos0_;
                    delta_pos2_ = (_e107 - _e108);
                    let _e111: vec2<f32> = uv1_;
                    let _e112: vec2<f32> = uv0_;
                    delta_uv1_ = (_e111 - _e112);
                    let _e115: vec2<f32> = uv2_;
                    let _e116: vec2<f32> = uv0_;
                    delta_uv2_ = (_e115 - _e116);
                    let _e120: vec2<f32> = delta_uv1_;
                    let _e122: vec2<f32> = delta_uv2_;
                    let _e125: vec2<f32> = delta_uv1_;
                    let _e127: vec2<f32> = delta_uv2_;
                    r = (1.0 / ((_e120.x * _e122.y) - (_e125.y * _e127.x)));
                    let _e133: vec3<f32> = tangent;
                    let _e134: vec3<f32> = delta_pos1_;
                    let _e135: vec2<f32> = delta_uv2_;
                    let _e138: vec3<f32> = delta_pos2_;
                    let _e139: vec2<f32> = delta_uv1_;
                    let _e143: f32 = r;
                    tangent = (_e133 + (((_e134 * _e135.y) - (_e138 * _e139.y)) * _e143));
                    let _e146: vec3<f32> = bitangent;
                    let _e147: vec3<f32> = delta_pos2_;
                    let _e148: vec2<f32> = delta_uv1_;
                    let _e151: vec3<f32> = delta_pos1_;
                    let _e152: vec2<f32> = delta_uv2_;
                    let _e156: f32 = r;
                    bitangent = (_e146 + (((_e147 * _e148.x) - (_e151 * _e152.x)) * _e156));
                    let _e159: u32 = trianglesIncluded;
                    trianglesIncluded = (_e159 + u32(1));
                }
            }
        }
        continuing {
            let _e34: u32 = i;
            i = (_e34 + u32(3));
        }
    }
    let _e163: u32 = trianglesIncluded;
    if ((_e163 > u32(0))) {
        {
            let _e167: vec3<f32> = tangent;
            let _e168: u32 = trianglesIncluded;
            tangent = (_e167 / vec3<f32>(f32(_e168)));
            let _e172: vec3<f32> = bitangent;
            let _e173: u32 = trianglesIncluded;
            bitangent = (_e172 / vec3<f32>(f32(_e173)));
            let _e178: vec3<f32> = tangent;
            tangent = normalize(_e178);
            let _e181: vec3<f32> = bitangent;
            bitangent = normalize(_e181);
        }
    }
    let _e184: vec3<f32> = tangent;
    v6.tx = _e184.x;
    let _e187: vec3<f32> = tangent;
    v6.ty = _e187.y;
    let _e190: vec3<f32> = tangent;
    v6.tz = _e190.z;
    let _e193: vec3<f32> = bitangent;
    v6.bx = _e193.x;
    let _e196: vec3<f32> = bitangent;
    v6.by = _e196.y;
    let _e199: vec3<f32> = bitangent;
    v6.bz = _e199.z;
    let _e201: ModelVertex = v6;
    return _e201;
}

fn main1() {
    var vertexIndex2: u32;
    var result: ModelVertex;

    let _e11: vec3<u32> = gl_GlobalInvocationID;
    vertexIndex2 = _e11.x;
    let _e15: u32 = vertexIndex2;
    let _e16: ModelVertex = calcTangentBitangent(_e15);
    result = _e16;
    let _e18: u32 = vertexIndex2;
    let _e20: ModelVertex = result;
    global1.dstVertices[_e18] = _e20;
    return;
}

[[stage(compute), workgroup_size(64, 1, 1)]]
fn main([[builtin(global_invocation_id)]] param: vec3<u32>) {
    gl_GlobalInvocationID = param;
    main1();
    return;
}
