<template>
  <div>
    <!-- <el-menu-item index="index">
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
      <el-submenu index="选项5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">选项5</span>
        </template>
        <el-menu-item index="选项5-1">选项5-1</el-menu-item>
      </el-submenu>
      <el-submenu index="选项6">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">选项6</span>
        </template>
        <el-menu-item index="选项6-1">选项6-1</el-menu-item>
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
    </el-menu-item>-->

    <el-menu-item v-if="!menu.children" :index="menu.path">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.title}}</span>
    </el-menu-item>
    <el-submenu v-else :index="menu.path">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{menu.title}}</span>
      </template>
      <menu-item v-for="child in menu.children" :key="child.id" :menu="child"/>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: {
      // type: "object",
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">

</style>
