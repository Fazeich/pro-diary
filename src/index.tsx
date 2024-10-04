import { router } from 'lib/constants/router';
import { AppLayout } from 'layouts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
