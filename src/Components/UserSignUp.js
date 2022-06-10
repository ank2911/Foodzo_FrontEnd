import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail,MdCall } from "react-icons/md";
import Navbar from "./Navbar";
function SignUpForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [pass, setPass] = useState("");
  const [confpass, setconfPass] = useState("");
  const [isError, setIsError] = useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userinfo = {
      name: name,
      email: email,
      num: num,
      password: pass,
      confirmPassword: confpass
    };

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/signUp`, userinfo)
      .then((res) => {
        const id = res.data.user._id
        setIsError(res.data.msg || "Registration Successful. Now try logging in");
      })
      .catch((error) => {
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
    <div className="font-Myfont">
      <Navbar/>
      <div className="myConatiner">
        <h3 className="text-center text-black text-3xl m-6">Sign Up</h3>
        <form onSubmit={handleSubmit}>
        <div className="relative">
        <FaUser className="absolute top-1"/>
          <input
            className="focus: outline-none placeholder:text-black pl-5"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"

          />
          </div>
          <div className="relative">
          <MdEmail size={18} className="absolute top-1"/>
          <input
            className="focus:outline-none placeholder:text-black pl-5"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"

          />
          </div>
          <div className="relative">
          < MdCall size={20} className="absolute top-1"/>
          <input
            className="focus:outline-none placeholder:text-black pl-5"
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="Mobile Number"

          />
          </div>
          <div className="relative">
          <FaLock className="absolute top-1"/>
          <input
            className="focus:outline-none placeholder:text-black pl-5"
            type="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"

          />
          </div>
          <div className="relative">
          <FaLock className="absolute top-1"/>
          <input
            className="focus:outline-none placeholder:text-black pl-5"
            type="Password"
            value={confpass}
            onChange={checkpassword}
            placeholder="Confirm Password"

          />
          </div>
          <div className="text-red-800">{isError}</div>
          <div className="flex justify-center relative">          
            <button
            type="submit"
            className="btn"
          >
            Sign Up
          </button>
          </div>

              <p>
                Already a User ?
                <Link to="/signin">
                  Login
                </Link>
              </p>
           
        </form>
      </div>
    </div>

  );
}

export default SignUpForm;
