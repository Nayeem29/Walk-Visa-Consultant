import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 my-12 mx-8 gap-4'>
        <div className='border-2 rounded-xl px-4 py-2'>
          <p className='text-xl font-medium my-5'>What is the difference between authorization and authentication?</p>
          <p>Simply, authentication means to check the user's identity whether he will have tha access to certain systems or paths. While authorization verifies a person's authorities if he will get the permit to the resources. Authentication is done before checking the authorization process.</p>
        </div>
        <div className='border-2 rounded-xl px-4 py-2'>
          <p className='text-xl font-medium my-5'>Why are you using firebase? What other options do you have to implement authentication?</p>
          <p>Firebase authentication makes our life easier for implepenting users' signed-in and for this, we don't have to learn the complexites behind the shadow. <br />
            We can implement authentication in several ways other than firebase. We can use build in npm hooks or different library for authentication purpose. Though we could build our own authentication system through node js and database system.
          </p>
        </div>
        <div className='border-2 rounded-xl px-4 py-2'>
          <p className='text-xl font-medium my-5'>What other services does firebase provide other than authentication?</p>
          <p>Other than authentication firebase provides web hosting service, cloud messaging, cloud computing, cloud storage, google analytics, cloud firestore etc. It is also compatible with web, iOS, Anroid and OS clients.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;