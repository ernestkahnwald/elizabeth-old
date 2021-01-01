<template>
  <section class="operations container">
    <div class="operations__filter">
      <div
        class="operations__filter__button button button_primary button_iconed"
      >
        <i class="icon_filter"></i>
        Фильтр
      </div>
      <div class="operations__filter__direction">
        <div class="button button_small button_secondary button_iconed">
          Прошедшие
        </div>
        <div
          class="button button_small button_secondary button_not-selected button_iconed"
        >
          Запланированные
        </div>
      </div>
      <div class="operations__filter__info">
        <div class="operations__filter__text">
          Операции за 11 декабря - 20 января
        </div>
      </div>
    </div>
    <div class="operations__content">
      <div v-for="i in 5" :key="i" class="operations__operation">
        <div class="operations__operation__title">
          <h2>Вчера, 20 ноября</h2>
        </div>
        <div class="operations__operation__transactions">
          <Transaction
            v-for="transaction in transactions"
            :key="transaction.id"
            class="operations__operation__transaction"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Transaction from '~/components/blocks/Transaction'

export default {
  components: {
    Transaction,
  },

  data() {
    return {
      transactions: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.operations {
  &__filter {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    &__button {
      padding-block: 0.8125rem;
    }

    &__direction {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.25rem;
    }

    &__text {
      padding-block: 1rem;
      text-align: center;
    }
  }

  &__content {
    margin-block-start: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
  }

  &__operation {
    &__transactions {
      margin-block-start: 1.25rem;
      display: flex;
      flex-direction: column;
      row-gap: 1.25rem;
    }
  }
}
</style>
