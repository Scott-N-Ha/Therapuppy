import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MainPage from './main_page.jsx';
import { openModal } from '../../actions/modal_actions.js';
import { login } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.user,
    loggedIn: Boolean(state.session.user._id)
  }
};

const mapStateToDispatch = dispatch =>({
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: () => dispatch(login({ 
    user: {
      email: "demo@aa.com",
      password: "password"
    }
  }))
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(MainPage));
