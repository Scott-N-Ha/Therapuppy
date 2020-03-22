import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingIndex from './booking_index.jsx';

import { fetchAllBookings, updateBooking } from '../../actions/booking_actions.js';

const mapStateToProps = (state, ownProps) => {
  let bookings = Object.values(state.entities.bookings);

  if ( bookings.length > 0 ) bookings = bookings.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  
  // const bookingsForPuppy = bookings.filter(booking => ownProps.puppyId === booking.puppy);
  const bookingsForPuppy = bookings.filter(booking => ownProps.location.pathname.split("/")[2] === booking.puppy);

  bookingsForPuppy.forEach(booking => {
    if (Date.parse(booking.date) < Date.now()) {
      booking.status = "5e73eb531c9d4400008a4313";
    }
  });

  return {
    bookings: bookingsForPuppy,
    currentUser: state.session.user,
    currentPuppy: state.entities.puppies[ownProps.location.pathname.split("/")[2]]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: () => dispatch(fetchAllBookings()),
  updateBooking: booking => dispatch(updateBooking(booking)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingIndex));
