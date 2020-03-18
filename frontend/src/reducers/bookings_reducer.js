import { RECEIVE_BOOKING, RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions.js';

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
      bookingId = Object.keys(action.payload.bookings)[0];
      nextState[bookingId] = action.payload.bookings[bookingId];
      return nextState;
    default:
      return state;
  }
};

export default bookingsReducer;
