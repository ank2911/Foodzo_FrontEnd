import React from 'react'
import Navbar from '../Components/Navbar'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function Cart({ cart, handleAddToCart, handleRemoveFromCart, handleDeleteFromCart }) {
  const total = (arr) => {
    return arr.reduce((cal, items) => {
      return cal + items.price * items.amount;
    }, 0);
  };

  return (
    < div className='bg-orange-100 h-screen'>
      <Navbar cart={cart} />
      <div className='p-4'>
        {/*<h1 className="text-3xl flex justify-center p-4">Welcome to Your Cart</h1>*/}
        {cart.length > 0 ? (
          <div className="p-4 md:w-3/4  h-[88.2vh] m-auto rounded-2xl bg-slate-100 shadow-2xl min-w-fit overflow-auto">
            {
              cart.map((items) => (
                <div key={items.id}>
                  <div className="flex w-[100%] h-[15vh] overflow-hidden mb-2 bg-[#ffffff] rounded-xl shadow-lg">
                    <img src={items.image} alt="item" className="w-[140px] h-[15vh] p-2 rounded-xl" />
                    
                    <div className="md:py-5 md:mr-4 py-5 mr-2 relative w-[100%]">
                    <div className='flex justify-end'>
                      <button className="absolute text-gray-600 cursor-pointer text-sm md:px-3 px-1 rounded-full hover:text-gray-800" onClick={() => { handleDeleteFromCart(items.id) }}>X</button>
                    </div>
                      <p className="mb-4 md:text-2xl text-xl font-bold">{items.name}</p>
                      <p className="md:text-md text-sm font-semibold">{items.price}<span> Rs.</span></p>
                      <div className='flex justify-between'>
                        <div className="flex content-center space-x-1 text-xl">
                          <p className="pt-1 md:text-md text-sm">Quantity:</p>
                          <AiOutlinePlusCircle size={25} onClick={() => { handleAddToCart(items) }} className="pt-1" />
                          <button >{items.amount}</button>
                          <AiOutlineMinusCircle size={25} onClick={() => { handleRemoveFromCart(items.id) }} className="pt-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }
            <div className='p-4 flex justify-end'>
              <p className="text-xl text-gray-900">Total price = {total(cart)}<span> Rs.</span></p>
            </div>
          </div>) : (
          <div className='grid place-content-center h-[80vh]'>
            <p className="text-3xl">Your Cart is Empty</p>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Cart
