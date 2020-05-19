// use cgmath::prelude::*;

pub fn random_vec2() -> cgmath::Vector2<f32> {
    let theta: f32 = rand::random();
    cgmath::Vector2::new(
        theta.cos(),
        theta.sin(),
    )
}

pub fn random_vec2_scaled(scale: f32) -> cgmath::Vector2<f32> {
    random_vec2() * scale
}

pub fn size_of_slice<T: Sized>(slice: &[T]) -> usize {
    std::mem::size_of::<T>() * slice.len()
}