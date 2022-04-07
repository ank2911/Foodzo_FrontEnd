import './App.css';
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage';
import AdminLogin from './Components/AdminLogin';
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/adminlogin"  component={AdminLogin} />
    <Route path="/login"  component={UserLoginPage} />
    <Route path="/"  component={UserSignUp} />
   
 
      </Switch>
      </Router>
  );
}

export default App;
