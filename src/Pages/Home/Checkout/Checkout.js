import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';
// import useServiceDetails from '../../CustomHooks';
import { ProvidedServiceContext } from '../Home';

const Checkout = () => {

  const userServices = useContext(ProvidedServiceContext);

  // const params = useParams();
  // const id = params.serviceId;

  return (
    <div>
      <h1 className='text-3xl font-semibold text-slate-700 text-center my-8'>
        Please fill out this form
      </h1>
      <ContactForm />
    </div>
  );
};

export default Checkout;