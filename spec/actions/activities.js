import '../../jest_automock_off';
import {ADD_MY_ACTIVITY, REMOVE_MY_ACTIVITY, FETCH_ACTIVITIES, ACTIVITIES_FETCHED} from '../../app/constants/ActionTypes';
import {addMyActivity, removeMyActivity, fetchActivities, activitiesFetched} from '../../app/actions/activities';

describe('AddMyActivity', function(){
  it('should return correct values', function() {
    const returnedValue = addMyActivity(1);
    expect(returnedValue.payload.id).toBe(1);
    expect(returnedValue.type).toBe(ADD_MY_ACTIVITY);
  });
});

describe('RemoveMyActivity', function(){
  it('should return correct values', function () {
    const returnedValue = removeMyActivity(1);
    expect(returnedValue.payload.id).toBe(1);
    expect(returnedValue.type).toBe(REMOVE_MY_ACTIVITY);
  });
});

describe('FetchActivities', function() {
  it('should return correct values', function(done){
    fetchActivities()()
      .then(function(returnValues){
        expect(returnValues.length).toBeGreaterThan(0);
        done();
      });
  });
});