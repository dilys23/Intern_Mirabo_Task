import { Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import DashBoard from '../pages/DashBoard';
import LoginCom from '../pages/Login/LoginForm';

const getRoutes = () => {
  return (
    <Router>
      <Routes>
       <Route exact path="/compo/login" element={<LoginCom />} />
        <Route exact path="/admin/login" element={<LoginPage />} />
        <Route exact path="/admin/home" element={<HomePage />} />
        <Route exact path="/admin/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default getRoutes;