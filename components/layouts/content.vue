<template>
  <div class="page-content md:py-24 py-20 px-8">
    <Nuxt />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
export default {
  name: 'ContentPage',
  computed: {
    sidebarIsOpen: get('options/sidebarIsOpen'),
  },
}
</script>

<style lang="scss" scoped>
.page-content {
  background-color: #f1f4f5;
  min-height: 100vh;
}
</style>
