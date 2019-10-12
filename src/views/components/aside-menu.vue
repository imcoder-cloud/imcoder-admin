<template>
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
    <el-submenu index="导航一">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="user">
        <i class="el-icon-menu"></i>
        <span slot="title">选项1</span>
      </el-menu-item>
      <el-menu-item index="user1">
        <i class="el-icon-menu"></i>
        <span slot="title">选项2</span>
      </el-menu-item>
      <el-menu-item index="选项3">
        <i class="el-icon-menu"></i>
        <span slot="title">选项3</span>
      </el-menu-item>
      <el-submenu index="选项4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">选项4</span>
        </template>
        <el-menu-item index="选项4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.menu:not(.el-menu--collapse) {
  text-align: left;
  width: 200px;
  .logo {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #545c64;
    color: #fff;
  }
}
</style>
