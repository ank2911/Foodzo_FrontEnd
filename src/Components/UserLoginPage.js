import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";

function UserLoginPage(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState("");
  
=======

function SignInModal({buttonName}) {
>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        //console.log(email, password)
    }

<<<<<<< HEAD
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
      <Navbar onShow={props.onShow}/>
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
=======
    const inputClass = 'bg-white my-3 text-gray-600 border-1 border-gray-300 outline-gray-300 rounded-md px-2';
    return (
            <>
            <div className='bg-slate-200 fixed inset-x-0 z-50  grid place-content-center h-full'>
                <form className='grid place-content-center w-screen' onSubmit={handleSubmit}>
                    <div className='shrink content-center p-6 mx-4 max-w-md bg-white rounded-xl shadow-xl'>
                        <div className='flex justify-end'>
                        </div>
                        <p className='text-2xl text-gray-500 my-4 mx-2'>Sign In</p>
                        <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} className={inputClass} required />
                        <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password} className={inputClass} required />
                        <div className='flex justify-end'>
                            <button type='submit' className='text-white bg-orange-400 hover:bg-orange-500 hover:scale-110 rounded-full py-1 px-4 my-4'>Sign In</button>
                        </div>
                        <Link to='/signup' className='text-sm text-orange-400 hover:text-orange-500 px-2'>Haven't an account?</Link>
                    </div>
                </form>
>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87
            </div>
        </>
    )
}

export default SignInModal