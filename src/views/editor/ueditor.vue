<template>
  <el-row>
    <ueditor ref="ue" id="ue1" :config="config"></ueditor>
  </el-row>
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
      }
    };
  },
  methods: {}
};
</script>

<style>
</style>