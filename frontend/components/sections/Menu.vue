<template>
  <section class="menu">
    <nav class="menu__inner">
      <a class="menu__item icon-button menu__item_home"></a>
      <a class="menu__item icon-button menu__item_cards"></a>
      <a class="menu__item icon-button menu__item_transactions"></a>
      <a class="menu__item icon-button menu__item_analytics"></a>
      <a class="menu__item icon-button menu__item_menu"></a>
    </nav>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.menu {
  border-radius: 1.25rem 1.25rem 0 0;
  box-shadow: 0 -0.3125rem 0.625rem #cdcdcd40;
  background-color: $color-bg-common;

  &__inner {
    display: flex;
  }

  &__item {
    display: block;
    padding-block: 1.375rem;

    &_home {
      background-image: url($images-source + 'nav/home.svg');
    }

    &_cards {
      background-image: url($images-source + 'nav/card.svg');
    }

    &_transactions {
      background-image: url($images-source + 'nav/transactions.svg');
    }

    &_analytics {
      background-image: url($images-source + 'nav/analytics.svg');
    }

    &_menu {
      background-image: url($images-source + 'nav/menu.svg');
    }

    &.icon-button {
      width: 100%;
    }
  }
}
</style>
