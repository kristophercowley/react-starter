import './Nav.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import {namedRoutes as menuItems} from '../../routes';
import {AppBar, Avatar, Card, CardHeader, LeftNav, IconButton, FontIcon} from 'material-ui';
import createHistory from 'history/lib/createBrowserHistory';

const history = createHistory();
const header = (
  <Card>
    <CardHeader
        avatar={<Avatar>A</Avatar>}
        subtitle="Some details"
        title="Our App"/>
  </Card>
);
const pathsThatRequireBackButton = [
  '/activity'
];

export class Nav extends Component {
  isActive(route) {
    return route === this.props.location.pathname ? 'active' : '';
  }

  _openSidebar(e) {
    e.preventDefault();
    this.refs.leftNav.toggle();
  }

  _goBack(e){
    e.preventDefault();
    history.goBack();
  }

  _getSelectedIndex() {
    if (this.props.router) {
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].route == this.props.router.location.pathname) {
          return i;
        }
      }
    }
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.props.pushState({}, payload.route);
  }

  _shouldShowBackButton(path){
    let show = false;
    pathsThatRequireBackButton.forEach(function(match){
      if(!show && path.indexOf(match) > -1){
        show = true;
      }
    });

    return show;
  }

  render() {
    let appBar, showBackButton = this._shouldShowBackButton(this.props.location.pathname);
    if(showBackButton){
      appBar = (
        <AppBar
            iconElementLeft={
              <IconButton onClick={e => this._goBack(e)}>
                <FontIcon className="material-icons">arrow_back</FontIcon>
              </IconButton>
            }/>
      );
    } else {
      appBar = (
        <AppBar
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={e => this._openSidebar(e)}/>
      );
    }
    return (
      <nav>
        <LeftNav ref="leftNav" docked={false}
            header={header}
            menuItems={menuItems}
            onChange={(e, key, payload) => this._onLeftNavChange(e, key, payload)}
            selectedIndex={this._getSelectedIndex()}/>
        {appBar}

      </nav>
    );
  }
}

export default connect(state => {
  return {router: state.router};
}, {pushState})(Nav);