import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage';
import AdminLogin from './Components/AdminLogin';
function App() {
  return (
    <Router>
      <Routes>    
         <Route path="/"  element={<UserSignUp/>} exact />
         <Route path="/adminlogin"  element={<AdminLogin/>} />
         <Route path="/login"  element={<UserLoginPage/>} />
      </Routes>

    </Router>
  );
}

export default App;
