import { ADD_MY_ACTIVITY, REMOVE_MY_ACTIVITY } from '../constants/ActionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_MY_ACTIVITY:
      return [...state, action.payload.id];

    case REMOVE_MY_ACTIVITY:
      return state.filter(id =>
        id !== action.payload.id
      );

    default:
      return state;
  }
}