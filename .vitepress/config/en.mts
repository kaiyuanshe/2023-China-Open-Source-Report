import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: 'en-US',
  title: "2023 COSR",
  description: "2023 China Open Source Report",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Annual report of previous years', link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd', target: '_blank' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Preface', link: '/en/preface' },
          { text: 'Open Source Milestones', link: '/en/open-source-milestones' },
          { text: 'Data', link: '/en/data' },
          { text: 'Commercialization', link: '/en/commercialization' },
          { text: 'Questionnaire', link: '/en/questionnaire' },
        ]
      }
    ],

    footer: {
      message: 'Released under the CC License.',
      copyright: 'Copyright © 2014-present KAIYUANSHE'
    },

    editLink: {
      pattern: 'https://github.com/kaiyuanshe/2023-China-Open-Source-Report/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
