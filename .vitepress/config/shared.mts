import { defineConfig } from 'vitepress';

const deploymentEnvironment = process.env.VITE_DEPLOYMENT_ENVIRONMENT;

console.log("ENV:", deploymentEnvironment)


export const shared = defineConfig({
  lastUpdated: true,

  base: deploymentEnvironment === 'gitee' ? '/2023-china-open-source-report/' : deploymentEnvironment === 'vercel'? '' : '/2023-China-Open-Source-Report/',

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
