import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import google from '../../../Assets/google.png';
import auth from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { FaGithub } from "react-icons/fa";

const SocialSign = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorELem;
  if (googleUser || gitUser) {
    navigate('/');
  }
  if (googleError || gitError) {
    errorELem = <p className='text-red-900'>{googleError?.message}{gitError?.message}</p>
  }
  if (googleLoading || gitLoading) {
    return <Spinner />
  }
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <div className='h-1 w-1/2 bg-purple-400'></div>
        <p className='px-2'>or</p>
        <div className='h-1 w-1/2 bg-purple-400'></div>
      </div>
      <button
        onClick={() => {
          signInWithGoogle()
        }}
        className='mx-auto my-3 block border-2 pl-4 py-1 rounded-full bg-purple-400 text-white h-12 w-3/4'
      >
        <img className='w-8 h-8 inline-block' src={google} alt="" />
        <span className='pl-2'>Google Sign in</span>
      </button>

      <button
        onClick={() => {
          signInWithGithub()
        }}
        className='flex items-center justify-center mx-auto my-3 border-2 pl-4 py-1 rounded-full bg-purple-400 text-white h-12 w-3/4'
      >
        <p className='text-3xl'><FaGithub /></p>
        <span className='pl-2'>Github Sign in</span>
      </button>
      {errorELem}
    </div>
  );
};

export default SocialSign;