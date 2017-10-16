import * as actionTypes from '../constants/homedata.js'
import { getAdData } from '../fetch/home/home.js'

export function getAdDataAction() {
    const result = getAdData();
    let homeAdData = [];
    result.then((res) => {
      return res.json();
    }).then((json) => {
      if (json.length) {
        homeAdData = json;
      }
    })
    return{
      type: actionTypes.HOME_AD_DATA,
      homeAdData:homeAdData
    }
}