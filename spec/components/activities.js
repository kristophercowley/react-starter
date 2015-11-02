jest.dontMock('../../app/components/activities/Activities');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const {Activities, search} = require('../../app/components/activities/Activities');
import {List} from 'material-ui';

const activities = [
  {title: 'Activity 1'},
  {title: 'Activity 2'}
];

describe('Activities component', function(){
  let output = TestUtils.renderIntoDocument(<Activities activities={activities} />);
  it('should contain List component', function(){
    expect(
      TestUtils.scryRenderedComponentsWithType(output, List).length
    ).toEqual(1);
  });
});

describe('Activities redux search', function(){
  it('should return proper state', function(){
    const state = {
      activities: activities,
      myActivities: [1,2],
      unwantedProperty: ''
    }
    expect(search(state))
      .toEqual({
        activities: activities,
        myActivities: [1,2]
      });
  });
});