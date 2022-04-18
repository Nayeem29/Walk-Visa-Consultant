import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Spinner from '../../Login/Spinner/Spinner';
import { FaSignOutAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'white' : 'black',
      fontSize: isActive ? '24px' : '16px',
      fontWeight: isActive ? 'bold' : 'normal'
    };
  }
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
        <NavLink style={navLinkStyles} className='px-5' to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} className='px-5' to='/blogs'>Blogs</NavLink>
        <NavLink style={navLinkStyles} className='px-5' to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} className='px-5' to='/signup'>Sign up</NavLink>
        {user ?
          <button className='px-5' onClick={logout}><FaSignOutAlt className='text-xl' /></button>
          :
          <NavLink style={navLinkStyles} className='px-5' to='/login'><FaSignInAlt className='text-xl text-black inline' /></NavLink>
        }

      </div>
    </div>
  );
};

export default Header;