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
    // 'normalize.css',
    'normalize.css/normalize.css',
  ],

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
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  styleResources: {
    scss: [
      '~assets/scss/_variables.scss',
      '~assets/scss/_mixins.scss',
      '~assets/scss/_layout.scss',
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
}
