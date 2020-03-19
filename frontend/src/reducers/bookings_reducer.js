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
      let booking = action.payload;
      nextState[booking._id] = booking;
      return nextState;
    default:
      return state;
  }
};

export default bookingsReducer;
