import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white mt-36'>
      <div className='content-center md:px-10 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-20'>
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
            <Link to='/' className='block'>Github</Link>

          </div>
          <div className='Icons text-3xl font-semibold flex flex-wrap items-center justify-between'>
            <FaFacebook />
            <FaGooglePlus />
            <FaGithubSquare />
            <FaInstagram />
            {/* <Link to='/' className='block'>Facebook</Link>
            <Link to='/' className='block'>LinkedIn</Link> */}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <div>Copyright &copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;