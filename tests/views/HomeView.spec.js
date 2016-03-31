import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import HomeView from '../../src/views/HomeView';

describe('(View) HomeView', function() {
  const wrapper = shallow(<HomeView />);
  it('Should render a div with class HomeView', function() {
    expect(wrapper.find('h1').text()).to.contain('Home');
  });
});
