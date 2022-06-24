# Procedural Terrain

Up to this point we've been working in an empty void. This is great when you want to get your shading code just right, but most applications will want to fill the screen more interesting things. You could aproach this in a variety of ways. You could create a bunch of models in Blender and load them into the scene. This method works great if you have some decent artistic skills, and some patience. I'm lacking in both those departments, so let's write some code to make something that looks nice.

TODO: 
- Note changes to `create_render_pipeline`
- Mention `swizzle` feature for cgmath
- Compare workgroups and workgroups sizes to nested for loops
    - Maybe make a diagram in blender?
- Change to camera movement speed