import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PuppyIndex from './puppy_index.jsx';
import { fetchAllPuppies } from '../../actions/puppy_actions.js';

const mapStateToProps = (state, ownProps) => {
  let puppies;

  if (ownProps.ownerId === undefined) {
    puppies = Object.values(state.entities.puppies);
  } else {
    puppies = Object.values(state.entities.puppies).filter(puppy => puppy.owner === ownProps.ownerId);
  }

  return {
    puppies: puppies,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllPuppies: () => dispatch(fetchAllPuppies()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PuppyIndex));
