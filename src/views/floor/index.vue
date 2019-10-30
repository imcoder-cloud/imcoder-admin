<template>
  <div>
    <div class="floor-demo">
      <h3>楼层演示</h3>
      <floor :floor-items="items" height="500px">
        <floor-item v-for="item in items" :key="item.name">
          <div class="item-demo" :style="{'background':item.background}">{{item.name}}</div>
        </floor-item>
      </floor>
    </div>
  </div>
</template>

<script>
import Floor from "@/components/floor/floor";
import FloorItem from "@/components/floor/floor-item";
export default {
  components: {
    Floor,
    FloorItem
  },
  data() {
    return {
      items: [
        { name: "区域 1", background: "#409EFF" },
        { name: "区域 2", background: "#67C23A" },
        { name: "区域 3", background: "#E6A23C" },
        { name: "区域 4", background: "#F56C6C" },
        { name: "区域 5", background: "#f56cf1" },
        { name: "区域 6", background: "#81c23a" },
        { name: "区域 7", background: "#e6833c" }
      ]
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
};
</script>

<style lang="scss" scoped>
.floor-demo {
  width: 800px;
  margin: auto;
  h3 {
    margin-left: 235px;
    padding: 20px 0;
  }
  .item-demo {
    height: 550px;
    width: 550px;
    text-align: center;
    line-height: 550px;
  }
}
</style>