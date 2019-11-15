<template>
  <div class="social-share"></div>
</template>

<script>
import 'social-share.js/dist/js/social-share.min.js'
export default {
  name: 'share',
  props: {
    shareConfig: {
      type: Object
    }
  },
  mounted() {
    socialShare(".social-share", this.config)
  }
}
</script>

<style src="social-share.js/dist/css/share.min.css"></style>