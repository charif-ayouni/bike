import * as types from '../constants'

export const addOrder = order => {
  return {
    type: types.ADD_ORDER,
    order: order
  }
}
