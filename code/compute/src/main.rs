fn main() {
    env_logger::init();
    #[cfg(feature="introduction")]
    compute::introduction::run().unwrap();
    #[cfg(feature="sort")]
    compute::sort::run().unwrap();
}