<template>
  <el-container class="full-height">
    <el-aside :class="[isCollapse ? 'collpase' : 'expand']">
      <aside-menu class="aside-menu" :is-collapse="isCollapse"></aside-menu>
    </el-aside>
    <el-container class="full-height">
      <el-header class="top-header">
        <nav-bar />
        <views-bar v-if="showViewsBar"/>
      </el-header>
      <el-scrollbar class="full-height">
        <div class="full-height main">
          <router-view />
        </div>
      </el-scrollbar>
    </el-container>
    <settings open="open" />
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import AsideMenu from "./components/aside-menu";
import NavBar from "./components/nav-bar";
import ViewsBar from "./components/views-bar";
import Settings from "./components/settings";
export default {
  components: {
    AsideMenu,
    NavBar,
    ViewsBar,
    Settings
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["settings"]),
    isCollapse() {
      return this.settings.collapseMenu;
    },
    showViewsBar() {
      return this.settings.showViewsBar;
    }
  }
};
</script>

<style lang="scss" scoped>
.expand {
  width: 200px !important;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3;
}
.collpase {
  width: 64px !important;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s;
}
.top-header {
  padding: 0;
  height: auto !important;
}
.aside-menu {
  border: none;
  background-color: #545c64;
}
.main {
  padding: 15px;
  height: 500px;
}
</style>
