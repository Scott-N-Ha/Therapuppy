import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer.js';
import PuppyErrorsReducer from './puppy_errors_reducer.js';
import UserErrorsReducer from './user_errors_reducer.js';
import BookingErrorsReducer from './booking_errors_reducer.js';

export default combineReducers({
  session: SessionErrorsReducer,
  puppy: PuppyErrorsReducer,
  user: UserErrorsReducer,
  booking: BookingErrorsReducer
});
