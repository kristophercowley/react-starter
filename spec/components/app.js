jest.dontMock('../../app/components/app/App');

//const React = require('react');
//const TestUtils = require('react-addons-test-utils');
//const {App} = require('../../app/components/app/App');
//const Nav = require('../../app/components/nav/Nav');
//
//let site = { title: 'test' };
//let location = { pathname: 'test' };
//
//let output = TestUtils.renderIntoDocument(<App site={site} location={location} />);
//
//describe('App component', function(){
//  it('should contain one Nav item', function(){
//    expect(
//      TestUtils.scryRenderedComponentsWithType(output, Nav).length
//    ).toEqual(1);
//  });
//  it('should contain a header area', function(){
//    expect(
//      TestUtils.findRenderedDOMComponentWithClass(output, 'Header')
//    ).toBeTruthy();
//  });
//  it('should contain the main content area', function(){
//    expect(
//      TestUtils.findRenderedDOMComponentWithClass(output, 'Main')
//    ).toBeTruthy();
//  });
//});