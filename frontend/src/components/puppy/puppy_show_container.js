import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPuppy } from '../../actions/puppy_actions'

import PuppyShow from './puppy_show.jsx';

const mapStateToProps = (state, ownProps) => {
  let puppy = state.entities.puppies[ownProps.match.params.puppyId];
  if (typeof puppy === "undefined") return {};
  return {
    puppy: puppy,
    owner: state.entities.users[puppy.owner],
    breed: state.entities.breeds[puppy.breed].name,
    fluffyRating: state.entities.fluffyRatings[puppy.fluffyRating].name,
    natureRating: state.entities.natureRatings[puppy.natureRating].name,
    earType: state.entities.earTypes[puppy.earType].name
  }
};

const mapStateToDispatch = dispatch => ({
  fetchPuppy: puppyId => dispatch(fetchPuppy(puppyId))
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(PuppyShow));
