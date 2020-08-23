<template>
  <div>
    <sidebar />
    <navbar />
    <div class="md:ml-56 ml-24 md:py-24 py-20 px-8 bg-gray-200">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/sidebar2'
import Navbar from '~/components/layouts/navbar'
export default {
  name: 'FullLayout',
  components: { Sidebar, Navbar },
}
</script>

<style lang="scss" scoped></style>
