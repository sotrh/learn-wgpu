#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec3 v_normal;
layout(location=2) in vec3 v_position_model_tangent_space;
layout(location=3) in vec3 v_light_position_tangent_space;

layout(location=0) out vec4 f_color;

layout(set = 0, binding = 0) uniform texture2D t_diffuse;
layout(set = 0, binding = 1) uniform sampler s_diffuse;
layout(set = 0, binding = 2) uniform texture2D t_normal;
layout(set = 0, binding = 3) uniform sampler s_normal;

layout(set=1, binding=0) 
uniform Uniforms {
    vec3 u_view_position;
    mat4 u_view_proj; // unused
};

layout(set = 2, binding = 0) uniform Light {
    vec3 light_position;
    vec3 light_color;
};

void main() {
    vec4 object_color = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);
    vec4 object_normal = texture(sampler2D(t_normal, s_normal), v_tex_coords);

    float ambient_strength = 0.01;
    vec3 ambient_color = light_color * ambient_strength;

    // We're storing our normal map as Rgba8UnormSrgb, if we were
    // using Rgba8Unorm or another format without Srgb, then we wouldn't
    // be able to use the normal data directly, and we would have to
    // transform it for the range [0, 1] to  [-1, 1].
    vec3 normal = normalize(object_normal.rgb * 2.0 - vec3(1.0));
    // vec3 normal = normalize(object_normal.rgb);

    vec3 light_dir = normalize(v_light_position_tangent_space - v_position_model_tangent_space);
    
    float diffuse_strength = max(dot(normal, light_dir), 0.0);
    vec3 diffuse_color = light_color * diffuse_strength;

    vec3 view_dir = normalize(-v_position_model_tangent_space);
    vec3 half_dir = normalize(view_dir + light_dir);
    float specular_strength = pow(max(dot(normal, half_dir), 0.0), 32);
    vec3 specular_color = specular_strength * light_color;

    // vec3 result = (ambient_color + diffuse_color + specular_color) * object_color.xyz;
    vec3 result = (ambient_color + diffuse_color) * object_color.xyz;
    f_color = vec4(result, object_color.a);
    // f_color = vec4(normal, object_color.a);
}