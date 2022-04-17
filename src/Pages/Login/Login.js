import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Spinner from './Spinner/Spinner';
import SocialSign from './SocialSign/SocialSign';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let errorElem;
  const handleLoginForm = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  if (user) {
    console.log(user)
    navigate('/');
  }
  if (loading) {
    return <Spinner />
  }
  if (error) {
    errorElem = <p className='text-red-900 text-center'>{error?.message}</p>
  }

  return (
    <div className='mt-32'>
      <h1 className='text-center text-3xl font-semibold text-black'>Sign in here Please!!!</h1>
      <section className='flex items-center justify-center mt-12'>
        <form onSubmit={handleLoginForm}>
          <input type="email" placeholder='Your Email' size='60' ref={emailRef} required
            className='px-3 py-1 border-2 border-slate-300 h-10 outline-none hover:outline-purple-400 hover:border-0 rounded-2xl mb-6' />
          <br />
          <input type="password" placeholder='Password' size='60' ref={passwordRef} required
            className='px-3 py-1 border-2 border-slate-300 h-10 outline-none hover:outline-purple-400 hover:border-0 rounded-2xl mb-6' />
          <br />


          <button

            className='mt-8 mx-auto block border-2 px-20 py-2 rounded-2xl bg-purple-400 font-semibold hover:text-white'
          >Submit</button>
          {errorElem}
          <SocialSign />
          <p className='mb-16 text-center'>
            <small className='text-sm'>
              Not Registered yet?
            </small>
            <Link to='/signup' className='text-purple-600 pl-2 font-medium mt-3'>Signup</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;