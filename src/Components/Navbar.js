import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [open, setOpen] = useState(false)
  const navHandler = () => {
    setOpen(!open)
  }
  return (
    <div>    
       <div className="w-screen bg-[#6e7eecc9] h-12 flex justify-between items-center">
        <h1 className="text-4xl text-white font-bold p-2 font-Myfont2">Foodzo</h1>
        <ul className="hidden sm:flex space-x-4 p-4 text-lg">
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/signin'>Login</Link></li>
          <li><Link to='/admin_page'>Admin Login</Link></li>
        </ul>

        <div className="sm:hidden right-0" onClick={navHandler}>
          {open ? <AiOutlineClose size={25} /> : <BiMenu size={30} />}
        </div>

      </div>

      <div onClick={navHandler} className={open ? "absolute w-full right-0 top-15 bg-[#abb4f1c9] px-4 py-2 flex flex-col duration-500" : "absolute right-[-100%]"}>
        <ul >
          <li className="text-black p-3 border-b"><Link to='/about'>About Us</Link></li>
          <li className="text-black p-3 border-b"><Link to='/signup'>SignUp</Link></li>
          <li className="text-black p-3 border-b"><Link to='/signin'>Login</Link></li>
          <li className="text-black p-3 border-b"><Link to='/admin_page'>Admin Login</Link></li>
        </ul>
      </div>
      </div>
 
    
  )
}
export default Navbar
