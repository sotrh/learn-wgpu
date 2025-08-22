@group(0) @binding(0) var<storage, read> input: array<u32>;
@group(0) @binding(1) var<storage, read_write> output: array<u32>;

var<workgroup> buffer: array<u32>;
var<workgroup> count: atomic<u32>;

@compute
@workgroup_size(64)
fn main(
    @builtin(global_invocation_id) global_invocation_id: vec3<u32>
) {
    let index = global_invocation_id.x;
    let total = arrayLength(&input);

    // workgroup_size may not be a multiple of the array size so
    // we need to exit out a thread would index out of bounds.
    if (index >= total) {
        return;
    }

    if (input[index] % 2 == 0) {
        return;
    }

    
}