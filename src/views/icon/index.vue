<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="element-ui" name="elementui">
        <element-icon></element-icon>
      </el-tab-pane>
      <el-tab-pane label="fontawesome" name="fontawesome">
        <el-alert
          title="温馨提示"
          type="success"
          description="fontawesome 图标使用方式为 <i class=&quot;fa fa-xxx&quot;></i>"
        ></el-alert>
        <fontawesome></fontawesome>
      </el-tab-pane>
      <el-tab-pane label="系统内置" name="system">
        <el-alert
          title="温馨提示"
          type="success"
          description="系统内置图标使用方式为 <i class=&quot;dd xxx&quot;></i>"
        ></el-alert>
        <dd-icon></dd-icon>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ElementIcon from "./element";
import Fontawesome from "./fontawesome";
import DdIcon from "./dd-icon";
export default {
  components: {
    ElementIcon,
    Fontawesome,
    DdIcon
  },
  data() {
    return {
      activeName: "elementui"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
