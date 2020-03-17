import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingIndex from './booking_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let bookings = Object.values(state.entities.bookings)
  let bookingsForPuppy = bookings.filter(booking => ownProps.puppyId === booking.puppy);

  return {
    bookings: bookingsForPuppy,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingIndex));
