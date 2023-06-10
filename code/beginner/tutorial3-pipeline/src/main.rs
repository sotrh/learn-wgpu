use tutorial3_pipeline::run;

fn main() {
    pollster::block_on(run());
}
