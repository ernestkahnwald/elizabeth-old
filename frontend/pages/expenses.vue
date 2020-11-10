<template>
  <div>
    <h1>Доходы</h1>

    <table>
      <thead>
        <td>Номер</td>
        <td>Название</td>
        <td>Цена</td>
      </thead>
      <tr v-for="(income, index) in incomes" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ income.name }}</td>
        <td>{{ income.size }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    incomes() {
      return this.$store.state.expenses
    },
  },

  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style></style>
