import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  lang: 'zh-Hans',
  title: "2023 中国开源年度报告",
  description: "2023 中国开源年度报告",

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '往年年报', link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd', target: '_blank' }
    ],

    sidebar: [
      {
        items: [
          { text: '卷首语', link: '/preface' },
          { text: '开源大事记', link: '/open-source-milestones' },
          { text: '数据篇', link: '/data' },
          { text: '商业化篇', link: '/commercialization' },
          { text: '问卷篇', link: '/questionnaire' },
        ]
      }
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
  },
})
