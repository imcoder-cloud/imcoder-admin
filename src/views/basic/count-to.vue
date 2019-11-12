<template>
  <div class="count-to">
    <el-row class="mb20">
      <el-divider>动态递增</el-divider>
      <code>&lt;count-to ref="demo1" :startVal="1" :endVal="2019" :duration="3000"&gt;&lt;/count-to&gt;</code>
      <div class="demo mb20">
        <count-to ref="demo1" :startVal="1" :endVal="2019" :duration="3000"></count-to>
      </div>
      <el-button size="medium" @click="startDemo('demo1')">开始</el-button>
      <el-button size="medium" @click="stopDemo('demo1')">停止</el-button>
    </el-row>

    <el-row class="mb20">
      <el-divider>动态递减</el-divider>
      <code>&lt;count-to ref="demo2" :startVal="2019" :endVal="1" :duration="3000"&gt;&lt;/count-to&gt;</code>
      <div class="demo mb20">
        <count-to ref="demo2" :startVal="2019" :endVal="1" :duration="3000"></count-to>
      </div>
      <el-button size="medium" @click="startDemo('demo2')">开始</el-button>
      <el-button size="medium" @click="stopDemo('demo2')">停止</el-button>
    </el-row>

    <el-row class="mb20">
      <el-divider>自定义</el-divider>
      <code>&lt;count-to
          ref="demo3"
          :startVal="custom.start"
          :endVal="custom.end"
          :duration="custom.duration"
          :decimals="custom.decimals"
          :separator="custom.separator"
          :prefix="custom.prefix"
          :suffix="custom.suffix"
        &gt;&lt;/count-to>&gt;</code>
      <div class="demo mb20">
        <count-to
          ref="demo3"
          :startVal="custom.start"
          :endVal="custom.end"
          :duration="custom.duration"
          :decimals="custom.decimals"
          :separator="custom.separator"
          :prefix="custom.prefix"
          :suffix="custom.suffix"
        ></count-to>
      </div>
      <div>
        <el-form :inline="true" :model="custom" class="demo-form-inline">
          <el-form-item label="start">
            <el-input style="width:100px" v-model="custom.start"></el-input>
          </el-form-item>
          <el-form-item label="end">
            <el-input style="width:100px" v-model="custom.end"></el-input>
          </el-form-item>
          <el-form-item label="duration">
            <el-input style="width:100px" v-model="custom.duration"></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="custom" class="demo-form-inline">
          <el-form-item label="decimals">
            <el-input style="width:100px" v-model="custom.decimals"></el-input>
          </el-form-item>
          <el-form-item label="separator">
            <el-input style="width:100px" v-model="custom.separator"></el-input>
          </el-form-item>
          <el-form-item label="prefix">
            <el-input style="width:100px" v-model="custom.prefix"></el-input>
          </el-form-item>
          <el-form-item label="suffix">
            <el-input style="width:100px" v-model="custom.suffix"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button size="medium" @click="startDemo('demo3')">开始</el-button>
      <el-button size="medium" @click="stopDemo('demo3')">停止</el-button>
    </el-row>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
export default {
  components: { CountTo },
  data() {
    return {
      custom: {
        start: 1,
        end: 2019,
        duration: 3000,
        decimals: 0,
        separator: ",",
        prefix: "￥",
        suffix: "元"
      }
    };
  },
  methods: {
    startDemo(demoName) {
      this.$refs[demoName].start();
    },
    stopDemo(demoName) {
      this.$refs[demoName].pause();
    }
  }
};
</script>

<style lang="scss" scoped>
.count-to {
  text-align: center;
  width: 60%;
  margin: auto;
  code {
    font-size: 15px;
    font-family: 微软雅黑;
    background: #eef1f6;
    width: 100%;
    display: inline-block;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    line-height: 26px;
  }
  .demo {
    font-size: 48px;
    color: #409eff;
    font-weight: bolder;
  }
}

.el-form--inline .el-form-item__content {
  width: 100px;
}
</style>