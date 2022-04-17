import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('countryData.json')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h2 className='text-5xl font-semibold text-purple-400 text-center'>Choose your Destination</h2>
      <hr className='mx-24 h-2 my-3' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-4 mb-12'>
        {
          countries.map(country => <Country
            key={country._id}
            country={country} />)
        }
      </div>
    </div>
  );
};

export default Countries;