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

const float shininess = 32;

void main() {
    vec4 diffuse_color = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);
    float diffuse_term = max(dot(normalize(v_normal), normalize(u_light)), 0);

    vec3 camera_dir = normalize(-v_position);

    // This is an aproximation of the actual reflection vector, aka what
    // angle you have to look at the object to be blinded by the light
    vec3 half_direction = normalize(normalize(u_light) + camera_dir);
    float specular_term = pow(max(dot(normalize(v_normal), half_direction), 0.0), shininess);

    f_color = vec4(ambient_color, 1.0) + vec4(specular_term * specular_color, 1.0) + diffuse_term * diffuse_color;
    
}