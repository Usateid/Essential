<template>
  <div
    class="left-sidebar bg-gray-800 fixed w-56 h-screen mt-16 pt-6"
    :class="{ collapse: collapseSidebar }"
  >
    <div class="flex flex-col items-center">
      <img
        class="user-picture h-24 w-24 rounded-full border border-black"
        src="~/assets/img/avatar.jpg"
      />
      <div v-if="!collapseSidebar" class="text-center mt-4 text-white">
        <div class="flex items-center">
          <h2 class="text-lg">{{ user.name }}</h2>
          <fa class="text-sm ml-2" icon="chevron-down" />
        </div>

        <div>{{ user.role }}</div>
      </div>
    </div>
    <hr class="border-gray-400 mx-4 my-8" />
    <div class="submenu-sidebar flex flex-col font-bold">
      <div v-if="!collapseSidebar" class="text-white ml-4 mb-4">General</div>
      <nuxt-link
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
        to="/"
      >
        <fa icon="book-open" />
        <span v-if="!collapseSidebar" class="ml-4">Dashboard</span>
      </nuxt-link>
      <nuxt-link
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
        to="/faq"
      >
        <fa icon="book-open" />
        <span v-if="!collapseSidebar" class="ml-4">Faq</span>
      </nuxt-link>
      <nuxt-link
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
        to="/blog"
      >
        <fa icon="book-open" />
        <span v-if="!collapseSidebar" class="ml-4">Blog</span>
      </nuxt-link>
      <div
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
      >
        <fa icon="book-open" />
        <span v-if="!collapseSidebar" class="ml-4">Account</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar2',
  data() {
    return {
      collapseSidebar: false,
      sidebarLocked: false,
      windowWidth: window.innerWidth,
      txt: '',
      user: {
        name: 'Erin Lindford',
        role: 'Product Engineer',
      },
    }
  },
  watch: {
    windowWidth(n) {
      this.collapseSidebar = n < 768
    },
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
}
</script>

<style lang="scss" scoped>
.left-sidebar {
  box-shadow: 5px 10px 18px #888888;
}
.collapse {
  &.left-sidebar {
    @apply w-16;
  }
  .user-picture {
    @apply h-8 w-8;
  }
  .submenu-sidebar {
    @apply mx-0 items-center;
    .submenu-item {
      @apply pl-0 w-full justify-center;
    }
  }
}
</style>
