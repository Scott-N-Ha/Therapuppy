import { RECEIVE_BOOKING_ERRORS, RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING } from "../actions/booking_actions";


const _nullErrors = [];

const BookingErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case RECEIVE_ALL_BOOKINGS:
    case RECEIVE_BOOKING:
        return _nullErrors
    default:
      return state;
  }
};

export default BookingErrorsReducer;
