import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black text-white mt-32'>
      <div className='content-center md:px-10 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-24'>
          <div className='help'>
            <p className='text-3xl font-semibold'>Help</p>
            <Link to='/' className='block'>About</Link>
            <Link to='/' className='block'>Contact</Link>
            <Link to='/' className='block'>Mentoring</Link>
            <Link to='/' className='block'>Support</Link>
          </div>
          <div className='Browse'>
            <p className='text-3xl font-semibold'>Browse</p>
            <div className='h-2 w-3/4'></div>
            <Link to='/' className='block'>Articles</Link>
            <Link to='/' className='block'>Courses</Link>
          </div>
          <div className='Community'>
            <p className='text-3xl font-semibold'>Community</p>
            <Link to='/' className='block'>Facebook</Link>
            <Link to='/' className='block'>LinkedIn</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center">
            <div>Copyright &copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;