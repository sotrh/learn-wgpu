#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;
layout(location=2) in vec3 a_normal;
layout(location=3) in vec3 a_tangent;
layout(location=4) in vec3 a_bitangent;

layout(location=0) out vec2 v_tex_coords;
layout(location=1) out vec3 v_position; // UPDATED!
layout(location=2) out vec3 v_light_position; // NEW!
layout(location=3) out vec3 v_view_position; // NEW!

layout(set=1, binding=0) 
uniform Camera {
    vec3 u_view_position; 
    mat4 u_view_proj;
};

layout(location=5) in vec4 model_matrix_0;
layout(location=6) in vec4 model_matrix_1;
layout(location=7) in vec4 model_matrix_2;
layout(location=8) in vec4 model_matrix_3;

// NEW!
layout(set=2, binding=0) uniform Light {
    vec3 light_position;
    vec3 light_color;
};

void main() {
    mat4 model_matrix = mat4(
        model_matrix_0,
        model_matrix_1,
        model_matrix_2,
        model_matrix_3
    );
    v_tex_coords = a_tex_coords;

    mat3 normal_matrix = mat3(transpose(inverse(model_matrix)));
    vec3 normal = normalize(normal_matrix * a_normal);
    vec3 tangent = normalize(normal_matrix * a_tangent);
    vec3 bitangent = normalize(normal_matrix * a_bitangent);

    // UDPATED!
    mat3 tangent_matrix = transpose(mat3(
        tangent,
        bitangent,
        normal
    ));

    vec4 model_space = model_matrix * vec4(a_position, 1.0);
    v_position = model_space.xyz;

    // NEW!
    v_position = tangent_matrix * model_space.xyz;
    v_light_position = tangent_matrix * light_position;
    v_view_position = tangent_matrix * u_view_position;

    gl_Position = u_view_proj * model_space;
}