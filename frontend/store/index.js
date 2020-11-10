/**
 * Каждый компонент запрашивает данные из состояния Vuex и передает измененные
 * данные обратно в состояние.
 */

// Само хранилище.
export const state = () => ({
  API_URL: 'http://192.168.0.102:8000/api/',
  OPERATION_KINDS: {
    INCOME: 1,
    EXPENSES: 2,
  },

  incomes: [],
  expenses: [],
})

// Процедуры, через которые меняется состоание.
// store.commit('mutName')
export const mutations = {
  SET_INCOMES(state, incomes) {
    state.incomes = incomes
  },
  SET_EXPENSES(state, expenses) {
    state.expenses = expenses
  },
}

// Не меняют напрямую состояние, а вызывают мутации.
// Могут использоваться для асинхронных операций.
// store.dispatch('actionName')
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('updateExpenses')
  },
  // Приходит state, а не context.
  async updateIncomes({ state, commit }) {
    const data = await this.$axios.$get(state.API_URL + 'operations/')
    const incomes = data.results
      ? data.results.filter((income) => {
          return income.type.value === state.OPERATION_KINDS.INCOME
        })
      : []
    await commit('SET_INCOMES', incomes)
  },
  async updateExpenses({ state, commit }) {
    const data = await this.$axios.$get(state.API_URL + 'operations/')
    const expenses = data.results
      ? data.results.filter((expense) => {
          return expense.type.value === state.OPERATION_KINDS.EXPENSES
        })
      : []
    await commit('SET_EXPENSES', expenses)
  },
}
