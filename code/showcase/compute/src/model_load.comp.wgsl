struct ModelVertex {
    x: f32,
    y: f32,
    z: f32,
    uv: f32,
    uw: f32,
    nx: f32,
    ny: f32,
    nz: f32,
    tx: f32,
    ty: f32,
    tz: f32,
    bx: f32,
    by: f32,
    bz: f32,
    pad0_: u32,
    pad1_: u32,
}

struct SrcVertexBuffer {
    srcVertices: array<ModelVertex>,
}

struct DstVertexBuffer {
    dstVertices: array<ModelVertex>,
}

struct IndexBuffer {
    indices: array<u32>,
}

struct ComputeInfo {
    numVertices: u32,
    numIndices: u32,
}

@group(0) @binding(0) 
var<storage> global: SrcVertexBuffer;
@group(0) @binding(1) 
var<storage, read_write> global_1: DstVertexBuffer;
@group(0) @binding(2) 
var<storage> global_2: IndexBuffer;
@group(0) @binding(3) 
var<uniform> global_3: ComputeInfo;
var<private> gl_GlobalInvocationID_1: vec3<u32>;

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
    var tangent: vec3<f32> = vec3(0f);
    var bitangent: vec3<f32> = vec3(0f);
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
        if !((_e30 < _e31)) {
            break;
        }
        {
            let _e38 = i;
            let _e40 = global_2.indices[_e38];
            index0_ = _e40;
            let _e42 = i;
            let _e47 = global_2.indices[(_e42 + 1u)];
            index1_ = _e47;
            let _e49 = i;
            let _e54 = global_2.indices[(_e49 + 2u)];
            index2_ = _e54;
            let _e56 = index0_;
            let _e57 = vertexIndex_1;
            let _e59 = index1_;
            let _e60 = vertexIndex_1;
            let _e63 = index2_;
            let _e64 = vertexIndex_1;
            if (((_e56 == _e57) || (_e59 == _e60)) || (_e63 == _e64)) {
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
                    let _e79 = v0_;
                    let _e80 = getPos(_e79);
                    pos0_ = _e80;
                    let _e82 = v1_;
                    let _e83 = getPos(_e82);
                    pos1_ = _e83;
                    let _e85 = v2_;
                    let _e86 = getPos(_e85);
                    pos2_ = _e86;
                    let _e88 = v0_;
                    let _e89 = getUV(_e88);
                    uv0_ = _e89;
                    let _e91 = v1_;
                    let _e92 = getUV(_e91);
                    uv1_ = _e92;
                    let _e94 = v2_;
                    let _e95 = getUV(_e94);
                    uv2_ = _e95;
                    let _e97 = pos1_;
                    let _e98 = pos0_;
                    delta_pos1_ = (_e97 - _e98);
                    let _e101 = pos2_;
                    let _e102 = pos0_;
                    delta_pos2_ = (_e101 - _e102);
                    let _e105 = uv1_;
                    let _e106 = uv0_;
                    delta_uv1_ = (_e105 - _e106);
                    let _e109 = uv2_;
                    let _e110 = uv0_;
                    delta_uv2_ = (_e109 - _e110);
                    let _e114 = delta_uv1_;
                    let _e116 = delta_uv2_;
                    let _e119 = delta_uv1_;
                    let _e121 = delta_uv2_;
                    r = (1f / ((_e114.x * _e116.y) - (_e119.y * _e121.x)));
                    let _e127 = tangent;
                    let _e128 = delta_pos1_;
                    let _e129 = delta_uv2_;
                    let _e132 = delta_pos2_;
                    let _e133 = delta_uv1_;
                    let _e137 = r;
                    tangent = (_e127 + (((_e128 * _e129.y) - (_e132 * _e133.y)) * _e137));
                    let _e140 = bitangent;
                    let _e141 = delta_pos2_;
                    let _e142 = delta_uv1_;
                    let _e145 = delta_pos1_;
                    let _e146 = delta_uv2_;
                    let _e150 = r;
                    bitangent = (_e140 + (((_e141 * _e142.x) - (_e145 * _e146.x)) * _e150));
                    let _e153 = trianglesIncluded;
                    trianglesIncluded = (_e153 + 1u);
                }
            }
        }
        continuing {
            let _e34 = i;
            i = (_e34 + 3u);
        }
    }
    let _e157 = trianglesIncluded;
    if (_e157 > 0u) {
        {
            let _e161 = tangent;
            let _e162 = trianglesIncluded;
            tangent = (_e161 / vec3(f32(_e162)));
            let _e166 = bitangent;
            let _e167 = trianglesIncluded;
            bitangent = (_e166 / vec3(f32(_e167)));
            let _e171 = tangent;
            tangent = normalize(_e171);
            let _e173 = bitangent;
            bitangent = normalize(_e173);
        }
    }
    let _e176 = tangent;
    v_6.tx = _e176.x;
    let _e179 = tangent;
    v_6.ty = _e179.y;
    let _e182 = tangent;
    v_6.tz = _e182.z;
    let _e185 = bitangent;
    v_6.bx = _e185.x;
    let _e188 = bitangent;
    v_6.by = _e188.y;
    let _e191 = bitangent;
    v_6.bz = _e191.z;
    let _e193 = v_6;
    return _e193;
}

fn main_1() {
    var vertexIndex_2: u32;
    var result: ModelVertex;

    let _e11 = gl_GlobalInvocationID_1;
    vertexIndex_2 = _e11.x;
    let _e14 = vertexIndex_2;
    let _e15 = calcTangentBitangent(_e14);
    result = _e15;
    let _e17 = vertexIndex_2;
    let _e19 = result;
    global_1.dstVertices[_e17] = _e19;
    return;
}

@compute @workgroup_size(64, 1, 1) 
fn main(@builtin(global_invocation_id) gl_GlobalInvocationID: vec3<u32>) {
    gl_GlobalInvocationID_1 = gl_GlobalInvocationID;
    main_1();
    return;
}
