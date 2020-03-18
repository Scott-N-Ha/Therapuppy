import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PuppyForm from './puppy_form.jsx';
import {  } from '../../actions/puppy_actions.js';

const mapStateToProps = (state, ownProps) => {

  return {
    owner: state.session.user,
    natureRatings: Object.values(state.entities.natureRatings).sort((a,b) => a.id - b.id),
    fluffyRatings: Object.values(state.entities.fluffyRatings).sort((a,b) => a.id - b.id),
  };
};

const mapDispatchToProps = dispatch => ({
  // NEEDS THE CREATE PUPPY ACTION MAPPED TO DISPATCH
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PuppyForm));
