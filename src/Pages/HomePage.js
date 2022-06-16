import React from 'react'
import pic from '../Components/img/food2.avif'
// import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
function HomePage() {
    return (
        <div>
                
            <div className="">
                <Navbar/>
              </div>
              <div>
              <img src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="Book Your Pizza Now" className="w-full h-full object-cover md: object-contain"/>
              </div>
               
     
        </div>
    )
}

export default HomePage
