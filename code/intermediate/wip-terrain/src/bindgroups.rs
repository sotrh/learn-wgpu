use std::marker::PhantomData;

#[allow(unused)]
pub struct Binder<B> {
    layout: wgpu::BindGroupLayout,
    _marker: PhantomData<B>,
}

// pub trait Uniform
