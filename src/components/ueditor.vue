<template>
  <div :id="id" type="text/plain" style="width:100%"></div>
</template>
<script>
import "../../static/ueditor/ueditor.config.js";
import "../../static/ueditor/ueditor.all.min.js";
import "../../static/ueditor/lang/zh-cn/zh-cn.js";
import "../../static/ueditor/ueditor.parse.min.js";
export default {
  name: "ueditor",
  data() {
    return {
      editor: null,
      content: ""
    };
  },
  props: {
    config: {
      type: Object
    },
    id: {
      type: String,
      default: `ue${Math.random(0, 100)}`
    },
    value: {
      type: String,
      default: ""
    }
  },
  created() {
    this.content = this.value;
  },
  mounted() {
    this.$nextTick(() => {
      this.editor = UE.getEditor(this.id, this.config); // 初始化UE
      this.editor.addListener("ready", () => {
        this.editor.execCommand("insertHtml", this.content);
        this.editor.focus(); // 确保UE加载完成后，放入内容。
      });
      this.editor.addListener("contentChange", () => {
        this.content = this.getContent();
        this.$emit("input", this.content);
      });
    });
  },
  methods: {
    // 获取内容
    getContent() {
      return this.editor.getContent();
    },
    // 设置内容
    setContent(html, isAppendTo) {
      if (isAppendTo) {
        return this.editor.setContent(html, isAppendTo);
      }
      return this.editor.setContent(html);
    },
    // 获取纯文本内容
    getContentTxt() {
      return this.editor.getContentTxt();
    },
    clearContent() {
      // 清空编辑器内容
      return this.editor.execCommand("cleardoc");
    }
  },
  beforeDestroy() {
    // 组件销毁的时候，要销毁 UEditor 实例
    if (this.editor !== null && this.editor.destroy) {
      this.editor.destroy();
    }
  }
};
</script>
<style scoped>
</style>