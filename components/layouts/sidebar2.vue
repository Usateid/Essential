<template>
  <div
    class="left-sidebar bg-gray-800 fixed w-56 h-full mt-12 pt-6"
    :class="{ collapse: openSidebar }"
  >
    <!-- <div class="flex flex-col items-center">
      <img
        class="user-picture h-24 w-24 rounded-full border border-black"
        src="~/assets/img/avatar.jpg"
      />
      <div
        class="user-description smooth-transition text-center mt-4 text-white"
      >
        <div class="flex items-center">
          <h2 class="text-lg">{{ user.name }}</h2>
          <fa class="text-sm ml-2" icon="chevron-down" />
        </div>

        <div>{{ user.role }}</div>
      </div>
    </div> -->
    <!-- <hr class="border-gray-400 mx-4 my-8" /> -->
    <div class="submenu-sidebar flex flex-col font-bold">
      <div class="smooth-transition text-white ml-4 mb-4">General</div>
      <nuxt-link
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
        to="/"
      >
        <fa icon="book-open" />
        <span class="smooth-transition submenu-text ml-4">Dashboard</span>
      </nuxt-link>
      <nuxt-link
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
        to="/faq"
      >
        <fa icon="book-open" />
        <span class="smooth-transition submenu-text ml-4">Faq</span>
      </nuxt-link>
      <nuxt-link
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
        to="/blog"
      >
        <fa icon="book-open" />
        <span class="smooth-transition submenu-text ml-4">Blog</span>
      </nuxt-link>
      <div
        class="submenu-item flex items-center pl-4 py-2 hover:bg-gray-600 text-gray-600 hover:text-white"
      >
        <fa icon="book-open" />
        <span class="smooth-transition submenu-text ml-4">Account</span>
      </div>
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'Sidebar2',
  data() {
    return {
      sidebarLocked: false,
      windowWidth: window.innerWidth,
      txt: '',
      user: {
        name: 'Erin Lindford',
        role: 'Product Engineer',
      },
    }
  },
  computed: {
    sidebarIsOpen: sync('options/sidebarIsOpen'),
    openSidebar() {
      return this.sidebarIsOpen
    },
  },
  watch: {
    windowWidth(n) {
      this.sidebarIsOpen = n < 1024
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
.smooth-transition {
  position: static;
  opacity: 1;
  transition: opacity 0.3s 0.3s linear;
}
.left-sidebar {
  transition: width 0.7s;
  box-shadow: 5px 10px 18px #888888;
  .user-picture {
    transition: 0.7s;
  }
  .user-description {
  }
  .submenu-sidebar {
    .submenu-text {
    }
  }
}
.collapse {
  .smooth-transition {
  }
  &.left-sidebar {
    transition: width 0.7s;
    @apply w-16;
  }
  .smooth-transition {
    transition: opacity 0s;
    opacity: 0;
    position: absolute;
  }
  .user-picture {
    @apply h-8 w-8;
  }
  .user-description {
  }
  .submenu-sidebar {
    @apply mx-0 items-center;
    .submenu-item {
      @apply pl-0 w-full justify-center;
    }
    .submenu-text {
    }
  }
}
</style>
