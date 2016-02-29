import { combineReducers } from 'redux-immutable';
import { routeReducer } from 'react-router-redux';

import appState from "./app.js";

const rootReducer = combineReducers({
  routing: routeReducer,
  appState
});

export default rootReducer;