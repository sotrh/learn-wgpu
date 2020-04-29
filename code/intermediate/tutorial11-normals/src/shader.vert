#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;
layout(location=2) in vec3 a_normal;
layout(location=3) in vec3 a_tangent;
layout(location=4) in vec3 a_bitangent;

layout(location=0) out vec2 v_tex_coords;
layout(location=1) out vec3 v_normal;
layout(location=2) out vec3 v_position_model_tangent_space;
layout(location=3) out vec3 v_light_position_tangent_space;

layout(set=1, binding=0) 
uniform Uniforms {
    mat4 u_view;
    mat4 u_proj;
};

layout(set=1, binding=1) 
buffer Instances {
    mat4 s_models[];
};

layout(set = 2, binding = 0) uniform Light {
    vec3 light_position;
    vec3 light_color; // used in fragment shader
};


void main() {
    v_tex_coords = a_tex_coords;

    mat4 model_matrix = s_models[gl_InstanceIndex];
    mat4 model_view_matrix = u_view * model_matrix;

    vec4 light_position_view_space = u_view * vec4(light_position, 1.0);
    vec4 position_model_view_space = model_view_matrix * vec4(a_position, 1.0);

    mat3 MV3x3 = mat3(model_view_matrix);
    vec3 normal_view_space = MV3x3 * normalize(a_normal);
    vec3 tangent_view_space = MV3x3 * normalize(a_tangent);
    vec3 bitangent_view_space = MV3x3 * normalize(a_bitangent);
    mat3 TBN = transpose(mat3(
        tangent_view_space,
        bitangent_view_space,
        normal_view_space
    ));

    gl_Position = u_proj * position_model_view_space;

    v_light_position_tangent_space = TBN * light_position_view_space.xyz;
    v_position_model_tangent_space = TBN * position_model_view_space.xyz;
}