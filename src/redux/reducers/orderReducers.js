import * as types from '../constants'

const initialState = {
  order: null
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case types.ADD_ORDER:
      return {
        ...state,
        order: actions.order
      }
    default:
      return state
  }
}
