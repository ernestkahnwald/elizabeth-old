<template>
  <header class="header">
    <div class="header__inner container">
      <div class="header__title">
        <h2 class="header__title__inner">Операции</h2>
      </div>
      <div class="header__actions">
        <div
          class="header__actions__action header__actions__action_remind icon-button"
          notifications="5"
        ></div>
        <div
          class="header__actions__action header__actions__action_settings icon-button"
        ></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss">
.header {
  padding-block: 1.875rem;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__actions {
    display: flex;
    gap: 1.25rem;

    &__action {
      &_remind {
        position: relative;
        background-image: url($images-source + 'nav/remind.svg');

        &::after {
          content: attr(notifications);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 0.875rem;
          width: 0.875rem;
          position: absolute;
          right: 0;
          font-size: 0.625rem;
          line-height: 0.625rem;
          color: $color-fg-secondary;
          background-color: $color-bg-primary;
          border-radius: 50%;
        }
      }

      &_settings {
        background-image: url($images-source + 'nav/settings.svg');
      }
    }
  }
}
</style>
