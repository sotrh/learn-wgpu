use crate::model::Vertex;
use anyhow::*;

pub struct RenderPipelineBuilder<'a> {
    layout: Option<&'a wgpu::PipelineLayout>,
    vertex_shader: Option<wgpu::ShaderModuleSource<'a>>,
    fragment_shader: Option<wgpu::ShaderModuleSource<'a>>,
    front_face: wgpu::FrontFace,
    cull_mode: wgpu::CullMode,
    depth_bias: i32,
    depth_bias_slope_scale: f32,
    depth_bias_clamp: f32,
    primitive_topology: wgpu::PrimitiveTopology,
    color_states: Vec<wgpu::ColorStateDescriptor>,
    depth_stencil: Option<wgpu::DepthStencilState>,
    index_format: wgpu::IndexFormat,
    vertex_buffers: Vec<wgpu::VertexBufferLayout<'a>>,
    sample_count: u32,
    sample_mask: u32,
    alpha_to_coverage_enabled: bool,
}

impl<'a> RenderPipelineBuilder<'a> {
    pub fn new() -> Self {
        Self {
            layout: None,
            vertex_shader: None,
            fragment_shader: None,
            front_face: wgpu::FrontFace::Ccw,
            cull_mode: wgpu::CullMode::None,
            depth_bias: 0,
            depth_bias_slope_scale: 0.0,
            depth_bias_clamp: 0.0,
            primitive: wgpu::PrimitiveState {
                topology: wgpu::PrimitiveTopology::TriangleList,
                strip_index_format: None,
                front_face: wgpu::FrontFace::Ccw,
                cull_mode: wgpu::CullMode::Back,
                // Setting this to anything other than Fill requires Features::NON_FILL_POLYGON_MODE
                polygon_mode: wgpu::PolygonMode::Fill,
            },
            color_states: Vec::new(),
            depth_stencil: None,
            index_format: wgpu::IndexFormat::Uint32,
            vertex_buffers: Vec::new(),
        }
    }

    pub fn layout(&mut self, layout: &'a wgpu::PipelineLayout) -> &mut Self {
        self.layout = Some(layout);
        self
    }

    pub fn vertex_shader(&mut self, src: wgpu::ShaderModuleSource<'a>) -> &mut Self {
        self.vertex_shader = Some(src);
        self
    }

    pub fn fragment_shader(&mut self, src: wgpu::ShaderModuleSource<'a>) -> &mut Self {
        self.fragment_shader = Some(src);
        self
    }

    #[allow(dead_code)]
    pub fn front_face(&mut self, ff: wgpu::FrontFace) -> &mut Self {
        self.front_face = ff;
        self
    }

    #[allow(dead_code)]
    pub fn cull_mode(&mut self, cm: wgpu::CullMode) -> &mut Self {
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

    pub fn color_state(&mut self, cs: wgpu::ColorStateDescriptor) -> &mut Self {
        self.color_states.push(cs);
        self
    }

    /// Helper method for [RenderPipelineBuilder::color_state]
    pub fn color_solid(&mut self, format: wgpu::TextureFormat) -> &mut Self {
        self.color_state(wgpu::ColorStateDescriptor {
            format,
            alpha_blend: wgpu::BlendDescriptor::REPLACE,
            color_blend: wgpu::BlendDescriptor::REPLACE,
            write_mask: wgpu::ColorWrite::ALL,
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
    pub fn sample_mask(&mut self, sm: u32) -> &mut Self {
        self.sample_mask = sm;
        self
    }

    #[allow(dead_code)]
    pub fn alpha_to_coverage_enabled(&mut self, atce: bool) -> &mut Self {
        self.alpha_to_coverage_enabled = atce;
        self
    }

    pub fn build(&mut self, device: &wgpu::Device) -> Result<wgpu::RenderPipeline> {
        // We need a layout
        if self.layout.is_none() {
            bail!("No pipeline layout supplied!");
        }
        let layout = self.layout.unwrap();

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

        // The fragment shader is optional (IDK why, but it is).
        // Having the shader be optional is giving me issues with
        // the borrow checker so I'm going to use a default shader
        // if the user doesn't supply one.
        let fs_spv = self
            .fragment_shader
            .take()
            .context("Please include a fragment shader")?;
        let fs = create_shader_module(device, fs_spv);

        let pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
            label: Some("Render Pipeline"),
            layout: Some(&layout),
            vertex: wgpu::VertexState {
                module: &vs,
                entry_point: "main",
            },
            fragment: Some(wgpu::FragmentState {
                module: &fs,
                entry_point: "main",
            }),
            rasterization_state: Some(wgpu::RasterizationStateDescriptor {
                front_face: self.front_face,
                cull_mode: self.cull_mode,
                depth_bias: self.depth_bias,
                depth_bias_slope_scale: self.depth_bias_slope_scale,
                depth_bias_clamp: self.depth_bias_clamp,
                clamp_depth: false,
            }),
            primitive_topology: self.primitive_topology,
            color_states: &self.color_states,
            depth_stencil: self.depth_stencil.clone(),
            vertex_state: wgpu::VertexStateDescriptor {
                index_format: self.index_format,
                vertex_buffers: &self.vertex_buffers,
            },
            sample_count: self.sample_count,
            sample_mask: self.sample_mask,
            alpha_to_coverage_enabled: self.alpha_to_coverage_enabled,
        });
        Ok(pipeline)
    }
}

fn create_shader_module(
    device: &wgpu::Device,
    spirv: wgpu::ShaderModuleSource,
) -> wgpu::ShaderModule {
    device.create_shader_module(spirv)
}
