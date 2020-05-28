#version 450

layout(location=0) in vec2 aPosition;
layout(location=1) in vec2 aTexCoord;

layout(location=0) out vec2 vTexCoord;

void main() {
    gl_Position = vec4(aPosition, 0, 1);
    vTexCoord = aTexCoord;
}