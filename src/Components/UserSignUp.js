import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom'
function SignUpForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num,setNum]=useState("");
  const [pass, setPass] = useState("");
  const [confpass, setconfPass] = useState("");
  const [isError, setIsError] = useState("");

  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userinfo = {
      name: name,
      email: email,
      num:num,
      password: pass,
      confirmPassword: confpass
    };

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/signUp`, userinfo)
    .then((res) => {
      const id = res.data.user._id
      setIsError(res.data.msg ||"Registration Successful. Now try logging in");
    })
    .catch((error)=>{
      setIsError(error.response.data.error.message);
    })

    setName("");
    setEmail("");
    setNum("");
    setPass("");
    setconfPass("");
  };
  const checkpassword = (e) => {
    const confirmPass = e.target.value;
    setconfPass(confirmPass);
    if (pass !== confirmPass) {
      setIsError("Password is not Matched");
    } else {
      setIsError("");
    }
  };

  return (
    <div className="container">
      <h3 className="signup-text"> User Sign Up</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
          
        />

        <input
          className="form-control form-control-sm"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          
        />
        <input
          className="form-control form-control-sm"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Mobile Number"
         
        />
        <input
          className="form-control form-control-sm"
          type="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter New Password"
         
        />

        <input
          className="form-control form-control-sm"
          type="Password"
          value={confpass}
          onChange={checkpassword}
          placeholder="Confirm Password"
          
        />
        <div className="error-text text-danger">{isError}</div>
        <button
          type="submit"
          className="btn btn-lg btn-outline-dark rounded-pill"
        >
          Sign Up
        </button>
        <div className="form-row">
          <div className="form-group col-md-12 foot-text">
            <p>
              Already a User ?
              <Link to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
