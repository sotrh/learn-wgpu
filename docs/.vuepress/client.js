import { defineClientConfig } from "vuepress/client";
import WasmExample from "./components/WasmExample.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("WasmExample", WasmExample);
  },
});