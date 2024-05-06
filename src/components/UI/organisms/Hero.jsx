import React, { useRef, useEffect, useState } from 'react';
import discord from '../../../assets/discord.svg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 1 // Intersection threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(heroRef.current);

    // Cleanup function
    return () => observer.unobserve(heroRef.current);
  }, []);

  return (
    <div ref={heroRef} className={`relative h-screen transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className='absolute inset-0 flex items-center justify-center opacity-40 bg-[#c5bbb1] skew-y-6 h-[700px] mt-[-100px]'></div>
      <div className='text-center text-4xl absolute inset-0 flex flex-col items-center justify-center h-full'>
        <div className='relative w-full h-full'>
          <div className="absolute inset-0 h-full bg-[#242424] opacity-50 backdrop-blur-md"></div>
          <div className="px-[200px] relative z-10 w-[60%] uppercase flex flex-col justify-center h-full">
            <div className='flex flex-col items-start justify-start'>
              <p className='text-9xl text-start font-bold'>Welcome to Grub Network</p>
              {/* <p className='mb-[20px] text-7xl text-start font-bold'>Your Premier Gaming Server Hosting Provider</p> */}
            </div>
            <span className='mt-[25px] p-2 bg-gradient-to-r from-transparent via-[#b8b0a9] from-5% to-95% to-transparent text-4xl font-extrabold '>Elevating your gaming experience.</span>
            <div className='flex justify-around w-[50%]'>
              <b className='w-auto px-[20px] bg-[#d49860] text-white py-2 mt-[50px] border-[2px] border-[#e4dad1]'>SHOP</b>
              <b className='flex items-center w-auto h-[60px] px-[20px] bg-[#5865F2] text-white py-2 mt-[50px] border-[2px] border-[#e4dad1]'>
                <img src={discord} className='object-fill h-full'/>
                <p>DISCORD</p>
                </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
