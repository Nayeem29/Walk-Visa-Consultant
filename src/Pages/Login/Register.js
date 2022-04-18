import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Spinner from './Spinner/Spinner';
import SocialSign from './SocialSign/SocialSign';


const Register = () => {
  const [agree, setAgree] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const navigate = useNavigate();
  let errorElem;
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


  const handleRegisterForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    }
  }
  if (loading) {
    return <Spinner />
  }
  if (user) {
    console.log(user.user);
    navigate('/login');
  }
  if (error) {
    errorElem = <p className='text-red-900 text-center'>{error?.message}</p>
  }
  return (
    <div className='mt-32'>
      <h1 className='text-center text-3xl font-semibold text-black'>Please Register!!!</h1>
      <section className='flex items-center justify-center mt-12'>
        <form onSubmit={handleRegisterForm}>
          <input type="text" placeholder='Your Name' size='60' required
            className='px-3 py-1 border-2 border-slate-300 h-10 outline-none hover:outline-purple-400 hover:border-0 rounded-2xl mb-6' />
          <br />
          <input type="email" placeholder='Your Email' size='60' ref={emailRef} required
            className='px-3 py-1 border-2 border-slate-300 h-10 outline-none hover:outline-purple-400 hover:border-0 rounded-2xl mb-6' />
          <br />
          <input type="password" placeholder='Password' size='60' ref={passwordRef} required
            className='px-3 py-1 border-2 border-slate-300 h-10 outline-none hover:outline-purple-400 hover:border-0 rounded-2xl mb-6' />
          <br />
          <input type="password" placeholder='Confirm Password' size='60' ref={confirmPasswordRef} required
            className='px-3 py-1 border-2 border-slate-300 h-10 outline-none hover:outline-purple-400 hover:border-0 rounded-2xl mb-6' />
          <br />

          <input type="checkbox" name="terms" id="terms"
            className='ml-5 my-5'
            onClick={() => { setAgree(!agree) }}
          />
          <label htmlFor="terms" className={`${agree ? "text-purple-600" : "text-red-700"}`}> Accept terms and conditions</label>
          <button
            disabled={!agree}
            className='mt-16 mx-auto block border-2 px-20 py-2 rounded-2xl bg-purple-400 font-semibold hover:text-white'
          >Submit</button>
          {errorElem}
          <SocialSign />
          <p className='mb-16 text-center'>
            <small className='text-sm'>
              Already have an account?
            </small>
            <Link to='/login' className='text-purple-600 pl-2 font-medium mt-3'>Login</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;