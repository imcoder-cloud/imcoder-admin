<template>
  <el-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl" class="dd-col" :class="ddCol">
    <slot></slot>
  </el-col>
</template>

<script>
export default {
  props: {
    xs: {
      type: Number,
      default: 24
    },
    sm: {
      type: Number,
      default: 24
    },
    md: {
      type: Number,
      default: 24
    },
    lg: {
      type: Number,
      default: 24
    },
    xl: {
      type: Number,
      default: 24
    },
    ddCol: {
      default: ""
    }
  },
  created() {
    console.log(this.xs, this.sm, this.md, this.lg, this.xl);
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.dd-col {
  margin-bottom: 20px;
}
</style>
