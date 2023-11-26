import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  css: ["/assets/styles/main.scss"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  alias: {
    css: resolve(__dirname, "./assets/styles/"),
  },
  modules: ["@pinia/nuxt", "nuxt-icon", "nuxt-swiper"],
  swiper: { 
    modules: [ 
      'autoplay', 
      'navigation', 
      'pagination', 
    ], 
  },
})
