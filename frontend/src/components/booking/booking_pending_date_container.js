import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingPendingDate from './booking_pending_date.jsx';
import { updateBooking } from '../../actions/booking_actions.js';

const mapStateToProps = (state, { bookings } ) => {
  

  return {
  };
};

const mapDispatchToProps = dispatch => ({
  updateBooking: booking => dispatch(updateBooking(booking)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingPendingDate));
