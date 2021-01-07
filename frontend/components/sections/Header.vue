<template>
  <header class="header">
    <div class="header__inner container">
      <div class="header__title">
        <h2 class="header__title__inner">
          <slot name="title">Операции</slot>
        </h2>
      </div>
      <div class="header__actions">
        <slot name="actions">
          <div class="el-icon-bell" notifications="5"></div>
          <div class="el-icon-setting"></div>
        </slot>
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

    & > div {
      &::before {
        font-size: 1.5rem;
      }

      &[notifications] {
        position: relative;

        &::after {
          content: attr(notifications);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 0.875rem;
          width: 0.875rem;
          position: absolute;
          top: 0;
          right: 0;
          font-size: 0.625rem;
          line-height: 0.625rem;
          color: $color-fg-secondary;
          background-color: $color-bg-primary;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
