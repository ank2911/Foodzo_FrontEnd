import React from 'react'
import Navbar from '../Components/Navbar'
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";

function Cart({ cart, handleAddToCart, handleRemoveFromCart, handleDeleteFromCart }) {
  const total = (arr) => {
    return arr.reduce((cal, items) => {
      return cal + items.price * items.amount;
    }, 0);
  };

  return (
    < div>
      <Navbar cart={cart} />
      <h1 className="text-4xl font-bold flex justify-center">Welcome To Your Cart</h1>
      {cart.length > 0 &&
        <div className="h-auto font-Myfont container w-3/4 md:h-96 m-auto bg-slate-100 shadow-2xl overflow-y-scroll">
          {
            cart.map((items) => (
              <div key={items.id}>

           <div className="flex w-[100%] h-[210px] overflow-hidden mb-[20px] bg-[#ffffff] rounded-xl shadow-lg">
                     <img src={items.image} alt="image" className="w-52 h-52 p-1 border-1 rounded-2xl" />
                   <div className="p-5 relative w-[100%]">
                     
                     <p className="mb-8 text-3xl font-bold">{items.name}</p>
                     <p className="mb-8 text-xl font-semibold">{items.price}<span> Rs.</span></p>  
                        <div className="flex p-1 text-center space-x-1 text-xl">
                          <p className="font-medium text-lg">Quantity:</p>
                         <AiOutlinePlusCircle size={25} onClick={() => { handleAddToCart(items) }} className="pt-1"/>
                         <button >{items.amount}</button>
                         <AiOutlineMinusCircle size={25} onClick={() => { handleRemoveFromCart(items.id) }} className="pt-1"/>
                       </div>
                     <button className="absolute w-20 h-10 bottom-5 right-5 bg-[#3a71a9] text-white cursor-pointer rounded-md font-semibold m-1 hover:bg-[#76bfb6]" onClick={() => { handleDeleteFromCart(items.id) }}>Delete</button>
                   
              </div>
          </div>
                   
              </div>
            ))
          }
        </div>
      }

      


      <div className='flex justify-between'>
        {
          cart.length > 0 ?
            <p className="text-2xl font-bold ">Total Price={total(cart)}<span> Rs.</span></p> :
            <p className="flex w-full pt-24 h-52 justify-center text-4xl">Your Cart is Empty
            </p>
        }
      </div>
    </div>
  )
}

export default Cart
