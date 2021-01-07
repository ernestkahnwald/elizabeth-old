<template>
  <div class="field">
    <input v-model="price" type="number" placeholder="Введите сумму" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: null,
    }
  },
}
</script>

<style lang="scss">
.field {
  background-image: url($images-source + 'money.svg');
}
</style>
