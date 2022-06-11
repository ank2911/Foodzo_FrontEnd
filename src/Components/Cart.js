import React,{useState} from 'react'
import CartItems from './CartItems'
import Navbar from './Navbar'
import DemoItems from './DemoItems'
function Cart() {
    const [item,setItem] = useState(DemoItems)
  return (
    < div>
      <Navbar/>
      
        <div className="font-Myfont">
            <h1 className="text-center pt-4 font-bold border-b-2 border-slate-800 text-4xl md:text-5xl ">Welcome to Your Cart</h1>
            <h1 className="text-2xl font-bold">Continue Order Your Food </h1>
            <p className="pt-3 text-2xl pl-3">Your Cart Items</p>
            <p className="pt-3 pl-3">Youe have <span>7</span>items here</p>

            {/* <div className="container p-4 w-auto h-auto bg-slate-300 rounded-xl m-auto ">
                <p className="flex flex-wrap justify-around">Items 
                <span>Description</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total Price</span>
                </p>
            
            </div> */}
            <div className="w-[100%] h-96 shadow-2xl bg-slate-100 rounded-3xl m-auto grid items-center overflow-y-scroll">
                <div className="w-[90%] h-[56rem] ">
                {
                    item.map((items)=>{
                        return <CartItems key={items.id} {...items}/>
                    })
                }
                    
                    <hr/>
                </div>
            </div>
            <div className="text-right mt-10">
                <h3 className="leading-10 capitalize">Cart Total:<span className="font-bold ml-1">200Rs.</span></h3>
                <button>checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart
