jest.autoMockOff();

const React = require('react');
const {AppBar, LeftNav} = require('material-ui');
const TestUtils = require('react-addons-test-utils');
const {Nav} = require('../../app/components/nav/Nav');

let output = TestUtils.renderIntoDocument(<Nav location={{ pathname: 'test' }} />);

describe('Nav component', function(){
  it('should contain an AppBar', function(){
    expect(
      TestUtils.scryRenderedComponentsWithType(output, AppBar).length
    ).toEqual(1);
  });
  it('should contain a LeftNav', function(){
    expect(
      TestUtils.scryRenderedComponentsWithType(output, LeftNav).length
    ).toEqual(1);
  });
});