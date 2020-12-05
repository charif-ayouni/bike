import * as types from '../constants'

const initialState = {
  bikes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_RESULT:
      console.log(action)
      return {
        ...state,
        bikes: action.bikes
      }
    default:
      return state
  }
}
