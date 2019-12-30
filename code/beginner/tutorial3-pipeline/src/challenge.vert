#version 450

const vec2 positions[3] = vec2[3](
    vec2(0.0, -0.5),
    vec2(-0.5, 0.5),
    vec2(0.5, 0.5)
);

layout(location=0) out vec2 v_position;

void main() {
    v_position = positions[gl_VertexIndex];
    gl_Position = vec4(v_position, 0.0, 1.0);
}