import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingForm from './booking_form.jsx';
import { createBooking } from '../../actions/booking_actions.js';

const mapStateToProps = (state, ownProps) => {
  debugger
  
  return {
    renterId: state.session.user._id,
  };
};

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
