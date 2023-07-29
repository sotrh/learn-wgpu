use std::marker::PhantomData;

pub struct Binder<B> {
    layout: wgpu::BindGroupLayout,
    _marker: PhantomData<B>
}

// pub trait Uniform