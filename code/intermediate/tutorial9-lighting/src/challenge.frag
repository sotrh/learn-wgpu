#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec3 v_color;

layout(location=0) out vec4 f_color;

layout(set = 0, binding = 0) uniform texture2D t_depth;
layout(set = 0, binding = 1) uniform samplerShadow s_depth;

void main() {
    float depth = texture(sampler2DShadow(t_depth, s_depth), vec3(v_tex_coords, 1));
    f_color = vec4(depth, 0, 0, 1);
}