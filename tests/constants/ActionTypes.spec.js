import {expect} from 'chai';
import {
  SET_TITLE,
  SET_LOADING,
  FETCH_DATA,
  TOGGLE_EVENT,
  CATEGORIES_FETCHED,
  COLLEGES_FETCHED,
  DEPARTMENTS_FETCHED,
  EVENTS_FETCHED,
  EVENT_TYPES_FETCHED,
  FEATURE_TYPES_FETCHED,
  LOCATIONS_FETCHED,
  TOGGLE_FILTER,
  RESET_FILTERS,
  SET_FILTERS,
  STICKY_FETCHED
} from '../../src/constants/ActionTypes';

describe('(Constants) Action Types', function() {
  it('SET_TITLE should be defined', function() {
    expect(SET_TITLE).to.not.equal(undefined);
  });
  it('SET_LOADING should be defined', function() {
    expect(SET_LOADING).to.not.equal(undefined);
  });
  it('FETCH_DATA should be defined', function() {
    expect(FETCH_DATA).to.not.equal(undefined);
  });
  it('TOGGLE_EVENT should be defined', function() {
    expect(TOGGLE_EVENT).to.not.equal(undefined);
  });
  it('CATEGORIES_FETCHED should be defined', function() {
    expect(CATEGORIES_FETCHED).to.not.equal(undefined);
  });
  it('COLLEGES_FETCHED should be defined', function() {
    expect(COLLEGES_FETCHED).to.not.equal(undefined);
  });
  it('DEPARTMENTS_FETCHED should be defined', function() {
    expect(DEPARTMENTS_FETCHED).to.not.equal(undefined);
  });
  it('EVENTS_FETCHED should be defined', function() {
    expect(EVENTS_FETCHED).to.not.equal(undefined);
  });
  it('EVENT_TYPES_FETCHED should be defined', function() {
    expect(EVENT_TYPES_FETCHED).to.not.equal(undefined);
  });
  it('FEATURE_TYPES_FETCHED should be defined', function() {
    expect(FEATURE_TYPES_FETCHED).to.not.equal(undefined);
  });
  it('LOCATIONS_FETCHED should be defined', function() {
    expect(LOCATIONS_FETCHED).to.not.equal(undefined);
  });
  it('TOGGLE_FILTER should be defined', function() {
    expect(TOGGLE_FILTER).to.not.equal(undefined);
  });
  it('SET_FILTERS should be defined', function() {
    expect(SET_FILTERS).to.not.equal(undefined);
  });
  it('STICKY_FETCHED should be defined', function() {
    expect(STICKY_FETCHED).to.not.equal(undefined);
  });
});
