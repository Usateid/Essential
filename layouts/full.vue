<template>
  <div class="full-layout">
    <sidebar />
    <navbar />
    <page-content />
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/sidebar/index'
import Navbar from '~/components/layouts/navbar/new.vue'
import PageContent from '~/components/layouts/content'
export default {
  name: 'FullLayout',
  components: { Sidebar, Navbar, PageContent },
}
</script>

<style lang="scss" scoped></style>
