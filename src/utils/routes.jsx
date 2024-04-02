// import { Router, Route, Routes } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import HomePage from '../pages/HomePage';
// import DashBoard from '../pages/DashBoard';
// import LoginCom from '../pages/Login/LoginForm';

// const getRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//        <Route exact path="/compo/login" element={<LoginCom />} />
//         <Route exact path="/admin/login" element={<LoginPage />} />
//         <Route exact path="/admin/home" element={<HomePage />} />
//         <Route exact path="/admin/dashboard" element={<DashBoard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default getRoutes;
import { lazy } from "react";
import { Route } from "react-router-dom";
import LazyComponent from "../utils/lazyComponent";
import { CPATH } from "../constants/path";

const Home = LazyComponent(lazy(() => import("../pages/Home/HomePage")));
// const Dashboard = LazyComponent(lazy(() => import("../pages/dashboard")));
const Login = LazyComponent(lazy(() => import("../pages/Login/LoginForm")));

let routes = () => [
  {
    path: CPATH.HOME,
    element: <Home />,
  },

  //   {
  //     path: CPATH.DASHBOARD,
  //     element: <Dashboard />,
  //   },

  {
    path: CPATH.LOGIN,
    element: <Login />,
  },
];

export default routes;