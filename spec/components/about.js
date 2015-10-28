jest.dontMock('../../app/components/about/About');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const {About} = require('../../app/components/about/About');

let renderer = TestUtils.createRenderer();
renderer.render(<About />);
let output = renderer.getRenderOutput();

describe('About component', function(){
  it('should be type div', function(){
    expect(output.type).toEqual('div');
  });
});