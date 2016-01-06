export function toggleActivity(id) {
  // Adds it to state which is synced to local storage
  return {type: 'TOGGLE_ACTIVITY', id};
}

export function fetchActivities() {
  return function() {
    return new Promise(function(resolve) {
      const activities = [
        {
          id: 1,
          title: 'Soccer',
          description: 'My favorite sport'
        }, {
          id: 2,
          title: 'Football',
          description: 'Booooring'
        }, {
          id: 3,
          title: 'Volleyball',
          description: 'Yuck'
        }, {
          id: 4,
          title: 'Hockey',
          description: 'Fight!!'
        }
      ];
      resolve(activities);
    });
  };
}
export function activitiesFetched(activities) {
  return {type: 'ACTIVITIES_FETCHED', activities};
}