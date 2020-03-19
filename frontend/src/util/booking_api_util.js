import axios from 'axios';

export const fetchBookings = () => (
  axios.get('api/bookings')
);

export const createBooking = bookingData => {
  return (
    axios.post('api/bookings', bookingData)
  );
};

export const updateBooking = bookingData => {
  return axios.patch(`api/bookings/${bookingData._id}`, bookingData)
};
