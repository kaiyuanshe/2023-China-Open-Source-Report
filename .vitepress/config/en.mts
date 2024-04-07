import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: 'en-US',
  title: "2023 COSR",
  description: "2023 China Open Source Report",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/en' },
      { text: 'Annual report of previous years', link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd', target: '_blank' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Preface', link: '/en/preface' },
          { text: 'OSS Questionnaire', link: '/en/questionnaire' },
          { text: 'OSS Data Analytics', link: '/en/data' },
          { text: 'OSS Commercialization', link: '/en/commercialization' },
          { text: 'OSS Chronicle', link: '/en/open-source-milestones' },
        ]
      }
    ],

    footer: {
      message: 'Released under the CC BY-SA 4.0 License.',
      copyright: 'Copyright © 2014-present KAIYUANSHE'
    },

    editLink: {
      pattern: 'https://github.com/kaiyuanshe/2023-China-Open-Source-Report/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
