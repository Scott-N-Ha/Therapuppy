import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Puppy from './puppy.jsx';

const mapStateToProps = (state, { puppy }) => {
  
  return {
    owner: state.entities.users[puppy.owner],
    breed: state.entities.breeds[puppy.breed].name,
    fluffyRating: state.entities.fluffyRatings[puppy.fluffyRating].name,
    natureRating: state.entities.natureRatings[puppy.natureRating].name,
    earType: state.entities.earTypes[puppy.earType].name,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Puppy));
