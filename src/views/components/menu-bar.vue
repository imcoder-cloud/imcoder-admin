<template>
  <el-scrollbar class="full-height">
    <el-menu
      class="menu"
      :collapse="isCollapse"
      default-active="0"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
    >
      <el-menu-item index="0">
        <i v-if="isCollapse" class="el-icon-s-home" />
        <div v-else>模拟</div>
      </el-menu-item>

      <menu-item v-for="menu in menuList" :key="menu.id" :menu="menu" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import MenuItem from "./menu-item";
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
      menuList: [
        {
          id: 1,
          path: "/index",
          title: "首页",
          icon: "el-icon-s-home",
          parentId: 0,
          fixed: true,
          component: () => import("@/views/home")
        },
        {
          id: 2,
          path: "/user",
          title: "用户管理",
          icon: "el-icon-user-solid",
          parentId: 0,
          children: [
            {
              id: 3,
              path: "/user/query",
              title: "用户查询",
              icon: "el-icon-menu",
              parentId: 2,
              component: () => import("@/views/user/user")
            },
            {
              id: 4,
              path: "/user/query",
              title: "用户新增",
              icon: "el-icon-menu",
              parentId: 2,
              component: () => import("@/views/user/user1")
            }
          ]
        },
        {
          id: 5,
          path: "/other",
          title: "其他模拟菜单",
          icon: "el-icon-star-on",
          parentId: 0,
          children: [
            {
              id: 6,
              path: "/user/query",
              title: "二级菜单 1",
              icon: "el-icon-menu",
              parentId: 5,
              component: () => import("@/views/user/user")
            },
            {
              id: 7,
              path: "/user/query",
              title: "二级菜单 2",
              icon: "el-icon-menu",
              parentId: 5,
              component: () => import("@/views/user/user1"),
              children: [
                {
                  id: 8,
                  path: "/user/query",
                  title: "三级级菜单 1",
                  icon: "el-icon-menu",
                  parentId: 7,
                  component: () => import("@/views/user/user")
                },
                {
                  id: 9,
                  path: "/user/query",
                  title: "三级级菜单 2",
                  icon: "el-icon-menu",
                  parentId: 7,
                  component: () => import("@/views/user/user1")
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>
<style lang="scss" scoped>
.menu {
  border: none;
}
.menu:not(.el-menu--collapse) {
  text-align: left;
  width: 200px !important;
  .logo {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #545c64;
    color: #fff;
  }
}
</style>
