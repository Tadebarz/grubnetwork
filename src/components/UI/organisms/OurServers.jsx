import React, { useRef, useEffect, useState } from 'react';
import ServerItem from '../molecules/ServerItem';
import { easeIn, easeInOut, motion } from 'framer-motion';
import { readServers } from '../../../API';

const OurServers = () => {
  const [serverList, setServerList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const serversRef = useRef(null);

  const fetchServers = async () => {
    const servers = await readServers();
    setServerList(servers);
  };

  useEffect(() => {
    fetchServers();
    const options = {
      threshold: 1
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

    if (serversRef.current) {
      observer.observe(serversRef.current);
    }

    // Cleanup function
    return () => {
      if (serversRef.current) {
        observer.unobserve(serversRef.current);
      }
    };
  }, []);

  const ourServerVariants = {
    visible: { opacity: 1, x: 0 },
    hiddenL: { opacity: 0, x: -3000 },
    hiddenR: { opacity: 0, x: 3000 },
  };

  return (
    <div ref={serversRef} className={`relative h-screen flex flex-col items-start p-[200px] justify-around transition-opacity ${isVisible ? 'opacity-100' : 'opacity-100'}`}>
      <motion.div className='text-white text-5xl w-full relative z-10' variants={ourServerVariants} initial="hiddenL" animate={isVisible ? "visible" : "hiddenL"} transition={{ duration: 0.3, ease: easeIn }}>
        <p className='text-9xl font-bold'>Our Servers</p>
      </motion.div>
      <motion.div className={`absolute inset-0 flex items-center justify-center bg-[#212121] skew-y-[22deg] h-[1200px] mt-[500px] ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ skewY: '22deg' }} variants={ourServerVariants} initial="hiddenL" animate={isVisible ? "visible" : "hiddenL"} transition={{ duration: 0.3, ease: easeInOut }}></motion.div>
      <motion.div className={`absolute inset-0 flex items-center justify-center opacity-0 bg-[#303030] skew-y-[22deg] h-[1100px] mt-[-900px] ${isVisible ? 'opacity-100' : 'opacity-0'}`} variants={ourServerVariants} style={{ skewY: '22deg' }} initial="hiddenR" animate={isVisible ? "visible" : "hiddenR"} transition={{ duration: 0.3, ease: easeInOut }}></motion.div>
      <motion.div className='flex w-[80%] justify-around' variants={ourServerVariants} initial="hiddenR" animate={isVisible ? "visible" : "hiddenR"} transition={{ duration: 0.3, ease: easeIn }}>
        {serverList?.map((server, index) => (
          <ServerItem
            key={index}
            name={server.name}
            mapType={server.map}
            capacity={server.players}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OurServers;
