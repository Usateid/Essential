<template>
  <div
    class="w-full flex flex-row items-center h-12 fixed justify-between bg-white shadow-xs"
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
      <div class="items-center border-l px-4 flex">
        <img
          class="user-picture h-8 w-8 rounded-full border border-black"
          src="~/assets/img/avatar.jpg"
        />
        <div class="flex items-center">
          <span class="ml-2 hidden md:flex">{{ user.name }} </span>
          <fa class="h-3 ml-2" icon="chevron-down" />
        </div>
      </div>
      <div class="border-l w-16 flex items-center justify-center">
        <fa icon="cogs" />
      </div>
    </div>
    <!-- <span
      class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex"
    >
      <input
        type="search"
        name="serch"
        placeholder="Search"
        class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
      />
      <i class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"> </i>
    </span> -->
    <!-- <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
      <i class="fas fa-bars"></i>
    </div>
    <div class="flex flex-row-reverse mr-8 md:flex">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Button
      </div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Link
      </div>
    </div> -->
  </div>
  <!--
  <div class="flex fixed h-12 navbar w-screen">
    <div class="logo-section flex items-center justify-center w-56">
      <h2 class="text-2xl">Logo here</h2>
    </div>
 <div
      class="main-section flex items-center justify-between w-full pl-4 pr-10"
    >
      <div @click="sidebarIsOpen = !sidebarIsOpen">
        <fa icon="align-justify" />
      </div>
      <div>asd</div>
    </div> 
  </div>-->
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'Cazzetto',
  data() {
    return {
      notify: 0,
      user: {
        name: 'Polenghi Massimiliano Franchetti',
        role: 'Product Engineer',
      },
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
  background-color: #a6d7f6;
  .logo-section {
    background-color: #90cdf4;
  }
}
</style>
