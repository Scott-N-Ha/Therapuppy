import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PuppyShow from './puppy_show.jsx';

const mapStateToProps = (state, ownProps) => {
  let puppy = state.entities.puppies[ownProps.match.params.puppyId];
  debugger
  return {
    puppy: puppy,
    owner: state.entities.users[puppy.owner],
    breed: state.entities.breeds[puppy.breed].name,
    fluffyRating: state.entities.fluffyRatings[puppy.fluffyRating].name,
    natureRating: state.entities.natureRatings[puppy.natureRating].name,
    earType: state.entities.earTypes[puppy.earType].name
  }
};

export default withRouter(connect(mapStateToProps)(PuppyShow));
