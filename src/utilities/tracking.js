import {browserHistory} from 'react-router';
import {TRACKING_ID} from '../constants/Google';

// react-ga binds to `window` so we need to mock when testing
let ga = require('react-ga');
if(process.env.NODE_ENV === 'test'){
  ga = {
    initialize: () => {},
    event: () => {}
  };
}

ga.initialize(TRACKING_ID);

export function trackPageViews(){
  browserHistory.listen(location => {
    ga.pageview(location.pathname);
  });
}

export function trackClick(title){
  ga.event({
    category: 'Actions',
    action: 'Clicked',
    label: `Click: ${title}`
  });
}
