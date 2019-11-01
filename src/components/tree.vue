<template>
  <div class="tree-container">
    <el-tree
      ref="ddTree"
      :data="data"
      :show-checkbox="checkbox"
      :draggable="draggable"
      :default-expand-all="expandAll"
      :check-on-click-node="checkOnClick"
      :expand-on-click-node="expandOnClick"
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-click="handleNodeClick"
      node-key="id"
    >
      <span
        class="tree-node"
        slot-scope="{ node, data }"
        :style="{'justify-content':operatePosition=='right'?'space-between':''}"
      >
        <span>{{ node.label }}</span>
        <div class="operate-group">
          <slot :node="node" :data="data"></slot>
        </div>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true
    },
    operatePosition: {
      default: "right"
    },
    expandAll: {
      default: false
    },
    checkbox: {
      default: false
    },
    checkOnClick: {
      default: false
    },
    expandOnClick: {
      default: false
    },
    draggable: {
      default: false
    }
  },
  data() {
    return {};
  },

  methods: {
    handleNodeClick(data, node, nodeComponent) {
      let spans = this.$refs.ddTree.$el.getElementsByClassName("dd-node-active");
      for (let i = 0; i < spans.length; i++) {
        spans[i].classList.remove("dd-node-active");
      }
      nodeComponent.$el.children[0].children[2].children[0].classList.add("dd-node-active");
      this.$emit("node-click", data);
    },
    handleDragStart(node, ev) {
      this.$emit("drag-start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      this.$emit("drag-enter", draggingNode, dropNode);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      this.$emit("drag-leave", draggingNode, dropNode);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      this.$emit("drag-over", draggingNode, dropNode);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      this.$emit("drag-end", draggingNode, dropNode, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {}
  }
};
</script>

<style lang="scss" scoped>
.tree-container {
  .dd-node-active {
    color: #409eff;
  }
  .el-tree-node__content {
    &:hover {
      span {
        color: #409eff;
      }
      .operate-group {
        display: inline-block;
      }
    }
  }
  width: 100%;
  .tree-node {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding-right: 20px;
    .operate-group {
      display: none;
      margin-left: 30px;
      i {
        font-size: 12px;
      }
    }
  }
}
</style>>