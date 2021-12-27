#version 450

layout(location=0) out vec3 clip_coords;

// const vec3 positions[6] = vec3[6](
//     // Bottom left triangle
//     vec3(-1.0, 1.0, 0.0),
//     vec3(-1.0, -1.0, 0.0),
//     vec3(1.0, -1.0, 0.0),

//     // Top right triangle
//     vec3(-1.0, 1.0, 0.0),
//     vec3(1.0, -1.0, 0.0),
//     vec3(1.0, 1.0, 0.0)
// );

void main() {
    float x = float(((uint(gl_VertexIndex) + 2u) / 3u)%2u); 
    float y = float(((uint(gl_VertexIndex) + 1u) / 3u)%2u); 

    gl_Position = vec4(-1.0f + x*2.0f, -1.0f+y*2.0f, 0.0f, 1.0f);
    // gl_Position = vec4(positions[gl_VertexIndex], 1.0);
    clip_coords = gl_Position.xyz;
}