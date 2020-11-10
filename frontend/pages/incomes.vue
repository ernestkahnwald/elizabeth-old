<template>
  <div>
    <h1>Расходы</h1>
    <table>
      <thead>
        <td>Номер</td>
        <td>Вид</td>
        <td>Название</td>
        <td>Цена</td>
      </thead>
      <tr v-for="(income, index) in incomes" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ income.kind }}</td>
        <td>{{ income.name }}</td>
        <td>{{ income.size }}</td>
      </tr>
    </table>

    <!-- Обновляет компонент -->
    <button @click="refresh">Обновить</button>
  </div>
</template>

<script>
export default {
  computed: {
    incomes() {
      return this.$store.state.incomes
    },
  },

  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>
