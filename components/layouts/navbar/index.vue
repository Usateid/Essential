<template>
  <div
    class="navbar w-full flex flex-row items-center h-12 fixed justify-between shadow-xs"
  >
    <div class="navbar-left flex flex-row-reverse md:flex-row">
      <div class="w-56 justify-center text-lg text-gray-700 flex md:border-r">
        My Website
      </div>
      <div
        class="w-16 md:w-auto md:ml-4 justify-center flex items-center border-r md:border-none"
      >
        <div @click="sidebarIsOpen = !sidebarIsOpen">
          <fa icon="align-justify" />
        </div>
      </div>
    </div>
    <div class="navbar-right flex">
      <div class="flex items-center mx-4">
        <fa icon="paperclip" />
      </div>
      <div class="flex items-center mx-4">
        <fa :icon="notifyIcon" />
      </div>
      <navbar-user-section />
      <div class="border-l w-16 flex items-center justify-center">
        <fa icon="cogs" />
      </div>
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import NavbarUserSection from '~/components/layouts/navbar/user'
export default {
  name: 'Navbar',
  components: {
    NavbarUserSection,
  },
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
  background-color: #3e8ef7;
  .logo-section {
    background-color: #90cdf4;
  }
}
</style>
