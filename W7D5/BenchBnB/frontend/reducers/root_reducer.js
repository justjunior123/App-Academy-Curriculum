import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
// import ui from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducers';

const rootReducer = combineReducers({
  entities: null,
  session: sessionReducer,
  // ui,
  errors: errorsReducer,
});

export default rootReducer;
