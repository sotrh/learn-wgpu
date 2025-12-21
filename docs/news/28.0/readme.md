# Version 28.0

<https://github.com/gfx-rs/wgpu/releases/tag/v28.0.0>

- wgpu::FilterMode -> wgpu::MipmapFilterMode for mipmaps
- RenderPipelineDescriptor multiview -> multiview_mask
  - also change from number of layers to mask
  - render pass must match (or check?)
- push constants changed to immediates
