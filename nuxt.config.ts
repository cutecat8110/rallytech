// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/en': { prerender: true },
    '/source': {
      prerender: true,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow'
      }
    },
    '/source/**': {
      headers: {
        'X-Robots-Tag': 'noindex, nofollow'
      }
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      {
        name: 'IBM Plex Sans TC',
        provider: 'local',
        global: true,
        weights: [400, 500, 600, 700],
        styles: ['normal']
      }
    ]
  },

  i18n: {
    baseUrl: 'https://www.rallytech.com.tw',
    defaultLocale: 'zh-tw',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'zh-tw',
        name: '繁體中文',
        language: 'zh-TW',
        file: 'zh-tw.ts'
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        file: 'en.ts'
      },
      {
        code: 'source',
        name: 'Source QA',
        language: 'en-US',
        file: 'source.ts'
      }
    ]
  }
})
