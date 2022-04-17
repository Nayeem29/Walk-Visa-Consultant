import React from 'react';

const Services = ({ service }) => {
  const { picture, tittle, address } = service;
  return (
    <div className="sections my-12">
      <div className="student border-2 rounded-lg my-8 bg-gray-400">
        <h1 className='text-center text-2xl font-medium py-4 text-white'>{tittle}</h1>
        <img className='w-full mx-auto h-64' src={picture} alt="" />
        <p className='mx-12 py-2'>{address}</p>
        <button className='mx-auto block rounded-2xl px-8 py-1 my-8 border-2 bg-purple-400 font-semibold hover:text-white hover:outline hover:border-0 outline-purple-700'>View Details</button>
      </div>
    </div>
  );
};

export default Services;