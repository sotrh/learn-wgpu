#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;
layout(location=2) in vec3 a_normal;
// NEW!
layout(location=3) in vec3 a_tangent;
layout(location=4) in vec3 a_bitangent;

layout(location=0) out vec2 v_tex_coords;
layout(location=1) out vec3 v_position; // UPDATED!
layout(location=2) out mat3 v_tangent_matrix; // NEW!

layout(set=1, binding=0) 
uniform Uniforms {
    vec3 u_view_position; 
    mat4 u_view_proj;
};

layout(set=1, binding=1) 
buffer Instances {
    mat4 s_models[];
};

void main() {
    v_tex_coords = a_tex_coords;

    mat4 model_matrix = s_models[gl_InstanceIndex];

    mat3 normal_matrix = mat3(transpose(inverse(model_matrix)));
    vec3 normal = normalize(normal_matrix * a_normal);
    vec3 tangent = normalize(normal_matrix * a_tangent);
    vec3 bitangent = normalize(normal_matrix * a_bitangent);
    v_tangent_matrix = mat3(
        tangent,
        bitangent,
        normal
    );

    vec4 model_space = model_matrix * vec4(a_position, 1.0);
    v_position = model_space.xyz;

    gl_Position = u_view_proj * model_space;
}