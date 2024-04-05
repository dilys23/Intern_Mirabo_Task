import { CPATH } from "../constants/path";
import { Outlet, Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};

const PrivateRoutes = () => {
  const isAuth = isAuthenticated();
  console.log("Is authenticated:", isAuth);
  return isAuth ? <Outlet /> : <Navigate to={CPATH.LOGIN} />;
};

export default PrivateRoutes;
