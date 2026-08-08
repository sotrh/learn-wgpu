# Drawing Text

<!-- Some intro about writing fonts -->

While there are tons of libraries that allow you to draw text,
I've allows wanted to experiment with drawing it from scratch.
Depending on the language and the font, text rendering can vary
from being simple to being very complex. For English and mostly
ASCII characters it's fairly simple. Let's get into it!

## Bitmaps Fonts

One of the oldest ways to draw text is to take a texture with
all the letters and other glyphs you want to render and then
draw quads with uv coordinates matching the letters you want.
For example given a font 

![Text with a sans-serif font](./sans.png)
![Text with a medieval style font](./medieval.png)

## Demo

<WasmExample example="text"></WasmExample>
