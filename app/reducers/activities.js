import { REHYDRATE } from 'redux-persist/constants';

export default function(state = [], action) {
  switch (action.type) {
    case 'ACTIVITIES_FETCHED':
      return action.activities;
    case REHYDRATE:
      if (action.key === 'activities' && action.payload) {
        return [...action.payload];
      }
      return state;
    default:
      return state;
  }
}