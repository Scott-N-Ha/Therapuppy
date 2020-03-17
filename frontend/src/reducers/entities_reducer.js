import { combineReducers } from 'redux';

import usersReducer from './users_reducer.js';
import puppiesReducer from './puppies_reducer.js';
import bookingsReducer from './bookings_reducer.js';

const entitiesReducer = combineReducers({
  users: usersReducer,
  puppies: puppiesReducer,
  bookings: bookingsReducer,
});

export default entitiesReducer;
