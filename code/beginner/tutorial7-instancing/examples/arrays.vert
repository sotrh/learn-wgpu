#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;

layout(location=0) out vec2 v_tex_coords;

layout(set=1, binding=0) 
uniform Uniforms {
    mat4 u_view_proj;
    mat4 u_model[100];
};

void main() {
    v_tex_coords = a_tex_coords;
    gl_Position = u_view_proj * u_model[gl_InstanceIndex] * vec4(a_position, 1.0);
}