/* ACTION CREATOR */

/*
 * action types
 */

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const LOGIN_ACCOUNT = 'LOGIN_ACCOUNT';
export const LOGOUT_ACCOUNT = 'LOGOUT_ACCOUNT';
export const TOGGLE_LOGIN_STATE = 'TOGGLE_LOGIN_STATE';



/*
 * action creators
 */

export function createAccount(newUserId, newUserPassword) {
  return { type: CREATE_ACCOUNT, userid: newUserId, userPassword: newUserPassword };
}

export function loginAccount(newUserId) {
  return { type: LOGIN_ACCOUNT, userid: newUserId };
}

export function logoutAccount() {
  return { type: LOGOUT_ACCOUNT };
}

// for testing purposes
export function toggleLoginState() {
  return { type: TOGGLE_LOGIN_STATE }
}






