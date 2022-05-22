<template>
  <el-scrollbar class="full-height">
    <el-menu
      class="menu"
      :collapse="isCollapse"
      :unique-opened="uniqueOpened"
      @select="handleSelect"
      background-color="#001529"
      text-color="#fff"
      :default-active="this.$route.path"
    >
      <el-menu-item index="0" style="padding:0 12px;">
        <div class="logo">
          <a v-if="isCollapse" style="display:inline-block;" href="/"><img style="width:100%;max-width:40px;" src="../../assets/images/logo-light.png"></a>
          <a v-else href="/">Imcoder - Admin</a>
        </div>
      </el-menu-item>

      <menu-item v-for="menu in menus" :key="menu.id" :menu="menu" :base-path="menu.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import MenuItem from "./menu-item";
import { mapGetters } from "vuex";
export default {
  components: {
    MenuItem
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuList: []
    };
  },
  computed: {
    ...mapGetters(["dynamicRouters", "settings"]),
    menus: function() {
      return this.dynamicRouters;
    },
    uniqueOpened: function() {
      return this.settings.uniqueOpened;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key.indexOf("@") > -1) {
        let path = key.split("@")[0];
        this.handleClick(path);
      }
    },
    handleClick(path) {
      switch (path) {
        case "settings":
          this.showSettings();
          break;

        default:
          break;
      }
    },
    showSettings() {
      this.$store.dispatch("updateSettings", {
        key: "openSetting",
        value: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  border: none;
  .logo {
    a {
      color: #fff;
    }
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
  }
}
.menu:not(.el-menu--collapse) {
  text-align: left;
  width: 210px !important;
}
</style>
