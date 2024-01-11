import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "2023 中国开源年度报告",
  description: "2023 中国开源年度报告",
  lastUpdated: true,
  base: '/2023-China-Open-Source-Report/',

  themeConfig: {
    logo: '/image/China-Open-Source-Report.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '往年年报', link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd', target: '_blank' }
    ],

    sidebar: [
      {
        items: [
          { text: '卷首语', link: '/卷首语' },
          { text: '开源大事记', link: '/开源大事记' },
          { text: '数据篇', link: '/数据篇' },
          { text: '商业化篇', link: '/商业化篇' },
          { text: '问卷篇', link: '/问卷篇' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaiyuanshe/2023-China-Open-Source-Report' }
    ],

    footer: {
      message: 'Released under the CC License.',
      copyright: 'Copyright © 2014-present KAIYUANSHE'
    },

    editLink: {
      pattern: 'https://github.com/kaiyuanshe/2023-China-Open-Source-Report/:path',
      text: '在 GitHub 上编辑本页内容'
    },

    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    search: {
      provider: 'local'
    },

    externalLinkIcon: true,
  }
})
