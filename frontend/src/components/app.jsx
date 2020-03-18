import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.js';

import MainPageContainer from './main/main_page_container.js';
import NavBarContainer from './nav/navbar_container.js';
import LoginFormContainer from './session/login_form_container.js';
import SignupFormContainer from './session/signup_form_container.js';
import PuppyShowContainer from './puppy/puppy_show_container.js';
import UserShowContainer from './user/user_show_container.js';
import Modal from './modal'

const App = props => {
  return (
    <div className="app">
      <Modal />
      <NavBarContainer />
      
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/puppies/:puppyId" component={PuppyShowContainer} />
        <ProtectedRoute exact path="/users/:username" component={UserShowContainer} />
        <Route exact path="/" component={MainPageContainer} />
      </Switch>
    </div>
  );
};

export default App;
