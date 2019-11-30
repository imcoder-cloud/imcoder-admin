<template>
  <div>
    <div class="editor"></div>
  </div>
</template>

<script>
import Quill from "quill";
import hljs from "highlight.js";
import { ImageResize } from 'quill-image-resize-module';
// Quill.register('modules/imageResize', ImageResize);

export default {
  name: "editor",
  props: {
    value: String
  },
  data() {
    return {
      quill: null,
      options: {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
            [
              {
                size: [
                  "12px",
                  "13px",
                  "14px",
                  "15px",
                  "16px",
                  "17px",
                  "18px",
                  "20px",
                  "24px",
                  "28px",
                  "32px"
                ]
              }
            ]
          ],
          syntax: {
            highlight: text => {
              return hljs.highlightAuto(text).value; // 这里就是代码高亮需要配置的地方
            }
          }
        },
        placeholder: "请输入内容..."
      }
    };
  },
  mounted() {
    var Size = Quill.import("attributors/style/size");
    Size.whitelist = [
      "12px",
      "13px",
      "14px",
      "15px",
      "16px",
      "17px",
      "18px",
      "20px",
      "24px",
      "28px",
      "32px"
    ];
    Quill.register(Size, true);

    let dom = this.$el.querySelector(".editor");
    this.quill = new Quill(dom, this.options);
    this.quill.setContents(this.value);
    var that = this;
    this.quill.on("editor-change", () => {
      that.$nextTick(function() {
        that.$emit("input", that.quill.root.innerHTML);
      });
    });
  }
};
</script>

<style lang="scss">
.ql-editor {
  height: 600px;
}
</style>
