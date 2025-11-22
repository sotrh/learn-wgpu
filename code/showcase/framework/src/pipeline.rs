use std::num::NonZeroU32;

use crate::model::Vertex;
use anyhow::*;

pub struct RenderPipelineBuilder<'a> {
    layout: Option<&'a wgpu::PipelineLayout>,
    vertex_shader: Option<wgpu::ShaderModuleDescriptor<'a>>,
    fragment_shader: Option<wgpu::ShaderModuleDescriptor<'a>>,
    front_face: wgpu::FrontFace,
    cull_mode: Option<wgpu::Face>,
    depth_bias: i32,
    depth_bias_slope_scale: f32,
    depth_bias_clamp: f32,
    primitive_topology: wgpu::PrimitiveTopology,
    color_states: Vec<Option<wgpu::ColorTargetState>>,
    depth_stencil: Option<wgpu::DepthStencilState>,
    index_format: wgpu::IndexFormat,
    vertex_buffers: Vec<wgpu::VertexBufferLayout<'a>>,
    sample_count: u32,
    sample_mask: u64,
    alpha_to_coverage_enabled: bool,
    multiview: Option<NonZeroU32>,
    maybe_fragment_entry_point: Option<&'a str>,
    maybe_vertex_entry_point: Option<&'a str>,
}

impl<'a> RenderPipelineBuilder<'a> {
    pub fn new() -> Self {
        Self {
            layout: None,
            vertex_shader: None,
            fragment_shader: None,
            front_face: wgpu::FrontFace::Ccw,
            cull_mode: None,
            depth_bias: 0,
            depth_bias_slope_scale: 0.0,
            depth_bias_clamp: 0.0,
            primitive_topology: wgpu::PrimitiveTopology::TriangleList,
            color_states: Vec::new(),
            depth_stencil: None,
            index_format: wgpu::IndexFormat::Uint32,
            vertex_buffers: Vec::new(),
            sample_count: 1,
            sample_mask: !0,
            alpha_to_coverage_enabled: false,
            multiview: None,
            maybe_vertex_entry_point: None,
            maybe_fragment_entry_point: None,
        }
    }

    pub fn layout(&mut self, layout: &'a wgpu::PipelineLayout) -> &mut Self {
        self.layout = Some(layout);
        self
    }

    pub fn vertex_shader(&mut self, src: wgpu::ShaderModuleDescriptor<'a>) -> &mut Self {
        self.vertex_shader = Some(src);
        self
    }

    pub fn vertex_entry_point(&mut self, entry_point: &'a str) -> &mut Self {
        self.maybe_vertex_entry_point = Some(entry_point);
        self
    }

    pub fn fragment_shader(&mut self, src: wgpu::ShaderModuleDescriptor<'a>) -> &mut Self {
        self.fragment_shader = Some(src);
        self
    }

    pub fn fragment_entry_point(&mut self, entry_point: &'a str) -> &mut Self {
        self.maybe_fragment_entry_point = Some(entry_point);
        self
    }

    #[allow(dead_code)]
    pub fn front_face(&mut self, ff: wgpu::FrontFace) -> &mut Self {
        self.front_face = ff;
        self
    }

    #[allow(dead_code)]
    pub fn cull_mode(&mut self, cm: Option<wgpu::Face>) -> &mut Self {
        self.cull_mode = cm;
        self
    }

    #[allow(dead_code)]
    pub fn depth_bias(&mut self, db: i32) -> &mut Self {
        self.depth_bias = db;
        self
    }

    #[allow(dead_code)]
    pub fn depth_bias_slope_scale(&mut self, dbss: f32) -> &mut Self {
        self.depth_bias_slope_scale = dbss;
        self
    }

    #[allow(dead_code)]
    pub fn depth_bias_clamp(&mut self, dbc: f32) -> &mut Self {
        self.depth_bias_clamp = dbc;
        self
    }

    #[allow(dead_code)]
    pub fn primitive_topology(&mut self, pt: wgpu::PrimitiveTopology) -> &mut Self {
        self.primitive_topology = pt;
        self
    }

    pub fn color_state(&mut self, cs: wgpu::ColorTargetState) -> &mut Self {
        self.color_states.push(Some(cs));
        self
    }

    /// Helper method for [RenderPipelineBuilder::color_state]
    pub fn color_solid(&mut self, format: wgpu::TextureFormat) -> &mut Self {
        self.color_state(wgpu::ColorTargetState {
            format,
            blend: None,
            write_mask: wgpu::ColorWrites::ALL,
        })
    }

    pub fn depth_stencil(&mut self, dss: wgpu::DepthStencilState) -> &mut Self {
        self.depth_stencil = Some(dss);
        self
    }

    /// Helper method for [RenderPipelineBuilder::depth_stencil]
    pub fn depth_no_stencil(
        &mut self,
        format: wgpu::TextureFormat,
        depth_write_enabled: bool,
        depth_compare: wgpu::CompareFunction,
    ) -> &mut Self {
        self.depth_stencil(wgpu::DepthStencilState {
            format,
            depth_write_enabled,
            depth_compare,
            stencil: Default::default(),
            bias: wgpu::DepthBiasState::default(),
        })
    }

    /// Helper method for [RenderPipelineBuilder::depth_no_stencil]
    pub fn depth_format(&mut self, format: wgpu::TextureFormat) -> &mut Self {
        self.depth_no_stencil(format, true, wgpu::CompareFunction::Less)
    }

    #[allow(dead_code)]
    pub fn index_format(&mut self, ifmt: wgpu::IndexFormat) -> &mut Self {
        self.index_format = ifmt;
        self
    }

    pub fn vertex_buffer<V: Vertex>(&mut self) -> &mut Self {
        self.vertex_buffers.push(V::desc());
        self
    }

    pub fn vertex_buffer_desc(&mut self, vb: wgpu::VertexBufferLayout<'a>) -> &mut Self {
        self.vertex_buffers.push(vb);
        self
    }

    #[allow(dead_code)]
    pub fn sample_count(&mut self, sc: u32) -> &mut Self {
        self.sample_count = sc;
        self
    }

    #[allow(dead_code)]
    pub fn sample_mask(&mut self, sm: u64) -> &mut Self {
        self.sample_mask = sm;
        self
    }

    #[allow(dead_code)]
    pub fn alpha_to_coverage_enabled(&mut self, atce: bool) -> &mut Self {
        self.alpha_to_coverage_enabled = atce;
        self
    }

    pub fn multiview(&mut self, value: Option<NonZeroU32>) -> &mut Self {
        self.multiview = value;
        self
    }

    pub fn build(&mut self, device: &wgpu::Device) -> Result<wgpu::RenderPipeline> {
        let layout = self.layout.clone();

        // Render pipelines always have a vertex shader, but due
        // to the way the builder pattern works, we can't
        // guarantee that the user will specify one, so we'll
        // just return an error if they forgot.
        //
        // We could supply a default one, but a "default" vertex
        // could take on many forms. An error is much more
        // explicit.
        if self.vertex_shader.is_none() {
            bail!("No vertex shader supplied!")
        }
        let vs = create_shader_module(
            device,
            self.vertex_shader
                .take()
                .context("Please include a vertex shader")?,
        );

        let frag_module = self
            .fragment_shader
            .clone()
            .map(|src| create_shader_module(device, src));
        let frag_state = frag_module.as_ref().map(|module| {
            wgpu::FragmentState {
                module,
                entry_point: self.maybe_fragment_entry_point,
                compilation_options: Default::default(),
                targets: &self.color_states,
            }
        });

        let pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("Render Pipeline"),
            layout,
            vertex: wgpu::VertexState {
                module: &vs,
                entry_point: self.maybe_vertex_entry_point,
                buffers: &self.vertex_buffers,
                compilation_options: Default::default(),
            },
            fragment: frag_state,
            primitive: wgpu::PrimitiveState {
                topology: self.primitive_topology,
                front_face: self.front_face,
                cull_mode: self.cull_mode,
                strip_index_format: None,
                polygon_mode: wgpu::PolygonMode::Fill,
                ..Default::default()
            },
            depth_stencil: self.depth_stencil.clone(),
            multisample: wgpu::MultisampleState {
                count: self.sample_count,
                mask: self.sample_mask,
                alpha_to_coverage_enabled: self.alpha_to_coverage_enabled,
            },
            multiview: self.multiview,
            cache: None,
        });
        Ok(pipeline)
    }
}

fn create_shader_module(
    device: &wgpu::Device,
    spirv: wgpu::ShaderModuleDescriptor,
) -> wgpu::ShaderModule {
    device.create_shader_module(spirv)
}
