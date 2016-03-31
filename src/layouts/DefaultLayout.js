import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {browserHistory} from 'react-router';

import '../styles/components/Layout.scss';
import {setTitle} from '../actions/title';
import {trackClick} from '../utilities/tracking';
import Error from '../components/Error';
import Spinner from '../components/Spinner';

export class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.any,
    loading: PropTypes.bool,
    title: PropTypes.string,
    error: PropTypes.shape({
      failed: PropTypes.obj,
      message: PropTypes.string
    }),
    setPageTitle: PropTypes.func.isRequired,
    transitionClass: PropTypes.string,
    wrapClass:PropTypes.string,
    displayBackButton: PropTypes.bool,
    requiresEvents: PropTypes.bool
  };

  // For static titles
  componentWillMount(){
    this.props.setPageTitle(this.props.title || '');
    if(process.env.NODE_ENV !== 'test'){
      window.scrollTo(0, 0);
    }
  }

  // For dynamic titles (we need both methods)
  componentWillReceiveProps(nextProps){
    if(nextProps.title !== this.props.title){
      nextProps.setPageTitle(nextProps.title);
    }
  }

  actions = {
    goBack: () => {
      const {title} = this.props;
      trackClick(`Back button: ${title}`);
      browserHistory.goBack();
    }
  };

  render () {
    const {children, requiresData, transitionClass = 'slideUpFadeIn', wrapClass} = this.props;
    let {error, loading} = this.props;
    error = requiresData && error && error.failed === true? <Error message={error.message} /> : null;
    loading = requiresData && loading === true ? <Spinner /> : null;
    return (
      <div className={classnames('container', transitionClass)}>
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
            <div className={wrapClass}>
              {error || loading || children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      error: {
        failed: state.site.dataError,
        message: state.site.dataErrorMessage
      },
      loading: state.site.loading,
      currentTitle: state.site.title
    };
  },
  dispatch => ({
    setPageTitle: title => dispatch(setTitle(title))
  })
)(DefaultLayout);
