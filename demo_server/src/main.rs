use std::{
    env, fs, io::{BufRead, BufReader, Write}, net::{TcpListener, TcpStream}, path::{Path, PathBuf}
};

fn main() -> anyhow::Result<()> {
    env_logger::init();

    let listener = TcpListener::bind("127.0.0.1:7878")?;

    for stream in listener.incoming() {
        let stream = stream?;
        handle_connection(stream)?;
    }

    Ok(())
}

fn handle_connection(mut stream: TcpStream) -> anyhow::Result<()> {
    let buf_reader = BufReader::new(&mut stream);
    let request_line = buf_reader.lines().next().unwrap()?;

    let mut split = request_line.split(" ");
    let method = split.next().unwrap();
    let path = Path::new(split.next().unwrap());
    let protocol = split.next().unwrap();
    log::info!("{method} {path:?}");

    let root = env::current_dir()?;

    let path = if path.is_dir() {
        root.join(path).join("index.html")
    } else {
        root.join(path)
    };

    log::debug!("{path:?}");

    let (status_line, data) = match (method, protocol) {
        ("GET", "HTTP/1.1 200 OK") => {
            if let Ok(contents) = get(path) {
                ("HTTP/1.1 200 OK", contents)
            } else {
                ("HTTP/1.1 404 NOT FOUND", b"Not Found".to_vec())
            }
        }
        _ => ("HTTP/1.1 404 NOT FOUND", b"Not Found".to_vec()),
    };

    let length = data.len();
    let mut response = format!("{status_line}\r\nContent-Length: {length}\r\n\r\n")
        .as_bytes()
        .to_vec();
    response.extend_from_slice(&data);

    stream.write_all(&response)?;

    Ok(())
}

fn get(path: PathBuf) -> anyhow::Result<Vec<u8>> {
    let path = fs::canonicalize(path)?;
    Ok(fs::read(path)?)
}
