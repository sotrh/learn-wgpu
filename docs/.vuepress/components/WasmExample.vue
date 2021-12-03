<template>
  <div class="wasm-example">
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: { example: "" },
  data() {
    return {
      error: {
        value: "",
        required: true,
      },
    };
  },
  async mounted() {
    await this.$nextTick();

    try {
      const init = await import(`./wasm/${this.example}/${this.example}.js`);
      init().then(() => {
        console.log("WASM Loaded");
      });
    } catch (e) {
      this.error = `An error occurred loading "${this.example}": ${e}`;
      console.error(e);
    }
  },
};
</script>