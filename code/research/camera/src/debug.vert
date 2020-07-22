#version 450

layout(location=0) in vec3 aPosition;
layout(location=0) out vec3 vPosition;

layout(set=0, binding=0) uniform Uniforms {
    mat4 projectionMatrix;
    mat4 viewMatrix;
    mat4 viewProjectionMatrix;
} ubo;

void main() {
    vPosition = aPosition;
    gl_Position = ubo.viewProjectionMatrix * vec4(aPosition, 1);
}