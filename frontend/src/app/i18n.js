import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from '@/assets/locales/ru'
import en from '@/assets/locales/en'

i18n.use(initReactI18next).init({
  lng: 'ru',
  resources: {
    ru,
    en,
  },
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
