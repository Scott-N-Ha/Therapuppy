import { RECEIVE_ALL_PUPPIES } from '../actions/puppy_actions.js';

const initialState = {

};

const puppiesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_PUPPIES:
      return Object.assign(nextState, action.puppies);
    default:
      return state;
  }
};

export default puppiesReducer;
