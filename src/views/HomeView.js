import React from 'react';

import '../styles/views/HomeView.scss';
import HomeLayout from '../layouts/HomeLayout';

export default function(props) {
  return (
    <HomeLayout {...props}>
      <div className="HomeView">
        <h1>Home</h1>
      </div>
    </HomeLayout>
  );
}
