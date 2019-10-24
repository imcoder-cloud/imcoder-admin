<template>
  <div>
    <template v-if="canBeLeafMenu(menu)">
      <menu-link :isExternal="leafMenu.isExternal" :path="resolvePath(leafMenu)">
        <el-menu-item :index="resolvePath(leafMenu)">
          <i :class="leafMenu.icon"></i>
          <span slot="title">{{lang=='zh-CN'?leafMenu.name:leafMenu.enName}}</span>
        </el-menu-item>
      </menu-link>
    </template>
    <el-submenu v-else :index="resolvePath(menu)">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{lang=='zh-CN'?menu.name:menu.enName}}</span>
      </template>
      <menu-item
        v-for="child in menu.children"
        :key="child.id"
        :menu="child"
        :base-path="resolvePath(menu)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { mapGetters } from "vuex";
import MenuLink from "./menu-link";
export default {
  name: "MenuItem",
  components: {
    MenuLink
  },
  computed: {
    ...mapGetters(["settings"]),
    lang: function() {
      return this.settings.lang;
    }
  },
  props: {
    menu: {
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      leafMenu: {}
    };
  },
  methods: {
    canBeLeafMenu: function(menu) {
      if (!menu.children || menu.children.length === 0) {
        this.leafMenu = menu;
        return true;
      }
      if (menu.children.length === 1) {
        this.leafMenu = menu.children[0];
        return true;
      }
      return false;
    },
    resolvePath: function(route) {
      if (route.isExternal) {
        return route.path;
      }
      let retPath = path.resolve(this.basePath, route.path);
      return retPath;
    }
  }
};
</script>

<style lang="scss">
</style>
