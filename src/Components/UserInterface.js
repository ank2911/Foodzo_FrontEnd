import React from 'react'
import pic from './img/food2.avif'
import './css/UserInterface.css'
import chow from './img/noodles.avif'
import biryani from './img/biryani.avif'
import rolls from './img/rolls.avif'
import dominoz from './img/dominoz.avif'
import mutton from './img/mutton-biryani.avif'
import idli from './img/idli.avif'
import naan from './img/naan.avif'
import {Link} from "react-router-dom";

function UserInterface() {
  return (
    <div>
        <div className="container2 bg-white">
            <div className="upper-part1 h-[auto] bg-no-repeat bg-cover" style={{backgroundImage:`url(${pic})`}}>
                <div className="heading-nav-container flex">
                    <div className="heading ml-[30px] mt-[20px]">
                        <h1 className="heading text-[40px] text-white">Foodzo</h1>
                    </div>
                    <div className="nav-bar ml-[900px] mt-[20px]">
                        <Link to="#" className="home text-white text-[30px] hover:tracking-widest">Home</Link>
                        <Link to="#" className="About text-white text-[30px] ml-[20px] hover:tracking-widest">About</Link>
                        <Link to="#" className="Login text-white text-[30px] ml-[20px] hover:tracking-widest">Login</Link>
                        <Link to="#" className="Signup text-white text-[30px] ml-[20px] hover:tracking-widest">Signup</Link>
                    </div>
                </div>
                <div className="text-wrapper mt-[150px] ml-[30px]">
                    <div className="big-sized text-[50px] text-white">
                        Explore your recipies
                    </div>
                    <div className="small-sized text-[28px] mt-[30px] ml-[2px] text-white">
                        Eat Sleep Ramen Reapeat
                    </div>
                </div>
                <div className="input-button-wrapper mt-[10px] justify-center flex">
                   <div className="input-text">
                       <input type="text" placeholder="    search food,places,restaurants" id="input" className="rounded-l-lg h-[60px] mb-[10px] bg-transparent border-solid border-[1px] text-white border-white w-[350px]"></input>
                   </div>
                   <div className="button">
                        <button type="button" id="btn" className="w-[50px] h-[60px] bg-pink-500 active:bg-pink-600 border-solid border-[1px] border-white ml-[-8px] mt-[0px] mb-[10px] rounded-r-lg">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="lower-upper-part1 w-[auto] h-[auto] mt-[10px] bg-[#171a29] flex">
                <Link to="#" className="ad mt-[20px] mb-[20px] ml-[100px] h-[290px] w-[300px] bg-cover hover:scale-110" style={{backgroundImage:`url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rmu9xmyxpyc3iwgvh6u1")`}}>
                    
                </Link>
                <Link to="#" className="ad mt-[20px] mb-[20px] ml-[40px] h-[290px] w-[300px] bg-cover hover:scale-110" style={{backgroundImage:`url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yparhmxrby5lv0ubsel4")`}}>
                    
                </Link>
                <Link to="#" className="ad mt-[20px] mb-[20px] ml-[40px] h-[290px] w-[300px] bg-cover hover:scale-110" style={{backgroundImage:`url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/dpqcjrxwruipnt1wyqnh")`}}>
                    
                </Link>
                <Link to="#" className="ad mt-[20px] mb-[20px] ml-[40px] h-[290px] w-[300px] bg-cover hover:scale-110" style={{backgroundImage:`url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lyn9at38gjithnogzfui")`}}>
                    
                </Link>
            </div>
            <div className="middle-part1">
                <div className="food-nav-bar ml-[850px] flex">
                    <div className="hover:bg-black hover:text-white">
                    <Link to="#" className="text-[25px] ml-[27px] mr-[27px] hover:text-white">Non-Veg</Link>
                    </div>
                    <div className="hover:bg-black hover:text-white text-center">
                    <Link to="#" className="ml-[30px] text-[25px] mr-[27px] hover:text-white">Veg</Link>
                    </div>
                    <div className="hover:bg-black hover:text-white text-center">
                    <Link to="#" className="ml-[30px] text-[25px] mr-[27px] hover:text-white">Chinese</Link>
                    </div>
                    <div className="hover:bg-black hover:text-white items-center">
                    <Link to="#" className="ml-[30px] text-[25px] mr-[27px] hover:text-white">Continental</Link>
                    </div>
                </div>
                <hr/>
                <div className="text-[50px]">Explore your aroma</div>
               <div className="items ml-[130px] mt-[50px] flex">
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url(${chow})`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Sudhamrit</h1>
                            <p className="text-left">Mixed Chowmein</p>
                            <div className="text-[10px] text-left">Chinese, Healthy food, Asian, Tibetan, Snacks, Continental, Deserts, Beverages</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">4.2</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">40 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">200 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            50% OFF | Use WELCOME50
                        </div>
                    </Link>
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] ml-[20px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url(${biryani})`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Royal Hotel</h1>
                            <p className="text-left">Biryani</p>
                            <div className="text-[10px] text-left">Lucknow, Hyderabadi, Special Chicken Biryani, Chicken Biryani, Mutton Biryani, etc</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">4.1</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">50 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">300 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            60% OFF | Use STEALDEAL
                        </div>
                    </Link>
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] ml-[20px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url(${rolls})`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Bobby Snacks</h1>
                            <p className="text-left">Fast Food</p>
                            <div className="text-[10px] text-left">Chicken Roll, Mutton Roll, Paneer Roll, Veg Roll, Chicken Cutlet, Fish Cutlet, Veg Cutlet</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">3.9</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">20 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">150 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            50% OFF | Use WELCOME50
                        </div>
                    </Link>
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] ml-[20px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url(${dominoz})`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Dominoz Pizza</h1>
                            <p className="text-left">Pizza</p>
                            <div className="text-[10px] text-left">Chicken Pizza, Veg Pizza, Mergherita, Pepperoni, Neapolitan Pizaa, Greek Pizza, etc</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">4.5</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">30 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">400 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            50% OFF | Use WELCOME50
                        </div>
                    </Link>     
                </div>
                <div className="items ml-[130px] mt-[50px] flex">
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url(${mutton})`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Kolkata Biryani House</h1>
                            <p className="text-left">Biryani</p>
                            <div className="text-[10px] text-left">Lucknow, Hyderabadi, Special Chicken Biryani, Chicken Biryani, Mutton Biryani, etc</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">3.8</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">30 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">200 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            50% OFF | USE WELCOME50
                        </div>
                    </Link>
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] ml-[20px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url(${idli})`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Durga Food</h1>
                            <p className="text-left">North Indian South Indian Chinese</p>
                            <div className="text-[10px] text-left">Idli, Dosa, Sambhar, Vada Pav, Butter Naan, etc</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">4.2</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">32 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">400 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            50% OFF | Use WELCOME50
                        </div>
                    </Link>
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] ml-[20px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url(${naan})`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Chulha Chowka</h1>
                            <p className="text-left">Indian Chinese</p>
                            <div className="text-[10px] text-left">Chinese, Healthy food, Asian, Tibetan, Snacks, Continental, Deserts, Naan, etc</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">4.1</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">47 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">300 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            50% OFF | Use WELCOME50
                        </div>
                    </Link>
                    <Link to="#" className="foods rounded-xl text-black h-[auto] w-[300px] border-solid border-[0.3px] ml-[20px] hover:scale-110">
                        <div className="rounded-t-lg bg-cover h-[150px] w-[300px]" style={{backgroundImage:`url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aflft5udmthovxsahtom")`}}></div>
                        <div className="img-text mb-[10px]">
                            <h1 className="text-left text-[25px]">Mistimukh Sweets</h1>
                            <p className="text-left">Sweets</p>
                            <div className="text-[10px] text-left">Roshogolla, Sandesh, Gulabjamun, Pantua, Para, etc</div>
                        </div>
                        <hr />
                        <div className="about-hotel flex mt-[10px]">
                            <div className="icon bg-[#DB7C38] flex h-[20px]">
                                <i className="fa-solid fa-star"></i>
                                <div className="text-white ml-[5px]">4.2</div>
                            </div>
                            <div className="ml-[25px]">•</div>
                            <div className="delivery-time ml-[25px]">27 mins</div>
                            <div className="ml-[25px]">•</div>
                            <div className="Rate ml-[25px]">200 for two </div>
                        </div>
                        <hr/>
                        <div className="offer-promo-code">
                            <i className="fa-solid fa-badge-percent"></i>
                            {/* <i className="fa-solid fa-badge-dollar"></i> */}
                            {/* <i className="fa-solid fa-badge"></i> */}
                            50% OFF | Use WELCOME50
                        </div>
                    </Link>
                    
                </div>
            </div>
            
            <div className="lower-part1 bg-[#528f2d] mt-[20px] h-auto">
            <div className="foodzo">
                    <h1 className="text-white text-[50px] text-center">Foodzo</h1>
                </div>
                <div className="nav-bar flex h-auto justify-center p-[10px]">
                    <Link to="#" className="text-[20px] text-white hover:tracking-widest no-underline">Privacy</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest no-underline">Security</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest no-underline">Terms</Link>
                 <Link to="#" className="text-[20px] text-white ml-[15px] hover:tracking-widest no-underline">About us</Link>
             </div>
                <div className="icons-wrapper ml-[0px] p-[5px]">
                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                 <Link to="#"><i className="fa-brands fa-twitter ml-[50px]"></i></Link>
                 <Link to="#"><i className="fa-brands fa-instagram-square ml-[50px]"></i></Link>
             </div>
            </div>
        </div>
    </div>
  )
}

export default UserInterface