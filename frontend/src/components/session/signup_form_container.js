// src/components/session/signup_form_container.js

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup } from '../../actions/session_actions.js';
import {closeModal} from '../../actions/modal_actions'

import SignupForm from './signup_form.jsx';

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));