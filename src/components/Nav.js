import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Sticky} from 'react-sticky';
import classnames from 'classnames';
import HomeIcon from 'react-md-icons/lib/icons/HomeIcon';

import '../styles/components/Nav.scss';

export default class extends Component {
  static propTypes = {
    currentPath: PropTypes.string.isRequired
  };

  renderItem(title, Icon, path){
    const {currentPath} = this.props;
    const isActive = currentPath == path;
    const css = classnames('item', {active: isActive});
    return (
      <Link to={path} className={css}>
        <Icon isActive={isActive} />
        <span className="title">{title}</span>
      </Link>
    );
  }

  render(){
    return (
      <Sticky>
        <div className="nav-component">
          <nav className="Nav">
            <div className="items no-underline">
              {this.renderItem('Home', HomeIcon, '/')}
            </div>
          </nav>
        </div>
      </Sticky>
    );
  }
}
