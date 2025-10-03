use anyhow::Context;
use glob::glob;
use naga::{back::wgsl, front::glsl::Frontend};
use naga::front::glsl::Options;
use rayon::prelude::*;
use std::{fs::read_to_string, path::PathBuf};

pub fn load_shader(src_path: PathBuf) -> anyhow::Result<()> {
    let extension = src_path
        .extension()
        .context("File has no extension")?
        .to_str()
        .context("Extension cannot be converted to &str")?;
    let kind = match extension {
        "vert" => naga::ShaderStage::Vertex,
        "frag" => naga::ShaderStage::Fragment,
        "comp" => naga::ShaderStage::Compute,
        _ => anyhow::bail!("Unsupported shader: {}", src_path.display()),
    };

    let src = read_to_string(src_path.clone())?;
    // let spv_path = src_path.with_extension(format!("{}.spv", extension));
    let wgsl_path = src_path.with_extension(format!("{}.wgsl", extension));

    let mut parser = Frontend::default();
    let options = Options::from(kind);
    let module = match parser.parse(&options, &src) {
        Ok(it) => it,
        Err(errors) => {
            anyhow::bail!(
                "Failed to compile shader: {}\nErrors:\n{:#?}",
                src_path.display(),
                errors
            );
        }
    };

    let info = naga::valid::Validator::new(
        naga::valid::ValidationFlags::all(),
        naga::valid::Capabilities::empty(),
    )
    .validate(&module)?;
    let flags = wgsl::WriterFlags::empty();
    std::fs::write(wgsl_path, wgsl::write_string(&module, &info, flags)?)?;

    Ok(())
}

fn main() -> anyhow::Result<()> {
    // This tells cargo to rerun this script if something in /src/ changes.
    println!("cargo:rerun-if-changed=src/*");

    // Collect all shaders recursively within /src/
    // UDPATED!
    let shader_paths = {
        let mut data = Vec::new();
        data.extend(glob("./src/**/*.vert")?);
        data.extend(glob("./src/**/*.frag")?);
        data.extend(glob("./src/**/*.comp")?);
        data
    };

    // UPDATED!
    // This is parallelized
    shader_paths
        .into_par_iter()
        .map(|glob_result| load_shader(glob_result?))
        .collect::<Vec<anyhow::Result<_>>>()
        .into_iter()
        .collect::<anyhow::Result<Vec<_>>>()?;

    // This tells cargo to rerun this script if something in /res/ changes.
    // println!("cargo:rerun-if-changed=res/*");

    // let out_dir = env::var("OUT_DIR")?;
    // let mut copy_options = CopyOptions::new();
    // let mut paths_to_copy = Vec::new();
    // copy_options.overwrite = true;
    // paths_to_copy.push("res/");
    // copy_items(&paths_to_copy, out_dir, &copy_options)?;

    Ok(())
}
