import { combineReducers } from 'redux'

import themeReducers from './themeReducer'
import bikeReducers from './bikeReducers'
import searchReducer from './searchReducer'
import languageReducer from './languageReducer'

export default combineReducers({
  themeReducers,
  bikeReducers,
  searchReducer,
  languageReducer
})
