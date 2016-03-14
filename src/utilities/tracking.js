import {browserHistory} from 'react-router';
import {TRACKING_ID} from '../constants/Google';

// We only want to use when in production. Otherwise mock.
let ga = require('react-ga');
if(process.env.NODE_ENV !== 'production'){
  const noop = () => {};
  ga = {initialize: noop, pageview: noop};
}
ga.initialize(TRACKING_ID);

export function trackPageViews(){
  browserHistory.listen(location => {
    ga.pageview(location.pathname);
  });
}
