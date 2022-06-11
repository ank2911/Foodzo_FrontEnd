

import React from 'react'

function CartItems({image,name,price,category}) {
  return (
    <div className="font-Myfont">
      <div className="w-[100%] h-44 m-auto grid grid-cols-5">
                        <div className="w-32 h-20  drop-shadow-md rounded-2xl">
                            <img src={image} alt="pizza"/>
                        </div>
                        <div className="flex justify-center flex-col">
                          <h2>
                            {name}
                          </h2>
                          <p>{category}</p>
                        </div>
                        <div className="flex justify-end items-center">
                        <button >-</button>
                        <input type="text" placeholder="2" className=" w-24 h-12 border-[0.141rem] border-solid box-border items-center capitalize outline-none bg-transparent focus:outline-none"></input>
                        <button>+</button>
                       </div>
                       <div className="flex justify-end items-center">
                        <p className="font-bold text-xl capitalize">{price}</p>
                       </div>
                       <div className="flex justify-end items-center mr-20">
                        <button className="border-none bg-transparent">X</button>
                       </div>

                    </div>
    </div>
  )
}

export default CartItems
