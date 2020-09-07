#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec3 v_color;

layout(location=0) out vec4 f_color;

layout(set = 0, binding = 0) uniform texture2D t_depth;
layout(set = 0, binding = 1) uniform samplerShadow s_depth;

void main() {
    float near = 0.1;
    float far = 100.0;
    float depth = texture(sampler2DShadow(t_depth, s_depth), vec3(v_tex_coords, 1));
    float r = (2.0 * near * far) / (far + near - depth * (far - near));

    f_color = vec4(vec3(r), 1);

    float dbg = 1.0;
    if (depth < 1.0) depth = 0;
    f_color = vec4(vec3(dbg), 1);
}