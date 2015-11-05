import './Nav.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppBar, Avatar, Card, CardHeader, LeftNav, IconButton, FontIcon} from 'material-ui';
import {menuItems} from '../../routes';
import history from '../../history';

history.listenBefore(function(location){
  // Make sure we've got something to go back to
  return !!location && !!location.pathname;
});

const header = (
  <Card>
    <CardHeader
        avatar={<Avatar>A</Avatar>}
        subtitle="Some details"
        title="Our App"/>
  </Card>
);
const pathsThatRequireBackButton = [
  '/activity',
  '/pageNotFound'
];

export class Nav extends Component {
  isActive(route) {
    return route === this.props.location.pathname ? 'active' : '';
  }
  _getSelectedIndex() {
    if (this.props.location) {
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].route == this.props.location.pathname) {
          return i;
        }
      }
    }
  }
  _onLeftNavChange(e, key, payload) {
    history.pushState({}, payload.route);
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
    let showBackButton = this._shouldShowBackButton(this.props.location.pathname);
    return (
      <nav>
        <LeftNav ref="leftNav" docked={false}
            header={header}
            menuItems={menuItems}
            onChange={(e, key, payload) => this._onLeftNavChange(e, key, payload)}
            selectedIndex={this._getSelectedIndex()}/>
        {
          showBackButton ? (
            <AppBar
                iconElementLeft={
                  <IconButton onClick={() => history.goBack()}>
                    <FontIcon className="material-icons">arrow_back</FontIcon>
                  </IconButton>
                }/>
          ) : (
            <AppBar
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={() => this.refs.leftNav.toggle()}/>
          )
        }

      </nav>
    );
  }
}

export default connect(state => {
  return {router: state.router};
})(Nav);