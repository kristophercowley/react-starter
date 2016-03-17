import React from 'react';
import DefaultLayout from './DefaultLayout';

export default function(props){
  const leftNav = {
    title: 'Find Events',
    path: '/events'
  };
  const rightNav = {
    title: 'My Events',
    path: '/schedule'
  };
  return (
    <DefaultLayout
      title="Home"
      leftNav={leftNav}
      rightNav={rightNav}
      {...props}
    />
  );
}
