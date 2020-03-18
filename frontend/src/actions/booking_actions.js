import * as BookingAPI from '../util/booking_api_util.js';

// String Constants
export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS"

// Regular Actions
const receiveBooking = payload => ({
  type: RECEIVE_BOOKING,
  payload,
});

const receiveAllBookings = payload => ({
  type: RECEIVE_ALL_BOOKINGS,
  payload,
});

const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
})

// Thunk Actions
export const fetchAllBookings = () => dispatch => (
  BookingAPI.fetchBookings()
    .then(res => dispatch(receiveAllBookings(res.data)),
      err => dispatch(receiveBookingErrors(err.response.data)))
);

export const createBooking = booking => dispatch => (
  BookingAPI.createBooking(booking)
    .then(res => dispatch(receiveBooking(res.data)),
      err => dispatch(receiveBookingErrors(err.response.data)))
);

export const updateBooking = booking => dispatch => (
  BookingAPI.updateBooking(booking)
    .then(res => dispatch(receiveBooking(res.data)),
      err => dispatch(receiveBookingErrors(err.response.data)))
);
