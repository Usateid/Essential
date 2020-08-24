<template>
  <div
    class="page-content md:ml-56 ml-16 md:py-24 py-20 px-8 bg-gray-500"
    :class="{ collapse: sidebarIsOpen }"
  >
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
  transition: 0.7s;
  &.collapse {
    @apply ml-16;
  }
}
</style>
