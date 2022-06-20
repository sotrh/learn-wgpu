use threading::run;

fn main() {
    async_std::task::block_on(run());
}