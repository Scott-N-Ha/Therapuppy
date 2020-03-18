import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_ALL_PUPPIES } from '../actions/puppy_actions.js';

const initialState = {

};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser._id] = action.currentUser
      return nextState
    case RECEIVE_ALL_PUPPIES:
      return Object.assign(nextState, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;