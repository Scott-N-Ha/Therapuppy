import * as UserAPI from '../util/user_api_util.js';

// String Constants
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

// Regular Actions
const receiveUserAction = payload => ({
  type: RECEIVE_USER,
  payload,
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

// Thunk Actions
export const fetchSingleUser = username => dispatch => (
  UserAPI.fetchUser(username)
    .then(res => dispatch(receiveUserAction(res.data)),
      err => dispatch(receiveUserErrors(err.response.data)))
);
