<template>
  <div class="content">
    <Header />
    <Nuxt />
    <Menu class="fixed_bottom" />
    <v-dialog />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.content {
  margin-bottom: 4.125rem;
}

.fixed_bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
