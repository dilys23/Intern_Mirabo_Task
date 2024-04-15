import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import LazyComponent from "../utils/lazyComponent";
import { CPATH } from "../constants/path";
import { Outlet, Navigate } from "react-router-dom";
// import { useAuthenticated } from "../customHoo k/useAuthenticated";
const RegisterPage = LazyComponent(lazy(() => import("../pages/Register/RegisterPage")));
const LoginPage = LazyComponent(lazy(() => import("../pages/Login/LoginPage")));
const HomePage = LazyComponent(lazy(() => import("../pages/Home/HomePage")));

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: isAuthenticated() ? (
        <Outlet />
      ) : (
        <Navigate to={CPATH.LOGIN} replace />
      ),
      children: [{ path: "homePage", element: <HomePage /> }],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> }
  ]);

  return element;
}

const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};