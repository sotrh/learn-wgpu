use wasm_bindgen::prelude::*;

/// Wrapper around a function pointer
struct Work {
    func: Box<dyn FnOnce() + Send>,
}

/// Creates an offscreen canvas and webworker. The
/// offscreen canvas then gets sent to the webworker to render
/// an image use wgpu.
#[wasm_bindgen]
pub fn start() {
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();
    let canvas = document
        .get_element_by_id("canvas")
        .unwrap()
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .unwrap();

    let offscreen = canvas.transfer_control_to_offscreen().unwrap();

    let worker_script = r#"
        importScripts('./pkg/offscreen.js');

        async function init_wasm_in_worker() {
            
            self.onmessage = event => {
                let initialized = wasm_bindgen(...event.data).catch(err => {
                    // propagate error to main thread and quit out
                    setTimeout(() => { throw err; });
                    throw err;
                };

                self.onmessage = async event => {
                    // prevent attempting to execute multiple functions
                    // on this worker
                    self.onmessage = () => {};

                    await initialized;
                    wasm_bindgen.worker_entry_point(event.data);
                }
            }
        }

        init_wasm_in_worker();
    "#;

    let script_bytes = worker_script.as_bytes();
    let script_array = js_sys::Array::from_iter([js_sys::Uint8Array::from(script_bytes)].iter());

    let blob_properties = web_sys::BlobPropertyBag::new();
    blob_properties.set_type("application/javascript");

    let blob =
        web_sys::Blob::new_with_u8_array_sequence_and_options(&script_array, &blob_properties)
            .unwrap();

    let script_url = web_sys::Url::create_object_url_with_blob(&blob).unwrap();

    let worker = web_sys::Worker::new(&script_url).unwrap();

    // send the current WASM module and memory to the worker
    let array = js_sys::Array::new();
    array.push(&wasm_bindgen::module());
    array.push(&wasm_bindgen::memory());
    worker.post_message(&array).unwrap();

    // Then send the work to be done to worker
    #[cfg(target_arch = "wasm32")]
    {
        let work = Box::new(Work {
            func: Box::new(move || {
                wasm_bindgen_futures::spawn_local(async move {
                    // Create a wgpu context
                    let instance = wgpu::Instance::new(&Default::default());

                    let surface = instance
                        .create_surface(wgpu::SurfaceTarget::Offscreen(offscreen))
                        .unwrap();

                    let adapter = instance
                        .request_adapter(&wgpu::RequestAdapterOptions {
                            compatible_surface: Some(&surface),
                            ..Default::default()
                        })
                        .await
                        .unwrap();

                    let (device, queue) =
                        adapter.request_device(&Default::default()).await.unwrap();

                    let config = surface
                        .get_default_config(&adapter, offscreen.width(), offscreen.height())
                        .unwrap();

                    surface.configure(&device, &config);

                    let surface_texture = surface.get_current_texture().unwrap();

                    let surface_view = surface_texture.texture.create_view(&Default::default());

                    let mut encoder = device.create_command_encoder(&Default::default());

                    {
                        let pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                            label: Some("Offscreen render pass"),
                            color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                                view: &surface_view,
                                depth_slice: None,
                                resolve_target: None,
                                ops: wgpu::Operations {
                                    load: wgpu::LoadOp::Clear(wgpu::Color {
                                        r: 0.1,
                                        g: 0.2,
                                        b: 0.3,
                                        a: 1.0,
                                    }),
                                    store: wgpu::StoreOp::Store,
                                },
                            })],
                            ..Default::default()
                        });
                    }

                    queue.submit([encoder.finish()]);

                    surface_texture.present();
                })
            }),
        });

        let ptr = Box::into_raw(work);

        worker.post_message(&JsValue::from(ptr as u32)).unwrap();
    }

    // TODO: do I have to keep this thread alive?
}

/// Entry point for web worker. Executes one workload
#[wasm_bindgen]
pub fn worker_entry_point(ptr: u32) {
    let ptr = unsafe { Box::from_raw(ptr as *mut Work) };
    (ptr.func)();
}
