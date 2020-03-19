import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions.js';
import {closeModal, openModal} from '../../actions/modal_actions'
import LoginForm from './login_form.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
