<template>
  <div class="action" :class="'action_' + type" @click="onClick"></div>
</template>

<script>
import AddOperationPage from '~/pages/addOperation'

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (t) => ['income', 'expense'].includes(t),
    },
  },

  computed: {
    isIncome() {
      return this.type === 'income'
    },

    isExpense() {
      return this.type === 'expense'
    },
  },

  methods: {
    onClick() {
      this.openPopup()
    },

    openPopup(options) {
      this.$modal.show(
        AddOperationPage,
        {},
        {
          name: 'addOperation',
          reset: true,
          height: '100%',
          width: '100%',
        }
      )
    },
  },
}
</script>

<style lang="scss">
.action {
  @extend %icon;
  height: 3.125rem;
  width: 3.125rem;
  background: {
    size: 1.125rem;
    color: $color-bg-primary;
  }
  box-shadow: 0 0.3125rem 0.625rem -0.3125rem $color-bg-primary;
  border-radius: 50%;

  &_income {
    background-image: url($images-source + 'add.svg');
  }
}
</style>
