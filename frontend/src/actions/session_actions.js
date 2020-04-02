import * as APIUtil from '../util/session_api_util.js';
import jwt_decode from 'jwt-decode';

// String Constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// Regular Actions
const receiveCurrentUserAction = (currentUser, bookings) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
  bookings
});

// const receiveUserSignInAction = () => ({
//   type: RECEIVE_USER_SIGN_IN,
// });

const receiveErrorsAction = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const logoutUserAction = () => ({
  type: RECEIVE_USER_LOGOUT,
});

// Thunk Actions
export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then((res) => {
      return dispatch(receiveCurrentUserAction(res.data.user))}
      ,
      err => dispatch(receiveErrorsAction(err.response.data)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(res => {
      console.log(res);
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUserAction(decoded, res.data.bookings));
    })
    .catch(err => dispatch(receiveErrorsAction(err.response.data)))
);

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUserAction());
};