import './Nav.scss';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {AppBar, Avatar, Card, CardHeader, LeftNav, IconButton, FontIcon} from 'material-ui';
import {menuItems} from '../../routes';
import history from '../../history';

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
  _getSelectedIndex() {
    if (this.props.location) {
      return menuItems.map(item => item.route).indexOf(this.props.location.pathname);
    }
  }
  _shouldShowBackButton(path){
    return pathsThatRequireBackButton.some(function(match){
      return path.indexOf(match) > -1;
    });
  }
  render() {
    return (
      <nav>
        <LeftNav ref="leftNav" docked={false}
            header={header}
            menuItems={menuItems}
            onChange={(e, key, payload) => history.pushState({}, payload.route)}
            selectedIndex={this._getSelectedIndex()}/>
        {
          this._shouldShowBackButton(this.props.location.pathname) ? (
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

Nav.propTypes = {
  location: PropTypes.object.isRequired
};

export default connect(state => ({
  router: state.router
}))(Nav);