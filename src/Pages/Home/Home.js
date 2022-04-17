import React from 'react';
import coverImg from '../../Assets/coverphoto.png';

const Home = () => {
  return (
    <div>
      <section className='md:flex justify-between items-center bg-gray-400'>
        <div className='mx-auto text-center'>
          <h1 className='text-6xl font-bold text-white'>Get the Best Colsultancy <br />
            Secure your future with us</h1>
          <p className='mx-36 text-base font-medium my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, suscipit quia voluptatum dignissimos assumenda animi reiciendis ullam quae molestias iure.</p>
          <button className='mt-16 border-2 px-20 py-2 rounded-2xl bg-purple-400 font-semibold'>Learn More</button>
        </div>
        <img className='w-1/3 h-1/3 mx-auto rounded-sm' src={coverImg} alt="" />
      </section>
    </div>
  );
};

export default Home;