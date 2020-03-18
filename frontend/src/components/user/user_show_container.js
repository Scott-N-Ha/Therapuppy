import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserShow from './user_show.jsx';


const mapStateToProps = (state, ownProps) => {
  let user = Object.values(state.entities.users).find(user => user.username === ownProps.match.params.username);

  if (user === undefined) return { user };

  return {
    user: user,
    samePerson: user.username === state.session.user.username,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
