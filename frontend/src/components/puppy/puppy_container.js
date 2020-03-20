import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {openModal} from '../../actions/modal_actions'
import Puppy from './puppy.jsx';

const mapStateToProps = (state, { puppy }) => {
  
  return {
    owner: state.entities.users[puppy.owner],
    breed: state.entities.breeds[puppy.breed].name,
    fluffyRating: state.entities.fluffyRatings[puppy.fluffyRating].name,
    natureRating: state.entities.natureRatings[puppy.natureRating].name,
    earType: state.entities.earTypes[puppy.earType].name,
    isCurrentUserPuppy: state.session.user._id === puppy.owner
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Puppy));
