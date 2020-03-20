import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_ALL_PUPPIES, RECEIVE_PUPPY } from '../actions/puppy_actions.js';
import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions.js';

const initialState = {

};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser._id] = action.currentUser
      return nextState;
      
    case RECEIVE_ALL_PUPPIES:
      return Object.assign(nextState, action.payload.users);

    case RECEIVE_PUPPY:
      nextState[action.payload.users._id] = action.payload.users
      
      if (action.payload.bookings !== undefined){
        let bookings = Object.values(action.payload.bookings);
        bookings.forEach(({ renter }) => {
          if (nextState[renter._id] === undefined) {
            nextState[renter._id] = renter;
          }
        });
      }
      
      return nextState;
    case RECEIVE_ALL_BOOKINGS:
      return nextState;

    case RECEIVE_BOOKING:
      return Object.assign(nextState, action.payload.users)
    default:
      return state;
  }
};

export default usersReducer;