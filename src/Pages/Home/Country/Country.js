import React from 'react';

const Country = ({ country }) => {
  const { picture, company } = country
  return (
    <div>
      <div className="student border-2 rounded-lg my-8 bg-gray-400">
        <h1 className='text-center text-2xl font-medium py-4 text-white'>{company}</h1>
        <img className='w-full h-60 mx-auto' src={picture} alt="" />
        <button className='mx-auto block rounded-2xl px-8 py-1 my-8 border-2 bg-purple-400 font-semibold hover:text-white hover:outline hover:border-0 outline-purple-700'
        >Take Appointment</button>

      </div>
    </div>
  );
};

export default Country;