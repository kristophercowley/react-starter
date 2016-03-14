import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import HomeView from '../../src/views/HomeView';

const props = {};

describe('(View) HomeView', function() {
  const wrapper = shallow(<HomeView {...props} />);
  it('Should render a div with class HomeView', function() {
    expect(wrapper.find('.HomeView')).to.have.length(1);
  });
});
