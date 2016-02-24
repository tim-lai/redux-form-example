import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT, CREATE_ACCOUNT, TOGGLE_LOGIN_STATE } from '../actions/actions.js';
import { ADD_MESSAGE, SET_MESSAGES } from '../actions/actions.js';

const initUserLoggedInState = {
  isLoggedIn: false,
  userid: 'Tim',
  userPassword: ''
};

const userLoggedInState = (state = initUserLoggedInState, action) => {
// function userLoggedInState(state = initUserLoggedInState, action){
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


// Chat Room

const message = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        id: action.id,
        text: action.text,
      }

    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        message(undefined, action)
      ]

    default:
      return state
  }
}





const userLoginApp = combineReducers({
  userLoggedInState,
  form: formReducer,
  messages
});

export default userLoginApp;




