import { RECEIVE_PUPPY_ERRORS, RECEIVE_PUPPY, RECEIVE_ALL_PUPPIES } from '../actions/puppy_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PUPPY_ERRORS:
      return action.errors;
    case RECEIVE_PUPPY:
    case RECEIVE_ALL_PUPPIES:
        return _nullErrors
    default:
      return state;
  }
};

export default SessionErrorsReducer;
