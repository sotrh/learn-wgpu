#!/usr/bin/env bash
# Adapted from https://github.com/gfx-rs/wgpu/blob/master/run-wasm-example.sh

set -e

cargo build --bin pong --target wasm32-unknown-unknown

mkdir -p target/wasm-examples/pong
wasm-bindgen --target web --out-dir target/wasm-examples/pong target/wasm32-unknown-unknown/debug/pong.wasm
cp index.template.html target/wasm-examples/pong/index.html