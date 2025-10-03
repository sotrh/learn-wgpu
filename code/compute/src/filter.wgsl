struct FilterData {
    index: u32,
    order: u32,
}

struct FilterParameters {
    // These get padded to vec4
    min: vec3<f32>,
    max: vec3<f32>,
}

@group(0) @binding(0) var<uniform> parameters: FilterParameters;
@group(0) @binding(1) var<storage, read_write> spheres: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> indices: array<FilterData>;

@compute
@workgroup_size(256)
fn categorize(
    @builtin(global_invocation_id) global_invocation_id: vec3<u32>
) {
    
}


@compute
@workgroup_size(256)
fn odd_even_sort(
    @builtin(global_invocation_id)
    gid: vec3<u32>,
) {
    let num_items = arrayLength(&indices);
    let pair_index = gid.x;

    // odd
    var a = pair_index * 2u + 1;
    var b = a + 1u;

    if a < num_items && b < num_items && indices[a] > indices[b] {
        let temp = indices[a];
        indices[a] = indices[b];
        indices[b] = temp;
    }

    storageBarrier();

    // even
    a = pair_index * 2u;
    b = a + 1u;

    if a < num_items && b < num_items && indices[a] > indices[b] {
        let temp = indices[a];
        indices[a] = indices[b];
        indices[b] = temp;
    }
}