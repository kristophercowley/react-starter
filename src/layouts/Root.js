import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DocumentTitle from 'react-document-title';
import { connect, Provider } from 'react-redux';
import { Router } from 'react-router';

import errorFetchingData from '../actions/data_error';
import fetchData from '../actions/data_fetch';
import setLoading from '../actions/loading_set';

export class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes:  PropTypes.element.isRequired,
    store:   PropTypes.object.isRequired,
    pageLoadStart: PropTypes.func.isRequired,
    pageLoadFinish: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    error: PropTypes.func.isRequired
  };

  // Initial data fetch here
  componentWillMount() {
    // Allow loading transition
    document.getElementsByTagName("html")[0].classList.remove("loading");
    const {error, getData, pageLoadStart, pageLoadFinish} = this.props;
    pageLoadStart();
    getData()
      .then(() => {
        pageLoadFinish();
      })
      .catch(e => {
        console.error('Error loading: ', e);
        error();
        pageLoadFinish();
      });
  }

  render() {
    const {history, routes, store, title} = this.props;
    let appTitle = '';
    if(process.env.NODE_ENV !== 'testing'){
      appTitle = document.title.split(' | ').shift();
    }
    return (
      <DocumentTitle title={`${appTitle}${title}`}>
        <Provider store={store}>
          <div style={{ height: '100%' }}>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              <div key={title}>
                <Router history={history} routes={routes}/>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </Provider>
      </DocumentTitle>
    );
  }
}

export default connect(
  state => ({
    title: state.site && state.site.title ? ` | ${state.site.title}` : ''
  }),
  dispatch => ({
    pageLoadStart:  () => dispatch(setLoading(true)),
    pageLoadFinish: () => dispatch(setLoading(false)),
    getData:        () => dispatch(fetchData()),
    error:          () => dispatch(errorFetchingData())
  })
)(Root);
