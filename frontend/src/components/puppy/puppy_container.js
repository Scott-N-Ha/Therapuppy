import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Puppy from './puppy.jsx';

const mapStateToProps = (state, ownProps) => {


  return {
    owner: state.entities.users[ownProps.puppy.ownerId],
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Puppy));
