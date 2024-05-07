import React, { useRef, useEffect, useState } from 'react';
import discord from '../../../assets/discord.svg'
import { motion, useScroll } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

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

  const heroVariants = {
    visible: { opacity: 100, x: 0 },
    hiddenL: { opacity: 0, x: -100 },
    hiddenR: { opacity: 0, x: 100 },
  };

  return (
    <div ref={heroRef} className={`relative h-screen transition-opacity ${isVisible ? 'opacity-100' : 'opacity-100'}`}>
      <div className={`absolute inset-0 flex items-center justify-center opacity-30 bg-[#c5bbb1] skew-y-6 h-[700px] mt-[-100px] ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className='text-center text-4xl absolute inset-0 flex flex-col items-center justify-center h-full'>
        <div className='relative w-full h-full flex'>

          <div className="px-[200px] relative z-10 w-[60%] uppercase flex flex-col justify-center h-full" >
            <motion.div className='flex flex-col items-start justify-start text-9xl text-start font-bold' variants={heroVariants} initial="hidden" animate={isVisible ? "visible" : "hiddenL"} transition={{ease: 'easeInOut', duration: 0.2}}>
              <p className=''>Welcome to</p>
              <p className='bg-gradient-to-r from-[rgb(242,46,49)] via-[#f08c3b] to-[#ff1e8b] text-transparent bg-clip-text'>Grub Network</p>
            </motion.div>
            <motion.div className='mt-[20px]' variants={heroVariants} initial="hidden" animate={isVisible ? "visible" : "hiddenR"}>
              
              <span className='mt-[25px] p-2 bg-gradient-to-r from-transparent via-[#b8b0a9] from-5% to-95% to-transparent text-4xl font-extrabold '>Elevating your gaming experience.</span>
              <div className='flex justify-start w-full'>
                <b className='rounded-md w-auto px-[20px] bg-gradient-to-r from-[rgb(242,46,49)] to-[#f08c3b] text-white py-2 mt-[50px] border-[1px] border-[#e4dad1] mr-[40px]'>SHOP</b>
                <b className='flex items-center w-auto h-[60px] pl-[20px] pr-[20px] bg-[#5865F2] text-white py-2 mt-[50px] border-[1px] border-[#e4dad1] rounded-md'>
                  <img src={discord} className='h-full w-auto mr-[10px]'/>
                  <p>DISCORD</p>
                  </b>
              </div>
            </motion.div>
            
          </div>

          <div className='w-[40%] h-full px-[200px] relative z-10 uppercase flex flex-col justify-center'>
            <div className='bg-black h-[100px] w-[100px] rounded-[40px]'>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
