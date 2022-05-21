import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage';
import AdminLogin from './Components/AdminLogin';
import Homepage from './Components/Homepage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact/>
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signin" element={<UserLoginPage />} />
        <Route path="/admin_page" element={<AdminLogin />} />

      </Routes>

    </Router>
  );
}

export default App;
