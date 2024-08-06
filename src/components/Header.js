import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from 'react-redux';
import { HEADER_LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store ) => store.user)

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate('/error');
          });
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        //this will be called unsubscribed when the component is unmounted
        return () => {
            unsubscribe();
        };
    }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-40' 
        src={HEADER_LOGO}
        alt='logo' />
        {user && (
            <div className='flex p-2'>
            <img className='w-10 h-10' src={user?.photoURL} alt='userIcon'/>
            <button onClick={handleSignout} className='font-bold text-white m-2'>Sign Out</button>
        </div>
        )}
    </div>
  )
}

export default Header;