import { RECEIVE_ALL_PUPPIES, RECEIVE_PUPPY } from '../actions/puppy_actions.js';
import { RECEIVE_USER } from '../actions/user_actions.js';

const initialState = {

};

const puppiesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_PUPPIES:
      return Object.assign(nextState, action.payload.puppies);

    case RECEIVE_PUPPY:
      nextState[action.payload.puppy._id] = action.payload.puppy
      return nextState;

    case RECEIVE_USER:
      return Object.assign(nextState, action.payload.puppies);

    default:
      return state;
  }
};

export default puppiesReducer;
