import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiMenu} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import CartContext from '../Store/CartContext';
function Navbar(props) {
  // const cartContext= useContext(CartContext);
  // const totalItems=cartContext.items.reduce((currentNo,item) => {
  //   return currentNo+ item.amount;
  // }, 0);
  const [open, setOpen] = useState(false)
  const navHandler = () => {
    setOpen(!open)
  }
  return (
    <div>    
       <div className="w-screen bg-[#6e7eecc9] h-12 flex justify-between items-center">
        <h1 className="text-4xl text-white font-bold p-2 font-Myfont2">Foodzo</h1>
        {/* <div className="pt-10 pl-96 relative">
        <BiSearch size={29} className="absolute right-1.5 pt-1"/>
        <input type="text" placeholder=" Search Your Items here..." className="pl-3 border-2 border-black bg-white placeholder:text-black rounded-full"></input>
        </div> */}
        <ul className="hidden md:flex space-x-4 p-4 text-lg">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about' >About Us</Link></li>
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/signin'>Login</Link></li>
          <li><Link to='/cart'><MdShoppingCart size={25} />  <span className="badge">0</span></Link></li>
          {/* <li><Link to='/admin_page'>Admin Login</Link></li>
  */}
        </ul>
       
        <div className="md:hidden right-0 mr-3" onClick={navHandler}>
          {open ? <AiOutlineClose size={25} /> : <BiMenu size={30} />}
        </div>
        
      </div>
      
      <div onClick={navHandler} className={open ? "absolute w-full right-0 top-15 bg-[#e38b26] px-4 py-2 flex flex-col duration-500 z-50" : "absolute hidden"}>
      
        <ul className="md:hidden">
          <li className="text-black p-3 border-b-2 border-black hover:bg-blue-300"><Link to='/'>Home</Link></li>
          <li className="text-black p-3 border-b-2 border-black hover:bg-blue-300"><Link to='/about'>About Us</Link></li>
          <li className="text-black p-3 border-b-2 border-black hover:bg-blue-300"><Link to='/signup'>SignUp</Link></li>
          <li className="text-black p-3 border-b-2 border-black hover:bg-blue-300"><Link to='/signin'>Login</Link></li>
          <Link to='/cart'><MdShoppingCart size={45} className="w-full hover:bg-blue-300"/><span className="badge-sm">0</span></Link>
          {/* <li className="text-black p-3 border-b-2 border-black hover:bg-blue-300"><Link to='/admin_page'>Admin Login</Link></li> */}
        </ul>
      </div>
      </div>
 
    
  )
}
export default Navbar
