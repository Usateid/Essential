<template>
  <!-- component -->

  <div
    class="md:flex flex-col md:flex-row min-h-screen fixed md:bg-red-900 md:w-auto w-full mt-0 md:mt-16"
    @mouseover="collapseSidebar = false"
    @mouseout="collapseSidebar = true"
  >
    <div
      class="flex flex-col w-full md:w-64 text-gray-600 bg-gray-800 border-r border-blue-600 flex-shrink-0"
      :class="{ collapse: collapseSidebar }"
    >
      <!-- <div
        class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between md:justify-center"
      >
        <a
          href="#"
          class="text-xl font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"
          >Essenziale</a
        >
        <button
          class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
          @click="open = !open"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              :class="{ hidden: open }"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              :class="{ hidden: !open }"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div> -->
      <div class="w-full py-4 hidden md:flex flex-col items-center">
        <img
          :class="{ collapse: collapseSidebar }"
          class="user-picture h-24 w-24 rounded-full border border-black"
          src="~/assets/img/avatar.jpg"
        />
        <div v-if="!collapseSidebar" class="text-center mt-4">
          <h2 class="text-lg">{{ user.name }}</h2>
          <div>{{ user.role }}</div>
        </div>
      </div>
      <hr v-if="!collapseSidebar" class="border-gray-600 mx-4" />

      <nav
        :class="[{ collapse: collapseSidebar }]"
        class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"
      >
        <nuxt-link
          class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/blog"
          >Blog
        </nuxt-link>
        <nuxt-link
          class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/faq"
          >Faq</nuxt-link
        >
        <a
          class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >Contact</a
        >
        <div class="flex md:hidden pt-4 w-full justify-between">
          <div class="flex items-center">
            <div class="">{{ user.name }}</div>
            <div>,</div>
            <div class="mr-2">{{ user.role }}</div>
            <img
              class="h-8 w-8 rounded-full border border-black"
              src="~/assets/img/avatar.jpg"
            />
          </div>
          <div class="flex items-center">
            <div class="mr-2">profile</div>
            <div>logout</div>
          </div>
        </div>
        <!-- <div
          class="relative"
          x-data="{ open: false }"
          @click.away="open = false"
        >
          <button
            class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <span>Dropdown</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              :class="{ 'rotate-180': open, 'rotate-0': !open }"
              class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            x-show="open"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"
          >
            <div
              class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"
            >
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                >Link #1</a
              >
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                >Link #2</a
              >
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                >Link #3</a
              >
            </div>
          </div>
        </div> -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      open: false,
      collapseSidebar: true,
      user: {
        name: 'Erin Lindford',
        role: 'Product Engineer',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  transition: width 0.7s;

  &.collapse {
    transition: width 0.7s;

    @apply w-20;
  }
}
.user-picture {
  &.collapse {
    @apply h-16 w-16;
  }
}
nav {
  &.collapse {
    @apply px-0 pb-0;
  }
}
</style>
