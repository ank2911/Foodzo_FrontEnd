import React from 'react'
import pic from "./img/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"
import pic1 from "./img/sweets3.avif"
import pic2 from "./img/burgers.avif"
import pic3 from "./img/drinks.avif"
import pic4 from "./img/pizza2.avif"
import './css/Homepage.css'
import './css/mediaqueries1.css'
import UserLoginPage from './UserLoginPage'
import {Link} from 'react-router-dom'




function Homepage() 
{
  return (
    <div>
       <div className="container1 bg-white">
           <div className="upper-part h-[auto] bg-cover" style={{backgroundImage:`url(${pic})`}}>
               <div className="heading-nav-container flex">
                   <div className="heading text-white ml-[30px] mt-[20px]">
                       <h1 className="text-[40px]">Foodzo</h1>
                   </div>
                   <div id="links" className="nav-bar1 relative ml-[1000px] mt-[20px]">
                       <Link to="#" id="home" className="home text-[30px] text-white no-underline hover:tracking-widest">Home</Link>
                    <Link to="#" className="about text-[30px] ml-[20px] text-white no-underline hover:tracking-widest">About</Link>
                    <Link to="#" className="login text-[30px] ml-[20px] text-white no-underline hover:tracking-widest">Login</Link>
                    <Link to="#" className="signup text-[30px] ml-[20px] text-white no-underline hover:tracking-widest">Signup</Link>
                </div>
               </div>
               <div className="text-wrapper mt-[250px]">
                   <div className="big-sized text-white text-[50px] text-left ml-[30px]">
                       It is better than an expensive cookery book
                   </div>
                   <div className="small-sized text-white text-[28px] text-left ml-[30px]">
                       Explore your foodlaand
                   </div>
               </div>
               <div className="input-button-wrapper ml-[77px] mt-[20px] flex">
                   <div className="input-text">
                       <input type="text" placeholder="    search food,places,restaurants" className="text1 rounded-l-lg border-[1px] h-[60px] bg-transparent border-solid text-white border-white w-[350px]"></input>
                   </div>
    
                  
                    <div className="button">
                        <button type="button" id="button3" className="w-[50px] h-[60px] border-[1px] bg-pink-500 active:bg-pink-600 border-solid border-white ml-[-8px] mt-[0px] mb-[10px] rounded-r-lg">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
               </div>
           </div>
           <div className="middle-part h-[auto] mb-[30px]">
               <div className="Recipies mt-[20px] ml-[70px] text-[38px]">
                   Recipies by Categories
               </div>
               <div className="Recipies-small-text text-[25px] ml-[70px]">
                   Browse your recipies
               </div>
               <div className="categories ml-[127px] mt-[50px] flex">
                   <Link to="#" id="misti" className="sweets rounded-xl h-[300px] w-[300px] bg-cover hover:scale-110 no-underline" style={{backgroundImage:`url(${pic1})`}}>
                        <p className="text-white mt-[250px] text-center text-[30px] hover:tracking-widest">Sweets</p>
                    </Link>
                
                   <Link to="#" className="sweets rounded-xl ml-[20px] h-[300px] w-[300px] bg-cover hover:scale-110 no-underline" style={{backgroundImage:`url(${pic2})`}}>
                        <p className="text-white mt-[250px] text-center text-[30px] hover:tracking-widest">Burgers</p>
                   </Link>
                <Link to="#" className="sweets rounded-xl ml-[20px] h-[300px] w-[300px] bg-cover hover:scale-110 no-underline" style={{backgroundImage:`url(${pic3})`}}>
                        <p className="text-white mt-[250px] text-center text-[30px] hover:tracking-widest">Drinks</p>
                   </Link>
                <Link to="#" className="sweets rounded-xl ml-[20px] h-[300px] w-[300px] bg-cover hover:scale-110 no-underline" style={{backgroundImage:`url(${pic4})`}}>
                        <p className="text-white mt-[250px] text-center text-[30px] hover:tracking-widest">Pizzas</p>
                   </Link>
            </div>
           </div>
           
           <div className="second-lower-part bg-no-repeat bg-cover h-[500px]" style={{backgroundImage:`url("https://foodhub.modeltheme.com/wp-content/uploads/2020/02/call-to-action-v2.jpg?id=20778")`}}>
                <div className="nav-bar ml-[30px] mt-[20px] text-left">
                    <h1 className="text-white text-[50px] mt-[20px]">Subscribe to our newsletter</h1>
                </div>
                <div className="some-random-text ml-[30px] text-left">
                    <p className="text-white">Fusce id velit placerat,efficitur libero placerat, sodales ante. Curabitur sed erosat orci congue vestibulum.</p>
                </div>
                <div className="button1 mt-[200px] ml-[0px] mr-[950px]">
                    <button type="button" className="button4 bg-green-500 w-[150px] h-[50px] rounded-full text-white text-[30px] active:bg-green-600">Subscribe</button>
                </div>
           </div>
           <div className="lower-part bg-[#528f2d] h-auto">
                <div className="foodzo">
                    <h1 className="text-white text-[50px] text-center">Foodzo</h1>
                </div>
                <div className="nav-bar flex h-auto justify-center p-[10px]">
                    <Link to="#" className="text-[20px] text-white hover:tracking-widest">Privacy</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest">Security</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest">Terms</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest">About us</Link>
             </div>
                <div className="icons-wrapper ml-[0px] p-[5px]">
                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                 <Link to="#" className="a hover:scale-110"><i className="fa-brands fa-twitter ml-[50px]"></i></Link>
                 <Link to="#" className="a hover:scale-110"><i className="fa-brands fa-instagram-square ml-[50px]"></i></Link>
             </div>
           </div>
       </div>
    </div>
  )
}

export default Homepage
