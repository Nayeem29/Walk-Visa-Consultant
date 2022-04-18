import React from 'react';
import profileImg from '../../Assets/personal copy300x300.jpg';

const About = () => {
  return (
    <div>
      <div className='text-3xl text-left ml-16 mt-10'>
        <div className='flex items-center justify-around'>
          <div className='mr-24 my-24 text-3xl font-semibold'>
            <h1>Nayeem Hasan</h1>
            <p>Age: 27</p>
            <p>Bachelor in Computer Science</p>
            <p>Hobby: Travel and Photography</p>
          </div>
          <div>
            <img className='w-32' src={profileImg} alt="" />
          </div>
        </div>

        <div className='mx-32'>
          <h1 className='text-3xl font-semibold text-center mb-8'>Goal at the coming years:</h1>
          <hr className='h-2 mx-16 bg-red-800' />
          <p className='text-lg mx-32 my-16'>
            I am learning web developing with programming hero course. Though I understand the logics behind programming quickly but I never able to stick to anything for a longer period. As a result, I failed couple up time though I took initiative to become developer. But this course gives me encouragement and hunger to learn more and I set up my short term and long term goal.
            <br />
            My short term goal is to finish this course with no regrets and complete all the assignments by learning and practising at my best effort. I'm quite enjoying my journey and confident that I would get something valuable assest for my future from this course.
            <br />
            I set a standerd for myself and that is not giving up coding at any situation. I'll do projects on my own even if I don't have job or any course. I will enhance my coding skills as far as I can. If I could manage a job then it will b great but if not then I would not stop learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;