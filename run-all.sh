#!/bin/bash

(trap 'kill 0' SIGINT;
cargo run --bin tutorial1-window &
cargo run --bin tutorial2-surface &
cargo run --bin tutorial2-challenge &
cargo run --bin tutorial3-pipeline &
cargo run --bin tutorial3-challenge &
cargo run --bin tutorial4-buffer &
cargo run --bin tutorial4-challenge &
cargo run --bin tutorial5-textures &
cargo run --bin tutorial5-challenge &
cargo run --bin tutorial6-uniforms &
cargo run --bin tutorial6-challenge &
cargo run --bin tutorial7-instancing &
cargo run --bin tutorial7-challenge &
cargo run --bin tutorial8-depth &
cargo run --bin tutorial8-challenge &
cargo run --bin tutorial9-models &
cargo run --bin tutorial10-lighting &
cargo run --bin tutorial11-normals &
cargo run --bin tutorial12-camera &
cargo run --bin tutorial13-hdr &
cargo run --bin windowless &
cargo run --bin gifs &
cargo run --bin compute
# cargo run --bin pong
)
