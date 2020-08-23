<template>
  <div class="full-layout">
    <sidebar />
    <navbar />
    <page-content />
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/sidebar2'
import Navbar from '~/components/layouts/navbar'
import PageContent from '~/components/layouts/content'
export default {
  name: 'FullLayout',
  components: { Sidebar, Navbar, PageContent },
}
</script>

<style lang="scss" scoped></style>
