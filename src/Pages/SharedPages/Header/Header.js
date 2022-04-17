import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between items-center h-20 bg-purple-400'>
      <p className='text-2xl font-semibold pl-10'>Walk Visa Consultant</p>
      <div className='mx-10'>
        <NavLink className='px-5' to='/'>Home</NavLink>
        <NavLink className='px-5' to='/blogs'>Blogs</NavLink>
        <NavLink className='px-5' to='/about'>About</NavLink>
        <NavLink className='px-5' to='/login'>Login</NavLink>
        <NavLink className='px-5' to='/signup'>Sign up</NavLink>
      </div>
    </div>
  );
};

export default Header;