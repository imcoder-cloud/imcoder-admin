<template>
  <div class="views-container">
    <el-scrollbar
      ref="scrollContainer"
      :vertical="false"
      class="scroll-container"
      @wheel.native.prevent="handleScroll"
    >
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :class="isActive(tag)?'active':''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath ,fixed:tag.fixed}"
        :key="tag.path"
        tag="span"
        class="tags-view-item"
        @click.middle.native="closeSelectedTag(tag)"
        @contextmenu.prevent.native="openMenu(tag,$event)"
      >
        {{ tag.name }}
        <span
          v-if="!tag.fixed"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </el-scrollbar>

    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li v-if="!(selectedTag.fixed)" @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import path from "path";
import routerMap from "@/router";
import Auth from "@/auth";

const tagAndTagSpacing = 4;

export default {
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      fixedTags: [],
      selectedTag: {}
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.viewsBar.visitedViews;
    }
  },
  watch: {
    $route() {
      this.addViewTags();
      this.moveToCurrentTag();
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
        // routerMap.options.routes
        Auth.getDynamicRouters()
      ));
      for (const tag of fixedTags) {
        // Must have tag name
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
          if (tag.to.path === this.$route.path) {
            this.moveToTarget(tag);

            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch("updateVisitedView", this.$route);
            }

            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      const { fullPath } = view;
      this.$router.replace({ path: fullPath });
    },
    closeSelectedTag(view) {
      this.$store.dispatch("delView", view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          const latestView = visitedViews.slice(-1)[0];
          if (latestView) {
            this.$router.push(latestView);
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
      const eventDelta = e.wheelDelta || -e.deltaY * 40;
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
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
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
      &.active {
        background-color: #409eff;
        color: #fff;
        border-color: #409eff;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
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
//reset element css of el-icon-close
.scroll-container {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
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
</style>
