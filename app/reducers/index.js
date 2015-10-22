import { combineReducers } from 'redux';
import activities from './activities';
import myActivities from './myActivities';
import site from './site';
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  router,
  activities,
  myActivities,
  site
});

export default rootReducer;