import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Footer from '../../src/components/Footer';

const props = {};

describe('(Component) <Footer />', function() {
  const wrapper = render(<Footer {...props} />);
  it('Should contain a div with class Footer', function(){
    expect(wrapper.find('.Footer')).to.have.length(1);
  });
});
