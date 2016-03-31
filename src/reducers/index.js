import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import site from './site';

const reducers = {
  site
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
