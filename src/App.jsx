// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login/LoginPage.jsx';
import HomePage from './components/Home/HomePage.jsx';
import './App.css';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
