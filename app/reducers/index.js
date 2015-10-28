import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import activities from './activities';
import myActivities from './myActivities';
import site from './site';

const rootReducer = combineReducers({
  router,
  activities,
  myActivities,
  site
});

export default rootReducer;