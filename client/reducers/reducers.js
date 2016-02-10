import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT, CREATE_ACCOUNT, TOGGLE_LOGIN_STATE } from '../actions/actions.js';

const initUserLoggedInState = {
  isLoggedIn: false,
  userid: 'Tim',
  userPassword: ''
};

function userLoggedInState(state = initUserLoggedInState, action){
  switch(action.type) {
  case LOGIN_ACCOUNT:
    return {
      isLoggedIn: true,
      userid: action.userid,
      userPassword: state.userPassword
    };
  case LOGOUT_ACCOUNT:
    return {
      isLoggedIn: false,
      userid: '',
      userPassword: ''
    };
  case CREATE_ACCOUNT:
    return {
      isLoggedIn: true,
      userid: action.userid,
      userPassword: action.userPassword
    };
  case TOGGLE_LOGIN_STATE:
    return {
      isLoggedIn: !state.isLoggedIn,
      userid: state.userid,
      userPassword: state.userPassword
    };
  default:
    return state;
  }
}


const userLoginApp = combineReducers({
  userLoggedInState,
  form: formReducer
});

export default userLoginApp;


// var {combineReducers} = require('redux')
// var {reducer: formReducer} = require('redux-form')

// module.exports = combineReducers({
//   form: formReducer
// })

