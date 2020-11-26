import * as types from '../constants'
import { theme } from '../../theme/theme'

const initialState = {
  currentTheme: {
    name: 'light',
    style: theme.light
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_THEME:
      return {
        ...state,
        currentTheme: toggleTheme(state.currentTheme)
      }
    default:
      return state
  }
}

const toggleTheme = current => {
  if (current.name === 'light') {
    return {
      name: 'dark',
      style: theme.dark
    }
  }
  return {
    name: 'light',
    style: theme.light
  }
}
