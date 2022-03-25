use tutorial13_threading::run;

fn main() {
    async_std::task::block_on(run());
}