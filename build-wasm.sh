export RES_PATH=learn-wgpu
# (trap 'killall background' INT;
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/pong code/showcase/pong
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial1_window code/beginner/tutorial1-window
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial2_surface code/beginner/tutorial2-surface
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial3_pipeline code/beginner/tutorial3-pipeline
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial4_buffer code/beginner/tutorial4-buffer
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial5_textures code/beginner/tutorial5-textures
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial6_uniforms code/beginner/tutorial6-uniforms
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial7_instancing code/beginner/tutorial7-instancing
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial8_depth code/beginner/tutorial8-depth
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial9_models code/beginner/tutorial9-models
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial10_lighting code/intermediate/tutorial10-lighting
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial11_normals code/intermediate/tutorial11-normals
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial12_camera code/intermediate/tutorial12-camera
wasm-pack build --out-dir ../../../docs/.vuepress/components/wasm/tutorial13_threading code/intermediate/tutorial13-threading
# )
