<template>
  <div id="wasm-example">
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <button v-if="!exampleStarted && !autoLoad" @click="loadExample()" :disabled="loading">Try {{exampleName}}!</button>
  </div>
</template>

<script>
// Found at https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export default {
  name: "WasmExample",
  props: { 
    example: "",
    autoLoad: false,
  },
  data() {
    return {
      error: "",
      loading: false,
      exampleStarted: false,
    };
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
        await import(`./wasm/${this.example}/demo.js`);
      } catch (e) {
        // TODO: Figure out a better way to ignore "control flow" errors
        if (`${e}` != "Error: Using exceptions for control flow, don't mind me. This isn't actually an error!") {
          this.error = `An error occurred loading "${this.example}": ${e}`;
          console.error(e);
          this.exampleStarted = false;
        } else {
          this.exampleStarted = true;
        }
      }
      this.loading = false;
    },
  },
  async mounted() {
    await this.$nextTick()
    if (this.autoLoad) {
      await this.loadExample()
    }
  }
};
</script>

<style>
#wasm-example canvas {
  background-color: black;
}
</style>