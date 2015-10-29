import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Avatar, Card, CardHeader, CardText, CardTitle} from 'material-ui';

// Export here for testing
export class Activities extends Component {
  render(){
    return (
      <div>
        <CardTitle title="Activities" subtitle="These are our activities" />
        <div className="ActivitiesList">
          {this.props.activities.map(function(activity){
            return (
              <Link to={`/activity/${activity.id}`} key={activity.id}>
                <Card key={activity.id}>
                    <CardHeader title={activity.title} avatar={<Avatar>A</Avatar>}/>
                  <CardText>
                    {activity.description}
                  </CardText>
                </Card>
              </Link>
            )
          }.bind(this))}
        </div>
        {
          this.props.children ?
          <Card>
            {this.props.children}
          </Card> : ''
        }
      </div>
    );
  }
};

// State to use
export function search(state){
  return {
    activities: state.activities,
    myActivities: state.myActivities
  }
}

// Default export connected component
export default connect(search)(Activities);