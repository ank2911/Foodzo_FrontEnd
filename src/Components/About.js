import React from 'react'
import pic from "./img/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"
import pic1 from "./img/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg"
// import './css/mediaqueries3.css'
import {Link} from "react-router-dom"

function About() {
  return (
    <div>
       <div className="container1 bg-white">
           <div className="upper-part h-[400px] w-[100%] bg-cover text-white skew-y-[-6deg] origin-top-left flex" style={{backgroundImage:`url(${pic})`}}>
                <div className="heading-nav-container skew-y-[6deg] mt-[59px] p-[20px] flex">
                    <div className="heading ml-[30px] mt-[20px]">
                        <h1 className="sm:heading text-[40px] text-white md:text-red-700">About Us</h1>
                    </div>
                    <div className="hidden nav-bar ml-[1090px] mt-[20px]">
                        <Link to="#" className="home text-white text-[30px] hover:tracking-widest">Home</Link>
                        <Link to="#" className="About text-white text-[30px] ml-[20px] hover:tracking-widest">About</Link>
                        <Link to="#" className="Login text-white text-[30px] ml-[20px] hover:tracking-widest">Logout</Link>
                    </div>
                </div>
           </div>
           <div className="middle-part mb-[10px]">
                <img src={pic1} className="w-[350px] mt-[23px] mr-[40px] mb-[20px] ml-[100px] float-left"></img>
                <p className="tracking-[1px] leading-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis accusamus deleniti, eaque nihil repellendus, dolore ab cum reprehenderit assumenda, repudiandae aperiam laboriosam? Dolore accusamus aperiam qui voluptatum aliquid sint cumque dolores in aspernatur cupiditate repellat odit hic, deleniti pariatur nobis, quia ipsam est labore? Beatae, incidunt aliquid fuga voluptates architecto ut, sint unde quis esse, aut accusamus vel veniam! Est asperiores similique ullam sit? Corporis, quis iusto magni consequuntur nesciunt odit accusantium iste. Maiores explicabo illum dolorem dolorum sed natus facere corporis quia rerum rem sunt atque aspernatur suscipit perspiciatis, saepe eveniet omnis ipsum ducimus magnam corrupti reiciendis non, porro deserunt! Ducimus et nihil consequuntur tempore autem soluta perspiciatis nisi magnam quis harum. Similique, doloremque, aut ducimus, magni quod impedit alias itaque culpa delectus nesciunt possimus incidunt nobis. Illo blanditiis enim reiciendis id dicta eos minus maxime similique. Fuga pariatur ducimus dicta esse nam provident blanditiis? Repudiandae architecto odit suscipit deleniti dignissimos ea, dicta animi. Cumque inventore ratione libero animi repudiandae adipisci fugiat possimus minus, ex accusamus reprehenderit excepturi impedit alias quaerat odio tempora incidunt ducimus magni enim sapiente et! Veritatis nostrum sunt architecto adipisci suscipit similique ducimus nesciunt, corrupti corporis rem fugiat enim tenetur saepe minima asperiores odio inventore?</p> <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, commodi eos beatae maxime voluptatum fugiat dolorum illo iusto necessitatibus, quisquam quam deserunt nulla eligendi ea asperiores. Ipsum fugiat minus saepe temporibus vero ea harum odit sint enim qui tempora unde, necessitatibus dolor repellendus magni mollitia, quam aspernatur natus dolorem fuga. Aut, accusantium atque in, nemo explicabo asperiores alias ipsa repellendus excepturi modi, natus consectetur distinctio harum placeat. Recusandae doloremque ad, repellendus eligendi magni, libero laboriosam enim aliquam, deleniti dolorum ex quo consectetur natus autem molestiae expedita aperiam quidem sint ratione. Eaque facere quasi maiores vitae sed. Reiciendis accusantium corrupti doloribus, sapiente, architecto in beatae unde itaque tenetur tempore iusto aspernatur consequuntur qui aliquam possimus culpa harum quasi est, pariatur commodi nesciunt maiores. Cupiditate vel consectetur iure neque libero earum consequatur accusamus maiores natus quod illo exercitationem, sunt necessitatibus aliquam voluptate corrupti error reiciendis atque sint? Consequatur excepturi obcaecati similique autem eligendi alias quibusdam laborum esse at hic reiciendis ea quos, repudiandae ipsum facere assumenda modi rerum odit laboriosam accusantium, maxime quae? Fugit, sint aut, sed quos ratione dicta est soluta magnam eligendi quas numquam quo laboriosam nisi eaque quisquam qui reprehenderit exercitationem delectus beatae alias repellat quis autem. Quidem odio quae, molestiae quod illo expedita alias sapiente sequi cum aut, beatae, veritatis quibusdam et aperiam eveniet doloribus. Dolores perspiciatis laborum quidem? Recusandae est repellendus ullam assumenda fuga magnam numquam, dicta optio rem dignissimos quibusdam minus quia voluptates vel neque accusamus distinctio, totam id. Adipisci aperiam sit nemo amet, labore saepe maxime nam asperiores autem ullam officia consequuntur inventore facilis aut ratione sed impedit beatae! Minus sed id nesciunt in numquam, omnis ut praesentium iusto eum. Cumque corrupti sapiente a. Delectus modi dolorum reiciendis pariatur quam et, harum vero impedit magni magnam ex nulla facilis repellat vel non aspernatur, quis quisquam dolore repudiandae repellendus iste officiis aperiam libero id! Esse, temporibus? Minus veritatis sint, beatae quo similique eum a, optio laboriosam quisquam, ipsum iusto! Veritatis nam, dignissimos explicabo obcaecati quas nihil inventore aspernatur ex tempore ab quo molestiae fugiat pariatur possimus. Veniam repellat excepturi non alias fugit qui placeat distinctio incidunt.</p>
           </div>
           <div className="lower-part bg-[#528f2d] h-auto">
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

export default About
