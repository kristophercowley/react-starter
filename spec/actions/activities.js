jest.autoMockOff();
const actions = require('../../app/actions/activities');
const types = require('../../app/constants/ActionTypes');

describe('Activities actions', function(){
  it('should create an action to fetch all activities', function(){
    actions.fetchActivities()()
      .then(function (returnValues) {
        expect(returnValues.length).toBeGreaterThan(0);
        done();
      });
  });
  it('should create an action for activities have been fetched', function(){
    const activities = [
      {
        id: 1,
        title: 'Soccer',
        description: 'My favorite sport'
      }, {
        id: 2,
        title: 'Football',
        description: 'Booooring'
      }
    ];
    const returnedValue = actions.activitiesFetched(activities);
    expect(returnedValue.payload.activities).toEqual(activities);
    expect(returnedValue.type).toBe(types.ACTIVITIES_FETCHED);
  });
  it('should create an action to add an activity to my list', function(){
    const returnedValue = actions.addMyActivity(1);
    expect(returnedValue.payload.id).toBe(1);
    expect(returnedValue.type).toBe(types.ADD_MY_ACTIVITY);
  });
  it('should create an action to remove an activity from my list', function(){
    const returnedValue = actions.removeMyActivity(1);
    expect(returnedValue.payload.id).toBe(1);
    expect(returnedValue.type).toBe(types.REMOVE_MY_ACTIVITY);
  });
});