import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Booking from './booking.jsx';
import { updateBooking } from '../../actions/booking_actions.js';
import { closeModal } from '../../actions/modal_actions.js';

const mapStateToProps = (state, { booking: { owner, renter, puppy, status } }) => {
  // debugger
  return {
    isOwner: (state.session.user._id === owner._id),
    owner: state.entities.users[owner._id],
    renter: state.entities.users[(renter._id ? renter._id : renter )],
    puppy: state.entities.puppies[puppy],
    status: state.entities.status[status],
  };
};

const mapDispatchToProps = dispatch => ({
  updateBooking: booking => dispatch(updateBooking(booking)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));
