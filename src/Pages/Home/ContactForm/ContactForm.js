import React from 'react';
import './ContactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  const notify = () => toast("I'll reach you soon!!");

  return (
    <div>
      <div classNameName="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form className='w-1/2 my-12 mx-auto'>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-6">
              <input type="text" className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" id="exampleInput123"
                placeholder="First name" required />
            </div>
            <div className="mb-6">
              <input type="text" className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="Last name" />
            </div>
          </div>
          <div className="mb-6">
            <input type="email" className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" id="exampleInput125"
              placeholder="Email address" required />
          </div>
          <div className=" mb-6">
            <input type="number" className=" block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
     
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" id="09876"
              placeholder="Contact Number" required />
          </div>

          <button type="submit"
            onClick={notify}
            className="
      w-full
      px-6
      py-2.5
      bg-purple-400
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-purple-700 hover:shadow-lg
      focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-purple-800 active:shadow-lg
    ">Submit</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;