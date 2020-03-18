import { combineReducers } from 'redux';

import sessionReducer from './session_reducer.js';
import entitiesReducer from './entities_reducer.js';
import errorsReducer from './errors_reducer.js';
import modalReducer from './modal_reducer.js';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  modal: modalReducer
});

export default rootReducer;
