use pollster::FutureExt;

fn main() {
    env_logger::init();
    #[cfg(feature="introduction")]
    compute::introduction::run().block_on().unwrap();
    #[cfg(feature="sort")]
    compute::sort::run().block_on().unwrap();
}