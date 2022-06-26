import React,{useState} from 'react'
import DemoItems from '../Components/DemoItems'
import FoodItems from '../Components/FoodItems'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { BiSearch} from "react-icons/bi";

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


        <div className="home sticky font-Myfont">
            
            <Navbar  cart={ cart}/>
            
            {/* </UserContext.Provider> */}
            <div className='relative' >
           <div style={{backgroundImage: 'url(images/hero.jpg)',backgroundSize: 'cover', backgroundAttachment:'fixed'}} className='h-[94vh] p-6 grid justify-items-center items-end object-cover'>
                
                <div className='flex-col'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold md:text-7xl text-5xl p-2'>Are you hungry?</p>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse font-bold md:text-7xl text-5xl p-2'>OrderNow</p>
                </div>
                
                <div className="flex justify-center md:w-[50vh] min-w-[40vh]">
                    <input type="text" placeholder="Search for your location" 
                     className="px-4 py-1 border-y-black border-black border-2 bg-white placeholder:text-black rounded-full"
                     value={searchData}
                     onChange={(e) =>{setSearchData(e.target.value)}}
                     >
                     </input>
                    <BiSearch size={28} className="absolute my-2 md:ml-[42vh] ml-[32vh]"/>
                </div>
                
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
