use tutorial13_threading::run;

fn main() {
    pollster::block_on(run());
}