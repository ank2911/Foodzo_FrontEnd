import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
function Restaurant({ handleAddToCart, cart }) {
  return (
    <div className='bg-white h-screen'>
      <Navbar cart={cart} />
      <div className='h-screen'>
        <div className='flex-col justify-between bg-gradient-to-r from-red-200 to-purple-200 h-[20vh] p-4 my-2'>
          <div className='h-[78%]'>
            <p className='flex justify-center text-3xl font-semibold text-black'>Restaurants</p>
          </div>
            <Link to='/restaurant/signin' className='flex justify-center'><button className='bg-gradient-to-r from-red-400 to-purple-400 text-white px-3 py-1 rounded-full '>Add your restaurant</button></Link>
        </div>
        <div>
          
        </div>
        <div className='flex my-6'>
          <div className='container bg-gradient-to-r from-red-200 to-purple-200 w-1/2 h-[30vh] mr-1'>
            <p className='flex justify-center text-black p-6 font-semibold text-2xl'>Total Restaurants</p>
          </div>
          <div className='container bg-gradient-to-r from-red-200 to-purple-200 w-1/2 h-[30vh] ml-1'>
            <p className='flex justify-center text-black p-6 font-semibold text-2xl'>Total Cities</p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Restaurant