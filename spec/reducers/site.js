jest.autoMockOff();
const types = require('../../app/constants/ActionTypes');
const reducer = require('../../app/reducers/site');

describe('Site reducers', function(){
  it('should return the initial state', function(){
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle SET_TITLE', function(){
    expect(
      reducer({}, {
        type: types.SET_TITLE,
        payload: {title: 'Test Title'}
      })
    ).toEqual({title: 'Test Title'})
  });
});