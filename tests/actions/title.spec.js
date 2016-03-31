import {expect} from 'chai';

import {setTitle} from '../../src/actions/title';
import {SET_TITLE} from '../../src/constants/ActionTypes';

describe('(Action) Set Title', function() {
  it('Should return object with passed title', function() {
    const title = 'Test Title';
    const expected = {
      type: SET_TITLE,
            title
    };
    const action = setTitle(title);
    expect(action).to.eql(expected);
  });
});
