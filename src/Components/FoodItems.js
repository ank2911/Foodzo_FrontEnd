import React from 'react'

function FoodItems({ items }) {
    return (
        <div className='flex justify-center flex-wrap font-Myfont'>

            {
                items.map((food) => {
                    const { id, image, name, price } = food;

                    return (

                        <div className="mt-8 w-64 h-72 bg-slate-300 rounded-md m-4 pb-3 hover:scale-110" key={id}>

                            <div>
                                <img src={image} alt="Food" className='w-96 h-48 p-2 border-1 rounded-2xl' />
                            </div>

                            <div>
                                <div className='img-text mb-[10px]'>
                                    <button className="absolute rounded-full w-16 ml-44 mt-12 text-white bg-orange-400 hover:bg-orange-500">Add</button>
                                    <h1 className="mx-2 font-semibold text-xl">{name}</h1>
                                </div>
                                <div>
                                    <h2 className="mx-2">{price}</h2>
                                </div>
                            </div>

                        </div>


                    )
                }
                )
            }


        </div>
    )
}

export default FoodItems
