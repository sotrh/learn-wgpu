@group(0)
@binding(0)
var<uniform> mipLevel: u32;

@group(1)
@binding(0)
var src: texture_storage_2d<rgba8unorm, read>;
@group(1)
@binding(1)
var dst: texture_storage_2d<rgba8unorm, write>;

@compute
@workgroup_size(16, 16, 1)
fn compute_mipmap(
    @builtin(global_invocation_id) gid: vec3<u32>,
) {
    let dstPos = gid.xy;
    let srcPos = gid.xy * 2;
    let srcMip = mipLevel + 1;

    let dim = textureDimensions(src);

    if (dstPos.x >= dim.x || dstPos.y >= dim.y) {
        return;
    }

    let t00 = textureLoad(src, srcPos);
    let t01 = textureLoad(src, srcPos + vec2(0, 1));
    let t10 = textureLoad(src, srcPos + vec2(1, 0));
    let t11 = textureLoad(src, srcPos + vec2(1, 1));

    // A simple linear average of 4 adjacent pixels
    let t = (t00 + t01 + t10 + t11) * 0.25;

    textureStore(dst, dstPos, t);
}