<template>
  <div>
    <template v-if="canBeLeafMenu(menu)">
      <app-link :isExternal="leafMenu.isExternal" :path="resolvePath(leafMenu)">
        <el-menu-item :index="resolvePath(leafMenu)">
          <i :class="leafMenu.icon"></i>
          <span slot="title">{{leafMenu.name}}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="resolvePath(menu)">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{menu.name}}</span>
      </template>
      <menu-item
        v-for="child in menu.children"
        :key="child.id"
        :menu="child"
        :base-path="menu.path"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import AppLink from "./link";
export default {
  name: "MenuItem",
  components: {
    AppLink
  },
  props: {
    menu: {
      // type: "Object",
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
