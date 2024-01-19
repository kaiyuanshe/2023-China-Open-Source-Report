import { defineConfig } from 'vitepress';

export const shared = defineConfig({
  cleanUrls: true,
  lastUpdated: true,

  base: '/2023-China-Open-Source-Report/',

  themeConfig: {
    logo: '/image/China-Open-Source-Report.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaiyuanshe/2023-China-Open-Source-Report' }
    ],

    search: {
      provider: 'local'
    },

    externalLinkIcon: true,
  }
})
