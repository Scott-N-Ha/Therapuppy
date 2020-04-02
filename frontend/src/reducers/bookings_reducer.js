import { RECEIVE_BOOKING, RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions.js';
import { RECEIVE_PUPPY, RECEIVE_ALL_PUPPIES } from '../actions/puppy_actions.js';
import { RECEIVE_USER } from '../actions/user_actions.js';

const initialState = {

};

const bookingsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let bookingId;

  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign(nextState, action.payload.bookings);

    case RECEIVE_BOOKING:
      // debugger
      // nextState[action.payload.booking._id] = action.payload.booking;
      return Object.assign(nextState, {[action.payload.booking._id]: action.payload.booking});

    case RECEIVE_PUPPY:
      return Object.assign(nextState, action.payload.bookings);

    case RECEIVE_USER:
      return Object.assign(nextState, action.payload.bookings);
    default:
      return state;
  }
};

export default bookingsReducer;
