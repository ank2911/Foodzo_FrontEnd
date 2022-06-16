import React from 'react'
import Navbar from './Navbar'
import pic from "./img/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"
import pic1 from "./img/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg"
// import './css/mediaqueries3.css'
import {Link} from "react-router-dom"

function About() {
  return (
    <div className="font-Myfont h-auto">
       <div className="">
          <Navbar/>
        </div>                                                    {/*ml-[-90px] mt-[-250px]*/} {/*absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%]*/}
        <div className="h-[500px]">                               {/*absolute top-[120%] left-[50%] translate-x-[-50%] translate-y-[-50%]*/}
            <div className="about-pic">
                <img src={pic1} className="h-[500px] relative w-screen object-cover"></img>
                <p className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[50px]">About us</p>
            </div>
        </div>  
        <div className="who-we-are h-auto w-screen">
            <p className="text-black text-[50px] text-center">Who are we ?</p> 
            <p className="container text-black text-[11px] md:text-[20px] md:top-[50%] left-[150%] pl-[90px] pr-[90px]">Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
        </div>
        
        <div className="developers flex h-auto w-screen">
            <p className="absolute top-[110%] left-[20%] md:absolute md:top-[115%] md:left-[40%] text-[50px] pt-[10px] text-center">Developers</p>
            <div className="absolute top-[120%] left-[20%] md:top-[128%] md:left-[11%] flex flex-wrap">   {/* */}
                <img src={pic1} className="md:h-[200px] md:w-[280px] h-[200px] w-[250px] p-[10px] rounded-3xl"></img>
                <div className="absolute text-white md:text-[20px] md:top-[83%] md:left-[11%] md:translate-x-[-50%] md:translate-y-[-50%] text-[20px] top-[10%] left-[25%]">Mayur Rai</div>
                <img src={pic1} className="md:h-[200px] md:w-[280px] md:ml-[20px] h-[200px] w-[250px] rounded-3xl p-[10px]"></img>
                <div className="absolute text-white md:text-[20px] md:top-[83%] md:left-[36%] md:translate-x-[-50%] md:translate-y-[-50%] text-[20px] top-[35%] left-[25%]">Sahil Soni</div>
                <img src={pic1} className="md:h-[200px] md:w-[280px] md:ml-[20px] h-[200px] w-[250px] rounded-3xl p-[10px]"></img>
                <div className="absolute text-white md:text-[20px] md:top-[83%] md:left-[61%] md:translate-x-[-50%] md:translate-y-[-50%] text-[20px] top-[60%] left-[23%]">Ankit Burman</div>
                <img src={pic1} className="md:h-[200px] md:w-[280px] md:ml-[20px] h-[200px] w-[250px] rounded-3xl p-[10px]"></img>
                <div className="absolute text-white md:text-[20px] md:top-[83%] md:left-[87%] md:translate-x-[-50%] md:translate-y-[-50%] text-[20px] top-[85%] left-[21%]">Saptarshi Bose</div>
            </div>
        </div>
        <div className="md:pt-[370px] pt-[1000px]">
            
        </div>
        <div className="bg-black md:h-auto md:text-white h-auto text-white">
            <h1 className="md:text-center md:pt-[50px] md:text-[50px] text-center pt-[30px] text-[30px]">Foodzo</h1>
            <div className="nav-bar flex h-auto justify-center p-[10px]">
                    <Link to="#" className="text-[20px] text-white hover:tracking-widest no-underline">Privacy</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest no-underline">Security</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest no-underline">Terms</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest no-underline">About us</Link>
             </div>
            <div className="icons-wrapper md:pl-[690px] pl-[140px] items-center">
                 <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                 <Link to="#"><i className="fa-brands fa-twitter ml-[50px]"></i></Link>
                 <Link to="#"><i className="fa-brands fa-instagram-square ml-[50px]"></i></Link>
             </div>
        </div>
    </div>
  )
}

export default About
