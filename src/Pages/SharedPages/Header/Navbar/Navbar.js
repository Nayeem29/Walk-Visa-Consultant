import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { FaSignOutAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Spinner from '../../../Login/Spinner/Spinner';

const Navbar = () => {
  const routes = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Blogs', link: '/blogs' },
    { id: 3, name: 'About', link: '/about' }
  ];
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'white' : 'black',
      fontSize: isActive ? '20px' : '14px',
      fontWeight: isActive ? 'bold' : 'normal'
    };
  };
  const [user, loading] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  if (loading) {
    return <Spinner />
  }

  return (
    <nav className='md:flex items-center md:justify-end py-4 md:px-10 px-7'>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute transition-all duration-500 ease-in ${open ? 'top-0 right-6' : 'top-[-490px] right-0'}`}>
        {
          routes.map(route =>
            <li>
              <NavLink className='mr-12' style={navLinkStyles} key={route.id} to={route.link}>{route.name}</NavLink>
            </li>
          )
        }
        {
          user ?
            <button className='px-5' onClick={logout}><FaSignOutAlt className='text-xl' /></button>
            :
            <NavLink style={navLinkStyles} className='px-5' to='/login'><FaSignInAlt className='text-xl text-black inline' /></NavLink>
        }
      </ul>
      <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
        {
          open ?
            <FaTimes />
            :
            <FaBars />
        }
      </div>
    </nav>
  );
};

export default Navbar;