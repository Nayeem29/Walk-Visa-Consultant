import React from 'react';

import Navbar from './Navbar/Navbar';

const Header = () => {

  return (
    <div className='flex justify-between w-full items-center py-8 bg-purple-400'>
      <p className='text-2xl font-semibold pl-10'>Walk Visa Consultant</p>
      <Navbar />
    </div>
  );
};

export default Header;