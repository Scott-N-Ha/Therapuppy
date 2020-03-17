import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const initialState = {

};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      nextState[action.currentUser._id] = action.currentUser
      return nextState
    default:
      return state;
  }
};

export default usersReducer;