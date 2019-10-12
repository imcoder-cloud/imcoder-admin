<template>
  <div class="wrapper">
    <aside>
      <aside-menu class="menu" :is-collapse="isCollapse"></aside-menu>
    </aside>
    <div class="right">
      <div :class="{'header-fixed':header.fixed}">
        <nav-bar />
        <views-bar />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AsideMenu from "./components/aside-menu";
import NavBar from "./components/nav-bar";
import ViewsBar from "./components/views-bar";
export default {
  components: {
    AsideMenu,
    NavBar,
    ViewsBar
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["menu", "header"]),
    isCollapse() {
      return this.menu.collapse;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  .menu {
    border: none;
  }
  .right {
    flex: 1;
    position: relative;
    .header-fixed {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
    }
    .main {
      margin-top: 85px;
      padding: 15px;
    }
  }
}
</style>