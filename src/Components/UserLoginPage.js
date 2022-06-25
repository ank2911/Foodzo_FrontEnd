import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInModal({buttonName}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        //console.log(email, password)
    }

    const inputClass = 'bg-white my-3 text-gray-600 border-1 border-gray-300 outline-gray-300 rounded-md px-2';
    return (
            <>
            <div className='bg-orange-100 fixed inset-x-0 z-50  grid place-content-center h-full'>
                <form className='grid place-content-center w-screen' onSubmit={handleSubmit}>
                    <div className='shrink content-center p-6 mx-4 max-w-md bg-white rounded-xl shadow-xl'>
                        <div className='flex justify-end'>
                        </div>
                        <Link to='/' className='flex justify-end'><button className='text-sm text-slate-400 hover:text-slate-500 hover:scale-110'>X</button></Link>
                        <p className='text-2xl text-gray-500 my-4 mx-2'>Sign In</p>
                        <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} className={inputClass} required />
                        <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password} className={inputClass} required />
                        <div className='flex justify-end'>
                            <button type='submit' className='text-white bg-orange-400 hover:bg-orange-500 hover:scale-110 rounded-full py-1 px-4 my-4'>Sign In</button>
                        </div>
                        <Link to='/signup' className='text-sm text-orange-400 hover:text-orange-500 px-2'>Haven't an account?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignInModal;