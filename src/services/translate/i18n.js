import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationFR from './locales/fr/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  'fr-FR': {
    translation: translationFR
  },
  'en-US': {
    translation: translationEN
  }
}
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr-FR',
    fallbackLng: 'fr-FR',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })
export default i18n
