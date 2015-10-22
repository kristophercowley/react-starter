import {
  ADD_MY_ACTIVITY,
  REMOVE_MY_ACTIVITY,
  ACTIVITIES_FETCHED
} from '../constants/ActionTypes';

export function addMyActivity(id){
  return {type: ADD_MY_ACTIVITY, payload: { id }};
}

export function removeMyActivity(id){
  return {type: REMOVE_MY_ACTIVITY, payload: { id }};
}

export function fetchActivities(){
  return function(){
    return new Promise(function (resolve, reject) {
      let activities = [
        {
          id: 1,
          title: 'Soccer',
          description: 'My favorite sport'
        },
        {
          id: 2,
          title: 'Football',
          description: 'Booooring'
        }
      ];
      resolve(activities);
    })
  }
}
export function activitiesFetched(activities){
  return {type: ACTIVITIES_FETCHED, payload: {activities: activities}};
}