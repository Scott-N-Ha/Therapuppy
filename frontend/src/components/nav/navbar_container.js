import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar.jsx';
import { logout } from '../../actions/session_actions.js';
import { openModal } from '../../actions/modal_actions.js';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.user
  return {
    loggedIn: Boolean(state.session.user._id),
    currentUser: currentUser,
    pendingBookingsCount:Object.values(state.entities.bookings).filter(booking => booking.renter._id === currentUser._id && booking.status === "5e717ae318716c8dc9bd5bf5").length,
    approvedBookingsCount: Object.values(state.entities.bookings).filter(booking => booking.renter._id === currentUser._id && booking.status === "5e717c615a67b08eeeb91719").length,
    deniedBookingsCount: Object.values(state.entities.bookings).filter(booking => booking.renter._id === currentUser._id && booking.status === "5e717c7132e5a38f0aaf16bb").length
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
