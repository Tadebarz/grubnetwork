import { useRef, useState, React } from 'react';
import Navbar from '../components/UI/molecules/Navbar';
import Hero from '../components/UI/organisms/Hero';
import Shop from '../components/UI/organisms/Shop';
import OurServers from '../components/UI/organisms/OurServers';
import russiaedit from '../assets/russiaedit.mp4'

const Home = () => {
  return (
    
    <div className='h-screen overflow-y-auto snap-y-mandatory'> {/* Apply scroll snap */}
     <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover blur'>
            <source src={russiaedit} type="video/mp4" />
        </video>
      <Navbar />
      <div className='snap-start h-full'> {/* Wrapper for Hero */}
        <Hero />
      </div>
      <div className='snap-start h-full'> {/* Wrapper for Shop */}
        <OurServers/>
      </div>
    </div>
  );
};

export default Home;
