<template>
  <section class="operations container">
    <div class="operations__filter">
      <el-button
        type="primary"
        icon="el-icon-position"
        class="operations__filter__button"
      >
        Фильтр
      </el-button>

      <el-radio-group
        v-model="direction"
        class="operations__filter__direction"
        fill="#ffeaf0"
        text-color="#FF316D"
      >
        <el-radio-button label="Прошедшие"></el-radio-button>
        <el-radio-button label="Запланированные"></el-radio-button>
      </el-radio-group>

      <div class="operations__filter__info">
        <p class="operations__filter__text">
          Операции за 11 декабря - 20 января
        </p>
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
    <div class="operations__actions">
      <Action type="income" />
    </div>
  </section>
</template>

<script>
import Action from '~/components/blocks/Action'
import Transaction from '~/components/blocks/Transaction'

export default {
  components: {
    Action,
    Transaction,
  },

  data() {
    return {
      direction: 'Прошедшие',
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

    &__direction {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.25rem;

      label {
        border-radius: 0.3125rem;
        overflow: hidden;

        span {
          display: block;
          border: none !important;
          font-weight: $fw-medium !important;
        }
      }
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

  &__actions {
    position: fixed;
    right: $container-indent;
    bottom: $menu-size + 1.875rem;
  }
}
</style>
