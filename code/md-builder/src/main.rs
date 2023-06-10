use std::path::Path;

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("Error processing file: {0}")]
    Io(#[from] std::io::Error),
}

fn main() -> Result<(), Error> {
    let dir_path = match std::env::args().skip(1).next() {
        Some(s) => s,
        None => {
            println!("Usage: md-builder 'directory with markdown'");
            std::process::exit(1);
        }
    };

    let dir = std::fs::read_dir(dir_path)?;

    

    Ok(())
}

fn process_file<P: AsRef<Path>>(path: P) -> Result<(), Error> {
    let path = path.as_ref();
    Ok(())
}