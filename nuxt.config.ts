export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo", "@nuxt/image"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://graphqlzero.almansi.me/api',
      }
    }
  },
  image: {
    domains: ['graphqlzero.almansi.me']
  }
});