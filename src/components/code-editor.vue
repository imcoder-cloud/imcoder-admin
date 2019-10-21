<template>
  <div :id="id" style="height:500px;border-radius: 5px;"></div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
export default {
  props: {
    id: {
      type: String,
      default: `monaco${Math.random(0, 100)}`
    },
    config: {
      type: Object
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      monacoInstance: null,
      content: ""
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.monacoInstance = monaco.editor.create(
      document.getElementById(this.id),
      this.config
    );
    this.monacoInstance.onDidChangeModelContent(e => {
      this.content = this.getContent()
      this.$emit("input", this.content);
    });
  },
  beforeDestroy() {
    this.monacoInstance.dispose();
  },
  methods: {
    getContent() {
      return this.monacoInstance.getValue();
    },
    setContent(code) {
      return this.monacoInstance.setValue(code);
    },
    setTheme(theme) {
      monaco.editor.setTheme(theme);
    },
    setLanguage(language) {
      let model =  this.monacoInstance.getModel()
      monaco.editor.setModelLanguage(model,language);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>