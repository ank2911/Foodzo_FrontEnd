import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

//import {Link} from 'react-router-dom'

function AdminPage() {
    const[comm,setcomm]=useState(0);
    const[comm1,setcomm1]=useState(0);
    const[comm2,setcomm2]=useState(0);
  return (
    <div>
        <div className="container">
            <div className="upper-part bg-white h-7 flex mt-[30px]">
                <div className="left-part text-black">
                    <h1>ADMIN</h1>
                </div>
                <div className="middle-part ml-[600px] w-auto flex">
                    <div className="Total-Comm bg-blue-600 w-[150px] text-white rounded-md mx-4">
                        <label>Total Commision: {comm}</label>
                    </div>
                    <div className="Total-Comm bg-green-600 w-[150px] text-white rounded-md mx-4">
                        <label>Commision Today: {comm1}</label>
                    </div>
                    <div className="Total-Comm bg-red-600 w-[200px] text-white rounded-md mx-4">
                        <label>Commision last 30 days: {comm2}</label>
                    </div>
                    
                    <button className="rounded-md bg-gray-600 mx-4 w-[100px] text-white">Visit Website</button>
                    
                </div>
                
            </div>
            <div className="middle-part h-[auto] flex mt-[100px]">
                <div className="nav-bar bg-black text-white w-[350px]">
                    <ul className="p-4 text-left">
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-house mr-[3px]"></i>
                           <Link to="#" className="text-[20px] text-white content-center no-underline">Dashboard</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-utensils mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Merchant List</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Sponsored List</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Packages</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-bowl-food mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Cuisine</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-utensils mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Dishes</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Other status</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Incoming orders</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Settings</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Theme settings</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Manage Location</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Commission settings</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Voucher</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Invoice</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-id-card mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Merchant Commission</Link>
                     </li>
                        <li className="hover:bg-green-600 hover:bg">
                            <i className="fa-solid fa-money-bill-transfer mr-[3px]"></i>
                            <Link to="#" className="text-[20px] text-white content-center no-underline">Withdrawal</Link>
                     </li>
                    </ul>
                </div>
                <div className="bg-gray-300 h-[40px] w-[100%]">
                    <h2 className="text-[25px] text-left">Dashboard</h2>
                    <div className="pt-[2px] pl-[20px] mt-[30px]">
                        <div className="h-[auto] pt-[2px] pl-[20px] bg-gray-300">
                            <div className="buttons flex">
                               
                                <button className="w-[auto] ml-[590px] mr-[10px] h-[30px] bg-green-600 rounded-md">Click here to upload your database <i className="fa-solid fa-database"></i> </button>
                                
                                
                                <button className="w-[auto] h-[30px] bg-green-600 rounded-md">Click here to update your merchant info <i className="fa-solid fa-database"></i> </button>
                                
                            </div>
                            <div className="search-bar ml-[900px] mt-2 mb-2">
                                <input type="text" className="rounded-md"></input>
                            </div>
                            <div className="table">
                                <div className="heading1">
                                    <h1>Total Users</h1>
                                </div>
                            <table className="table table-bordered table-striped mb-4" align="center">
                                <thead className="space-x-14">
                                    <tr className="space-x-14">
                                    <th className="">#</th>
                                    <th className="mx-28">First Name</th>
                                    <th className="mx-4">Last Name</th>
                                    <th className="mx-4">Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* loop here */}
                                    <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                    {/* <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr> */}
                                </tbody>
                            </table>
                            <div className="heading2">
                                    <h1>Total Hotels</h1>
                                </div>
                            <table className="table table-bordered table-striped" align="center">
                                <thead className="space-x-14">
                                    <tr className="space-x-14">
                                    <th className="">#</th>
                                    <th className="mx-28">First Name</th>
                                    <th className="mx-4">Last Name</th>
                                    <th className="mx-4">Username
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* loop here */}
                                    <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                    {/* <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr> */}
                                </tbody>
                            </table>
                            </div>
                            {/* <table>
                                <thead>
                                 <tr>   
                                <th className="mx-[10px]">MerchantId</th>
                                <th className="mx-[10px]">Merchant Name</th>
                                <th className="mx-[10px]">Package Name</th>
                                <th className="mx-[10px]">Price</th>
                                <th className="mx-[10px]">Payment type</th>
                                <th className="mx-[10px]">Status</th>
                                <th className="mx-[10px]">Date</th>
                                </tr>
                                </thead>
                            </table> */}
                            <div className="input">
                                <input type="dropdown" aria-expanded="false" className="mb-2"></input>
                            </div>
                        </div> 
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminPage