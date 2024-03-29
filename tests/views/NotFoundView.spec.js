import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import NotFoundView from '../../src/views/NotFoundView';

const props = {};

describe('(View) NotFoundView', function() {
  const wrapper = shallow(<NotFoundView {...props} />);
  it('Should have an H1 tag with correct title', function(){
    expect(wrapper.find('h1').text()).to.contain('Page Not Found');
  })
});
