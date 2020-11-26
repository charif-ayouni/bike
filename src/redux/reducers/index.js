import { combineReducers } from 'redux'

import themeReducers from './themeReducer'
import bikeReducers from './bikeReducers'

export default combineReducers({
  themeReducers,
  bikeReducers
})
