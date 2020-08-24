<template>
  <div class="flex fixed h-12 navbar">
    <div class="logo-section flex items-center justify-center w-56">
      <h2 class="text-2xl">Logo here</h2>
    </div>
    <div class="main-section flex items-center justify-between w-screen">
      <div @click="sidebarIsOpen = !sidebarIsOpen">
        <fa class="ml-2" icon="align-justify" />
      </div>
      <div>asd</div>
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

<style lang="scss" scoped>
.navbar {
  background-color: #a6d7f6;
  .logo-section {
    background-color: #90cdf4;
  }
}
</style>
