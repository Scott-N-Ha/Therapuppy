import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions.js';
import LoginForm from './login_form.jsx';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    login: user => dispatch(login(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
