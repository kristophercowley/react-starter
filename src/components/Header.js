import React from 'react';
import MediaQuery from 'react-responsive';
import {IndexLink} from 'react-router';

import '../styles/components/Header.scss';
import {TABLET_MIN, PHONE_MAX} from '../constants/BreakPoints';

export default function(){
  return (
    <IndexLink to="/">
      <header className="Header">
        <MediaQuery query={`(min-width: ${TABLET_MIN})`}>
          <div className="header">
            <div className="logo">
              {/*Desktop Logo here*/}
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query={`(max-width: ${PHONE_MAX})`}>
          <div className="mobile-header">
            <div className="logo">
              {/*Mobile Logo here*/}
            </div>
          </div>
        </MediaQuery>
      </header>
    </IndexLink>
  );
}
