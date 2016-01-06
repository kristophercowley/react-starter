import { REHYDRATE } from 'redux-persist/constants';

export default function(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_ACTIVITY':
      if(state.indexOf(action.id) > -1){
        return state.filter(id => id !== action.id);
      }
      return [...state, action.id];
    case 'REMOVE_MY_ACTIVITY':
      return state.filter(id => id !== action.id);
    case REHYDRATE:
      if (action.key === 'myActivities' && action.payload) {
        return [...action.payload];
      }
      return state;
    default:
      return state;
  }
}