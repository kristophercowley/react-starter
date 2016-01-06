import './Activity.scss';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import IconButton from 'material-ui/lib/icon-button';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';

import {toggleActivity} from '../../actions/activities';

let Activity = (props) => {
  const id = props.params ? props.params.id : null;
  const activity = props.activities.find(function(activity) {
    return activity.id == id;
  }) || {title: 'Activity not found'};
  return (
    <div>
      <h1>
        <IconButton onClick={() => props.saveEvent(id)} >
          <ActionGrade />
        </IconButton>
        {activity.title}
      </h1>
      <p>
        {activity.description}
      </p>
    </div>
  );
};

Activity.propTypes = {
  activities: PropTypes.array.isRequired
};

export default connect(
  state => ({
    activities: state.activities
  }),
  dispatch => ({
    saveEvent: (activityId) => {
      dispatch(toggleActivity(activityId));
    }
  })
)(Activity);