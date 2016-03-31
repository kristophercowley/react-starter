import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

export default function NotFoundView(props) {
  return (
    <DefaultLayout title="404 Page Not Found" wrapClass="NotFoundView" {...props}>
      <h1>Page Not Found</h1>
    </DefaultLayout>
  );
}
