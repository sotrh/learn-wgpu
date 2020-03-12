#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec3 v_normal;

layout(location=0) out vec4 f_color;

layout(set = 0, binding = 0) uniform texture2D t_diffuse;
layout(set = 0, binding = 1) uniform sampler s_diffuse;

layout(set=1, binding=2) 
uniform Lights {
    vec3 u_light;
};

void main() {
    vec4 diffuse = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);
    float brightness = dot(normalize(v_normal), normalize(u_light));
    vec4 ambient = vec4(0.0, 0.0, 0.0, 1.0);
    f_color = mix(ambient, diffuse, brightness);
    // f_color = vec4((v_normal + 1) * 0.5, 1);
}