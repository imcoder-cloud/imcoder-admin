<template>
  <div class="nav-bar">
    <div>
      <button class="toggle-btn" @click="toggleMenu">
        <i class="el-icon-s-fold"></i>
      </button>
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
      <el-dropdown>
        <span class="dropdown-menu">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user-solid">基本资料</el-dropdown-item>
          <el-dropdown-item icon="el-icon-info">关于我们</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-tools">系统设置</el-dropdown-item>
          <el-dropdown-item divided icon="el-icon-error">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
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
  border-bottom: 1px solid #EBEEF5;
  .toggle-btn {
    background: none;
    border: none;
    font-size: 22px;
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
