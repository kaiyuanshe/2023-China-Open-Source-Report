import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { en } from './en.mts'
import { zh } from './zh.mts'

export default defineConfig({
  ...shared,
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-FG889GL7DW' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FG889GL7DW');`
    ]
  ],
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  },
})
