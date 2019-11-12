<template>
  <el-row :gutter="20">
    <el-col :md="12" class="mb20">
      <el-card class="card-demo">
        <div slot="header" class="clearfix">
          <span>树形选择器组件</span>
        </div>
        <select-tree
          :config="config"
          :options="optionData"
          :v-model="value"
          :clearable="isClearable"
          :accordion="isAccordion"
          @node-click="getValue($event)"
        />
      </el-card>
    </el-col>
    <el-col :md="12">
      <el-card class="card-demo">
        <div slot="header" class="clearfix">
          <span>选中的节点</span>
        </div>
        <json v-model="selectedNodeStr"></json>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import SelectTree from "@/components/select-tree";
import Json from "@/components/json";
export default {
  name: "app",
  components: {
    SelectTree,
    Json
  },
  data() {
    return {
      isClearable: true, // 可清空（可选）
      isAccordion: true, // 可收起（可选）
      value: "", // 初始ID（可选）
      selectedNode: {},
      selectedNodeStr: "",
      config: {
        // 配置项（必选）
        value: "id",
        label: "name",
        children: "children"
        // disabled:true
      },
      // 选项列表（必选）
      list: [
        { id: 1, parentId: 0, name: "一级菜单A", rank: 1 },
        { id: 2, parentId: 0, name: "一级菜单B", rank: 1 },
        { id: 3, parentId: 0, name: "一级菜单C", rank: 1 },
        { id: 4, parentId: 1, name: "二级菜单A-A", rank: 2 },
        { id: 5, parentId: 1, name: "二级菜单A-B", rank: 2 },
        { id: 6, parentId: 2, name: "二级菜单B-A", rank: 2 },
        { id: 7, parentId: 4, name: "三级菜单A-A-A", rank: 3 },
        { id: 8, parentId: 7, name: "四级菜单A-A-A-A", rank: 4 },
        { id: 9, parentId: 0, name: "一级菜单C", rank: 1 },
        { id: 10, parentId: 0, name: "一级菜单end", rank: 1 }
      ]
    };
  },
  computed: {
    /* 转树形数据 */
    optionData() {
      let cloneData = JSON.parse(JSON.stringify(this.list)); // 对源数据深度克隆
      return cloneData.filter(father => {
        // 循环所有项，并添加children属性
        let branchArr = cloneData.filter(child => father.id == child.parentId); // 返回每一项的子级数组
        branchArr.length > 0 ? (father.children = branchArr) : ""; //给父级添加一个children属性，并赋值
        return father.parentId == 0; //返回第一层
      });
    }
  },
  methods: {
    // 取值
    getValue(node) {
      this.valueId = node.id;
      this.selectedNode = node;
      this.selectedNodeStr = JSON.stringify(node);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-demo {
  height: 500px;
}
</style>
