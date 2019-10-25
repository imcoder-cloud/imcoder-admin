<template>
  <!-- :is="none 防止eslint报错 看着不舒服 -->
  <component v-bind="tagetConvert(type,path)" :is="none">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    type: {
      required: true
    },
    path: {
      required: true
    }
  },
  methods: {
    tagetConvert(type, path) {
      switch (type) {
        case "external":
          return {
            is: "a",
            href: path,
            target: "_blank"
          };
          break;
        case "click":
          return {
            is: "a",
            href: "javascript:void(0);"
          };
          break;
        default:
          return {
            is: "router-link",
            to: path
          };
          break;
      }
    },
    none: function() {
      return null;
    }
  }
};
</script>
