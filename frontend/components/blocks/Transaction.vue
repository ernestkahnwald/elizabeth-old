<template>
  <div class="transaction">
    <div class="transaction__image">
      <div class="transaction__image__inner el-icon-edit-outline"></div>
    </div>
    <div class="transaction__content">
      <div class="transaction__content__description">
        <h4 class="transaction__content__title">Кафе и рестораны</h4>
        <p class="transaction__content__account">Название счета зачисления</p>
      </div>
      <h4
        class="transaction__content__size"
        :class="{
          transaction__content__size_negative: type === 'expenses',
        }"
      >
        {{ formattedPrice }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'income',
      price: 5000,
      currency: '₽',
      icon: null,
    }
  },

  computed: {
    formattedPrice() {
      return (
        `${this.type === 'income' ? '+' : '-'} ${this.price} ` +
        `${this.currency}`
      )
    },
  },
}
</script>

<style lang="scss">
.transaction {
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 2.5rem auto;

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 0.625rem;
    background-color: $color-bg-secondary;
    box-shadow: 0 0.625rem 0.625rem -0.625rem $color-bg-secondary;
    color: $color-fg-primary;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;

    &__account {
      margin-block: 0.125rem 0;
    }

    &__size {
      white-space: nowrap;

      &_negative {
        color: $color-fg-primary;
      }
    }
  }
}
</style>
