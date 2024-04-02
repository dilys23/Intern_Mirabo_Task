// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login/LoginPage.jsx';
import HomePage from './pages/Home/HomePage.jsx';
// import getRoutes from './utils/routes';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      {/* {getRoutes()} */}
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
    </Routes>
  </Router>

  );
}

export default App;
