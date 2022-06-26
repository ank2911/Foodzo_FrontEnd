import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function RestaurantSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        //console.log(email, password)
    }

    const inputClass = 'bg-white my-3 text-gray-600 border-1 border-gray-300 outline-gray-300 rounded-md px-2';
    return (
            <>
            <div className='bg-gradient-to-r from-red-200 to-purple-200 fixed inset-x-0 z-50  grid place-content-center h-full'>
                <form className='grid place-content-center w-screen' onSubmit={handleSubmit}>
                    <div className='shrink content-center p-6 mx-4 max-w-md bg-white rounded-xl shadow-xl'>
                        <div className='flex justify-end'>
                        </div>
                        <Link to='/' className='flex justify-end'><button className='text-sm text-slate-400 hover:text-slate-500 hover:scale-110'>X</button></Link>
                        <p className='flex justify-center text-2xl text-gray-500 my-4 mx-2'>Restaurant</p>
                        <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} className={inputClass} required />
                        <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password} className={inputClass} required />
                        <input type="password" placeholder='Confirm Password' onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} className={inputClass} required />
                        <div className='flex justify-end'>
                            <button type='submit' className='text-white bg-red-400 hover:bg-red-500 hover:scale-110 rounded-full py-1 px-4 my-4'>Sign In</button>
                        </div>
                        <Link to='/restaurant/signUp' className='text-sm text-red-400 hover:text-red-500 px-2'>Haven't an account?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RestaurantSignIn