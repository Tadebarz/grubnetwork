import React, { useRef, useEffect, useState } from 'react';
import ServerItem from '../molecules/ServerItem';
import rusturned from '../../../assets/rusturned.jpg';
import { easeInOut, motion } from 'framer-motion';
import { readServers } from '../../../API';

const OurServers = () => {
  const [serversList, setServersList] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const serversRef = useRef(null);

  const fetchServers = async () => {
    return servers = await readServers()
  }

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

    observer.observe(serversRef.current);

    // Cleanup function
    return () => observer.unobserve(serversRef.current);
  }, []);

  const dummyObjArray = [
    {
      'name': 'Server 1',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    },
    {
      'name': 'Server 2',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    },
    {
      'name': 'Server 3',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    },
    {
      'name': 'Server 4',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    }
  ];

  const ourServerVariants = {
    visible: { opacity: 50, x: 0 },
    hiddenL: { opacity: 0, x: -3000, },
    hiddenR: { opacity: 0, x: 3000 },
  };

  return (
    <div ref={serversRef} className={`relative h-screen flex flex-col items-start p-[200px] justify-around transition-opacity  ${isVisible ? 'opacity-100' : 'opacity-100'}`}>

      <motion.div className='text-white text-5xl w-full relative z-10' variants={ourServerVariants} initial="hiddenL" animate={isVisible ? "visible" : "hiddenL"} transition={{duration: 0.3, ease: easeInOut}}>
        <p className='text-9xl font-bold'>Our Servers</p>
      </motion.div>
            <motion.div className={`absolute inset-0 flex items-center justify-center bg-[#212121] skew-y-[22deg] h-[1200px] mt-[500px] ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{skewY: '22deg'}} variants={ourServerVariants} initial="hiddenL" animate={isVisible ? "visible" : "hiddenL"} transition={{duration: 0.3, ease: easeInOut}}></motion.div>
            <motion.div className={`absolute inset-0 flex items-center justify-center opacity-0 bg-[#303030] skew-y-[22deg] h-[1100px] mt-[-900px] ${isVisible ? 'opacity-100' : 'opacity-0'}`} variants={ourServerVariants} style={{skewY: '22deg'}} initial="hiddenR" animate={isVisible ? "visible" : "hiddenR"} transition={{duration: 0.3, ease: easeInOut}}></motion.div>
      <motion.div className='flex w-[80%] justify-around' variants={ourServerVariants} initial="hiddenR" animate={isVisible ? "visible" : "hiddenR"} transition={{duration: 0.3, ease: easeInOut}}>
        {serversList.map((server, index) => (
          <ServerItem
            key={index}
            name={server.name}
            mapType={server.mapType}
            capacity={server.capacity}
            img={server.img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OurServers;
