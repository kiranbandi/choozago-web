import * as types from '../actions/actionTypes';  
import initialState from './initialState';  
import {hashHistory} from 'react-router';

export default function sessionReducer(state = initialState.session , action) { 
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      hashHistory.push('/')
      return Object.assign({},state,{sessionStatus:!!sessionStorage.jwt},{loginLoader:false})
    case types.LOG_OUT:
      hashHistory.push('/')
      return Object.assign({},state,{sessionStatus:!!sessionStorage.jwt})
    case types.TOGGLE_LOADER:
      return Object.assign({},state,{loginLoader:!state.loginLoader})
    case types.FIRST_TIME_PASSWORD:
      return Object.assign({},state,{firstTimeUser:!state.firstTimeUser})
    default: 
      return state;
  }
}