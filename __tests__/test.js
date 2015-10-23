jest.dontMock('../checkbox');

describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    var TestUtils = require('react-addons-test-utils');
    var React = require('react');
    var ReactDOM = require('react-dom');
    var CheckboxWithLabel = require('../checkbox.js');

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'label');
    expect(ReactDOM.findDOMNode(label).textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'input');
    TestUtils.Simulate.change(input);
    expect(ReactDOM.findDOMNode(label).textContent).toEqual('On');
  });
});