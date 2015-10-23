jest.dontMock('../../app/actions/activities.js');

describe('AddMyActivity', function(){
  const activities = require('../../app/actions/activities.js');
  const actionTypes = require('../../app/constants/ActionTypes');
  it('should return correct values', function() {
    const returnedValue = activities.addMyActivity(1);
    expect(returnedValue.payload.id).toBe(1);
    expect(returnedValue.type).toBe(actionTypes.ADD_MY_ACTIVITY);
  });
});

describe('RemoveMyActivity', function(){
  const activities = require('../../app/actions/activities.js');
  const actionTypes = require('../../app/constants/ActionTypes');
  it('should return correct values', function () {
    const returnedValue = activities.removeMyActivity(1);
    expect(returnedValue.payload.id).toBe(1);
    expect(returnedValue.type).toBe(actionTypes.REMOVE_MY_ACTIVITY);
  });
});

describe('FetchActivities', function() {
  const activities = require('../../app/actions/activities.js');
  let returnValues;
  beforeEach(function(){
    returnValues = activities.fetchActivities();
  });
  it('should return correct values', function(){
    expect(returnValues.length).toBeGreaterThan(0);
  });
});