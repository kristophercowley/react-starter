jest.autoMockOff();
const reducer = require('../../app/reducers/activities');
const types = require('../../app/constants/ActionTypes');
const { REHYDRATE } = require('redux-persist/constants');

describe('Activities reducers', function(){
  it('should return the initial state', function(){
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should handle ACTIVITIES_FETCHED', function(){
    const activities = [];
    expect(
      reducer([], {
        type: types.ACTIVITIES_FETCHED,
        payload: {activities}
      })
    ).toEqual(activities);
  });
  it('should handle REHYDRATE', function(){
    const activities = ['activity'];
    expect(
      reducer(activities, {
        type: REHYDRATE
      })
    ).toEqual(activities);
    expect(
      reducer(activities, {
        type: REHYDRATE,
        key: 'activities',
        payload: ['rehydrated activities']
      })
    ).toEqual(['rehydrated activities']);
  });
});