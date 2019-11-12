<template>
  <div>
    <color-picker v-model="color"></color-picker>
    <div>{{color}}</div>
  </div>
</template>

<script>
import ColorPicker from "@/components/color-picker";
export default {
  components: {
    ColorPicker
  },
  data() {
    return { color: "#409EFF" };
  }
};
</script>

<style>
</style>