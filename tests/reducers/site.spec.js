import {expect} from 'chai';

import siteReducer from '../../src/reducers/site';
import setLoading from '../../src/actions/loading_set';
import setTitle from '../../src/actions/title_set';
import errorFetchingData from '../../src/actions/data_error';

describe('(Reducer) Site', function() {
  describe('Set title', function(){
    it('Should return default state given empty payload', function() {
      const response = siteReducer();
      expect(response.title).to.equal('');
    });
    it('Should correctly set state', function() {
      const testTitle = 'test title';
      const response = siteReducer({}, setTitle(testTitle));
      expect(response.title).to.equal(testTitle);
    });
  });
  describe('Set loading', function() {
    it('Should return default state', function() {
      const response = siteReducer();
      expect(response.loading).to.equal(true);
    });
    it('Should correctly set loading to true', function(){
      const response = siteReducer({}, setLoading(false));
      expect(response.loading).to.equal(false);
    });
    it('Should correctly set loading to false', function(){
      const response = siteReducer({}, setLoading(true));
      expect(response.loading).to.equal(true);
    });
  });
  describe('Error loading', function(){
    it('Should return default state', function(){
      const response = siteReducer();
      expect(response.dataError).to.equal(false);
      expect(response.dataErrorMessage).to.equal('');
    });
    it('Should return error state.', function(){
      const response = siteReducer({}, errorFetchingData('e'));
      expect(response.dataError).to.equal(true);
      expect(response.dataErrorMessage).to.equal('Error fetching data.');
    });
  });
});
