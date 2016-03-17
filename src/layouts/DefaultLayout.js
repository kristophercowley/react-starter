import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {StickyContainer} from 'react-sticky';

import '../styles/core.scss';
import '../styles/transitions.scss';
import '../styles/components/Layout.scss';
import setTitle from '../actions/title_set';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.element,
    loading: PropTypes.bool,
    pathname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    error: PropTypes.shape({
      failed: PropTypes.obj,
      message: PropTypes.string
    }),
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired
    }).isRequired,
    rightNav: PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
      path: PropTypes.string
    }),
    leftNav: PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
      path: PropTypes.string
    }),
    setPageTitle: PropTypes.func.isRequired
  };

  // For static titles
  componentWillMount(){
    if(this.props.title){
      this.props.setPageTitle(this.props.title);
    }
  }

  // For dynamic titles (we need both methods)
  componentWillReceiveProps(nextProps){
    if(nextProps.title !== this.props.title){
      nextProps.setPageTitle(nextProps.title);
    }
  }

  render () {
    const {children, history} = this.props;
    // Error and loading props
    let {error, loading} = this.props;
    error = error && error.failed === true ? <Error message={error.message} /> : null;
    loading = loading === true ? <Spinner /> : null;
    // Nav props
    const {pathname, title, rightNav, leftNav = {title: 'Home', path: '/'}, goBack} = this.props;
    // Transition props
    const {transitionName = 'fade', transitionEnterTimeout = 500, transitionLeaveTimeout = 500} = this.props;
    return (
      <StickyContainer>
        <div className="Layout">
          <Header push={history.push} />
          <Nav currentPath={pathname}
               title={title}
               rightNav={rightNav}
               leftNav={leftNav}
               goBack={goBack} />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                <ReactCSSTransitionGroup
                  component="div"
                  transitionName={transitionName}
                  transitionEnterTimeout={transitionEnterTimeout}
                  transitionLeaveTimeout={transitionLeaveTimeout}>
                  <div className={pathname}>
                    {error || loading || children}
                  </div>
                </ReactCSSTransitionGroup>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </StickyContainer>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      children: props.children,
      error: {
        failed: state.site.dataError,
        message: state.site.dataErrorMessage
      },
      history: browserHistory,
      loading: state.site.loading,
      pathname: props.pathname || props.location.pathname
    };
  },
  dispatch => ({
    goBack: () => browserHistory.goBack(),
    setPageTitle: title => dispatch(setTitle(title))
  })
)(DefaultLayout);
