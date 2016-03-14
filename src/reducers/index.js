import { combineReducers } from 'redux';

import site from './site';

const reducers = {
  site
};

export default combineReducers({...reducers});
