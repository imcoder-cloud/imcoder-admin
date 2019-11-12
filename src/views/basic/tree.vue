<template>
  <div>
    <el-row>
      <h3>树形组件演示</h3>
    </el-row>
    <el-row>
      <div style="margin-bottom:50px;">
        <el-checkbox v-model="config.checkbox">复选框</el-checkbox>
        <el-checkbox v-model="config.draggable">可拖动</el-checkbox>
        <el-checkbox v-model="config.checkOnClick">点击勾选</el-checkbox>
        <el-checkbox v-model="config.expandOnClick">点击展开收缩</el-checkbox>
        <el-radio v-model="config.position" label="left">操作组在左</el-radio>
        <el-radio v-model="config.position" label="right">操作组在右</el-radio>
      </div>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="12">
        <div class="tree-demo">
          <tree
            ref="treeDemo"
            :data="data"
            :checkbox="config.checkbox"
            :draggable="config.draggable"
            :expand-all="config.expandAll"
            :check-on-click="config.checkOnClick"
            :expand-on-click="config.expandOnClick"
            :operate-position="config.position"
            @node-click="nodeClick"
            @drag-start="dragStart"
            @drag-enter="dragEnter"
            @drag-leave="dragLeave"
            @drag-over="dragOver"
            @drag-end="dragEnd"
          >
            <span slot-scope="{node,data}">
              <el-button type="text" @click.stop="() => append(data)">
                <i class="dd plus"></i>
              </el-button>
              <el-button type="text" @click.stop="() => edit(node, data)">
                <i class="dd edit"></i>
              </el-button>
              <el-button type="text" @click.stop="() => remove(node, data)">
                <i class="dd close"></i>
              </el-button>
            </span>
          </tree>
        </div>
      </el-col>
      <el-col :md="12">
        <div>
          <json v-model="nodeStr"></json>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tree from "@/components/tree";
import Json from "@/components/json";
let id = 1000;
export default {
  components: {
    Tree,
    Json
  },
  data() {
    return {
      config: {
        expandAll: true, // 默认全部展开
        checkbox: true,
        draggable: false,
        checkOnClick: true,
        expandOnClick: false,
        position: "right"
      },
      nodeStr: "",
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  disabled: true,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    nodeClick(data) {
      this.nodeStr = JSON.stringify(data);
    },
    append(data) {
      const newChild = { id: id++, label: "test", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },
    edit(node, data) {
      node.$el;
      let span = this.$refs.treeDemo.$refs.ddTree.$el.getElementsByClassName(
        ".dd-node-active"
      );
      console.log(span);
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    dragStart(node, ev) {
      console.log("drag start", node);
    },
    dragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    dragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    dragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    dragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
.tree-demo {
  width: 500px;
  margin-left: 100px;
  i {
    font-size: 12px;
  }
}
</style>>