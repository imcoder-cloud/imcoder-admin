<template>
  <el-container class="full-height">
    <el-aside :class="[isCollapse ? 'collpase' : 'expand']">
      <menu-bar class="aside-menu" :is-collapse="isCollapse"></menu-bar>
    </el-aside>
    <el-container class="full-height">
      <el-header class="top-header">
        <nav-bar />
        <views-bar v-if="showViewsBar" :type="getViewBarType" />
      </el-header>
      <el-scrollbar class="full-height main-view" ref="mainScroll">
        <div class="full-height main">
          <router-view/>
          <el-backtop target=".main-view .el-scrollbar__wrap"></el-backtop>
        </div>
      </el-scrollbar>
    </el-container>
    <settings open="open" />
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import MenuBar from "./components/menu-bar";
import NavBar from "./components/nav-bar";
import ViewsBar from "./components/views-bar";
import Settings from "./settings";
export default {
  components: {
    MenuBar,
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
    },
    getViewBarType() {
      return this.settings.viewBarType;
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
  padding: 20px;
}
</style>
