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
  background: url("../../assets/images/401_bg.jpg") no-repeat center center;
  width: 1031px;
  height: 236px;
  margin: auto;
  position: relative;
  margin-top: 200px;
  .error-link {
    position: absolute;
    left: 515px;
    bottom: -50px;
  }
}
</style>>
