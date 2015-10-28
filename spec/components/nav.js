jest.dontMock('../../app/components/nav/Nav');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const Nav = require('../../app/components/nav/Nav');

let renderer = TestUtils.createRenderer();
renderer.render(<Nav location={{ pathname: 'test' }} />);
let output = renderer.getRenderOutput();

describe('Nav component', function(){
  it('should be type nav', function(){
    expect(output.type).toEqual('nav');
  });
});