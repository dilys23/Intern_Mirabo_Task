import { lazy } from 'react';

import { Navigate } from 'react-router-dom';
import Loadable from './Loadable';

const ErrorPage404 = Loadable(lazy(() => import('../pages/Error/404')));

const ErrorRoutes = {
  path: '/',
  children: [
    {
      path: 'login',
      element: <Navigate to="/" />,
    },
    {
      path: '*',
      element: <ErrorPage404 />,
    },
  ],
};

export default ErrorRoutes;