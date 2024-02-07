import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { en } from './en.mts'
import { zh } from './zh.mts'

export default defineConfig({
  ...shared,
  head: [
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
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  },
})
