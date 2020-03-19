import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar.jsx';
import { logout } from '../../actions/session_actions.js';
import { openModal } from '../../actions/modal_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.user._id),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
