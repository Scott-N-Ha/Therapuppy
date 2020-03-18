import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PuppyForm from './puppy_form.jsx';
import {  } from '../../actions/puppy_actions.js';

const mapStateToProps = (state, ownProps) => {

  return {
    owner: state.session.user,
  };
};

const mapDispatchToProps = dispatch => ({
  // NEEDS THE CREATE PUPPY ACTION MAPPED TO DISPATCH
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PuppyForm));
