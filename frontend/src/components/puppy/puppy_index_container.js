import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PuppyIndex from './puppy_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let puppies = Object.values(state.entities.puppies);

  return {
    puppies: puppies,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PuppyIndex));
