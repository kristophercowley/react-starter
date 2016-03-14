import {expect} from 'chai';

import setLoading from '../../src/actions/loading_set';
import {SET_LOADING} from '../../src/constants/ActionTypes';

describe('(Action) Set Loading', function() {
  it('Should return object with passed false state', function() {
    const loading = false;
    const expected = {
      type: SET_LOADING,
      loading
    };
    const action = setLoading(loading);
    expect(action).to.eql(expected);
  });
  it('Should return object with passed true state', function() {
    const loading = true;
    const expected = {
      type: SET_LOADING,
      loading
    };
    const action = setLoading(loading);
    expect(action).to.eql(expected);
  });
});
