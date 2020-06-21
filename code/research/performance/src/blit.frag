#version 450

layout(location = 0) in vec2 v_TexCoord;

layout(location = 1) out vec4 f_MipMap;

layout(set = 0, binding = 0) uniform texture2D t_Color;
layout(set = 0, binding = 1) uniform sampler s_Color;

void main() {
    // The [textureLod] function will sample the supplied texture
    // at the specified Level Of Detail (LOD). In our case the
    // Lod is 0, meaning we want to use the texture with it's
    // normal detail.
    f_MipMap = textureLod(sampler2D(t_Color, s_Color), v_TexCoord, 0.0);
}