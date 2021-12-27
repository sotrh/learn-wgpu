use anyhow::*;
use fs_extra::copy_items;
use fs_extra::dir::CopyOptions;
use glob::glob;
use naga::back::wgsl;
use naga::front::glsl::Options;
use naga::front::glsl::Parser;
use rayon::prelude::*;
use std::env;
use std::{fs::read_to_string, path::PathBuf};
use std::result::Result::Ok;

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
        _ => bail!("Unsupported shader: {}", src_path.display()),
    };

    let src = read_to_string(src_path.clone())?;
    // let spv_path = src_path.with_extension(format!("{}.spv", extension));
    let wgsl_path = src_path.with_extension(format!("{}.wgsl", extension));

    let mut parser = Parser::default();
    let options = Options::from(kind);
    let module = match parser.parse(&options, &src) {
        Ok(it) => it,
        Err(errors) => {
            bail!(
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
    std::fs::write(wgsl_path, wgsl::write_string(&module, &info)?)?;

    // let flags = spv::WriterFlags::DEBUG | spv::WriterFlags::ADJUST_COORDINATE_SPACE;
    // let options = spv::Options {
    //     flags,
    //     ..Default::default()
    // };
    // let spv = spv::write_vec(&module, &info, &options)?;
    // let dis = rspirv::dr::load_words(spv)
    //     .expect("Unable to disassemble shader")
    //     .disassemble();
    // std::fs::write(spv_path, &spv)?;

    Ok(())
}

fn main() -> Result<()> {
    // This tells cargo to rerun this script if something in /src/ changes.
    println!("cargo:rerun-if-changed=src/*");

    // Collect all shaders recursively within /src/
    // UDPATED!
    let shader_paths = {
        let mut data = Vec::new();
        data.extend(glob("./res/**/*.vert")?);
        data.extend(glob("./res/**/*.frag")?);
        data.extend(glob("./res/**/*.comp")?);
        data
    };

    // UPDATED!
    // This is parallelized
    shader_paths
        .into_par_iter()
        .map(|glob_result| load_shader(glob_result?))
        .collect::<Vec<Result<_>>>()
        .into_iter()
        .collect::<Result<Vec<_>>>()?;

    // This tells cargo to rerun this script if something in /res/ changes.
    println!("cargo:rerun-if-changed=res/*");

    let out_dir = env::var("OUT_DIR")?;
    let mut copy_options = CopyOptions::new();
    let mut paths_to_copy = Vec::new();
    copy_options.overwrite = true;
    paths_to_copy.push("res/");
    copy_items(&paths_to_copy, out_dir, &copy_options)?;

    Ok(())
}
