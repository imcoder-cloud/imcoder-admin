<template>
  <el-scrollbar class="full-height">
    <el-menu
      class="menu"
      :collapse="isCollapse"
      default-active="0"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
    >
      <el-menu-item index="0">
        <i v-if="isCollapse" class="el-icon-s-home" />
        <div v-else>模拟</div>
      </el-menu-item>

      <el-menu-item index="index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <menu-item />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import MenuItem from "./menu-item";
export default {
  components: {
    MenuItem
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>
<style lang="scss" scoped>
.menu {
  border: none;
}
.menu:not(.el-menu--collapse) {
  text-align: left;
  width: 200px !important;
  .logo {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #545c64;
    color: #fff;
  }
}
</style>
