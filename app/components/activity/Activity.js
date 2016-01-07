import './Activity.scss';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import IconButton from 'material-ui/lib/icon-button';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';

let Activity = (props) => {
  const id = props.params ? props.params.id : null;
  const activity = props.activities.find(function(activity) {
    return activity.id == id;
  }) || {title: 'Activity not found'};
  const isActive = props.myActivities.indexOf(id) > -1;
  console.log(isActive, props.myActivities, id);
  let color;
  if(isActive){
    color =  '#F1632A';
  } else {
    color = '#B7B7B7';
  }
  return (
    <div>
      <h1>
        <IconButton onClick={() => props.saveEvent(id)} className="align-icon-left" >
          <ActionGrade color={color} />
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
    activities: state.activities,
    myActivities: state.myActivities
  }),
  dispatch => ({
    saveEvent: (id) => {
      dispatch({type: 'TOGGLE_ACTIVITY', id});
    }
  })
)(Activity);