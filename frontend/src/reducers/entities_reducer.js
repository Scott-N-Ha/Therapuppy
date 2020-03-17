import { combineReducers } from 'redux';

import usersReducer from './users_reducer.js';
import bookingsReducer from './bookings_reducer.js';

const entitiesReducer = combineReducers({
  users: usersReducer,
  bookings: bookingsReducer,
});

export default entitiesReducer;