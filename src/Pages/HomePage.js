import React,{useState} from 'react'
import DemoItems from '../Components/DemoItems'
import FoodItems from '../Components/FoodItems'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//import { BiSearch} from "react-icons/bi";

function HomePage({handleAddToCart,cart}) {
    const [items,setItems]= useState(DemoItems);
    const [searchData, setSearchData] = useState('');
      
    const filterDemoItems = (category) => {
        const updatedItems = DemoItems.filter((element) => {
            return element.category === category;
        });
        setItems(updatedItems);
    };

    // const inputEvent =(event) =>{
    //     const data = event.target.value;
    //     console.log(data);
    //     setSearchData(data);
    // };

    const buttonClass = 'bg-orange-400 rounded-full w-20 m-2 p-2 hover:bg-orange-500 text-white hover:scale-110'
    return (


        <div className="sticky font-Myfont">
            
            <Navbar  cart={ cart}/>
            
            {/* </UserContext.Provider> */}
            <div className='relative' >
           <div className="">
                {/* <div className="flex justify-end m-auto pt-20 pl-28 w-1/2 absolute ">
                    <BiSearch size={29} className="absolute right-1.5 pt-1"/>
                    <input type="text" placeholder=" Search Your Items here..." 
                     className="pl-3 border-2 border-black bg-white placeholder:text-black rounded-full"
                     value={searchData}
                     onChange={inputEvent}
                     >

                     </input>
                </div> */}
                <img src="images/hero3.jpg" alt="hero" className="w-screen h-screen object-cover" />
                
            </div>
            </div>
            <div className='grid place-content-center justify-center p-4'>
                <h1 className='m-2 p-2 text-black text-2xl flex justify-center'>Order Your Favourite Food Now</h1>
                <div className='shrink justify-center'>
                    <button className={buttonClass} onClick={() => setItems(DemoItems)}>All</button>
                    <button className={buttonClass} onClick={() => filterDemoItems('Veg')}>Veg</button>
                    <button className={buttonClass} onClick={() => filterDemoItems('Non-Veg')}>Non-Veg</button>
                    <button className={buttonClass} onClick={() => filterDemoItems('Chinese')}>Chinese</button>
                    <button className={buttonClass} onClick={() => filterDemoItems('Dessert')}>Dessert</button>
                </div>
            </div>
            
            <div className='bg-slate-100 max-w-full min-h-screen '>
               <FoodItems items={items} handleAddToCart={handleAddToCart}/> 
            </div>
            <div className='bg-black'>
                <Footer />
            </div>
        </div>

    )
}

export default HomePage
