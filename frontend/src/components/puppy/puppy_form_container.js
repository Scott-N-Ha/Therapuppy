import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PuppyForm from './puppy_form.jsx';
import { createPuppy } from '../../actions/puppy_actions.js';
import { closeModal } from '../../actions/modal_actions.js';

const mapStateToProps = (state, ownProps) => {

  return {
    owner: state.session.user,
    breeds: Object.values(state.entities.breeds).sort((a,b) => a.id - b.id),
    earTypes: Object.values(state.entities.earTypes).sort((a,b) => a.id - b.id),
    natureRatings: Object.values(state.entities.natureRatings).sort((a,b) => a.id - b.id),
    fluffyRatings: Object.values(state.entities.fluffyRatings).sort((a,b) => a.id - b.id),
  };
};

const mapDispatchToProps = dispatch => ({
  createPuppy: puppyData => dispatch(createPuppy(puppyData)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PuppyForm));
