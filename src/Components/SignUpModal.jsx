import React, { useState } from 'react';

function SignUpModal({buttonName}) {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setUserName('')
        setPassword('');
        setConfirmPassword('');
        setShowModal(false);
        //console.log(email, password)
    }

    const inputClass = 'bg-white my-3 text-gray-600 border-1 border-gray-300 outline-gray-300 rounded-md px-2';
    return (
        <>
            <button  className='bg-transparent text-sm font-semibold text-white rounded-full hover:text-orange-400' onClick={() => {setShowModal(true)}}>{buttonName}</button>
            {showModal? (
            <>
            <div className='bg-transparent fixed inset-x-0 z-50  grid place-content-center h-full'>
                <form className='grid place-content-center w-screen' onSubmit={handleSubmit}>
                    <div className='shrink content-center p-6 mx-4 max-w-md bg-white rounded-xl shadow-xl'>
                        <div className='flex justify-end'>
                        <button className='text-md text-slate-500' onClick={() => {setShowModal(false)}}>X</button>
                        </div>
                        <p className='text-2xl text-gray-500 my-4 mx-2'>Sign Up</p>
                        <input type="text" placeholder='Username' onChange={(e) => { setUserName(e.target.value) }} value={userName} className={inputClass} required />
                        <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} className={inputClass} required />
                        <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password} className={inputClass} required />
                        <input type="password" placeholder='Confirm Password' onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} className={inputClass} required />
                        <div className='flex justify-end'>
                            <button type='submit' className='text-white bg-orange-400 hover:bg-orange-500 hover:scale-110 rounded-full py-1 px-4 my-4'>Sign Up</button>
                        </div>
                        {/*<Link to='/signIn' className='text-sm text-orange-400 hover:text-orange-500 px-2'>Already have an account?</Link>*/}
                    </div>
                </form>
            </div>
            </>
           ):null}
        </>
    )
}

export default SignUpModal