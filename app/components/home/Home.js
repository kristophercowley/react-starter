import './Home.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardTitle, CardText} from 'material-ui';

export class Home extends Component {
  render() {
    return (
      <div>
        <CardTitle title="Home" subtitle="This is our home page"/>
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

export default connect(state => state)(Home);