import { createContext } from 'react';
import coverImg from '../../Assets/coverphoto.png';
import useServiceDetails from '../../CustomHooks';
import Countries from './Countries/Countries';
import Services from './Services/Services';

export const ProvidedServiceContext = createContext(undefined);

const Home = () => {
  const [services, setServices] = useServiceDetails();

  return (
    <ProvidedServiceContext.Provider value={services}>
      <div>
        <section className='md:flex justify-between items-center bg-gray-400'>
          <div className='mx-auto text-center'>
            <h1 className='text-6xl font-bold text-white'>Get Private Colsultancy <br />
              Bright Your Future</h1>
            <p className='mx-36 text-base font-medium my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, suscipit quia voluptatum dignissimos assumenda animi reiciendis ullam quae molestias iure.</p>
            <button className='mt-16 border-2 px-20 py-2 rounded-2xl bg-purple-400 font-semibold hover:text-white hover:outline hover:border-0 outline-purple-700'
            >Learn More</button>
          </div>
          <img className='w-1/3 h-1/3 mx-auto rounded-sm' src={coverImg} alt="" />
        </section>
        <main className='mx-24'>
          <h2 className='text-center font-bold text-5xl text-purple-400 mt-12'>My Expertise Fields</h2>
          <hr className='mt-6' />
          {/* <div className='h-2 w-full'></div> */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
              services.map(service =>
                <Services key={service._id} service={service}
                />)
            }
          </div>
        </main>
        <Countries />
      </div>
    </ProvidedServiceContext.Provider>
  );
};

export default Home;