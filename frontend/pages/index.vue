<template>
  <div>
    <h1>Обзор</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapState({}),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1200px;
}
</style>
