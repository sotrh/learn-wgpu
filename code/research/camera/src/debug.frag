#version 450

layout(location=0) in vec3 vPosition;
layout(location=0) out vec4 fColor;

void main() {
    fColor = vec4(vPosition, 1);
}