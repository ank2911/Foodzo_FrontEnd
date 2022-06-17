import React,{useState,useContext} from 'react'
import Navbar from '../Components/Navbar'


function Cart({ cart,handleAddToCart,handleRemoveFromCart}) {
    const total= (arr) => {
        return arr.reduce((cal, items) => {
            return cal + items.price * items.amount;
          }, 0);
    };
    
  return (
    < div>
      <Navbar cart={cart}/>
      
        <div className="font-Myfont">
            {
                cart.map((items) => (
                    <div key={items.id} className="m-5">
                        <div className="w-32 h-20  drop-shadow-md rounded-2xl">
                            <img src={items.image} alt="image"/>
                            <p>{items.name}</p>
                        </div>
                        <div className="flex justify-end items-center">
                           <button onClick={()=>{handleAddToCart(items)}}>+</button>
                           <button>{items.amount}</button>
                           <button onClick={() => {handleRemoveFromCart(items.id)}}>-</button>
                        </div>
                        <div>
                            <span>{items.price}</span>
                            
                        </div>
                    </div>
                ))
            }
            {cart.length>0 ? <p>Total Price={total(cart)}</p> :<p>Your Cart is Empty</p>}
            

           
        </div> 
    </div>
  )
}

export default Cart
