import React from 'react';

import DefaultLayout from '../containers/DefaultLayout';

export default function(props) {
  return (
    <DefaultLayout title="404 Page Not Found" {...props}>
      <div className="NotFoundView">
        <h1>Page Not Found</h1>
      </div>
    </DefaultLayout>
  );
}
