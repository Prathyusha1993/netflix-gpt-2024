import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_medium.jpg' alt='logo' />
            </div>
            <form className='p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && (
                    <input
                        type='text'
                        placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700'
                    />)}
                <input
                    type='text'
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700 '
                />
                <input
                    type='text'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registrated?Sign In Now'}</p>
            </form>
        </div>
    )
}

export default Login;


