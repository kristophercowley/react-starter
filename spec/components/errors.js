jest.dontMock('../../app/components/errors/Error');
jest.dontMock('../../app/components/errors/NotFound');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const Error = require('../../app/components/errors/Error');
const NotFound = require('../../app/components/errors/NotFound');

describe('Error page', function(){
  const errorMessage = 'Test message';
  const output = TestUtils.renderIntoDocument(<Error error={errorMessage} />);
  it('is in a div tag', function(){
    expect(
      TestUtils.scryRenderedDOMComponentsWithTag(output, 'div').length
    ).toBeGreaterThan(0);
  });
  it('has a header', function(){
    expect(
      TestUtils.scryRenderedDOMComponentsWithTag(output, 'h1').length
    ).toEqual(1);
  });
  it('has correct message', function(){
    expect(output.props.error).toEqual(errorMessage);
  });
});
describe('Not Found page', function(){
  const output = TestUtils.renderIntoDocument(<NotFound />);
  it('is in a div tag', function(){
    expect(
      TestUtils.scryRenderedDOMComponentsWithTag(output, 'div').length
    ).toBeGreaterThan(0);
  });
});