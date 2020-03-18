import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Booking from './booking.jsx';
import { updateBooking } from '../../actions/booking_actions.js';

const mapStateToProps = (state, { booking: { owner, renter, puppy, status } }) => {

  return {
    isOwner: (state.session.user._id === owner),
    owner: state.entities.users[owner],
    renter: state.entities.users[renter],
    puppy: state.entities.puppies[puppy],
    status: state.entities.status[status],
  };
};

const mapDispatchToProps = dispatch => ({
  updateBooking: booking => dispatch(updateBooking(booking)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));
