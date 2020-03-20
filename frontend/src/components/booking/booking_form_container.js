import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingForm from './booking_form.jsx';
import { createBooking } from '../../actions/booking_actions.js';
import { fetchPuppy } from '../../util/puppy_api_util.js';
import { closeModal } from '../../actions/modal_actions.js';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    renterId: state.session.user._id,
    puppy: state.entities.puppies[ownProps.location.pathname.split("/")[2]]
  };
};

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  closeModal: () => dispatch(closeModal())
  // fetchPuppy: puppyId => dispatch(fetchPuppy(puppyId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
