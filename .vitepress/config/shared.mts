import { defineConfig } from 'vitepress';

export const shared = defineConfig({
  cleanUrls: true,
  lastUpdated: true,

  base: '/2023-China-Open-Source-Report/',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/image/China-Open-Source-Report.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/2023-China-Open-Source-Report/image/China-Open-Source-Report.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-7CSQ2KPB1F' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7CSQ2KPB1F');`
    ]
  ],

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
