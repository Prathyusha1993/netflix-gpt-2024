import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidEmailPassword } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';
import {LOGIN_BACKGROUND_IMAGE, USER_AVATAR} from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    // const [singupMsg, setSingupMsg] = useState('');
    const dispatch = useDispatch();

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
        if (message) return;
        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, 
                        email:email, 
                        displayName:displayName, 
                        photoURL:photoURL}));
                      }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error.message);
                      });
                    console.log(user);
                    email.current.value = '';
                    password.current.value = '';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage)
                });
        } else {
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    email.current.value = '';
                    password.current.value = '';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage)
                });
        }
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={LOGIN_BACKGROUND_IMAGE} alt='logo' />
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
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <p className='text-red-500 text-lg p-2'>{errorMsg}</p>
                <button className='p-4 my-4 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up' : 'Already registrated? Sign In'}</p>
            </form>
        </div>
    )
}

export default Login;