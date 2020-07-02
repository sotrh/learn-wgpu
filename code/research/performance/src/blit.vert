#version 450

layout(location = 0) out vec2 v_TexCoord;

void main() {
    // We need to know what vertex we are processing in
    // order to use the right texture coord.
    switch(gl_VertexIndex % 4) {
        case 0: v_TexCoord = vec2(1.0, 0.0); break;
        case 1: v_TexCoord = vec2(1.0, 1.0); break;
        case 2: v_TexCoord = vec2(0.0, 0.0); break;
        case 3: v_TexCoord = vec2(0.0, 1.0); break;
    }

    // We us `v_TexCoord` to generate gl_Position rather
    // than supply a vertex buffer.
    gl_Position = vec4(v_TexCoord * 2.0 - 1.0, 0.5, 1.0);

    // Texture coordinates (aka. framebuffer coordinates) are inverted.
    // We need to invert the y coordinate, other wise our texture will
    // flip when going between mip levels.
    gl_Position.y = -gl_Position.y;
}