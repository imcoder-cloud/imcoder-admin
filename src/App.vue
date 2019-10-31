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
/* 全局样式 */
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
  padding: 0;
}
#app {
  height: 100%;
}

.full-height {
  height: 100%;
}
.mt20 {
  margin-top: 20px;
}
.mb20 {
  margin-bottom: 20px;
}
.mt30 {
  margin-top: 30px;
}
.mb30 {
  margin-bottom: 30px;
}
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
.padding-0 {
  padding: 0 !important;
}

/* font awesome 菜单中图标样式*/
.el-menu-item i,
.el-submenu i {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
  display: inline-block;
}

/* element ui 样式重写 */
/* 下拉框 */
.el-select {
  width: 100%;
}
.nav-bar .nav-bar-right .el-input__inner {
  border: none;
  width: 100px;
  padding-right: 10px;
}

/* 滚动条 */
.el-scrollbar__wrap:not(.el-select-dropdown__wrap) {
  overflow: scroll;
  overflow-x: hidden !important;
}

/* 右侧设置抽屉 */
.el-drawer__header {
  height: 0px;
  margin: 0;
  padding: 0;
}
.el-drawer {
  width: 375px !important;
}

/* 左侧导航栏 */
.el-menu--collapse .el-menu-item .el-submenu__icon-arrow,
.el-menu--collapse .el-submenu .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
.el-menu--collapse .el-menu-item span,
.el-menu--collapse .el-submenu .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

/* 消息弹框 */
.el-message-box__message p {
  white-space: pre-wrap;
}
</style>
