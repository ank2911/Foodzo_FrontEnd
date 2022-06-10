import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";
// import {UserContext} from "../Pages/HomePage"

function UserLoginPage(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState("");
  // const {state, dispatch} = useContext(UserContext);

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
    // dispatch({type:"USER", payload:true})
  return (
    <div className="font-Myfont">
      <Navbar/>
      <div className="myConatiner">
        <h3 className="text-center text-black text-3xl m-6">User Log In</h3>
        <form onSubmit={handleSubmit}>
        <div className="relative">
          <MdEmail size={18} className="absolute top-1"/>
          <input
            type="email"
            className="focus: outline-none placeholder:text-black pl-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="relative">
          <FaLock className="absolute top-1"/>
          <input
            type="password"
            className="focus:outline-none placeholder:text-black pl-5"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Password"
            required
          />
          </div>
          <div className="error-text text-danger">{isError}</div>
          <div className="flex justify-center relative">
          <button type="submit" className="btn">
            Log In
          </button>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 foot-text">
              <p className="my-4">
                New User?
                <Link to="/signup" className="">
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
