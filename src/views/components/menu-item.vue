<template>
  <div>
    <el-menu-item v-if="!menu.children" :index="menu.path">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.name}}</span>
    </el-menu-item>
    <el-submenu v-else :index="menu.path">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{menu.name}}</span>
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
