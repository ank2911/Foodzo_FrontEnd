import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage'
import AdminLogin from './Components/AdminLogin';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/signup" element={<UserSignUp/>} />
        <Route path="/signin" element={<UserLoginPage/>} />
        <Route path="/admin" element={<AdminLogin />} />

      </Routes>

    </Router>
  );
}

export default App;
