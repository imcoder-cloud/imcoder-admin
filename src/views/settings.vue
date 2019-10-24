<template>
  <el-drawer :show-close="false" :visible.sync="drawer" :before-close="handleClose">
    <div class="setting-container">
      <div>
        <h3 class="setting-title">{{$t('message.settings.TITLE')}}</h3>
        <div class="setting-item">
          <span>{{$t('message.settings.OPEN_VIEWS_BAR_TEXT')}}</span>
          <el-switch v-model="showViewsBar" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>{{$t('message.settings.VIEWS_BAR_SYTLE_TEXT')}}</span>
          <el-radio-group v-model="viewBarType">
            <el-radio label="tab">{{$t('message.settings.VIEWS_BAR_SYTLE_TAB_TEXT')}}</el-radio>
            <el-radio label="tag">{{$t('message.settings.VIEWS_BAR_SYTLE_TAG_TEXT')}}</el-radio>
          </el-radio-group>
        </div>
        <div class="setting-item">
          <span>{{$t('message.settings.KEEP_VIEWS_AFTER_REFRESH_TEXT')}}</span>
          <el-switch v-model="keepViewsByRefresh" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>{{$t('message.settings.COLLAPSE_MENU_BAR_TEXT')}}</span>
          <el-switch v-model="collapseMenu" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>{{$t('message.settings.UNIQUE_OPENED_TEXT')}}</span>
          <el-switch v-model="uniqueOpened" class="setting-switch" />
        </div>
        <div class="setting-item">
          <span>{{$t('message.settings.OPEN_BREAD_CRUMB_TEXT')}}</span>
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
    viewBarType: {
      get() {
        return this.settings.viewBarType;
      },
      set(value) {
        this.$store.dispatch("updateSettings", {
          key: "viewBarType",
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .setting-switch {
    float: right;
  }
}
</style>
