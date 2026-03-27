import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.json'
import en from './en.json'

const savedLang = localStorage.getItem('language') || 'zh-CN'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  messages: {
    'zh-CN': zhCN,
    'en': en
  }
})

export default i18n