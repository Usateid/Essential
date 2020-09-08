<template>
  <div class="fixed w-full navbar h-16 flex justify-between items-center px-8">
    <div class="flex">
      <div class="md:px-2 px-4 py-2" @click="sidebarIsOpen = !sidebarIsOpen">
        <fa
          :icon="!sidebarIsOpen ? 'align-justify' : 'angle-double-left'"
          class="text-white"
        />
      </div>
      <div class="hidden md:flex px-4 py-2">
        <fa icon="search" class="text-white" />
      </div>
    </div>
    <div>
      <img class="h-16 w-16" src="~/assets/img/pizza_melting.png" />
    </div>
    <div class="flex md:hidden px-2">
      <div>
        <fa icon="paperclip" class="text-white" />
      </div>
    </div>
    <div class="hidden md:flex">
      <div>
        <fa icon="paperclip" class="text-white" />
      </div>
      <div class="ml-10">
        <fa :icon="notifyIcon" class="text-white" />
      </div>
      <div class="ml-10">
        <fa icon="cogs" class="text-white" />
      </div>
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  data() {
    return {
      notify: 0,
    }
  },
  computed: {
    sidebarIsOpen: sync('options/sidebarIsOpen'),
    notifyIcon() {
      return this.notify === 0 ? 'envelope' : 'envelope-open'
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #1c7af6;
}
</style>
