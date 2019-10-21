<template>
  <div>
    <el-row class="mb20">
      <el-alert title="温馨提示" type="success">
        <slot>由于本页面是纯静态页面，所以图片上传等与服务器交互功能暂不可用。本编辑器已实现 v-model 双向数据绑定，在左侧输入内容后，右侧会同步显示内容。</slot>
      </el-alert>
    </el-row>
    <el-row :gutter="20" class="mb20">
      <el-col :md="12">
        <ueditor ref="ue" v-model="content" :config="config"></ueditor>
      </el-col>
      <el-col :md="12">
        <div v-html="content" class="show-content"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" plain @click="getContent">获取内容</el-button>
      <el-button type="primary" plain @click="getText">获取纯文本</el-button>
      <el-button type="primary" plain @click="setContent('这是设置的内容',false)">设置内容</el-button>
      <el-button type="primary" plain @click="setContent('这是追加的内容',true)">追加内容</el-button>
      <el-button type="primary" plain @click="clearContent">清空内容</el-button>
    </el-row>
  </div>
</template>

<script>
import Ueditor from "@/components/ueditor";
export default {
  components: { Ueditor },
  data() {
    return {
      config: {
        // 初始容器高度
        initialFrameHeight: 500,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 关闭自动保存
        enableAutoSave: true
      },
      content: "请输入内容"
    };
  },
  methods: {
    getContent() {
      let content = this.$refs.ue.getContent();
      this.$alert(content, "内容", {
        confirmButtonText: "确定"
      });
    },
    setContent(html, isAppendTo) {
      this.$refs.ue.setContent(html, isAppendTo);
    },
    getText() {
      let text = this.$refs.ue.getContentTxt();
      this.$alert(text, "内容", {
        confirmButtonText: "确定"
      });
    },
    clearContent() {
      this.$refs.ue.clearContent();
    }
  }
};
</script>

<style lang="scss" scop>
.show-content {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 9px;
  min-height: 614px;
  p {
    margin: 5px 0;
  }
}
</style>