import React from 'react';

import Navbar from './Navbar/Navbar';

const Header = () => {


  return (
    <div className='flex justify-between items-center h-auto py-8 bg-purple-400'>
      <p className='text-2xl font-semibold pl-10'>Walk Visa Consultant</p>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;