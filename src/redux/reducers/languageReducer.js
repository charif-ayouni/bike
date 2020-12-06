import * as types from '../constants'
import locales from '../../services/translate/locales'
import i18n from '../../services/translate/i18n'

const initialState = {
  currentLanguage: locales.fr
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LANGUAGE:
      return {
        ...state,
        currentLanguage: toggleLanguage(state.currentLanguage)
      }
    default:
      return state
  }
}

const toggleLanguage = current => {
  translate(current)
  if (current.locale === 'fr-FR') {
    return locales.en
  }
  return locales.fr
}

const translate = current => {
  let nextLanguage = current.locale === 'fr-FR' ? 'en-Us' : 'fr-FR'
  i18n.changeLanguage(nextLanguage).then(() => {})
}
