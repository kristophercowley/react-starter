import './App.scss';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MaterialTheme from '../../material-theme';

import Nav from '../nav/Nav';
import {fetchActivities, activitiesFetched} from '../../actions/activities';
import {setTitle, isLoading} from '../../actions/site';

export class App extends Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MaterialTheme)
    };
  }
  componentWillMount() {
    // Initial data fetch here
    isLoading(true);
    let {dispatch} = this.props;
    dispatch(fetchActivities())
      .then(function(activities){
        dispatch(activitiesFetched(activities));
        isLoading(false);
      });
  }
  componentWillReceiveProps(nextProps) {
    setTitle(nextProps);
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

App.propTypes = {
  location: PropTypes.object.isRequired
};
App.childContextTypes = {
  muiTheme: PropTypes.object
};

export default connect(state => state)(App);