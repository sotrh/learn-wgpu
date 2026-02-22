import { defineClientConfig } from "vuepress/client";

import WasmExample from "./components/WasmExample.vue";
import AutoGithubLink from "./components/AutoGithubLink.vue"
import RecentArticles from "./components/RecentArticles.vue"

export default defineClientConfig({
  enhance({ app }) {
    app.component("WasmExample", WasmExample);
    app.component("AutoGithubLink", AutoGithubLink);
    app.component("RecentArticles", RecentArticles);
  },
});