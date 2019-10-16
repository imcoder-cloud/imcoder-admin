<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
button,
a {
  cursor: pointer;
  text-decoration: none;
}
* {
  outline: none;
}
ul,
li {
  list-style: none;
}
#app {
  height: 100%;
}

.full-height[data-v-7eb2bc79] {
  height: 100%;
}

/* element ui 样式重写 */

/* 滚动条 */
.el-scrollbar__wrap {
  overflow: scroll;
  overflow-x: hidden;
}

/* 右侧设置抽屉 */
.el-drawer__header {
  height: 0px;
  margin: 0;
  padding: 0;
}
.el-drawer {
  width: 320px !important;
}

/* 左侧导航栏 */
.el-menu--collapse .el-menu-item .el-submenu__icon-arrow, .el-menu--collapse .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    display: none;
}
.el-menu--collapse .el-menu-item span, .el-menu--collapse .el-submenu .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
</style>
