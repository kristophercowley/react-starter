import './Activities.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui';
import history from '../../history';

// Export here for testing
export class Activities extends Component {
  _handleClick(activityId){
    history.pushState(null, `/activity/${activityId}`);
  }

  render() {
    return (
      <div className="Activities">
        <h1>Activities</h1>
        <List>
        {this.props.activities.map(function(activity, key) {
          return (
            <ListItem
                key={key}
                onTouchTap={() => this._handleClick(activity.id)}
                primaryText={activity.title}
                secondaryText={activity.description} />
          );
        }.bind(this))}
        </List>
      </div>
    );
  }
}

// State to use
export function search(state) {
  return {
    activities: state.activities,
    myActivities: state.myActivities
  };
}

// Default export connected component
export default connect(search)(Activities);