jest.dontMock('../../app/components/activities/Activities');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const {Activities, ActivitiesList, ActivityItem, search} = require('../../app/components/activities/Activities');

const activities = [
  {title: 'Activity 1'},
  {title: 'Activity 2'}
];

describe('Activities component', function(){
  let output = TestUtils.renderIntoDocument(<Activities activities={activities} />);
  it('should contain ActivitiesList component', function(){
    expect(
      TestUtils.scryRenderedComponentsWithType(output, ActivitiesList).length
    ).toBeGreaterThan(0);
  });
});

describe('ActivitiesList component', function(){
  let output = TestUtils.renderIntoDocument(<ActivitiesList activities={activities} />);
  it('should contain ActivityItems', function(){
    expect(
      TestUtils.scryRenderedComponentsWithType(output, ActivityItem).length
    ).toEqual(2);
  })
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