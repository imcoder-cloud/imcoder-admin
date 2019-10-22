<template>
  <div>
    <el-row>
      <el-col>
        <el-form :inline="true" :model="config" label-width="100px;">
          <el-form-item label="设置语言">
            <el-select v-model="config.language" placeholder="请选择" @change="setLanguage">
              <el-option label="javascript" value="javascript"></el-option>
              <el-option label="java" value="java"></el-option>
              <el-option label="c" value="c"></el-option>
              <el-option label="css" value="css"></el-option>
              <el-option label="dockerfile" value="dockerfile"></el-option>
              <el-option label="html" value="html"></el-option>
              <el-option label="json" value="json"></el-option>
              <el-option label="markdown" value="markdown"></el-option>
              <el-option label="mysql" value="mysql"></el-option>
              <el-option label="php" value="php"></el-option>
              <el-option label="python" value="python"></el-option>
              <el-option label="shell" value="shell"></el-option>
              <el-option label="sql" value="sql"></el-option>
              <el-option label="xml" value="xml"></el-option>
              <el-option label="yaml" value="yaml"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设置主题">
            <el-select v-model="config.theme" placeholder="请选择" @change="setTheme">
              <el-option label="白色" value="vs"></el-option>
              <el-option label="黑色" value="vs-dark"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mb20">
      <el-col :md="12">
        <code-editor ref="codeEditor" v-model="content" :config="config" class="code-editor"></code-editor>
      </el-col>
      <el-col :md="12">
        <div class="show-content">{{content}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" plain @click="getContent">获取内容</el-button>
      <el-button type="primary" plain @click="setContent">设置内容</el-button>
      <el-button type="primary" plain @click="clearContent">清空内容</el-button>
    </el-row>
  </div>
</template>

<script>
import CodeEditor from "@/components/code-editor";
export default {
  components: {
    CodeEditor
  },
  data() {
    return {
      content: "console.log('Hello Word!')",
      config: {
        theme: "vs-dark",
        language: "javascript"
      }
    };
  },
  created() {
    this.config.value = this.content;
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    setLanguage() {
      let language = this.config.language;
      this.$refs.codeEditor.setLanguage(language);
    },
    setTheme() {
      let theme = this.config.theme;
      this.$refs.codeEditor.setTheme(theme);
    },
    getContent() {
      const content = this.$refs.codeEditor.getContent();
      this.$alert(content, "内容", {
        confirmButtonText: "确定"
      });
    },
    setContent() {
      const content = "console.log('这是重新设置的代码！')";
      this.$refs.codeEditor.setContent(content);
    },
    clearContent() {
      this.$refs.codeEditor.setContent("");
    }
  }
};
</script>

<style lang="scss" scoped>
.code-editor {
  border: 1px solid #ccc;
  // border-radius: 5px;
  height: 500px;
}
.show-content {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 9px;
  min-height: 480px;
  white-space: pre-wrap;
}
</style>