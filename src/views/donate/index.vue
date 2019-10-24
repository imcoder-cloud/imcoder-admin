<template>
  <div>
    <el-row>
      <div class="donate-desc">项目的创作离不开您的支持，如果你觉得此项目能够帮助到您，不如请作者喝杯咖啡吧。</div>
    </el-row>
    <el-row class="donate">
      <el-col :sm="5">
        <div class="donate-type">
          <span>支付宝</span>
          <img src="../../assets/images/zfb.jpg" />
        </div>
      </el-col>
      <el-col :sm="5">
        <div class="donate-type">
          <span>微信</span>
          <img src="../../assets/images/wx.jpg" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.donate-desc {
  padding: 30px 0;
}
.donate {
  .donate-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      margin-top: 20px;
    }
  }
}
</style>