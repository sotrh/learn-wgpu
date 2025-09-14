# Sorting on the GPU

Dealing with sorted data make most algorithms easier to work with, so
it makes sense that we would want to be able to sort our GPU data on
the GPU. We have to rethink how we approach sorting as the way we do it
as traditional sorting algorithms aren't designed with parallel computing
power in mind. Fortunately there are some algorithms out there that do
work well with the GPU!

## Odd-Even Sort (aka. Brick Sort)

This sort works by iterating over pairs of items, comparing them, and
swapping them if one is greater than the other. Consider the following
array:

```rust
[3, 7, 1, 5, 0, 4, 2, 6]
```

First we do the odd pass. This means that we consider pairs of items from
index 1 (not 0) up. So for the above data, the pairs would be the following.

```rust
[[7, 1], [5, 0], [4, 2]]
```

We skip the first and last term as those are don't have another number
next to them that isn't already paired up. We then swap the higher number
with the lower number meaning our data looks as follows:

```rust
[3, 1, 7, 0, 5, 2, 4]
```

Next is the even pass. This the same as the odd pass, but we start at index
0 instead of 1. This gives us the following pairs.

```rust
[[3, 1], [7, 0], [2, 4]]
```

Which when swap yields the following:

```rust
[1, 3, 0, 7, 2, 4]
```

This process repeats until the array is sorted. Here's the data at each
iteration after this:

```rust
[1, 0, 3, 2, 7, 4] // odd
[0, 1, 2, 3, 4, 7] // even
```

## When do we stop sorting?

Most sorting algorithms don't manually check that the array is sorted
after each iteration. Fortunately [research shows](https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort#cite_note-6)
that the max number of iterations to complete this algorithm is the
same as the number of items, ie N. This means that given an array of
size `N = 8`

```rust
[7, 6, 5, 4, 3, 2, 1, 0]
```

It will take 8 passes to sort this data.

```rust
[7, 5, 6, 3, 4, 1, 2, 0] // odd
[5, 7, 3, 6, 1, 4, 0, 2] // even
[5, 3, 7, 1, 6, 0, 4, 2] // odd
[3, 5, 1, 7, 0, 6, 2, 4] // even
[3, 1, 5, 0, 7, 2, 6, 4] // odd
[1, 3, 0, 5, 2, 7, 4, 6] // even
[1, 0, 3, 2, 5, 4, 7, 6] // odd
[0, 1, 2, 3, 4, 5, 6, 7] // even
```

This will always work, regardless of the data we are sorting. It's a
little inefficient when your data is almost sorted, so you'll want to
keep that in mind.

## Porting odd-even sort to WGSL

The odd-even sort is special as each pass is trivial to parallelize.
Each pair of items is considered independantly of all the other items.
That means that we can dedicate a single thread to every pair we want
to compare. Let's jump into the shader!

```wgsl
@group(0)
@binding(0)
var<storage, read_write> data: array<u32>;

@compute
@workgroup_size(64, 1, 1)
fn odd_even_sort(
    @builtin(global_invocation_id)
    gid: vec3<u32>,
) {
    // ...
}
```

This works much the same as with the introduction code. We setup our bindgroup
with one `array<u32>` that is `read_write` as this sort works without needing
an additional array to output into. We also only need the `global_invocation_id`
builtin to properly index our `data`. No we'll start looking at the code inside
of `odd_even_sort`.

```wgsl
    let num_items = arrayLength(&data);
    let pair_index = gid.x;
```

First we get the index of the pair the current thread is working on.

```wgsl
    // odd
    var a = pair_index * 2u + 1;
    var b = a + 1u;

    if a < num_items && b < num_items && data[a] > data[b] {
        let temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }
```

For this part of the code, first we get the indices of the items we want to compare.
If the indices are in bounds and the values are out of order, swap the values. We can
do the even pass as well so that we can halve the number of times we call this shader.

```wgsl
    // even
    a = pair_index * 2u;
    b = a + 1u;

    if a < num_items && b < num_items && data[a] > data[b] {
        let temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }
```

It seems like we're done with the shader code, but there's technically
an error in our code. It's nothing with the logic of our code, it has
to do with the nature of parallel coding in general: race conditions.

## Race conditions and barriers

![example of race conditions featuring puppies](./race-condition-puppies.jpg)

A race condition occurs when two or more threads try to opperate on the
same location in memory. If we did one step for each call to the shader,
we would be fine, but since we do two passes, we need to make sure that
the threads aren't tripping over each other. We do this using barriers.

A barrier causes the current thread to wait for other threads to finish
before continuing. There are two types of barrier.

A `workgroupBarrier` will cause all the threads in the workgroup to wait
until all other threads in the work group have reached the barrier. It
will also sync up all atomic variables and data stored in workgroup address
space as well.

<div class="note">

In WGSL and "address space" determines how a certain chunk of can be access.
Data in the `workgroup` address space is only accessible by threads within
the same workgroup. Many of the address spaces are implicit such as the
`function` address space. The `uniform` and `storage` address spaces are
significant as they correspond to uniform buffers and storage buffers
respectively.

</div>

A `storageBarrier` will cause the GPU to sync all changes to storage buffers.
Since our data is in a storage buffer, this is the barrier we need to
ensure that things stay in sync. Add the following line between the odd and
even passes.

```wgsl
    storageBarrier();
```

With that the `odd_even_sort` function looks like this:

```wgsl
@compute
@workgroup_size(64, 1, 1)
fn odd_even_sort(
    @builtin(global_invocation_id)
    gid: vec3<u32>,
) {
    let num_items = arrayLength(&data);
    let pair_index = gid.x;

    // odd
    var a = pair_index * 2u + 1;
    var b = a + 1u;

    if a < num_items && b < num_items && data[a] > data[b] {
        let temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }

    storageBarrier();

    // even
    a = pair_index * 2u;
    b = a + 1u;

    if a < num_items && b < num_items && data[a] > data[b] {
        let temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }
}
```

## Calling the shader

Most of the code is the same as the introduction code, with the
exception of only creating one storage buffer and the following
code to call the shader:

```rust
    let num_items_per_workgroup = 128; // 64 threads, 2 items per thread
    let num_dispatches = (input_data.len() / num_items_per_workgroup) as u32
        + (input_data.len() % num_items_per_workgroup > 0) as u32;
    // We do 2 passes in the shader so we only need to do half the passes
    let num_passes = input_data.len().div_ceil(2);

    {
        let mut pass = encoder.begin_compute_pass(&Default::default());
        pass.set_pipeline(&pipeline);
        pass.set_bind_group(0, &bind_group, &[]);

        for _ in 0..num_passes {
            pass.dispatch_workgroups(num_dispatches, 1, 1);
        }
    }
```

With this, your data should be sorted. You can now use it for whatever purpose
you need such as sorting transparent objects by their z coordinate, or sorting
objects by what cell the belong to in a grid for collision detect and resolution.
We'll be using sorting to implement some different algorithms in other parts of
this guide.

## Conclusion

Sorting is one of the pillars of software development and now that we can sort
our GPU data without sending it on a round trip to the GPU. We'll be using this
a lot in the rest of this guide.

Thanks for reading this, and a special thanks to these patrons!

* Filip
* Lions Heart
* Jani Turkia
* Julius Liu
* 折登 樹
* Aron Granberg
* Ian Gowen
* Bernard Llanos
* David Laban
* IC

<WasmExample example="compute" noCanvas="true" autoLoad="true"></WasmExample>

<AutoGithubLink path="/compute/src/"/>
