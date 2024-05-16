import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/UI/molecules/Navbar';
import Hero from '../components/UI/organisms/Hero';
import Shop from '../components/UI/organisms/Shop';
import OurServers from '../components/UI/organisms/OurServers';
import russiaedit from '../assets/editiin.mp4';

const Home = () => {
  return (
    <div className='h-screen  overflow-y-auto snap-y-mandatory text-white uppercase' style={{ scrollBehavior: 'smooth' }}>
      
      <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover blur'>
        <source src={russiaedit} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 h-full bg-[#242424] opacity-50 backdrop-blur-md"></div>

      <Navbar />
      <div className='snap-start h-full' style={{ scrollSnapAlign: 'start' }}>
        <Hero />
      </div>
      <div className='snap-start h-full' style={{ scrollSnapAlign: 'start' }}>
        <OurServers/>
      </div>
      <div className='snap-start h-full' style={{ scrollSnapAlign: 'start' }}>
        <Shop/>
      </div>
    </div>
  );
};

export default Home;


