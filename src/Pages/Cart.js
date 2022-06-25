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
          <div className="font-Myfont p-4 w-3/4 h-[88.2vh] m-auto rounded-2xl bg-slate-100 shadow-2xl min-w-fit overflow-auto">
            {
              cart.map((items) => (
                <div key={items.id}>
                  <div className="flex w-[100%] h-[210px] overflow-hidden mb-[20px] bg-[#ffffff] rounded-xl shadow-lg">
                    <img src={items.image} alt="image" className="w-[200px] h-[210px] p-2 rounded-xl" />
                    <div className="p-5 relative w-[100%]">
                      <p className="mb-8 text-3xl font-bold">{items.name}</p>
                      <p className="mb-1 text-xl font-semibold">{items.price}<span> Rs.</span></p>
                      <div className="flex text-center space-x-1 text-xl">
                        <p className="font-md text-lg">Quantity:</p>
                        <AiOutlinePlusCircle size={25} onClick={() => { handleAddToCart(items) }} className="pt-1" />
                        <button >{items.amount}</button>
                        <AiOutlineMinusCircle size={25} onClick={() => { handleRemoveFromCart(items.id) }} className="pt-1" />
                      </div>
                      <div className='flex justify-end'>
                        <button className="absolute bg-orange-400 text-white cursor-pointer px-2 py-1 rounded-full hover:bg-orange-500" onClick={() => { handleDeleteFromCart(items.id) }}>Remove</button>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }
            <div className='p-4 flex justify-end'>
              <p className="text-xl">Total price = {total(cart)}<span> Rs.</span></p>
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
