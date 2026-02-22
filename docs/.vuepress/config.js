import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";

import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineUserConfig({
  base: "/learn-wgpu/",
  title: "Learn Wgpu",
  public: "res",
  bundler: viteBundler({
    viteOptions: {
      plugins: [wasm(), topLevelAwait()],
    },
  }),
  theme: defaultTheme({
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Beginner",
        collapsable: false,
        children: [
          "/beginner/tutorial1-window/",
          "/beginner/tutorial2-surface/",
          "/beginner/tutorial3-pipeline/",
          "/beginner/tutorial4-buffer/",
          "/beginner/tutorial5-textures/",
          "/beginner/tutorial6-uniforms/",
          "/beginner/tutorial7-instancing/",
          "/beginner/tutorial8-depth/",
          "/beginner/tutorial9-models/",
        ],
      },
      {
        text: "Intermediate",
        collapsable: false,
        children: [
          "/intermediate/tutorial10-lighting/",
          "/intermediate/tutorial11-normals/",
          "/intermediate/tutorial12-camera/",
          "/intermediate/tutorial13-hdr/",
        ],
      },
      {
        text: "Compute Pipelines",
        collapsable: true,
        children: ["/compute/introduction/", "/compute/sorting/"],
      },
      {
        text: "Showcase",
        collapsable: true,
        children: [
          "/showcase/",
          "/showcase/mipmaps/",
          "/showcase/stencil/",
          "/showcase/windowless/",
          "/showcase/gifs/",
          "/showcase/pong/",
          "/showcase/alignment/",
          // '/showcase/compute/',
        ],
      },
      {
        text: "News",
        collapsable: true,
        children: [
          "/news/28.0/",
          "/news/27.0/",
          "/news/26.0.1/",
          "/news/update-to-winit-0.30/",
          "/news/25.0/",
          "/news/24.0/",
          "/news/22.0/",
          "/news/0.18 and hdr/",
          "/news/0.17/",
          "/news/0.16/",
          "/news/0.15/",
          "/news/0.14/",
          "/news/0.13/",
          "/news/0.12/",
          "/news/pre-0.12/",
        ],
      },
    ],
  }),
});
