<template>
  <div>
    <el-row class="mb20">
      <mavon-editor v-model="content" ref="md" @change="change" style="height: 700px" />
    </el-row>
    <el-row>
      <el-button type="primary" @click="getMarkdownText">获取 markdown</el-button>
      <el-button type="primary" @click="getHtml">获取 html</el-button>
    </el-row>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      content: "", // 输入的markdown
      html: "" // 及时转的html
    };
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    getMarkdownText() {
      console.log(this.content);
      this.$alert(this.content, "内容", {
        confirmButtonText: "确定"
      });
    },
    getHtml() {
      console.log(this.html);
      this.$alert(this.html, "内容", {
        confirmButtonText: "确定"
      });
    }
  }
};
</script>

<style>
.v-show-content {
  background-color: #fff !important;
}
code {
  font-size: 100% !important;
}
mark {
  color: rgb(231, 12, 12);
  padding: 0 5px;
  margin: 0 4px;
  border-radius: 3px;
  white-space: nowrap;
  background-color: #f8f8f8;
}
.markdown-body table th {
  background-color: #f8f8f8;
}
.hljs {
  background: none !important;
}
</style>