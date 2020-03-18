pub trait Loopable {
    pub update(&mut self) -> Option<Vec<wgpu::CommandBuffer>>,
    pub render(&mut self) -> Option<Vec<wgpu::CommandBuffer>>,
}