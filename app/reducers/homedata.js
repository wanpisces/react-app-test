import * as actionTypes from '../constants/homedata'

const initialState = {
  homeAdData: []
}

export default function homedata (state = initialState, action) {
    switch (action.type) {
        case actionTypes.HOME_AD_DATA:
          {
            state.homeAdData = action.homeAdData;
            return state
          }

        default:
            return state
    }
}