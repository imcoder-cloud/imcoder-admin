<template>
  <div style="height:600px">
    <el-row :gutter="20">
      <el-col :md="12">
        <editor v-model="content"></editor>
      </el-col>
      <el-col :md="12">
        <div class="preview-header">预览</div>
        <div class="ql-container ql-snow">
          <div v-html="content" class="ql-editor"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import editor from "@/components/quill.vue";
export default {
  components: {
    editor
  },
  data() {
    return {
      bg: {},
      content: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.preview-header {
  border: 1px solid #ccc;
  height: 65px;
  border-bottom: none;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 65px;
}
.preview-content {
  font-size: 14px;
  border: 1px solid #ccc;
  padding: 12px 15px;
  height: 600px;
  line-height: 1.42;
  overflow-y: scroll;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0 !important;
    padding: 0;
  }
}
</style>