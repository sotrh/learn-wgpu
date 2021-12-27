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

struct SrcVertexBuffer {
    srcVertices: [[stride(64)]] array<ModelVertex>;
};

struct DstVertexBuffer {
    dstVertices: [[stride(64)]] array<ModelVertex>;
};

struct IndexBuffer {
    indices: [[stride(4)]] array<u32>;
};

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
    let _e12 = v_1;
    let _e14 = v_1;
    let _e16 = v_1;
    return vec3<f32>(_e12.x, _e14.y, _e16.z);
}

fn getUV(v_2: ModelVertex) -> vec2<f32> {
    var v_3: ModelVertex;

    v_3 = v_2;
    let _e12 = v_3;
    let _e14 = v_3;
    return vec2<f32>(_e12.uv, _e14.uw);
}

fn getNormal(v_4: ModelVertex) -> vec3<f32> {
    var v_5: ModelVertex;

    v_5 = v_4;
    let _e12 = v_5;
    let _e14 = v_5;
    let _e16 = v_5;
    return vec3<f32>(_e12.nx, _e14.ny, _e16.nz);
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
    let _e12 = vertexIndex_1;
    let _e14 = global.srcVertices[_e12];
    v_6 = _e14;
    loop {
        let _e30 = i;
        let _e31 = global_3.numIndices;
        if (!((_e30 < _e31))) {
            break;
        }
        {
            let _e38 = i;
            let _e40 = global_2.indices[_e38];
            index0_ = _e40;
            let _e42 = i;
            let _e47 = global_2.indices[(_e42 + u32(1))];
            index1_ = _e47;
            let _e49 = i;
            let _e54 = global_2.indices[(_e49 + u32(2))];
            index2_ = _e54;
            let _e56 = index0_;
            let _e57 = vertexIndex_1;
            let _e59 = index1_;
            let _e60 = vertexIndex_1;
            let _e63 = index2_;
            let _e64 = vertexIndex_1;
            if ((((_e56 == _e57) || (_e59 == _e60)) || (_e63 == _e64))) {
                {
                    let _e67 = index0_;
                    let _e69 = global.srcVertices[_e67];
                    v0_ = _e69;
                    let _e71 = index1_;
                    let _e73 = global.srcVertices[_e71];
                    v1_ = _e73;
                    let _e75 = index2_;
                    let _e77 = global.srcVertices[_e75];
                    v2_ = _e77;
                    let _e80 = v0_;
                    let _e81 = getPos(_e80);
                    pos0_ = _e81;
                    let _e84 = v1_;
                    let _e85 = getPos(_e84);
                    pos1_ = _e85;
                    let _e88 = v2_;
                    let _e89 = getPos(_e88);
                    pos2_ = _e89;
                    let _e92 = v0_;
                    let _e93 = getUV(_e92);
                    uv0_ = _e93;
                    let _e96 = v1_;
                    let _e97 = getUV(_e96);
                    uv1_ = _e97;
                    let _e100 = v2_;
                    let _e101 = getUV(_e100);
                    uv2_ = _e101;
                    let _e103 = pos1_;
                    let _e104 = pos0_;
                    delta_pos1_ = (_e103 - _e104);
                    let _e107 = pos2_;
                    let _e108 = pos0_;
                    delta_pos2_ = (_e107 - _e108);
                    let _e111 = uv1_;
                    let _e112 = uv0_;
                    delta_uv1_ = (_e111 - _e112);
                    let _e115 = uv2_;
                    let _e116 = uv0_;
                    delta_uv2_ = (_e115 - _e116);
                    let _e120 = delta_uv1_;
                    let _e122 = delta_uv2_;
                    let _e125 = delta_uv1_;
                    let _e127 = delta_uv2_;
                    r = (1.0 / ((_e120.x * _e122.y) - (_e125.y * _e127.x)));
                    let _e133 = tangent;
                    let _e134 = delta_pos1_;
                    let _e135 = delta_uv2_;
                    let _e138 = delta_pos2_;
                    let _e139 = delta_uv1_;
                    let _e143 = r;
                    tangent = (_e133 + (((_e134 * _e135.y) - (_e138 * _e139.y)) * _e143));
                    let _e146 = bitangent;
                    let _e147 = delta_pos2_;
                    let _e148 = delta_uv1_;
                    let _e151 = delta_pos1_;
                    let _e152 = delta_uv2_;
                    let _e156 = r;
                    bitangent = (_e146 + (((_e147 * _e148.x) - (_e151 * _e152.x)) * _e156));
                    let _e159 = trianglesIncluded;
                    trianglesIncluded = (_e159 + u32(1));
                }
            }
        }
        continuing {
            let _e34 = i;
            i = (_e34 + u32(3));
        }
    }
    let _e163 = trianglesIncluded;
    if ((_e163 > u32(0))) {
        {
            let _e167 = tangent;
            let _e168 = trianglesIncluded;
            tangent = (_e167 / vec3<f32>(f32(_e168)));
            let _e172 = bitangent;
            let _e173 = trianglesIncluded;
            bitangent = (_e172 / vec3<f32>(f32(_e173)));
            let _e178 = tangent;
            tangent = normalize(_e178);
            let _e181 = bitangent;
            bitangent = normalize(_e181);
        }
    }
    let _e184 = tangent;
    v_6.tx = _e184.x;
    let _e187 = tangent;
    v_6.ty = _e187.y;
    let _e190 = tangent;
    v_6.tz = _e190.z;
    let _e193 = bitangent;
    v_6.bx = _e193.x;
    let _e196 = bitangent;
    v_6.by = _e196.y;
    let _e199 = bitangent;
    v_6.bz = _e199.z;
    let _e201 = v_6;
    return _e201;
}

fn main_1() {
    var vertexIndex_2: u32;
    var result: ModelVertex;

    let _e11 = gl_GlobalInvocationID;
    vertexIndex_2 = _e11.x;
    let _e15 = vertexIndex_2;
    let _e16 = calcTangentBitangent(_e15);
    result = _e16;
    let _e18 = vertexIndex_2;
    let _e20 = result;
    global_1.dstVertices[_e18] = _e20;
    return;
}

[[stage(compute), workgroup_size(64, 1, 1)]]
fn main([[builtin(global_invocation_id)]] param: vec3<u32>) {
    gl_GlobalInvocationID = param;
    main_1();
    return;
}
