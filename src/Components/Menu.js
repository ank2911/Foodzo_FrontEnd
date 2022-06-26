import React from 'react';
//import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Menu({cart}) {
  return (
    <div className='bg-white h-screen'>
      <Navbar cart={cart} />
      <div className='h-screen'>
        <div className='flex-col justify-between bg-gradient-to-r from-red-200 to-purple-200 h-[20vh] p-4 my-2'>
          <div className='h-[78%]'>
            <p className='flex justify-center text-3xl font-semibold text-black'>Menu Restaurants</p>
          </div>
        </div>
        <div>
          
        </div>

        {/*rendering menu restaurants from here.... */}
      </div>

      <Footer />
    </div>
  )
}

export default Menu