import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
  const { picture, company, index } = country;
  const navigate = useNavigate();
  const handleAppointment = (index) => {
    navigate(`/service/${index}`);
  }
  return (
    <div>
      <div className="student border-2 rounded-lg my-8 bg-gray-400">
        <h1 className='text-center text-2xl font-medium py-4 text-white'>{company}</h1>
        <img className='w-full h-60 mx-auto' src={picture} alt="" />
        <button
          onClick={() => handleAppointment(index)}
          className='mx-auto block rounded-2xl px-8 py-1 my-8 border-2 bg-purple-400 font-semibold hover:text-white hover:outline hover:border-0 outline-purple-700'
        >Book Appointment</button>

      </div>
    </div>
  );
};

export default Country;