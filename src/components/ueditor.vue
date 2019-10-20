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
      editor: null
    };
  },
  props: {
    defaultMsg: {
      type: String,
      default: "请输入内容"
    },
    config: {
      type: Object
    },
    id: {
      type: String,
      default: `ue${Math.random(0, 100)}`
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.editor = UE.getEditor(this.id, this.config); // 初始化UE
      this.editor.addListener("ready", () => {
        this.editor.execCommand("insertHtml", this.defaultMsg);
        this.editor.focus(); // 确保UE加载完成后，放入内容。
      });
    });
  },
  methods: {
    getContent() {
      // 获取内容方法
      return this.editor.getContent();
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