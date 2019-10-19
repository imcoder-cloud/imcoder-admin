<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <button class="toggle-btn" @click="toggleMenu">
        <i class="el-icon-s-fold"></i>
      </button>
      <transition name="el-fade-in-linear">
        <el-breadcrumb separator="/" v-show="show" v-if="showBreadCrumb">
          <el-breadcrumb-item v-for="(item,index) in items" :key="item.name">
            <a v-if="index == 0 && items.length != 1" :href="item.path">{{item.name}}</a>
            <span v-else>{{item.name}}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </transition>
    </div>
    <div class="nav-bar-right">
      <ul>
        <li>
          <el-tooltip effect="dark" content="消息" placement="bottom">
            <el-badge :value="5">
              <i class="el-icon-message-solid"></i>
            </el-badge>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip effect="dark" content="便签" placement="bottom">
            <i class="el-icon-s-order"></i>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip effect="dark" content="分享" placement="bottom">
            <i class="el-icon-share"></i>
          </el-tooltip>
        </li>
        <li @click="openSettings">
          <el-tooltip effect="dark" content="设置" placement="bottom">
            <i class="el-icon-s-tools"></i>
          </el-tooltip>
        </li>
      </ul>
      <div class="avatar">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </div>
      <el-dropdown @command="handleCommand">
        <span class="dropdown-menu">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user-solid">基本资料</el-dropdown-item>
          <el-dropdown-item icon="el-icon-info">关于我们</el-dropdown-item>
          <el-dropdown-item command="settings" icon="el-icon-s-tools">系统设置</el-dropdown-item>
          <el-dropdown-item divided icon="el-icon-error">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [],
      show: false
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  computed: {
    ...mapGetters(["settings"]),
    showBreadCrumb() {
      return this.settings.showBreadCrumb;
    }
  },
  methods: {
    getBreadcrumb: function() {
      this.show = false;
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true;
        }
      });
      let first = matched[0];
      if (first && first.name === "home") {
        // 首页的上级菜单
        matched.splice(0, 1); //删除上级菜单
        first = matched[0];
      }
      if (first && first.name !== "首页") {
        matched = [
          { path: "/", name: "首页", fixed: true, meta: { fixed: true } }
        ].concat(matched);
      }
      if (matched.length >= 4) {
        matched.splice(1, 1);
      }
      this.items = matched;
      this.show = true;
    },
    toggleMenu: function() {
      this.$store.dispatch("updateSettings", {
        key: "collapseMenu",
        type: "toggle"
      });
    },
    openSettings: function() {
      this.$store.dispatch("updateSettings", {
        key: "openSetting",
        value: true
      });
    },
    handleCommand: function(command) {
      switch (command) {
        case "settings":
          this.openSettings();
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #f5f5f5;
  .toggle-btn {
    background: none;
    border: none;
    font-size: 22px;
    margin-right: 15px;
    line-height: 22px;
    display: inline-block;
  }
  .nav-bar-left {
    display: flex;
    align-items: center;
  }
  .nav-bar-right {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      margin-right: 30px;
      li {
        padding: 0 15px;
        cursor: pointer;
        font-size: 20px;
      }
    }
    .avatar {
      margin-right: 10px;
    }
    .dropdown-menu {
      cursor: pointer;
    }
  }
}
</style>
