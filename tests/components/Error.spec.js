import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Error from '../../src/components/Error';

const props = {
  message: 'Test message'
};

describe('(Component) Error', function(){
  const wrapper = render(<Error message={props.message} />);
  it('Should render div with class Error', function(){
    expect(wrapper.find('.Error')).to.have.length(1);
  });
  it('Should render message', function(){
    expect(wrapper.text()).to.contain(props.message);
  });
});
