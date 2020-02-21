#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec3 v_normal;
layout(location=2) in vec3 v_position;

layout(location=0) out vec4 f_color;

layout(set = 0, binding = 0) uniform texture2D t_diffuse;
layout(set = 0, binding = 1) uniform sampler s_diffuse;

layout(set=1, binding=2) 
uniform Lights {
    vec3 u_light;
};

const vec3 ambient_color = vec3(0.0, 0.0, 0.0);
const vec3 specular_color = vec3(1.0, 1.0, 1.0);

void main() {
    vec4 diffuse_color = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);

    float diffuse = max(dot(normalize(v_normal), normalize(u_light)), 0);

    vec3 camera_dir = normalize(-v_position);
    vec3 half_direction = normalize(normalize(u_light) + camera_dir);
    float specular = pow(max(dot(half_direction, normalize(v_normal)), 0.0), 16.0);

    f_color = vec4(ambient_color + specular * specular_color, 1.0) + diffuse * diffuse_color;

    // f_color = vec4(v_normal, 0);
}