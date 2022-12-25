use cgmath::InnerSpace;

fn vmul(a: cgmath::Vector3<f32>, b: cgmath::Vector3<f32>) -> cgmath::Vector3<f32> {
    cgmath::Vector3::new(
        a.x * b.x,
        a.y * b.y,
        a.z * b.z,
    )
}

pub struct BoundingBox {
    pub min: cgmath::Vector3<f32>,
    pub max: cgmath::Vector3<f32>,
}

impl BoundingBox {
    pub fn expand(&mut self, p: cgmath::Vector3<f32>) {
        if p.x < self.min.x {
            self.min.x = p.x;
        }
        if p.y < self.min.y {
            self.min.y = p.y;
        }
        if p.z < self.min.z {
            self.min.z = p.z;
        }

        if p.x > self.max.x {
            self.max.x = p.x;
        }
        if p.y > self.max.y {
            self.max.y = p.y;
        }
        if p.z > self.max.z {
            self.max.z = p.z;
        }
    }

    pub fn combine(&mut self, b: &Self) {
        self.expand(b.min);
        self.expand(b.max);
    }

    pub fn intersect(&self, r: &Ray) -> Option<(cgmath::Vector3<f32>, f32)> {
        let tx1 = (self.min.x - r.orig.x) * r.invdir.x;
        let tx2 = (self.max.x - r.orig.x) * r.invdir.x;

        let mut tmin = tx1.min(tx2);
        let mut tmax = tx1.max(tx2);

        let ty1 = (self.min.y - r.orig.y) * r.invdir.y;
        let ty2 = (self.max.y - r.orig.y) * r.invdir.y;

        tmin = tmin.max(ty1.min(ty2));
        tmax = tmax.min(ty1.max(ty2));

        let tz1 = (self.min.z - r.orig.z) * r.invdir.z;
        let tz2 = (self.max.z - r.orig.z) * r.invdir.z;

        tmin = tmin.max(tz1.min(tz2));
        tmax = tmax.min(tz1.max(tz2));

        return if tmax >= tmin {
            let t = if tmin > 0.0 { tmin } else { tmax };
            let p = r.orig + r.dir * t;
            Some((p, t))
        } else {
            None
        };
    }
}

pub struct Ray {
    dir: cgmath::Vector3<f32>,
    orig: cgmath::Vector3<f32>,
    invdir: cgmath::Vector3<f32>,
}

impl Ray {
    pub fn new(dir: cgmath::Vector3<f32>, orig: cgmath::Vector3<f32>) -> Self {
        let invdir = 1.0 / dir;
        Self {
            dir,
            orig,
            invdir,
        }
    }

    pub fn with_start_end(start: cgmath::Vector3<f32>, end: cgmath::Vector3<f32>) -> Self {
        let dir = (end - start).normalize();
        Self::new(dir, start)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn vec3(x: f32, y: f32, z: f32) -> cgmath::Vector3<f32> {
        return cgmath::Vector3 { x, y, z }
    }

    #[test]
    fn box_ray_intersect() {
        let b = BoundingBox {
            min: cgmath::Vector3 { x: -1.0, y: -1.0, z: -1.0 },
            max: cgmath::Vector3 { x: 1.0, y: 1.0, z: 1.0 },
        };

        let test_data = [
            (Ray::new(vec3(0.0, 0.0, 1.0), vec3(0.0, 0.0, 0.0)), true),
            (Ray::new(vec3(0.0, 0.0, 1.0), vec3(0.0, 2.0, 0.0)), false),
        ];

        for (r, expected) in test_data {
            assert_eq!(b.intersect(&r).is_some(), expected);
        }
    }
}