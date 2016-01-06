import './Activities.scss';

import React from 'react';
import history from '../../history';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui';
import FontIcon from 'material-ui/lib/font-icon';

// Export here for testing
let Activities = (props) => {
  const myActivityIds = props.myActivities.map(function(activity){
    return activity.id;
  });
  return (
    <div className="Activities">
      <h1>Activities</h1>
      <List>
        {props.activities.map(function(activity, key) {
          const isActive = myActivityIds.indexOf(activity.id) > -1;
          return (
            <ListItem
                key={key}
                onTouchTap={() => props.selectEvent(activity.id)}
                primaryText={activity.title}
                secondaryText={activity.description}
                rightIcon={isActive ? <FontIcon className="muidocs-icon-action-home" /> : <div/>}
                />
          );
        }.bind(this))}
      </List>
    </div>
  );
};

export default connect(
  state => ({
    activities: state.activities,
    myActivities: state.myActivities
  }),
  () => ({
    selectEvent: (activityId) => {
      history.pushState(null, `/activity/${activityId}`);
    }
  })
)(Activities);