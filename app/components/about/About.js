import './About.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardTitle, CardText} from 'material-ui';

// Export for testing
export class About extends Component {
  render() {
    return (
      <div>
        <CardTitle title="About" subtitle="About our app"/>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </div>
    );
  }
}

// Default export connected component
export default connect(state => state)(About);