# Memory Layout in GLSL

## Alignments

The address of the position of an instance in memory has to a multiple of its alignment.

Normally alignment is the same as size. Exceptions are vec3, structs and arrays.

A vec3 ist padded to be a vec4 which means it behaves as if it was a vec4 just that the last entry is not used.

`{i,u,b}vec` is shorthand for `ivec`, `uvec`, `bvec` so a vector of `int` or `uint` or `bool`. A `vec` is a vec of `float`.

| type                        | Alignment in bytes | size in bytes |
| --------------------------- | ------------------ | ------------- |
| int, uint, float, bool      | 4                  | 4             |
| double                      | 8                  | 8             |
| {i,u,b}vec2                 | 8                  | 8             |
| dvec2                       | 16                 | 16            |
| {i,u,b}vec3                 | **16**             | 12            |
| {i,u,b}vec4                 | 16                 | 16            |
| dvec3                       | **32**             | 24            |
| dvec4                       | 32                 | 32            |
| mat3 (like array of 3 vec3) | **16**             | 3*16          |
| mat4 (like array of 4 vec4) | 16                 | 4*16          |

[Reference](https://www.khronos.org/registry/OpenGL/specs/gl/glspec45.core.pdf#page=159) section 7.6.2.2

## In WGPU

To make *uniform buffers* portable they have to be std140 and not std430.
*Uniform structs* have to be std140.
*Storage structs* have to be std430.

*Storage buffers* for compute shaders can be std140 oder std430.

## std140 (since GLSL 1.4, OpenGL 3.1)

Array:

- determine the alignment of the member type and lets name it `align_member`
- the alignment of the array is maximum(`align_member`, 16)

Struct:

- determine the member with the largest alignment and lets name it `max_member_align`
- the alignment of the array is maximum(`max_member_align`, 16)

### crates to make yuor struct compatible with std140

[glsl_layout](https://github.com/rustgd/glsl-layout)
[crevice](https://github.com/LPGhatguy/crevice)

## std430 (since GLSL 4.3, OpenGL 4.3)

more space efficient for structs and arrays

Array

- alignment is the alignment of the element type

Struct

- alignment is the alignment of the member with the largest alignment

### crates to make yuor struct compatible with std430

[glsl_layout issue](https://github.com/rustgd/glsl-layout/issues/9)
[crevice issue](https://github.com/LPGhatguy/crevice/issues/1)

----

## memory qualifiers

TODO readonly, writeonly, restrict
