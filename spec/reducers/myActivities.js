jest.autoMockOff();
const reducer = require('../../app/reducers/myActivities');
const types = require('../../app/constants/ActionTypes');

const activities = [1,2,3];
describe('My activities reducers', function(){
  it('should return the initial state', function(){
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should handle ADD_MY_ACTIVITY', function(){
    expect(
      reducer(activities, {
        type: types.ADD_MY_ACTIVITY,
        payload: {id: 4}
      })
    ).toEqual([1,2,3,4]);
  });
  it('should handle REMOVE_MY_ACTIVITY', function(){
    expect(
      reducer(activities, {
        type: types.REMOVE_MY_ACTIVITY,
        payload: {id: 1}
      })
    ).toEqual([2,3]);
  });
});