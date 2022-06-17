import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { BiMenu} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
<<<<<<< HEAD
import { MdShoppingCart } from "react-icons/md";

function Navbar({cart}) {
  
=======
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

function Navbar() {
>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87
  const [open, setOpen] = useState(false)
  const navHandler = () => {
    setOpen(!open)
  }
  return (
<<<<<<< HEAD
    <div>    
       <div className="bg-black h-12 flex items-center p-9 overflow-hidden">
       <img src='./images/logo.png' width='165' height='165' className='object-contain py-2 mx-4'/>
       
=======
    <div className='sticky z-10 top-0'>    
       <div className="bg-black h-12 flex items-center p-8 overflow-hidden">
       <img src='./images/logo.png' alt='logo' width='120vh' height='120vh' className='object-contain pr-2 mr-4 min-w-sm'/>
>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87
      {/*<h1 className="text-4xl text-orange-400 py-2 font-Myfont2 ">Foodzo</h1>*/}
        {/* <div className="pt-10 pl-96 relative">
        <BiSearch size={29} className="absolute right-1.5 pt-1"/>
        <input type="text" placeholder=" Search Your Items here..." className="pl-3 border-2 border-black bg-white placeholder:text-black rounded-full"></input>
        </div> */}
       
        <ul className="hidden md:flex space-x-4 w-screen py-4 text-lg mx-6  min-w-max">
<<<<<<< HEAD
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/'>Home<span className='text-3xl font-medium'>⌄</span></Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/about' >About Us <span className='text-3xl font-medium'>⌄</span></Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/signup'>SignUp <span className='text-3xl font-medium'>⌄</span></Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/signin'>SignIn <span className='text-3xl font-medium'>⌄</span></Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/signin'>Contact <span className='text-3xl font-medium'></span></Link></li>
          
          {/*<li><Link to='/admin_page'>Admin Login</Link></li>*/}
 
        </ul>
        <Link to='/cart'><MdShoppingCart size={25}  className="text-white"/>  <span className="badge-sm md:badge">{cart.length}</span></Link>
        <div className="md:hidden flex w-full justify-end right-0 text-white" onClick={navHandler}>
=======
          <li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/'>Home</Link></li>
          <li className='text-sm font-semibold text-white hover:text-orange-400'><a href='#footer'>AboutUs</a></li>
          {/*<li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/signup'>SignUp</Link></li>*/}
          <SignUpModal buttonName={'SignUp'}/>
          <SignInModal buttonName={'SignIn'}/>
          {/*<li className='text-sm font-semibold text-white hover:text-orange-400'><Link to='/signin'>SignIn</Link></li>*/}
          <li className='text-sm font-semibold text-white hover:text-orange-400'><a href='#footer'>Contact</a></li>

          {/*<li><Link to='/admin_page'>Admin Login</Link></li>*/}
 
        </ul>

        <div className="md:hidden flex w-9/12 justify-end right-0 text-white" onClick={navHandler}>
>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87
          {open ? <AiOutlineClose size={25} /> : <BiMenu size={30} />}
        </div>
        
      </div>

<<<<<<< HEAD
      <div onClick={navHandler} className={open ? "absolute w-1/3 right-0 top-15 bg-black px-4 py-2 flex flex-col duration-500 z-50" : "absolute hidden"}>
        <MdShoppingCart size={40} />
=======
      <div onClick={navHandler} className={open ? "absolute w-1/2 right-0 top-15 bg-black px-4 py-2 flex flex-col duration-500 z-50" : "absolute hidden"}>
>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87
        <ul>
          <li className="text-white p-3 hover:text-orange-400"><Link to='/'>Home</Link></li>
          <li className="text-white p-3 hover:text-orange-400"><a href='#footer'>AboutUs</a></li>
          <li className="text-white p-3 hover:text-orange-400"><Link to='/signup'>SignUp</Link></li>
          <li className="text-white p-3 hover:text-orange-400"><Link to='/signin'>SignIn</Link></li>
          <li className="text-white p-3 hover:text-orange-400"><a href='#footer'>Contact</a></li>
        </ul>
      </div>
      </div>
  )
}
export default Navbar
