
import { lazy } from "react";
import { CPATH } from '../constants/path';
import LazyComponent from '../utils/lazyComponent';
const LoginPage = LazyComponent(lazy(() => import("../pages/Login/LoginPage")));
const HomePage = LazyComponent(lazy(() => import("../pages/Home/HomePage")));
const getroutes = () => [
  {
    path: CPATH.HOME,
    element: <HomePage />,
  },

  {
    path: CPATH.LOGIN,
    element: <LoginPage/>,
  },
];
export default getroutes;