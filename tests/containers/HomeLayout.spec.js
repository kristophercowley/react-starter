import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

import {HomeLayout} from '../../src/containers/HomeLayout';

const props = {
  children: <div className="child"></div>,
  loading: false,
  pathname: '/events',
  setPageTitle: () => {}
};

describe('(Container) <HomeLayout />', function() {
  it('Should render correct children.', function(){
    const wrapper = render(<HomeLayout {...props} />);
    expect(wrapper.find('.child')).to.have.length(1);
  });
});
