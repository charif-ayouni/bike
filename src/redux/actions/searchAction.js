import * as types from '../constants'

export const setResult = result => {
  return {
    type: types.SEARCH_RESULT,
    bikes: result
  }
}
