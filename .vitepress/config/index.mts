import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { en } from './en.mts'
import { zh } from './zh.mts'

export default defineConfig({
  ...shared,

  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  },
})
