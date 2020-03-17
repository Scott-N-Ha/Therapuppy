import { RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN, RECEIVE_USER_LOGOUT } from '../actions/session_actions.js';

const initialState = {
  user: {},
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return { user: undefined };
    default:
      return state;
  }
};

export default sessionReducer;