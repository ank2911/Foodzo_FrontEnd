
function FoodItems({ items, handleAddToCart }) {


    return (
        <div className='flex justify-center flex-wrap font-Myfont'>

            {
                items.map((items) => {
                    const { id, image, name, price } = items;

                    return (

                        <div className="mt-8 w-64 h-[312px] bg-slate-300 rounded-md m-4 pb-2 hover:scale-110" key={id}>

                            <div>
                                <img src={image} alt="Food" className='w-[280px] h-[220px] p-2 rounded-xl' />
                            </div>

                            <div>

                                <div className='img-text mb-[10px]'>

                                    <h1 className="mx-2 font-semibold text-xl">{name}</h1>
                                    <h2 className="mx-2">{`${price} Rs.`}</h2>

                                    <button className="addtocart" onClick={() => handleAddToCart(items)}>Add</button>
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
