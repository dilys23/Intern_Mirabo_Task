import { lazy } from 'react';
import LazyComponent from '../utils/lazyComponent';
import { CPATH } from "../constants/path";
const LazyHomePage = LazyComponent(lazy(() => import('../pages/Home/HomePage')));
const MainRoutes = {
  path: CPATH.HOME, element: <LazyHomePage />
}
export default MainRoutes;
