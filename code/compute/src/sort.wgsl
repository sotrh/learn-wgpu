
@group(0)
@binding(0)
var<storage, read_write> data: array<u32>;

@compute
@workgroup_size(64)
fn main(
    @builtin(global_invocation_id) global_invocation_id: vec3<u32>
) {
    let num_items = arrayLength(&data);
    let pair_index = global_invocation_id.x;

    if pair_index >= num_items / 2u {
        return;
    }
    
    for (var i = 0u; i < num_items; i++) {
        let a = pair_index * 2u + i % 2u;
        let b = (a + 1u) % num_items;

        storageBarrier();

        if a < b && data[a] > data[b] {
            let temp = data[a];
            data[a] = data[b];
            data[b] = temp;
        }

        storageBarrier();
    }
}