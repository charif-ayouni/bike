import * as types from '../constants'

const initialState = {
  bikes: [],
  start: 0,
  limit: 2,
  displayType: 'bikes',
  bike: null
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case types.SET_BIKES:
      return {
        ...state,
        bikes: actions.bikes
      }
    case types.SET_CURRENT_DISPLAY_TYPE:
      return {
        ...state,
        displayType: actions.displayType,
        bike: actions.bike
      }
    case types.SET_CURRENT_START:
      return {
        ...state,
        start: actions.start
      }
    default:
      return state
  }
}
