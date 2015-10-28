import './App.scss';

import React, {Component} from 'react'
import {connect} from 'react-redux';

import Nav from '../nav/Nav';
import {setPageTitle} from '../../utils/site';
import {fetchActivities, activitiesFetched} from '../../actions/activities';

export class App extends Component {
  componentWillMount(){
    //let dispatch = this.props.dispatch;
    //dispatch(fetchActivities())
    //  .then(function(activities){
    //    dispatch(activitiesFetched(activities));
    //  });
    setPageTitle(this.props);
  }
  componentWillReceiveProps(nextProps){
    setPageTitle(nextProps);
  }
  render() {
    return (
      <div>
        <Nav location={this.props.location} />
        <div className="container">
          <div className="Header">
            <h1>{this.props.site.title}</h1>
          </div>
          <div className="Main">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
};

export default connect(state => state)(App);