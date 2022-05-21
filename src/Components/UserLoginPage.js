import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

function UserLoginPage(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userinfo = {
      email: email,
      password: pass
    }

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/login`, userinfo)
      .then((res) => {
        const id = res.data.user._id

      })
      .catch((error) => {
        setIsError("Invalid email / password")
      })

    setEmail("");
    setPass("");
  };

  return (
    <div className="">
      <div className="container  bg-theme-green w-1/2">
        <h3 className="user-login">User Log In</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control form-control-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            className="form-control form-control-sm"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <div className="error-text text-danger">{isError}</div>
          <input
            type="submit"
            value="Log In"
            className="btn btn-lg btn-outline-dark rounded-pill"
          />
          <div className="form-row">
            <div className="form-group col-md-12 foot-text">
              <p>
                New User?
                <Link to="/">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLoginPage;
