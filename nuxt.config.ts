export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo"
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://graphqlzero.almansi.me/api',
      }
    }
  }
});
