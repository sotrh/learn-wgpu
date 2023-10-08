@group(0)
@binding(0)
var src: texture_2d<f32>;

@group(0)
@binding(1)
var output: texture_storage_2d_array<rgba32float, write>;


@compute
@workgroup_size(1, 1, 1)
fn compute_equirect_to_cubemap(
    @builtin(global_invocation_id)
    gid: vec3<u32>,
) {
    var SIDES: array<vec3<f32>, 6> = array(
        vec3(1.0, 0.0, 0.0),  // POSX
        vec3(-1.0, 0.0, 0.0), // NEGX
        vec3(0.0, 1.0, 0.0),  // POSY
        vec3(0.0, -1.0, 0.0), // NEGY
        vec3(0.0, 0.0, 1.0),  // POSZ
        vec3(0.0, 0.0, -1.0), // NEGZ
    );
    var side = SIDES[gid.z];
    // We use textureLoad() as textureSample() is not allowed in compute shaders
    let samp = textureLoad(src, vec2(0, 0), 0);
    textureStore(output, gid.xy, gid.z, vec4(side * 0.5 + 0.5, 1.0));
}