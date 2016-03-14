import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

import Header from '../../src/components/Header';

const props = {
  push: () => {}
};

describe('(Component) <Header />', function(){
  const wrapper = render(<Header {...props} />);
  it('Should contain a div with class Header', function(){
    expect(wrapper.find('.Header')).to.have.length(1);
  });
});
