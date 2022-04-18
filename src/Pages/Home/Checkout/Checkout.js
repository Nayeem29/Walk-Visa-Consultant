import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';
// import useServiceDetails from '../../CustomHooks';
import { ProvidedServiceContext } from '../Home';

const Checkout = () => {

  const userServices = useContext(ProvidedServiceContext);

  // const params = useParams();
  // const id = params.serviceId;

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Checkout;