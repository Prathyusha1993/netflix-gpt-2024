import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData, checkValidEmailPassword } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    // const [singupMsg, setSingupMsg] = useState('');

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        //validate form data
        const message = checkValidEmailPassword(email.current.value, password.current.value);
        setErrorMsg(message);
        // const singupMsg = checkValidData(name.current.value, email.current.value, password.current.value);
        // setSingupMsg(singupMsg);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_medium.jpg' alt='logo' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='p-12 w-3/12 absolute bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-85'>
            <h1 className='font-bold text-3xl py-4'> {isSignInForm ? 'Sign In' : 'Sign UP'} </h1>
            {!isSignInForm && (
                <input
                ref={name}
                type='text'
                placeholder='Full Name'
                className='p-4 my-4 w-full bg-gray-700'
                />
            )}
                <input
                ref={email}
                type='text'
                placeholder='Email Address'
                className='p-4 my-4 w-full bg-gray-700'
                />
                <input
                ref={password}
                type='text'
                placeholder='Password'
                className='p-4 my-4 w-full bg-gray-700'
                />
                <p className='text-red-500 text-lg p-2'>{errorMsg}</p>
                <button className='p-4 my-4 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm? 'Sign In' : 'Sign Up'}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up' : 'Already registrated? Sign In'}</p>
            </form>
        </div>
    )
}

export default Login;