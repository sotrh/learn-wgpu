use glob::glob;
use failure::bail;
use std::fs::{read_to_string, write};
use std::path::{PathBuf};

struct ShaderData {
    src: String,
    src_path: PathBuf,
    spv_path: PathBuf,
    kind: shaderc::ShaderKind,
}

impl ShaderData {
    pub fn load(src_path: PathBuf) -> Result<Self, failure::Error> {
        let extension = src_path.extension().unwrap().to_str().unwrap();
        let kind = match extension {
            "vert" => shaderc::ShaderKind::Vertex,
            "frag" => shaderc::ShaderKind::Fragment,
            "comp" => shaderc::ShaderKind::Compute,
            _ => bail!("Unsupported shader: {}", src_path.display()),
        };

        let src = read_to_string(src_path.clone())?;
        let spv_path = src_path.with_extension(format!("{}.spv", extension));

        Ok(Self { src, src_path, spv_path, kind })
    }
}

fn main() {
    // This tells cargo to rerun this script if something in /src/ changes.
    println!("cargo:rerun-if-changed=src/*");
    
    // Collect all shaders recursively within /src/
    let mut shader_paths = [
        glob("./src/**/*.vert").unwrap(),
        glob("./src/**/*.frag").unwrap(),
        glob("./src/**/*.comp").unwrap(),
    ];
    
    // This could be parallelized
    let shaders = shader_paths.iter_mut()
        .flatten()
        .map(|glob_result| {
            ShaderData::load(glob_result.unwrap()).unwrap()
        })
        .collect::<Vec<ShaderData>>();

    let mut compiler = shaderc::Compiler::new().unwrap();

    // This can't be parallelized. The [shaderc::Compiler] is not
    // thread safe. Also, it creates a lot of resources. You could
    // spawn multiple processes to handle this, but it would probably
    // be better just to only compile shaders that have been changed
    // recently.
    for shader in shaders {
        let compiled = compiler.compile_into_spirv(
            &shader.src, 
            shader.kind, 
            &shader.src_path.to_str().unwrap(), 
            "main", 
            None
        ).unwrap();
        write(shader.spv_path, compiled.as_binary_u8()).unwrap();
    }
}