import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PuppyShow from './puppy_show.jsx';

const mapStateToProps = (state, ownProps) => {
  let puppy = state.entities.puppies[ownProps.match.params.puppyId];
  
  return {
    puppy: puppy,
  }
};

export default withRouter(connect(mapStateToProps)(PuppyShow));
