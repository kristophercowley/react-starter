jest.dontMock('../../app/components/home/Home');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const {Home} = require('../../app/components/home/Home');

let renderer = TestUtils.createRenderer();
renderer.render(<Home />);
let output = renderer.getRenderOutput();

describe('Home component', function(){
  it('should be type div', function(){
    expect(output.type).toEqual('div');
  });
});