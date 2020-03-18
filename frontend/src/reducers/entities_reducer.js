import { combineReducers } from 'redux';

import usersReducer from './users_reducer.js';
import puppiesReducer from './puppies_reducer.js';
import bookingsReducer from './bookings_reducer.js';
import breedsReducer from './breeds_reducer.js';
import earTypeReducer from './ear_types_reducer.js';
import fluffyRatingReducer from './fluffy_rating_reducer.js';
import natureRatingReducer from './nature_rating_reducer.js';
import statusReducer from './status_reducer.js';

const entitiesReducer = combineReducers({
  users: usersReducer,
  puppies: puppiesReducer,
  bookings: bookingsReducer,
  breeds: breedsReducer,
  earTypes: earTypeReducer,
  fluffyRatings: fluffyRatingReducer,
  natureRatings: natureRatingReducer,
  status: statusReducer,
});

export default entitiesReducer;
