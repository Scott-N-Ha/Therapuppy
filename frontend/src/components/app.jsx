import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.js';

import MainPageContainer from './main/main_page_container.js';
import NavBarContainer from './nav/navbar_container.js';
import LoginFormContainer from './session/login_form_container.js';
import SignupFormContainer from './session/signup_form_container.js';

const App = () => (
  <div>
    <NavBarContainer />
    
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;
