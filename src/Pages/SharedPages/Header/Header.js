import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Spinner from '../../Login/Spinner/Spinner';

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  if (loading) {
    return <Spinner />
  }
  return (
    <div className='flex justify-between items-center h-20 bg-purple-400'>
      <p className='text-2xl font-semibold pl-10'>Walk Visa Consultant</p>
      <div className='mx-10'>
        <NavLink className='px-5' to='/'>Home</NavLink>
        <NavLink className='px-5' to='/blogs'>Blogs</NavLink>
        <NavLink className='px-5' to='/about'>About</NavLink>
        {user ?
          <button className='px-5' onClick={logout}>Logout</button>
          :
          <NavLink className='px-5' to='/login'>Login</NavLink>
        }
        <NavLink className='px-5' to='/signup'>Sign up</NavLink>
      </div>
    </div>
  );
};

export default Header;