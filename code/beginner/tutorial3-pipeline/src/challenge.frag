#version 450

layout(location=0) in vec2 v_position;
layout(location=0) out vec4 f_color;

void main() {
    f_color = vec4(v_position, 0.5, 1.0);
}