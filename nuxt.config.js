export default {
  mode: 'spa',
  target: 'static',
  telemetry: false,

  head: {
    title: 'Sanbox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Javascript practice'
      }
    ]
  },

  loading: { color: '#fff' },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios'],

  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {}
      }
    },
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
}
