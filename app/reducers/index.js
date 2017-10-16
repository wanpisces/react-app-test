import { combineReducers } from 'redux'
import userinfo from './userinfo'
import homedata from './homedata'

export default combineReducers({
    userinfo,
    homedata
})