# Introduction

## What is wgpu?

[Wgpu](https://github.com/gfx-rs/wgpu) is a Rust implementation of the [WebGPU API spec](https://gpuweb.github.io/gpuweb/). WebGPU is a specification published by the GPU for the Web Community Group. It aims to allow web code access to GPU functions in a safe and reliable manner. It does this by mimicking the Vulkan API, and translating that down to whatever API the host hardware is using (ie. DirectX, Metal, Vulkan).

Wgpu is still in development, so some of this doc is subject to change.

## Why Rust?

Wgpu actually has C bindings to allow you to write C/C++ code with it, as well as use other languages that interface with C. That being said, wgpu is written in Rust, and it has some convenient Rust bindings that don't have to jump through any hoops. On top of that, I've been enjoying writing in Rust.

You should be fairly familiar with Rust before using this tutorial as I won't go into much detail on Rust syntax. If you're not super comfortable with Rust you can review the [Rust tutorial](https://www.rust-lang.org/learn). You should also be familiar with [Cargo](https://doc.rust-lang.org/cargo/).

I'm using this project to learn wgpu myself, so I might miss some important details, or explain things badly. I'm always open to constructive feedback.

## Contribution and Support

* I accept pull requests ([GitHub repo](https://github.com/sotrh/learn-wgpu)) for fixing issues with this tutorial such as typos, incorrect information, and other inconsistencies.
* Due to wgpu's rapidly changing api, I'm not accepting any new pull requests for showcase demos.
* If you want to support me directly, check out my [patreon](https://www.patreon.com/sotrh)!

## Translations

* [中文版: 增加了与 App 的集成与调试系列章节](https://jinleili.github.io/learn-wgpu-zh/)

## Special thanks to these patrons

* David Laban
* Bernard Llanos
* Ian Gowen
* Aron Granberg
* 折登 樹
* Julius Liu
* Jani Turkia
* Lions Heart
* Filip
* IC
* papyDoctor
* Feng Liang
* Jan Šipr
* Joris Willems
* Mattia Samiolo
* Lennart
* Paul E Hansen
* Gunstein Vatnar
* Nico Arbogast
* Dude
* Youngsuk Kim
* Alexander Kabirov
* charlesk
* Danny McGee
* yutani
* Eliot Bolduc
* Ben Anderson
* Thunk
* Craft Links
* Zeh Fernando
* Ken K
* Ryan
* Felix
* Tema
* 大典 加藤
* Andrea Postal
* Davide Prati
* dadofboi
* Beryesa
* Dzianis Sheka
* George Offley
* Imbris
* Maximilian Temeschinko
* Michael Trainor
