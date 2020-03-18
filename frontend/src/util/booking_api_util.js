import axios from 'axios';

export const fetchBookings = () => (
    axios.get('api/bookings')
)

export const createBooking = bookingData => (
    axios.post('api/bookings', bookingData)
)

export const updateBooking = bookingData => (
    axios.patch(`api/bookings/${bookingData.booking._id}`, bookingData)
)

