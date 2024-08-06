import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData, checkValidEmailPassword } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    // const [singupMsg, setSingupMsg] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/56055450?v=4"
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, 
                        email:email, 
                        displayName:displayName, 
                        photoURL:photoURL}));
                        navigate('/browse');
                      }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error.message);
                      });
                    console.log(user);
                    navigate('/browse');
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
                    console.log(user);
                    navigate('/browse');
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