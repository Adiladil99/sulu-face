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
  runtimeConfig: {
    baseCDN: "https://sulu-admin.devup.kz",
    public: {
      baseURL: process.env.BASE_URL || 'https://sulu-admin.devup.kz/api/',
    },
  },
  modules: ["@pinia/nuxt", "nuxt-icon", "nuxt-swiper", "nuxt-rating", "@samk-dev/nuxt-vcalendar", "@vee-validate/nuxt"],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  swiper: { 
    modules: [ 
      'autoplay', 
      'navigation', 
      'pagination', 
    ], 
  },
})
