import { router } from 'lib/constants/router';
import { AppLayout } from 'layouts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </ErrorBoundary>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
