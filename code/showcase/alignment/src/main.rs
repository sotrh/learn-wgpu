#![allow(dead_code)]

// by default rust does not give any guarantees about the layout of structs
struct AnyBlock {
    a: f32,
    b: Anon,
    c: f32,
    d: [f32; 3],
    e: [[f32; 3]; 3],
    f: f32,
}

struct Anon {
    u: f32,
    v: f32,
}

mod std140 {
    pub struct AnyBlock {
        a: f32,
        _p1: [u8; 3 * 4],
        b: Anon,
        _p2: [u8; 2 * 4],
        c: f32,
        _p3: [u8; 3 * 4],
        d: [[f32; 4]; 3],
        // each array member has four byte padding at the end
        e: [[f32; 4]; 3],
        f: f32,
        _p4: [u8; 3 * 4],
    }

    struct Anon {
        u: f32,
        v: f32,
    }
}

mod std430 {

    #[repr(C)]
    pub struct AnyBlock {
        a: f32,
        b: Anon,
        c: f32,
        // d has four byte padding at the end
        d: [f32; 4],
        // each array member has four byte padding at the end
        e: [[f32; 4]; 3],
        f: f32,
        _p: [u8; 3 * 4],
    }

    struct Anon {
        u: f32,
        v: f32,
    }
}

fn main() {
    assert_eq!(std::mem::size_of::<AnyBlock>(), 68);
    assert_eq!(std::mem::size_of::<std140::AnyBlock>(), 160);
    assert_eq!(std::mem::size_of::<std430::AnyBlock>(), 96);
}
