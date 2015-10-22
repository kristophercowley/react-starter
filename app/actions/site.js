import {SET_TITLE, FETCH_ACTIVITIES, ACTIVITIES_FETCHED} from '../constants/ActionTypes';

export function setTitle(title){
  return {type: SET_TITLE, payload: { title }};
}
