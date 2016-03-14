import {expect} from 'chai';
import {TRACKING_ID} from '../../src/constants/Google';

describe('(Constants) Google', function() {
  it('TRACKING_ID should be defined', function() {
    expect(TRACKING_ID).to.not.equal(undefined);
  });
});
