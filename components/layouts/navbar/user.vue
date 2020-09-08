<template>
  <div class="items-center border-l px-4 flex">
    <img
      class="user-picture h-8 w-8 rounded-full border border-black"
      src="~/assets/img/avatar.jpg"
    />
    <div class="flex items-center">
      <!-- <span class="ml-2 hidden md:flex">{{ user.name }} </span> -->
      <div class="relative group inline-block">
        <button
          class="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center"
        >
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute right-0 min-w-32 mt-3 origin-top-right transition duration-150 ease-in-out"
        >
          <li
            class="flex justify-between items-baseline rounded-sm px-3 py-2 hover:bg-gray-100"
          >
            <nuxt-link to="/profile">
              Profile
            </nuxt-link>
            <fa icon="user" />
          </li>
          <li
            class="flex justify-between items-baseline rounded-sm px-3 py-2 hover:bg-gray-100"
          >
            <button>logout</button>
            <fa icon="sign-out-alt" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarUserSection',
  data() {
    return {
      user: {
        name: 'Polenghi Massimiliano Franchetti',
        role: 'Product Engineer',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>
