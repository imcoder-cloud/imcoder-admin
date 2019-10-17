<template>
  <el-drawer :show-close="false" :visible.sync="drawer" :before-close="handleClose">
    <div class="setting-container">
      <div>
        <h3 class="setting-title">系统设置</h3>
        <div class="setting-item">
          <span>开启视图页签</span>
          <el-switch v-model="showViewsBar" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>刷新保留其他视图</span>
          <el-switch v-model="keepViewsByRefresh" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>收缩菜单栏</span>
          <el-switch v-model="collapseMenu" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>只保持一个菜单展开</span>
          <el-switch v-model="uniqueOpened" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>开启面包屑</span>
          <el-switch v-model="showBreadCrumb" class="setting-switch" />
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["settings"]),
    drawer: function() {
      return this.settings.openSetting;
    },
    showViewsBar: {
      get() {
        return this.settings.showViewsBar;
      },
      set(value) {
        this.$store.dispatch("updateSettings", {
          key: "showViewsBar",
          value: value
        });
      }
    },
    keepViewsByRefresh: {
      get() {
        return this.settings.keepViewsByRefresh;
      },
      set(value) {
        this.$store.dispatch("updateSettings", {
          key: "keepViewsByRefresh",
          value: value
        });
      }
    },
    collapseMenu: {
      get() {
        return this.settings.collapseMenu;
      },
      set(value) {
        this.$store.dispatch("updateSettings", {
          key: "collapseMenu",
          value: value
        });
      }
    },
    uniqueOpened: {
      get() {
        return this.settings.uniqueOpened;
      },
      set(value) {
        this.$store.dispatch("updateSettings", {
          key: "uniqueOpened",
          value: value
        });
      }
    },
    showBreadCrumb: {
      get() {
        return this.settings.showBreadCrumb;
      },
      set(value) {
        this.$store.dispatch("updateSettings", {
          key: "showBreadCrumb",
          value: value
        });
      }
    }
  },
  methods: {
    handleClose: function() {
      this.$store.dispatch("updateSettings", {
        key: "openSetting",
        value: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.setting-container {
  padding: 25px;
  line-height: 1.5;
  word-wrap: break-word;

  .setting-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .setting-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .setting-switch {
    float: right;
  }
}
</style>
