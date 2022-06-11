import React,{useState} from 'react'
import Cart from '../Components/Cart'
import DemoItems from '../Components/DemoItems'
import FoodItems from '../Components/FoodItems'
import Navbar from '../Components/Navbar'
import CartProvider from '../Store/CartProvider'

import { initialState,reducer } from './useReducer'
// export const UserContext= createContext();

function HomePage() {
    const [items,setItems]= useState(DemoItems);
    // const [showcart,setShowcart]= useState(false);

    // const openCart = () =>{
    //     setShowcart(true);
    // }
    // const closeCart = () =>{
    //     setShowcart(false);
    // }
    // const [state, dispatch]=useReducer(reducer,initialState);

    const filterDemoItems =(category) =>{
        const updatedItems = DemoItems.filter((element) => {
            return element.category === category;
        });
        setItems(updatedItems);
    }
    return (
        
                
            <div className="font-Myfont">
              {/* <UserContext.Provider value={{state, dispatch}}> */}
                <Navbar/>
                {/* </UserContext.Provider> */}
              <div className='relative ' >
        
              {/* <img src="images/Pizza.jpg" alt="none" className="absolute h-auto max-w-[60%] ml-24 md:right-3 md:absolute md:h-[90%] md:max-w-[100%] translate-y-10"/>  */}
               {/* <button className="absolute flex flex-wrap rounded-md w-32 h-10 bg-green-700 mt-72 ml-10 md:mt-64 md:ml-1 md:w-40 md:h-12">ORDER NOW</button> 
              <img src="images/tomato.jpg" alt="none" className="mt-10 w-52 h-52 bg-right-top"/>
    <img src="images/food_deco.jpg" alt="none" className="absolute -left-28 w-80 h-80 mt-16"/> */}
             
              <img src="images/BgImage.jpg" alt="Book Your Pizza Now" className="w-screen h-screen object-cover"/>
              </div>
<div>
    <h1>Order Your Favourite Food Now</h1>
    <div>
        <button className="bg-green-400 rounded-md w-20" onClick = {()=> setItems(DemoItems)}>All</button>
        <button className="bg-green-400 rounded-md w-20" onClick = {()=> filterDemoItems('Veg')}>Veg</button>
        <button className="bg-green-400 rounded-md w-20" onClick = {()=> filterDemoItems('Non-Veg')}>Non-Veg</button>
        <button className="bg-green-400 rounded-md w-20" onClick = {()=> filterDemoItems('Chinese')}>Chinese</button>
        <button className="bg-green-400 rounded-md w-20" onClick = {()=> filterDemoItems('Sweets')}>Sweets</button>
    </div>
</div>

           <div className='bg-slate-100 max-w-full min-h-screen rounded-3xl'>
              <FoodItems items={items}/>
           </div>
     </div>
        
    )
}

export default HomePage
