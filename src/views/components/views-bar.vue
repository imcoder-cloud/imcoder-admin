<template>
  <div>
    <div class="views-container" v-if="type=='tag'">
      <el-scrollbar
        ref="scrollContainer"
        :vertical="false"
        class="scroll-container"
        @wheel.native.prevent="handleScroll"
      >
        <el-tag
          v-for="tag in visitedViews"
          ref="tag"
          :type="isActive(tag)?'':'info'"
          :key="tag.path"
          :closable="!tag.fixed"
          size="medium"
          class="view-item"
          :data-path="tag.path"
          @close="closeTag(tag.path)"
          @click="clickTag(tag.path)"
          @contextmenu.prevent.native="openMenu(tag,$event)"
        >{{ tag.name }}</el-tag>
      </el-scrollbar>

      <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
        <li @click="refreshSelectedTag(selectedTag)">刷新</li>
        <li v-if="!(selectedTag.fixed)" @click="closeSelectedTag(selectedTag)">关闭</li>
        <li @click="closeOthersTags">关闭其他</li>
        <li @click="closeAllTags(selectedTag)">关闭所有</li>
      </ul>
    </div>

    <div class="tab-views" v-if="type=='tab'">
      <el-tabs type="card" v-model="currentViews" @tab-click="tabClick" @tab-remove="removeView">
        <el-tab-pane
          ref="tag"
          v-for="tag in visitedViews"
          :data-path="tag.path"
          :key="tag.name"
          :label="tag.name"
          :closable="!tag.fixed"
          :name="tag.name"
          @contextmenu.prevent.native="openMenu(tag,$event)"
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import path from "path";
import routerMap from "@/router";
import Auth from "@/auth";

const tagAndTagSpacing = 4;

export default {
  props: {
    type: {
      default: "tab"
    }
  },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      fixedTags: [],
      selectedTag: {},
      currentViews: this.$route.name
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.viewsBar.visitedViews;
    }
  },
  watch: {
    $route() {
      this.currentViews = this.$route.name;
      this.addViewTags();
      if (this.type == "tag") {
        this.moveToCurrentTag();
      }
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    }
  },
  mounted() {
    this.initTags();
    this.addViewTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    filterFixedViews(routes, basePath = "/") {
      let tags = [];
      routes.forEach(route => {
        if (route.fixed) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            fixed: route.meta && route.meta.fixed
          });
        }
        if (route.children) {
          const tempTags = this.filterFixedViews(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      const fixedTags = (this.fixedTags = this.filterFixedViews(
        Auth.getDynamicRouters()
      ));
      for (const tag of fixedTags) {
        if (tag.name) {
          this.$store.dispatch("addVisitedView", tag);
        }
      }
    },
    addViewTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("addView", this.$route);
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.$el.dataset.path === this.$route.path) {
            this.moveToTarget(tag);

            // when query is different then update
            if (tag.fullPath !== this.$route.fullPath) {
              this.$store.dispatch("updateVisitedView", this.$route);
            }
            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      const { fullPath } = view;
      if (fullPath == this.$route.fullPath) {
        this.$router.replace("/");
        this.$router.replace(fullPath);
        return;
      }
      this.$router.replace(fullPath);
    },
    closeTag(path) {
      let views = this.visitedViews.filter(view => view.path == path)[0];
      this.closeSelectedTag(views);
    },
    clickTag(path) {
      if (this.$route.path != path) {
        this.$router.push(path);
      }
    },
    closeSelectedTag(view) {
      this.$store.dispatch("delView", view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          const latestView = visitedViews.slice(-1)[0];
          if (latestView) {
            this.$router.push(latestView.path);
          } else {
            this.$router.push("/");
          }
        }
      });
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag);
      this.$store.dispatch("delOthersViews", this.selectedTag).then(() => {
        this.moveToCurrentTag();
      });
    },
    closeAllTags(view) {
      this.$store.dispatch("delAllViews").then(({ visitedViews }) => {
        if (this.fixedTags.some(tag => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedViews, view);
      });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === "首页") {
          // to reload home page
          this.$router.replace({ path: view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    },
    openMenu(tag, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
      const offsetWidth = this.$el.offsetWidth; // container width
      const maxLeft = offsetWidth + offsetLeft - menuMinWidth; // left boundary
      const left = e.clientX + 5; // 向右间距5px

      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }
      this.top = e.clientY;

      this.visible = true;
      this.selectedTag = tag;
    },
    closeMenu() {
      this.visible = false;
    },
    handleScroll(e) {
      const eventDelta = -e.wheelDelta || -e.deltaY * 40;
      const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap;
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;
    },
    moveToTarget(currentTag) {
      const $container = this.$refs.scrollContainer.$el;
      const $containerWidth = $container.offsetWidth;
      const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap;
      const tagList = this.$refs.tag;

      let firstTag = null;
      let lastTag = null;
      let prevTag = null;
      let nextTag = null;

      // find first tag and last tag
      if (tagList.length > 0) {
        firstTag = tagList[0];
        lastTag = tagList[tagList.length - 1];
      }

      // find preTag and nextTag
      for (let i = 0; i < tagList.length; i++) {
        if (tagList[i] === currentTag) {
          if (i === 0) {
            nextTag = tagList[i].length > 1 && tagList[i + 1];
          } else if (i === tagList.length - 1) {
            prevTag = tagList[i].length > 1 && tagList[i - 1];
          } else {
            prevTag = tagList[i - 1];
            nextTag = tagList[i + 1];
          }
          break;
        }
      }

      if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0;
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft =
          $scrollWrapper.scrollWidth - $containerWidth;
      } else {
        // the tag's offsetLeft after of nextTag
        const afterNextTagOffsetLeft =
          nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing;

        // the tag's offsetLeft before of prevTag
        const beforePrevTagOffsetLeft =
          prevTag.$el.offsetLeft - tagAndTagSpacing;

        if (
          afterNextTagOffsetLeft >
          $scrollWrapper.scrollLeft + $containerWidth
        ) {
          $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth;
        } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
          $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
        }
      }
    },
    tabClick: function(tab) {
      const path = tab.$el.dataset.path;
      if (this.$route.path != path) {
        this.$router.push(path);
      }
    },
    removeView: function(name) {
      let views = this.visitedViews.filter(view => view.name == name)[0];
      this.closeSelectedTag(views);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.views-container {
  height: 35px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  margin-top: -1px;
  .scroll-container {
    .view-item {
      cursor: pointer;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &:hover {
        background-color: rgb(236, 245, 255);
        border-color: rgb(217, 236, 255);
      }
      // &.active {
      //   background-color: #409eff;
      //   color: #fff;
      //   border-color: #409eff;
      // }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
.scroll-container {
  .view-item {
    .el-icon-close {
      line-height: 17px;
      &:hover {
        background-color: #f56c6c;
        color: #fff;
      }
    }
  }
}

.scroll-container {
  height: 35px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  /deep/ {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}

.tab-views {
  .el-tabs--card > .el-tabs__header {
    border-bottom: 1px solid #f1f1f1;
    .el-tabs__nav {
      border: none !important;
    }
  }
  .el-tabs__header {
    margin: 0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    .el-tabs__item {
      height: 34px;
      line-height: 34px;
      font-size: 12px;
      border: none;
      .el-icon-close:hover {
        background-color: #f56c6c;
      }
    }
    .el-tabs__item.is-active {
      background-color: #f1f1f1;
      height: 35px;
      border-top: 2px solid #409eff;
      border-bottom-color: #f1f1f1 !important;
    }
    .el-tabs__nav-next,
    .el-tabs__nav-prev {
      line-height: 35px;
      color: #409eff;
    }
    .el-tabs__nav-prev {
      border-right: 1px solid #f1f1f1;
    }
    .el-tabs__nav-next {
      border-left: 1px solid #f1f1f1;
    }
  }
}
</style>
