import {expect} from 'chai';
import {
  SET_TITLE,
  SET_LOADING
} from '../../src/constants/ActionTypes';

describe('(Constants) Action Types', function() {
  it('SET_TITLE should be defined', function() {
    expect(SET_TITLE).to.not.equal(undefined);
  });
  it('SET_LOADING should be defined', function() {
    expect(SET_LOADING).to.not.equal(undefined);
  });
});
