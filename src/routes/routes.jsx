
import { lazy } from "react";
import { CPATH } from '../constants/path';
import LazyLoginPage from '../utils/lazyLoginPage';
import LazyHomePage from '../utils/lazyHomePage';
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));

const getroutes = () => [
  {
    path: CPATH.HOME,
    element: <LazyHomePage Component={HomePage} />,
  },

  {
    path: CPATH.LOGIN,
    element: <LazyLoginPage Component={LoginPage} />,
  },
];
export default getroutes;