import './App.scss';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Nav from '../nav/Nav';
import {setPageTitle} from '../../utils/site';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../../material-theme';
//import {fetchActivities, activitiesFetched} from '../../actions/activities';

export class App extends Component {

  constructor(props) {
    super(props);
    // Add initial app data fetch here
    //let dispatch = this.props.dispatch;
    //dispatch(fetchActivities())
    //  .then(function(activities){
    //    dispatch(activitiesFetched(activities));
    //  });
    setPageTitle(this.props);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    };
  }

  componentWillReceiveProps(nextProps) {
    setPageTitle(nextProps);
  }

  render() {
    return (
      <div>
        <Nav location={this.props.location}/>
        <div className="Main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object
};

export default connect(state => state)(App);