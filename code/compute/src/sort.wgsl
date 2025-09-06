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

    if pair_index >= num_items / 2u {
        return;
    }

    // odd
    var a = pair_index * 2u + 1;
    var b = (a + 1u) % num_items; // Should wrap around to the first

    if a < b && data[a] > data[b] {
        let temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }

    storageBarrier();

    // even
    a = pair_index * 2u;
    b = (a + 1u) % num_items; // Should wrap around to the first

    if a < b && data[a] > data[b] {
        let temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }
}