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
.el-scrollbar__wrap {
  overflow: scroll;
  overflow-x: hidden;
}
.el-drawer__header {
  height: 0px;
  margin: 0;
  padding: 0;
}
</style>
