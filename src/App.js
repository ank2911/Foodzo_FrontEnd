import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage';
import AdminLogin from './Components/AdminLogin';
import Homepage from './Components/Homepage';
import HomePage from './Pages/HomePage';
import About from './Components/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signin" element={<UserLoginPage />} />
        <Route path="/admin_page" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </Router>
  );
}

export default App;
