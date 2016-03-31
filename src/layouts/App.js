import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import {StickyContainer} from 'react-sticky';

import '../styles/core.scss';
import '../styles/transitions.scss';
import {errorFetchingData} from '../actions/data';
import {fetchData} from '../actions/data';
import {setLoading} from '../actions/loading';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';

export class App extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
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
      .then(() => pageLoadFinish())
      .catch(e => {
        console.error(e);
        error();
        pageLoadFinish();
      });
  }

  render() {
    const {children, history, pathname, title} = this.props;
    return (
      <DocumentTitle title={`App Title${title}`}>
        <StickyContainer>
          <div className="Layout">
            <Header push={history.push} />
            <Nav currentPath={pathname} />
            {!pathname ? '' :
              <ReactCSSTransitionGroup
                transitionName="animate"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}>
                {React.cloneElement(children, {
                  key: pathname
                })}
              </ReactCSSTransitionGroup>
            }
            <Footer />
          </div>
        </StickyContainer>
      </DocumentTitle>
    );
  }
}

export default connect(
  state => {
    const pathname = function(){
      const routing = state.routing || {};
      const location = routing.locationBeforeTransitions || {};
      return location.pathname || '';
    }();
    const title = state.site && state.site.title ? ` | ${state.site.title}` : '';
    return {pathname, title};
  },
  dispatch => ({
    pageLoadStart:  () => dispatch(setLoading(true)),
    pageLoadFinish: () => dispatch(setLoading(false)),
    getData:        () => dispatch(fetchData()),
    error:          () => dispatch(errorFetchingData())
  })
)(App);
