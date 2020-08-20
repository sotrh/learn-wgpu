#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;

layout(location=0) out vec2 v_tex_coords;

layout(set=1, binding=0) 
uniform Uniforms {
    mat4 u_view_proj;
};

layout(set = 1, binding = 1) uniform texture1D t_model;
layout(set = 1, binding = 2) uniform sampler s_model;

mat4 get_matrix(int index) {
    return mat4(
        texelFetch(sampler1D(t_model, s_model), index * 4, 0),
        texelFetch(sampler1D(t_model, s_model), index * 4 + 1, 0),
        texelFetch(sampler1D(t_model, s_model), index * 4 + 2, 0),
        texelFetch(sampler1D(t_model, s_model), index * 4 + 3, 0)
    );
}

void main() {
    v_tex_coords = a_tex_coords;
    mat4 transform = get_matrix(gl_InstanceIndex);
    gl_Position = u_view_proj * transform * vec4(a_position, 1.0);
}