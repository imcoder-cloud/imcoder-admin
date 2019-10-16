<template>
  <!-- :is="none 防止eslint报错 看着不舒服 -->
  <component v-bind="tagetConvert(isExternal,path)" :is="none">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    isExternal: {
      required: true
    },
    path: {
      required: true
    }
  },
  methods: {
    tagetConvert(isExternal, path) {
      if (isExternal) {
        return {
          is: "a",
          href: path,
          target: "_blank",
          rel: "noopener"
        };
      }
      return {
        is: "router-link",
        to: path
      };
    },
    none: function() {
      return null;
    }
  }
};
</script>
