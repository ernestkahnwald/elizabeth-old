// TODO: Минимайзеры.
// TODO: Разобраться с настройкой.

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'Elizabeth',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Контроль доходов и расходов',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  rootDir: __dirname,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css',
    // './node_modules/element-ui/packages/theme-chalk/src/base.scss',
    // './node_modules/element-ui/packages/theme-chalk/src/button.scss',
    // './node_modules/element-ui/packages/theme-chalk/src/container.scss',
  ],
  // './assets/scss/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/element-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
}
