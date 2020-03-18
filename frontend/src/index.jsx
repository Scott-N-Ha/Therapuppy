import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';

import Root from './components/root.jsx';
import configureStore from './store/store.js';
import { setAuthToken } from './util/session_api_util.js';
import { logout } from './actions/session_actions.js';

import "./stylesheets/reset.css";
import "./stylesheets/universal.css";
import "./stylesheets/navbar.css";
import "./stylesheets/session_form.scss";
import "./stylesheets/puppy.css";
import "./stylesheets/puppy_form.css";
import "./stylesheets/booking_form.css";
import "./stylesheets/modal.scss";
import './stylesheets/splash.css'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = {
      entities: { users: { [decodedUser._id]: decodedUser } },
      session: { user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  // TESTING - REMOVE FROM PROD
  window.store = store;
  // TESTING

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store } />, root);
});
