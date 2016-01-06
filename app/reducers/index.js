import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import activities from './activities';
import myActivities from './myActivities';
import site from './site';

const rootReducer = combineReducers({
  routerStateReducer,
  activities,
  myActivities,
  site
});

export default rootReducer;