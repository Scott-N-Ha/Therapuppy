import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserShow from './user_show.jsx';
import { fetchSingleUser } from '../../actions/user_actions.js';

const mapStateToProps = (state, ownProps) => {
  let user = Object.values(state.entities.users).find(user => user.username === ownProps.match.params.username);

  if (user === undefined) return { user };

  return {
    user: user,
    samePerson: user.username === state.session.user.username,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: username => dispatch(fetchSingleUser(username)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
