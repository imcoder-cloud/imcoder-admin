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
</style>
