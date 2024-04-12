import { useRoutes } from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import ErrorRoutes from './ErrorRoutes';
import { useAuthenticated } from "../customHook/useAuthenticated";

const AppRoutes = () => {
  const { isLoggedIn } = useAuthenticated();
  const switchRoutes = isLoggedIn ? [MainRoutes] : [AuthRoutes];
  const allRoutes = [...switchRoutes, ErrorRoutes];
  return useRoutes(allRoutes);
}

export default AppRoutes;
