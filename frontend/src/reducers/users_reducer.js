import {  } from '../actions/session_actions.js';

const initialState = {

};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;