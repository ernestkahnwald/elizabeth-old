<template>
  <div>
    <header>
      <div class="container">
        <NuxtLink to="/">Elizabeth</NuxtLink>
      </div>
    </header>
    <main class="container">
      <aside>
        <nav>
          <NuxtLink to="/">Обзор</NuxtLink>
          <NuxtLink to="/incomes">Доходы</NuxtLink>
          <NuxtLink to="/expenses">Расходы</NuxtLink>
          <NuxtLink to="/transactions">Транзакции</NuxtLink>
        </nav>
      </aside>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    // Получение мета тегов, которое будет вычисляться на основе
    // данных пользователя в Vuex.
    meta() {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: `
            width=device-width,
            initial-scale=1,
            maximum-scale=1 shrink-to-fit=no
          `,
        },
        { hid: 'description', name: 'description', content: 'Главная' },
      ]
    },

    // Подкапотный метод, который Nuxt вызывает у всех страниц.
    head() {
      // TODO: Что это,
      const canonical = `https://mysite.com${this.$route.path
        .toLowerCase()
        .replace(/\/$/, '')}`

      return {
        meta: [...this.meta],
        script: [
          // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
        ],
        link: [{ rel: 'canonical', href: canonical }],
      }
    },
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

header {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin-bottom: 10px;
}

main {
  display: flex;
  align-items: flex-start;

  aside nav {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    margin-right: 10px;
  }
}
</style>
