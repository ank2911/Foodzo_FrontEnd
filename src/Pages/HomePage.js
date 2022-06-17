import React,{useState} from 'react'
import DemoItems from '../Components/DemoItems'
import FoodItems from '../Components/FoodItems'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'

function HomePage({handleAddToCart,cart}) {
    const [items,setItems]= useState(DemoItems);
    
    
    

    const filterDemoItems = (category) => {
        const updatedItems = DemoItems.filter((element) => {
            return element.category === category;
        });
        setItems(updatedItems);
    }
    return (


        <div className="sticky font-Myfont">
            
            <Navbar  cart={ cart}/>
            
            <div className='relative' >

                {/* <p className="absolute flex flex-col-reverse text-white text-4xl font-extrabold md:text-7xl ">BEST PIZZA <span className="text-yellow-500 flex w-12 ml-24">FOR </span><span className="text-red-700 ml-4">FOODIES</span></p>
               <button className="absolute flex flex-wrap rounded-md w-32 h-10 bg-orange-700 mt-72 ml-10 md:mt-64 md:ml-1 md:w-40 md:h-12">ORDER NOW</button> 
               <img src="images/Pizza.jpg" alt="none" className="absolute h-auto max-w-[60%] ml-24 md:right-3 md:absolute md:h-[90%] md:max-w-[100%] translate-y-10"/> 
              <img src="images/tomato.jpg" alt="none" className="mt-10 w-52 h-52 bg-right-top"/>
    <img src="images/food_deco.jpg" alt="none" className="absolute -left-28 w-80 h-80 mt-16"/> */}
                <img src="images/hero3.jpg" alt="image" className="w-screen h-screen object-cover" />
            </div>
            <div className='grid place-content-center justify-center'>
                <h1 className='m-2 p-2 text-black text-3xl flex justify-center'>Order Your Favourite Food Now</h1>
                <div className='flex justify-center'>
                    <button className="bg-orange-400 rounded-full w-20 m-2 p-2 hover:bg-orange-500 text-white" onClick={() => setItems(DemoItems)}>All</button>
                    <button className="bg-orange-400 rounded-full w-20 m-2 p-2 hover:bg-orange-500 text-white" onClick={() => filterDemoItems('Veg')}>Veg</button>
                    <button className="bg-orange-400 rounded-full w-20 m-2 p-2 hover:bg-orange-500 text-white" onClick={() => filterDemoItems('Non-Veg')}>Non-Veg</button>
                    <button className="bg-orange-400 rounded-full w-20 m-2 p-2 hover:bg-orange-500 text-white" onClick={() => filterDemoItems('Chinese')}>Chinese</button>
                    <button className="bg-orange-400 rounded-full w-20 m-2 p-2 hover:bg-orange-500 text-white" onClick={() => filterDemoItems('Sweets')}>Sweets</button>
                </div>
            </div>
            
            <div className='bg-slate-100 max-w-full min-h-screen '>
               <FoodItems items={items} handleAddToCart={handleAddToCart}/> 
            </div>
            <div className='bg-black h-[50vh]'>
                <Footer/>
            </div>
        </div>

    )
}

export default HomePage
