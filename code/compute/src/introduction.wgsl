// A read-only storage buffer that stores and array of unsigned 32bit integers
@group(0) @binding(0) var<storage, read> input: array<u32>;
// This storage buffer can be read from and written to
@group(0) @binding(1) var<storage, read_write> output: array<u32>;

// Tells wgpu that this function is a valid compute pipeline entry_point
@compute
// Specifies the "dimension" of this work group
@workgroup_size(64)
fn main(
    // global_invocation_id specifies our position in the invocation grid
    @builtin(global_invocation_id) global_invocation_id: vec3<u32>
) {
    let index = global_invocation_id.x;
    let total = arrayLength(&input);

    // workgroup_size may not be a multiple of the array size so
    // we need to exit out a thread would index out of bounds.
    if (index >= total) {
        return;
    }

    // a simple copy operation
    output[global_invocation_id.x] = input[global_invocation_id.x];
}