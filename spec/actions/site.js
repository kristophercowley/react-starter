jest.autoMockOff();
const actions = require('../../app/actions/site');
const types = require('../../app/constants/ActionTypes');

describe('Site actions', function(){
  it('should create an action to set the site title', function(){
    const title = 'New title';
    const returnValue = actions.setTitle(title);
    expect(returnValue.payload.title).toEqual(title);
    expect(returnValue.type).toEqual(types.SET_TITLE);
  });
});