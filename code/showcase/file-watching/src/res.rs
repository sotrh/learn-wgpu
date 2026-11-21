use std::path::PathBuf;

pub struct ResourceRequest {
    path: PathBuf,
    // on_complete: Box<FnMut()
}

fn start_resource_thread() {
    // let (send_request)
    
    std::thread::spawn(move || {
        let (tx, rx) = std::sync::mpsc::channel();
        let watcher = notify::recommended_watcher(tx);

    });
}