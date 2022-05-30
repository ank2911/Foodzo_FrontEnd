import React, { useState } from 'react';
import axios from "axios";
import { FaUser,FaLock } from "react-icons/fa";
function AdminLogin(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   if ((adminuserid === "mass") && (adminpassword === "takeme")) {
  //     sessionStorage.setItem("Key_Veriable", 'ADMIN')

  //     props.history.push('/')

  //   }


  //   setAdminUserId('')
  //   setAdminPassword('')

  // }
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userinfo = {
      user: adminuserid,
      password: adminpassword
    }

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/login`, userinfo)
      .then((res) => {
        const id = res.data.user._id

      })
      

    setAdminUserId("");
    setAdminPassword("");
  };

  return (
    <div className="myConatiner">
      <h3 className="text-center text-black text-3xl m-6">Admin Login</h3>

      <form onSubmit={handleSubmit}>
        <div className="relative">
          <FaUser className="absolute top-1" />
          <input type="text"
            value={adminuserid}
            className="focus: outline-none placeholder:text-black pl-5"
            onChange={(e) => setAdminUserId(e.target.value)}
            placeholder="Admin Username"
            required />
        </div>
        <div className="relative">
          <FaLock className="absolute top-1" />
          <input type="password"
            value={adminpassword}
            className="focus: outline-none placeholder:text-black pl-5"
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Password"
            required />
        </div>
        <div className="flex justify-center relative">
        <button type="submit" className="btn">
          Login
        </button>
          </div>
      </form>
    </div>

  );
}
export default AdminLogin