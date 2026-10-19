pub mod font;

use std::{collections::HashMap, path::PathBuf};

use framework::{Camera, Projection};
use glam::{Vec2, Vec4};

use crate::font::TextAlignment;

#[derive(Debug, serde::Deserialize, serde::Serialize)]
pub struct TextJson {
    pub fonts: HashMap<String, PathBuf>,
    pub text_groups: HashMap<String, HashMap<String, TextBox>>,
}

#[derive(Debug, serde::Deserialize, serde::Serialize)]
pub struct TextBox {
    pub font: String,
    pub text: String,
    #[serde(default = "default_text_color")]
    pub color: Vec4,
    #[serde(default)]
    pub position: Vec2,
    #[serde(default)]
    pub horizontal: TextAlignment,
    #[serde(default)]
    pub vertical: TextAlignment,
}

pub fn default_text_color() -> Vec4 {
    Vec4::new(0.9, 0.9, 0.9, 1.0)
}

pub struct TextCamera {
    width: f32,
    height: f32,
}

impl TextCamera {
    pub fn new(width: f32, height: f32) -> Self {
        Self { width, height }
    }

    pub fn resize(&mut self, width: f32, height: f32) {
        self.width = width;
        self.height = height;
    }
}

impl Camera for TextCamera {
    fn view(&self) -> glam::Mat4 {
        glam::Mat4::IDENTITY
    }
}

impl Projection for TextCamera {
    fn proj(&self) -> glam::Mat4 {
        glam::Mat4::orthographic_rh(0.0, self.width, 0.0, self.height, 0.0, 1.0)
    }
}
