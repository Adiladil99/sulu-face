import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  app: {
    //rootId: 'my-school-app',

    head: {
      //title: 'YCLA coding - вход для учеников',
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "icon",
          type: 'image/png',
          href: "/logo-title.png",
        },
      ],
    },
  },
  css: ["/assets/styles/main.scss"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  alias: {
    css: resolve(__dirname, "./assets/styles/"),
  },
  modules: ["@pinia/nuxt", "nuxt-icon", "nuxt-swiper", "nuxt-rating"],
  swiper: { 
    modules: [ 
      'autoplay', 
      'navigation', 
      'pagination', 
    ], 
  },
})
