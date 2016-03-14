import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

import {DefaultLayout} from '../../src/containers/DefaultLayout';

const props = {
  children: <div className="child"></div>,
  navAction: {
    title: 'test',
    action: () => {}
  },
  requiresEvent: false,
  error: {},
  history: {
    goBack: () => {},
    push: () => {}
  },
  loading: false,
  pathname: '/events',
  setPageTitle: () => {},
  title: 'Test page'
};

describe('(Container) <DefaultLayout />', function() {
  it('Should render correct children.', function(){
    const wrapper = render(<DefaultLayout {...props} />);
    expect(wrapper.find('.child')).to.have.length(1);
  });
});
