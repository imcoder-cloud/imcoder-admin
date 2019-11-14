<template>
  <el-scrollbar class="demo123" ref="stickyScroll">
    <div class="box" id="box">
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <div class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">我是来测试的、哇咔咔</div>
      <h3>快下来</h3>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
      <h4>吸顶测试</h4>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let that = this;
      let mainScroll = this.$refs.stickyScroll.wrap;
      let top = document.getElementById("box").offsetTop;
      console.log(top);
      mainScroll.onscroll = function() {
        let scrollTop = mainScroll.scrollTop;
        let fixedItem = mainScroll.querySelector("#boxFixed");
        let offsetTop = fixedItem.offsetTop;
        console.log(scrollTop);
        console.log(offsetTop);
        if (scrollTop >= offsetTop) {
          that.isFixed = true;
        } else {
          that.isFixed = false;
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 500px;
  position: relative;
}
.box_fixed {
  width: 500px;
  height: 40px;
  border: 2px dashed pink;
  border-radius: 20px;
  margin: 0 auto;
  line-height: 40px;
  background: #eee;
}
.is_fixed {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -250px;
  z-index: 999;
}
</style>
