<template>
  <div class="flex fixed w-full h-16 bg-blue-600 border-b border-black">
    <div class="flex items-center w-56 justify-between px-6">
      <h2 class="text-2xl">Logo here</h2>
      <button @click="sidebarIsOpen = !sidebarIsOpen">
        <fa class="ml-2" icon="align-justify" />
      </button>
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'Cazzetto',
  computed: {
    sidebarIsOpen: sync('options/sidebarIsOpen'),
  },
}
</script>

<style lang="scss" scoped></style>
