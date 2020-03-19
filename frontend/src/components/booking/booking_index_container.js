import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingIndex from './booking_index.jsx';
import { fetchAllBookings } from '../../actions/booking_actions.js';

const mapStateToProps = (state, ownProps) => {
  let bookings = Object.values(state.entities.bookings);
  if ( bookings.length > 0 ) bookings = bookings.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  let bookingsForPuppy = bookings.filter(booking => ownProps.puppyId === booking.puppy);

  return {
    bookings: bookingsForPuppy,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: () => dispatch(fetchAllBookings()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingIndex));
