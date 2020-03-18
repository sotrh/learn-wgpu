#version 450

layout(location=0) in vec3 a_position;
layout(location=1) in vec2 a_tex_coords;
layout(location=2) in vec3 a_normal;

layout(location=0) out vec2 v_tex_coords;
layout(location=1) out vec3 v_normal;

layout(set=1, binding=0) 
uniform Uniforms {
    mat4 u_view_proj;
};

layout(set=1, binding=1) 
buffer Instances {
    mat4 s_models[];
};

void main() {
    v_tex_coords = a_tex_coords;
    
    mat4 model = s_models[gl_InstanceIndex];
    v_normal = transpose(inverse(mat3(model))) * a_normal;
    gl_Position = u_view_proj * model * vec4(a_position, 1.0);
}