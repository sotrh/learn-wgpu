@group(0)
@binding(0)
var<storage, read_write> data: array<u32>;

@compute
@workgroup_size(64, 1, 1)
fn odd_even_sort(
    @builtin(global_invocation_id)
    gid: vec3<u32>,
) {
    let num_items = arrayLength(&data);
    let pair_index = gid.x;

    // even
    let a = pair_index * 2u;
    let b = a + 1u;

    if a < num_items && b < num_items && data[a] > data[b] {
        let temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }
}
