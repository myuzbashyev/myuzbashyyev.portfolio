// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "nuxt-aos",
    "@nuxtjs/i18n",
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark",
        },
      },
    },
  },

  tailwindcss: {
    configPath: "~/tailwind.config.js",
  },

  aos: {
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 1500,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  },

  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.ts",
      },
      {
        code: "ru",
        file: "ru-RU.ts",
      },
      {
        code: "tm",
        file: "tm-TM.ts",
      },
    ],
    lazy: true,
    langDir: "../lang",
    defaultLocale: "ru",
  },

  compatibilityDate: "2024-12-06",
});
