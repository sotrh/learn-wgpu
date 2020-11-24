#version 450

layout(location=0) in vec3 clip_coords;
layout(location=0) out vec4 frag_color;

layout(set=0, binding=0) uniform SimulationData {
    vec4 clear_color;
    vec2 canvas_size;
    vec2 mouse_pos;
    vec2 time;
};

void main() {
    float t = time.x;
    vec3 uv = clip_coords * 0.5 + 0.5;
    vec4 col = mix(vec4(uv, 1.0), clear_color, sin(t));
    frag_color = col;
}