<template>
  <div>
    <div class="bg">
      <el-link class="error-link" type="primary" href="/index" :underline="false">返回首页</el-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg {
  background: url("../../assets/images/404_bg.jpg") no-repeat center center;
  width: 897px;
  height: 404px;
  margin: auto;
  margin-top: 100px;
  position: relative;
  .error-link {
    position: absolute;
    left: 487px;
    bottom: 80px;
  }
}
</style>>
