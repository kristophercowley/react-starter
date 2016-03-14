import React, {Component, PropTypes} from 'react';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router';
import {StickyContainer, Sticky} from 'react-sticky';
import classnames from 'classnames';
import {Home, Search} from 'react-md-icons';

import '../styles/components/Nav.scss';
import {TABLET_MIN, PHONE_MAX} from '../constants/BreakPoints';

export default class extends Component {
  static propTypes = {
    leftNav: PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
      path: PropTypes.string
    }),
    rightNav: PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
      path: PropTypes.string
    }),
    goBack: PropTypes.func,
    currentPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  renderDesktopLink(title, Icon, path){
    const {currentPath} = this.props;
    const isActive = currentPath == path;
    const css = classnames('item', {active: isActive});
    if(typeof path === 'function'){
      return (
        <div className={css} onClick={path}>
          <Icon isActive={isActive}/>{title}
        </div>
      );
    }
    return (
      <Link to={path} className={css}>
        <Icon isActive={isActive} />{title}
      </Link>
    );
  }

  renderMobileLink(nav, classes){
    const {goBack} = this.props;
    if(!nav) return '';
    if(nav.back === true){
      nav.action = () => goBack();
    } else if(nav.path){
      return <Link to={nav.path} className={classes}>{nav.title}</Link>;
    }
    return (
      <div className={classes} onClick={() => nav.action()}>
        <span className="clickable">{nav.title}</span>
      </div>
    );
  }

  render(){
    const {leftNav, rightNav, title} = this.props;
    return (
      <StickyContainer>
        <Sticky>
          <div>
            <MediaQuery query={`(min-width: ${TABLET_MIN})`}>
              <nav className="Nav desktop">
                <div className="items no-underline">
                  {this.renderDesktopLink('Home', Home, '/')}
                  {this.renderDesktopLink('404', Search, 'badLink')}
                </div>
              </nav>
            </MediaQuery>
            <MediaQuery query={`(max-width: ${PHONE_MAX})`}>
              <nav className="Nav mobile">
                {this.renderMobileLink(leftNav, 'left')}
                <div className="title">
                  <h1>{title}</h1>
                </div>
                {this.renderMobileLink(rightNav, 'right')}
              </nav>
            </MediaQuery>
          </div>
        </Sticky>
      </StickyContainer>
    );
  }
}
