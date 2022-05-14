import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UserInterface from './Components/UserInterface'
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage';
import AdminLogin from './Components/AdminLogin';
import Homepage from './Components/Homepage';
function App() {
  return (
    <Router>
      <Routes>    
         <Route path="/"  element={<UserSignUp/>}  />
         <Route path="/adminlogin"  element={<AdminLogin/>} />
         <Route path="/login"  element={<UserLoginPage/>} /> 
         <Route path="/" element={<Homepage/>} />
         <Route path="/" element={<UserInterface/>} />
      </Routes>

    </Router>
  );
}

export default App;
