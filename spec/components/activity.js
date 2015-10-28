jest.dontMock('../../app/components/activity/Activity');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const {Activity} = require('../../app/components/activity/Activity');

let renderer = TestUtils.createRenderer();
renderer.render(<Activity />);
let output = renderer.getRenderOutput();

describe('Activity component', function(){
  it('should be type div', function(){
    expect(output.type).toEqual('div');
  });
});