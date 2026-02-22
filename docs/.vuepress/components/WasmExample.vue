<template>
  <div id="wasm-example">
    <canvas v-if="!noCanvas" id="canvas"></canvas>
    <div v-if="loading" class="loading">Loading WebAssembly Demo...</div>
    <div v-if="exampleStarted && noCanvas">WebAssembly Demo Loaded!</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <button v-if="!exampleStarted && !autoLoad" @click="loadExample()" :disabled="loading">
      Click to start {{ exampleName }}!
    </button>
  </div>
</template>

<script>
// Found at https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export default {
  name: "WasmExample",
  props: {
    example: "",
    autoLoad: false,
    noCanvas: false,
  },
  data() {
    return {
      error: "",
      loading: false,
      exampleStarted: false,
      module: null,
    };
  },
  async mounted() {
    await this.$nextTick()
    if (this.autoLoad) {
      await this.loadExample()
    }
  },
  computed: {
    exampleName() {
      return toTitleCase(this.example);
    }
  },
  methods: {
    async loadExample() {
      this.loading = true;
      try {
        const modules = import.meta.glob('./wasm/*/demo.js');
        const loader = modules[`./wasm/${this.example}/demo.js`];
        if (!loader) {
          throw new Error(`No wasm module found for example "${this.example}"`);
        }
        this.module = await loader();
        if (window) {
          window.wasm = this.module;
        }
      } catch (e) {
        // TODO: Figure out a better way to ignore "control flow" errors
        if (`${e}` != "Error: Using exceptions for control flow, don't mind me. This isn't actually an error!") {
          this.error = `An error occurred loading "${this.example}": ${e}`;
          console.error(e);
          this.exampleStarted = false;
          this.loading = false;
        } else {
          this.exampleStarted = true;
          this.loading = false;
        }

        return;
      }

      this.loading = false;
      this.exampleStarted = true;
    },
  },
};
</script>

<style>
#wasm-example {
  width: 100%;
}

#wasm-example canvas {
  background-color: black;
  width: 100%;
}
</style>