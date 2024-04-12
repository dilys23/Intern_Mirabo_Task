import { lazy } from 'react';
import LazyComponent from '../utils/lazyComponent';
import { CPATH } from "../constants/path";
const LazyLoginPage = LazyComponent(lazy(() => import('../pages/Login/LoginPage')));

const AuthRoutes = 
  {
    path :  CPATH.LOGIN,
    element: <LazyLoginPage />,
  }

export default AuthRoutes;
