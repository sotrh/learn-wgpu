use tutorial13_hdr::run;

fn main() {
    pollster::block_on(run()).unwrap();
}
