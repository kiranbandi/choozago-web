import * as types from '../actions/actionTypes';  
import initialState from './initialState';  
import {hashHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {  
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      hashHistory.push('/')
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      hashHistory.push('/')
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}