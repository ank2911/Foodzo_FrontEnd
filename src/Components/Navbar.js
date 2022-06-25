import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { BiMenu} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
<<<<<<< HEAD

=======
import { MdShoppingCart } from "react-icons/md";
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
>>>>>>> 5d00eca7355a53034e0033d0a74e12d0a72931eb

function Navbar({cart}) {
  const [open, setOpen] = useState(false)
  const navHandler = () => {
    setOpen(!open)
  }
  return (
    <div className='sticky z-10 top-0'>    
       <div className="bg-black h-12 flex items-center p-8 overflow-hidden">
       <img src='./images/logo.png' alt='logo' width='120vh' height='120vh' className='object-contain pr-2 mr-4 min-w-sm'/>
      {/*<h1 className="text-4xl text-orange-400 py-2 font-Myfont2 ">Foodzo</h1>*/}
       
       
        <ul className="hidden md:flex space-x-4 w-screen py-4 text-lg mx-6  min-w-max">
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/'>Home</Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><a href='#footer'>AboutUs</a></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/signup'>SignUp</Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/signin'>SignIn</Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><a href='#footer'>Contact</a></li>

          {/*<li><Link to='/admin_page'>Admin Login</Link></li>*/}
 
        </ul>
        <Link to='/cart'><MdShoppingCart size={25}  className="text-white"/>  <span className="badge-sm md:badge">{cart.length}</span></Link>
        <div className="md:hidden flex w-9/12 justify-end right-0 text-white" onClick={navHandler}>
          {open ? <AiOutlineClose size={25} /> : <BiMenu size={30} />}
        </div>
        
      </div>

      <div onClick={navHandler} className={open ? "absolute w-1/3 right-0 top-15 bg-black px-4 py-2 flex flex-col duration-500 z-50" : "absolute hidden"}>
        <MdShoppingCart size={40} />
      
        <ul>
          <li className="text-white p-3 hover:text-orange-400"><Link to='/'>Home</Link></li>
          <li className="text-white p-3 hover:text-orange-400"><Link to='/'>AboutUs</Link></li>
          <li className="text-white p-3 hover:text-orange-400"><Link to='/signup'>SignUp</Link></li>
          <li className="text-white p-3 hover:text-orange-400"><Link to='/signin'>SignIn</Link></li>
          <li className="text-white p-3 hover:text-orange-400"><a href='#footer'>Contact</a></li>
        </ul>
      </div>
      </div>
  )
}
export default Navbar
