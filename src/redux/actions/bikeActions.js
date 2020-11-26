import * as types from '../constants'

export const setBikes = bikes => {
  return {
    type: types.SET_BIKES,
    bikes: bikes
  }
}

export const setCurrentDisplayType = (displayType, bike = null) => {
  return {
    type: types.SET_CURRENT_DISPLAY_TYPE,
    displayType: displayType,
    bike: bike
  }
}

export const setCurrentStart = start => {
  return {
    type: types.SET_CURRENT_START,
    start: start
  }
}
