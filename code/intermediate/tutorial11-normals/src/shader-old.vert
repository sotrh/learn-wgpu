#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;
layout(location=2) in vec3 a_normal;
layout(location=3) in vec3 a_tangent;
layout(location=4) in vec3 a_bitangent;

layout(location=0) out vec2 v_tex_coords;
layout(location=1) out vec3 v_model_position_tangent_space;
layout(location=2) out vec3 v_light_position_tangent_space;
layout(location=3) out vec3 v_view_position_tangent_space;

layout(set=1, binding=0) 
uniform Uniforms {
    vec3 u_view_position;
    mat4 u_view_proj;
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
    vec4 position_world_space = model_matrix * vec4(a_position, 1.0);

    mat3 normal_matrix = transpose(inverse(mat3(model_matrix)));
    vec3 normal = normalize(normal_matrix * a_normal);
    vec3 tangent = normalize(normal_matrix * a_tangent);
    vec3 bitangent = normalize(normal_matrix * a_bitangent);

    mat3 TBN = transpose(mat3(
        tangent,
        bitangent,
        normal
    ));

    // Transform the lighting values
    v_light_position_tangent_space = TBN * light_position;
    v_model_position_tangent_space = TBN * position_world_space.xyz;
    v_view_position_tangent_space = TBN * u_view_position;

    gl_Position = u_view_proj * position_world_space;
}