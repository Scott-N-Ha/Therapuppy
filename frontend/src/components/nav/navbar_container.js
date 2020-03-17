import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.user._id),
  };
};

export default withRouter(connect(mapStateToProps, { logout })(NavBar));
