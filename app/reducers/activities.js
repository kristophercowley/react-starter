import {ACTIVITIES_FETCHED} from '../constants/ActionTypes';
import { REHYDRATE } from 'redux-persist/constants';

export default function(state = [], action) {
  switch (action.type) {
    case ACTIVITIES_FETCHED:
      return action.payload.activities;
    case REHYDRATE:
      if (action.key === 'activities') {
        return [...action.payload];
      }
      return state;
    default:
      return state;
  }
}