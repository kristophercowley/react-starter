import './Nav.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import {namedRoutes as menuItems} from '../../routes';
import {AppBar, Card, CardHeader, Avatar, LeftNav} from 'material-ui';

const header = (
  <Card>
    <CardHeader
      title="Our App"
      subtitle="Some details"
      avatar={<Avatar>A</Avatar>}/>
  </Card>
);

export class Nav extends Component {
  isActive(route){
    return route === this.props.location.pathname ? 'active' : '';
  }
  _openSidebar(e){
    e.preventDefault();
    this.refs.leftNav.toggle();
  }
  _getSelectedIndex() {
    if(this.props.router){
      for(let i = 0; i < menuItems.length; i++){
        if(menuItems[i].route == this.props.router.location.pathname){
          return i;
        }
      }
    }
  }
  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.props.pushState({}, payload.route)
  }
  render(){
    return (
      <nav>
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={e => this._openSidebar(e)}/>
        <LeftNav ref="leftNav" docked={false}
                 header={header}
                 menuItems={menuItems}
                 selectedIndex={this._getSelectedIndex()}
                 onChange={(e, key, payload) => { this._onLeftNavChange(e, key, payload) }}/>
      </nav>
    );
  }
}

export default connect(state => {
  return { router: state.router };
}, { pushState })(Nav)