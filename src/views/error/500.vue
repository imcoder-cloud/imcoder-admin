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
  background: url("../../assets/images/500_bg.jpg") no-repeat center center;
  width: 887px;
  height: 319px;
  margin: auto;
  position: relative;
  margin-top: 100px;
  .error-link {
    position: absolute;
    left: 190px;
    bottom: -50px;
  }
}
</style>>
