import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MainPage from './main_page.jsx';

const mapStateToProps = (state, ownProps) => {

  return {
    loggedIn: !!state.session.user.id,
    user: state.session.user,
  }
};

export default withRouter(connect(mapStateToProps)(MainPage));
